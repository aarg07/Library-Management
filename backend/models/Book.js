const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a book title'],
    trim: true
  },
  author: {
    type: String,
    required: [true, 'Please add an author'],
    trim: true
  },
  genre: {
    type: String,
    required: [true, 'Please add a genre'],
    trim: true
  },
  isbn: {
    type: String,
    required: [true, 'Please add an ISBN'],
    unique: true,
    trim: true
  },
  copiesTotal: {
    type: Number,
    required: [true, 'Please add total copies'],
    min: [0, 'Total copies cannot be negative'],
    default: 1
  },
  copiesAvailable: {
    type: Number,
    required: [true, 'Please add available copies'],
    min: [0, 'Available copies cannot be negative'],
    default: 1
  },
  coverImage: {
    type: String,
    default: '' // Can be an external URL or default local image path
  },
  description: {
    type: String,
    default: 'A compelling literary work in the library collection.'
  },
  publishYear: {
    type: Number
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: {
        type: String,
        required: true
      },
      rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
      },
      comment: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  ratingAverage: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Book', BookSchema);
