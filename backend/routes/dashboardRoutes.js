const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const User = require('../models/User');
const Transaction = require('../models/Transaction');
const { protect, authorize } = require('../middleware/auth');

// @desc    Get dashboard analytics for Librarians
// @route   GET /api/dashboard/librarian
// @access  Private/Librarian
router.get('/librarian', protect, authorize('librarian'), async (req, res) => {
  try {
    // 1. Total counts
    const totalBooks = await Book.countDocuments();
    const totalMembers = await User.countDocuments({ role: 'member' });
    const totalTransactions = await Transaction.countDocuments();
    
    // 2. Active, Returned, and Overdue counts
    const activeLoans = await Transaction.countDocuments({ status: 'borrowed' });
    const overdueLoans = await Transaction.countDocuments({ status: 'overdue' });
    const returnedLoans = await Transaction.countDocuments({ status: 'returned' });

    // 3. Books breakdown
    const books = await Book.find();
    let totalCopies = 0;
    let availableCopies = 0;
    books.forEach(b => {
      totalCopies += b.copiesTotal;
      availableCopies += b.copiesAvailable;
    });
    const borrowedCopies = totalCopies - availableCopies;

    // 4. Recent transactions
    const recentTransactions = await Transaction.find()
      .populate('book', 'title author coverImage')
      .populate('user', 'name email')
      .sort({ borrowDate: -1 })
      .limit(5);

    // 5. Genre breakdown (for charts)
    const genreStats = await Book.aggregate([
      {
        $group: {
          _id: '$genre',
          count: { $sum: '$copiesTotal' },
          available: { $sum: '$copiesAvailable' }
        }
      },
      { $project: { name: '$_id', value: '$count', available: '$available' } }
    ]);

    // 6. Borrowing Status distribution (for donut chart representation)
    const statusStats = [
      { name: 'Available', value: availableCopies },
      { name: 'Borrowed', value: activeLoans },
      { name: 'Overdue', value: overdueLoans }
    ];

    return res.json({
      success: true,
      data: {
        stats: {
          totalBooks,
          totalMembers,
          totalTransactions,
          activeLoans,
          overdueLoans,
          returnedLoans,
          totalCopies,
          availableCopies,
          borrowedCopies
        },
        recentTransactions,
        genreStats,
        statusStats
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// @desc    Get dashboard analytics for Library Members
// @route   GET /api/dashboard/member
// @access  Private
router.get('/member', protect, async (req, res) => {
  try {
    const userId = req.user._id;

    // 1. Borrowing statistics
    const activeLoans = await Transaction.countDocuments({
      user: userId,
      status: { $in: ['borrowed', 'overdue'] }
    });
    const overdueLoans = await Transaction.countDocuments({
      user: userId,
      status: 'overdue'
    });
    const returnedLoans = await Transaction.countDocuments({
      user: userId,
      status: 'returned'
    });

    // 2. Soonest due date
    const soonestTransaction = await Transaction.findOne({
      user: userId,
      status: { $in: ['borrowed', 'overdue'] }
    })
      .populate('book', 'title')
      .sort({ dueDate: 1 });

    const upcomingDue = soonestTransaction
      ? {
          bookTitle: soonestTransaction.book.title,
          dueDate: soonestTransaction.dueDate,
          daysLeft: Math.ceil((new Date(soonestTransaction.dueDate) - new Date()) / (1000 * 60 * 60 * 24))
        }
      : null;

    // 3. Member's genre preference based on what they borrow
    const memberTransactions = await Transaction.find({ user: userId }).populate('book');
    const genrePreferences = {};
    memberTransactions.forEach(t => {
      if (t.book && t.book.genre) {
        genrePreferences[t.book.genre] = (genrePreferences[t.book.genre] || 0) + 1;
      }
    });

    const preferencesArray = Object.keys(genrePreferences).map(genre => ({
      name: genre,
      count: genrePreferences[genre]
    })).sort((a, b) => b.count - a.count);

    return res.json({
      success: true,
      data: {
        stats: {
          activeLoans,
          overdueLoans,
          returnedLoans,
          totalBorrowed: memberTransactions.length
        },
        upcomingDue,
        genrePreferences: preferencesArray
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// @desc    Get all users list (Librarian only)
// @route   GET /api/dashboard/users
// @access  Private/Librarian
router.get('/users', protect, authorize('librarian'), async (req, res) => {
  try {
    const users = await User.find({ role: 'member' }).select('-password').sort({ name: 1 });
    
    // Add loan statistics for each user
    const usersWithStats = await Promise.all(
      users.map(async (user) => {
        const activeLoans = await Transaction.countDocuments({ user: user._id, status: { $in: ['borrowed', 'overdue'] } });
        const overdueLoans = await Transaction.countDocuments({ user: user._id, status: 'overdue' });
        const returnedLoans = await Transaction.countDocuments({ user: user._id, status: 'returned' });
        
        return {
          ...user.toObject(),
          activeLoans,
          overdueLoans,
          returnedLoans
        };
      })
    );

    return res.json({ success: true, count: usersWithStats.length, data: usersWithStats });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
