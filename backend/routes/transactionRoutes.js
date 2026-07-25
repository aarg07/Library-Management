const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction');
const Book = require('../models/Book');
const { protect, authorize } = require('../middleware/auth');

// @desc    Borrow a book
// @route   POST /api/transactions/borrow
// @access  Private
router.post('/borrow', protect, async (req, res) => {
  try {
    const { bookId } = req.body;

    // Check if book exists
    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    // Check copies available
    if (book.copiesAvailable <= 0) {
      return res.status(400).json({ success: false, message: 'No copies currently available for borrow' });
    }

    // Check if user already borrowed this book and hasn't returned it
    const existingBorrow = await Transaction.findOne({
      user: req.user._id,
      book: bookId,
      status: { $in: ['borrowed', 'overdue'] }
    });

    if (existingBorrow) {
      return res.status(400).json({ success: false, message: 'You have already borrowed an active copy of this book.' });
    }

    // Set standard due date (14 days from now)
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 14);

    // Create borrowing transaction
    const transaction = await Transaction.create({
      user: req.user._id,
      book: bookId,
      dueDate: dueDate,
      status: 'borrowed'
    });

    // Update available copies
    book.copiesAvailable = book.copiesAvailable - 1;
    await book.save();

    // Populate book details and return
    const populatedTx = await Transaction.findById(transaction._id).populate('book', 'title author genre');

    return res.status(201).json({ success: true, data: populatedTx });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// @desc    Return a book
// @route   POST /api/transactions/return/:id
// @access  Private (Either Librarian or the Member who borrowed it can return)
router.post('/return/:id', protect, async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({ success: false, message: 'Transaction not found' });
    }

    // Check if already returned
    if (transaction.status === 'returned') {
      return res.status(400).json({ success: false, message: 'Book has already been returned' });
    }

    // Authorization: User must be either the borrower or a librarian
    if (
      transaction.user.toString() !== req.user._id.toString() &&
      req.user.role !== 'librarian'
    ) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to return this book. Only the borrower or a librarian can return it.'
      });
    }

    // Find the book
    const book = await Book.findById(transaction.book);
    if (book) {
      // Increment copiesAvailable (prevent exceeding copiesTotal just in case)
      if (book.copiesAvailable < book.copiesTotal) {
        book.copiesAvailable = book.copiesAvailable + 1;
        await book.save();
      }
    }

    // Update transaction
    transaction.returnDate = new Date();
    transaction.status = 'returned';
    await transaction.save();

    return res.json({ success: true, message: 'Book returned successfully', data: transaction });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// @desc    Get current user's borrowing history and active loans
// @route   GET /api/transactions/my
// @access  Private
router.get('/my', protect, async (req, res) => {
  try {
    // Check and update overdue status on current active borrowings
    const activeTxs = await Transaction.find({
      user: req.user._id,
      status: { $in: ['borrowed', 'overdue'] }
    });

    for (let tx of activeTxs) {
      const oldStatus = tx.status;
      if (tx.checkOverdue() !== oldStatus) {
        await tx.save();
      }
    }

    const transactions = await Transaction.find({ user: req.user._id })
      .populate('book')
      .sort({ borrowDate: -1 });

    return res.json({ success: true, count: transactions.length, data: transactions });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// @desc    Get all active and past transactions (Librarian only)
// @route   GET /api/transactions/all
// @access  Private/Librarian
router.get('/all', protect, authorize('librarian'), async (req, res) => {
  try {
    // Check and update overdue status on all active borrowings
    const activeTxs = await Transaction.find({ status: 'borrowed' });
    for (let tx of activeTxs) {
      if (tx.checkOverdue() === 'overdue') {
        await tx.save();
      }
    }

    const transactions = await Transaction.find()
      .populate('book')
      .populate('user', 'name email role')
      .sort({ borrowDate: -1 });

    return res.json({ success: true, count: transactions.length, data: transactions });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
