const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
const { protect, authorize } = require('../middleware/auth');

// @desc    Get all books with optional search, filter, and pagination
// @route   GET /api/books
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { search, genre, availability } = req.query;
    let query = {};

    // Apply text search on title or author
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: 'i' } },
        { author: { $regex: search, $options: 'i' } },
        { isbn: { $regex: search, $options: 'i' } }
      ];
    }

    // Filter by genre
    if (genre && genre !== 'All') {
      query.genre = genre;
    }

    // Filter by availability
    if (availability) {
      if (availability === 'available') {
        query.copiesAvailable = { $gt: 0 };
      } else if (availability === 'unavailable') {
        query.copiesAvailable = 0;
      }
    }

    const books = await Book.find(query).sort({ title: 1 });
    return res.json({ success: true, count: books.length, data: books });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// @desc    Get featured and recent books for discovery sections
// @route   GET /api/books/featured
// @access  Public
router.get('/featured', async (req, res) => {
  try {
    const featuredBooks = await Book.find()
      .sort({ ratingAverage: -1, createdAt: -1 })
      .limit(4);

    const recentBooks = await Book.find()
      .sort({ createdAt: -1 })
      .limit(4);

    return res.json({
      success: true,
      data: {
        featuredBooks,
        recentBooks
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// @desc    Get single book details
// @route   GET /api/books/:id
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }
    return res.json({ success: true, data: book });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// @desc    Create a new book
// @route   POST /api/books
// @access  Private/Librarian
router.post('/', protect, authorize('librarian'), async (req, res) => {
  try {
    const { title, author, genre, isbn, copiesTotal, publishYear, coverImage } = req.body;

    // Check if book with ISBN already exists
    const isbnExists = await Book.findOne({ isbn });
    if (isbnExists) {
      return res.status(400).json({ success: false, message: 'A book with this ISBN already exists' });
    }

    // Available copies starts equal to total copies
    const book = await Book.create({
      title,
      author,
      genre,
      isbn,
      copiesTotal: Number(copiesTotal),
      copiesAvailable: Number(copiesTotal),
      publishYear: publishYear ? Number(publishYear) : undefined,
      coverImage: coverImage || ''
    });

    return res.status(201).json({ success: true, data: book });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// @desc    Update a book details
// @route   PUT /api/books/:id
// @access  Private/Librarian
router.put('/:id', protect, authorize('librarian'), async (req, res) => {
  try {
    const { title, author, genre, isbn, copiesTotal, publishYear, coverImage } = req.body;
    let book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    // If ISBN changed, check if new one exists
    if (isbn && isbn !== book.isbn) {
      const isbnExists = await Book.findOne({ isbn });
      if (isbnExists) {
        return res.status(400).json({ success: false, message: 'A book with this ISBN already exists' });
      }
    }

    // Calculate copiesAvailable change if total copies is changed
    let newCopiesAvailable = book.copiesAvailable;
    if (copiesTotal !== undefined) {
      const diff = Number(copiesTotal) - book.copiesTotal;
      newCopiesAvailable = book.copiesAvailable + diff;
      if (newCopiesAvailable < 0) {
        return res.status(400).json({
          success: false,
          message: `Cannot decrease total copies to ${copiesTotal} because ${book.copiesTotal - book.copiesAvailable} copies are currently borrowed.`
        });
      }
    }

    const updatedData = {
      title: title || book.title,
      author: author || book.author,
      genre: genre || book.genre,
      isbn: isbn || book.isbn,
      copiesTotal: copiesTotal !== undefined ? Number(copiesTotal) : book.copiesTotal,
      copiesAvailable: newCopiesAvailable,
      publishYear: publishYear !== undefined ? Number(publishYear) : book.publishYear,
      coverImage: coverImage !== undefined ? coverImage : book.coverImage
    };

    book = await Book.findByIdAndUpdate(req.params.id, updatedData, {
      new: true,
      runValidators: true
    });

    return res.json({ success: true, data: book });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// @desc    Delete a book
// @route   DELETE /api/books/:id
// @access  Private/Librarian
router.delete('/:id', protect, authorize('librarian'), async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    // Check if any copies are currently borrowed
    if (book.copiesAvailable < book.copiesTotal) {
      return res.status(400).json({
        success: false,
        message: 'Cannot delete book: some copies are currently borrowed by library members.'
      });
    }

    await Book.findByIdAndDelete(req.params.id);
    return res.json({ success: true, message: 'Book successfully deleted' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

// @desc    Add a review & rating to a book
// @route   POST /api/books/:id/reviews
// @access  Private
router.post('/:id/reviews', protect, async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const book = await Book.findById(req.params.id);

    if (!book) {
      return res.status(404).json({ success: false, message: 'Book not found' });
    }

    // Check if user already reviewed
    const alreadyReviewed = book.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      // Update existing review
      alreadyReviewed.rating = Number(rating);
      alreadyReviewed.comment = comment;
      alreadyReviewed.createdAt = new Date();
    } else {
      // Create new review
      const review = {
        user: req.user._id,
        userName: req.user.name,
        rating: Number(rating),
        comment,
        createdAt: new Date()
      };
      book.reviews.push(review);
    }

    // Recompute average rating
    const totalRating = book.reviews.reduce((acc, item) => item.rating + acc, 0);
    book.ratingAverage = totalRating / book.reviews.length;

    await book.save();
    return res.status(201).json({ success: true, message: 'Review recorded', data: book });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;
