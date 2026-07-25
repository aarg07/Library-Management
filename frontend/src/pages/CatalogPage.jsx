import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import BookCard from '../components/BookCard';
import Modal from '../components/Modal';
import BookDetailModal from '../components/BookDetailModal';
import { Search, Filter, Plus, BookOpen, AlertCircle, Sparkles, Heart, SlidersHorizontal, ArrowRight } from 'lucide-react';

const CatalogPage = () => {
  const { user, token, isAuthenticated } = useAuth();
  
  // Catalog State
  const [books, setBooks] = useState([]);
  const [activeBorrows, setActiveBorrows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);
  
  // Filters State
  const [search, setSearch] = useState('');
  const [genre, setGenre] = useState('All');
  const [availability, setAvailability] = useState(''); // Empty string is all
  const [sortBy, setSortBy] = useState('featured');

  // Detailed Modal State
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [detailedBook, setDetailedBook] = useState(null);

  // Modals State
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  
  // Book Form State
  const [bookFormData, setBookFormData] = useState({
    title: '',
    author: '',
    genre: '',
    isbn: '',
    copiesTotal: 1,
    publishYear: new Date().getFullYear(),
    coverImage: ''
  });
  const [formError, setFormError] = useState('');
  const [formLoading, setFormLoading] = useState(false);

  // Available Genres list for catalog filter (can be populated dynamically too)
  const genresList = ['All', 'Fantasy', 'Sci-Fi', 'Dystopian', 'Fiction', 'Biography', 'Thriller', 'Self-Help', 'History', 'Romance'];

  const fetchFeaturedBooks = async () => {
    try {
      const response = await fetch('/api/books/featured');
      const result = await response.json();
      if (result.success) {
        setFeaturedBooks(result.data.featuredBooks || []);
      }
    } catch (err) {
      console.error('Error loading featured books:', err);
    }
  };

  // Fetch Catalog Books
  const fetchBooks = async () => {
    setLoading(true);
    try {
      const queryParams = new URLSearchParams();
      if (search) queryParams.append('search', search);
      if (genre && genre !== 'All') queryParams.append('genre', genre);
      if (availability) queryParams.append('availability', availability);

      const response = await fetch(`/api/books?${queryParams.toString()}`);
      const result = await response.json();
      if (result.success) {
        setBooks(result.data);
      } else {
        setError(result.message || 'Failed to fetch catalog.');
      }
    } catch (err) {
      console.error(err);
      setError('Network error loading catalog.');
    } finally {
      setLoading(false);
    }
  };

  // Fetch User Active Borrowings (to show if already borrowed)
  const fetchActiveBorrows = async () => {
    if (!isAuthenticated || !token) return;
    try {
      const response = await fetch('/api/transactions/my', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      if (result.success) {
        // filter active ones
        const active = result.data.filter(tx => tx.status === 'borrowed' || tx.status === 'overdue');
        setActiveBorrows(active);
      }
    } catch (err) {
      console.error('Error fetching borrowings:', err);
    }
  };

  // Trigger search and filters
  useEffect(() => {
    fetchBooks();
  }, [search, genre, availability]);

  useEffect(() => {
    fetchFeaturedBooks();
  }, []);

  useEffect(() => {
    try {
      const savedFavorites = JSON.parse(localStorage.getItem('libraryCipherFavorites') || '[]');
      setFavorites(savedFavorites);
    } catch (err) {
      console.error('Error loading favorites:', err);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('libraryCipherFavorites', JSON.stringify(favorites));
  }, [favorites]);

  // Fetch borrowings once authenticated
  useEffect(() => {
    fetchActiveBorrows();
  }, [isAuthenticated, token]);

  const toggleFavorite = (bookId) => {
    setFavorites((prev) => (
      prev.includes(bookId) ? prev.filter((id) => id !== bookId) : [...prev, bookId]
    ));
  };

  const handleResetFilters = () => {
    setSearch('');
    setGenre('All');
    setAvailability('');
    setSortBy('featured');
  };

  // Handle Book Borrowing
  const handleBorrow = async (bookId) => {
    if (!isAuthenticated) {
      alert('Please sign in or create an account to borrow books.');
      return;
    }
    
    try {
      const response = await fetch('/api/transactions/borrow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ bookId })
      });

      const result = await response.json();
      if (result.success) {
        // Reload books and borrowings
        fetchBooks();
        fetchActiveBorrows();
      } else {
        alert(result.message || 'Failed to borrow book.');
      }
    } catch (err) {
      console.error(err);
      alert('Error connecting to server.');
    }
  };

  // Add Book Submission
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormLoading(true);

    try {
      const response = await fetch('/api/books', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(bookFormData)
      });
      
      const result = await response.json();
      if (result.success) {
        setIsAddModalOpen(false);
        setBookFormData({
          title: '',
          author: '',
          genre: '',
          isbn: '',
          copiesTotal: 1,
          publishYear: new Date().getFullYear(),
          coverImage: ''
        });
        fetchBooks();
      } else {
        setFormError(result.message || 'Failed to add book.');
      }
    } catch (err) {
      console.error(err);
      setFormError('Network error adding book.');
    } finally {
      setFormLoading(false);
    }
  };

  // Edit Book Trigger
  const openEditModal = (book) => {
    setSelectedBook(book);
    setBookFormData({
      title: book.title,
      author: book.author,
      genre: book.genre,
      isbn: book.isbn,
      copiesTotal: book.copiesTotal,
      publishYear: book.publishYear || new Date().getFullYear(),
      coverImage: book.coverImage || ''
    });
    setFormError('');
    setIsEditModalOpen(true);
  };

  // Edit Book Submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setFormLoading(true);

    try {
      const response = await fetch(`/api/books/${selectedBook._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(bookFormData)
      });

      const result = await response.json();
      if (result.success) {
        setIsEditModalOpen(false);
        setSelectedBook(null);
        fetchBooks();
      } else {
        setFormError(result.message || 'Failed to update book.');
      }
    } catch (err) {
      console.error(err);
      setFormError('Network error updating book.');
    } finally {
      setFormLoading(false);
    }
  };

  // Delete Book
  const handleDelete = async (bookId) => {
    if (!window.confirm('Are you sure you want to delete this book?')) return;

    try {
      const response = await fetch(`/api/books/${bookId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const result = await response.json();
      if (result.success) {
        fetchBooks();
      } else {
        alert(result.message || 'Failed to delete book.');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting book.');
    }
  };

  // Handle Review Submission
  const handleReviewSubmit = async (bookId, rating, comment) => {
    try {
      const response = await fetch(`/api/books/${bookId}/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ rating, comment })
      });

      const result = await response.json();
      if (result.success) {
        // Fetch books again to update averages
        fetchBooks();
        // Update detailed book state to show review immediately in modal
        setDetailedBook(result.data);
        return { success: true };
      } else {
        return { success: false, message: result.message };
      }
    } catch (err) {
      console.error(err);
      return { success: false, message: 'Server connection error.' };
    }
  };

  const sortedBooks = [...books].sort((a, b) => {
    if (sortBy === 'rating') {
      return (b.ratingAverage || 0) - (a.ratingAverage || 0);
    }

    if (sortBy === 'availability') {
      return (b.copiesAvailable || 0) - (a.copiesAvailable || 0);
    }

    if (sortBy === 'newest') {
      return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    }

    return favorites.includes(b._id) ? 1 : 0 - (favorites.includes(a._id) ? 1 : 0);
  });

  const favoriteBooks = books.filter((book) => favorites.includes(book._id));

  return (
    <div className="catalog-container">
      {/* Title & Add Book Button */}
      <div className="catalog-header-row">
        <div>
          <h1 className="catalog-title gradient-title">Discover Literature</h1>
          <p className="catalog-subtitle">Search, filter, and borrow from our curated physical and digital library.</p>
        </div>
        {user?.role === 'librarian' && (
          <button onClick={() => { setIsAddModalOpen(true); setFormError(''); }} className="btn btn-primary">
            <Plus size={18} />
            <span>Add New Book</span>
          </button>
        )}
      </div>

      <div className="catalog-highlights-grid">
        <div className="highlight-card glass-panel">
          <div className="highlight-header">
            <Sparkles size={18} className="text-cyan" />
            <h3>Featured shelves</h3>
          </div>
          <div className="highlight-list">
            {featuredBooks.length > 0 ? featuredBooks.map((book) => (
              <div key={book._id} className="highlight-item">
                <div>
                  <p className="highlight-title">{book.title}</p>
                  <p className="highlight-meta">{book.author}</p>
                </div>
                <span className="highlight-badge">{book.genre}</span>
              </div>
            )) : <p className="highlight-empty">Featured books are being prepared.</p>}
          </div>
        </div>

        <div className="highlight-card glass-panel">
          <div className="highlight-header">
            <Heart size={18} className="text-pink" />
            <h3>Saved for later</h3>
          </div>
          <div className="highlight-list">
            {favoriteBooks.length > 0 ? favoriteBooks.map((book) => (
              <div key={book._id} className="highlight-item">
                <div>
                  <p className="highlight-title">{book.title}</p>
                  <p className="highlight-meta">{book.author}</p>
                </div>
                <button className="mini-action-btn" onClick={() => handleBorrow(book._id)}>
                  <ArrowRight size={14} />
                </button>
              </div>
            )) : <p className="highlight-empty">Tap the heart on any card to build your reading list.</p>}
          </div>
        </div>
      </div>

      {/* Filters Panel */}
      <div className="filters-panel glass-panel">
        <div className="search-box-container">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search books by title, author, or ISBN..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="catalog-search-input"
          />
        </div>

        <div className="dropdowns-group">
          <div className="filter-dropdown-wrapper">
            <SlidersHorizontal size={14} className="dropdown-icon" />
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="filter-select">
              <option value="featured">Recommended first</option>
              <option value="rating">Highest rated</option>
              <option value="availability">Most copies available</option>
              <option value="newest">Newest arrivals</option>
            </select>
          </div>

          {/* Genre select */}
          <div className="filter-dropdown-wrapper">
            <Filter size={14} className="dropdown-icon" />
            <select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              className="filter-select"
            >
              {genresList.map(g => (
                <option key={g} value={g}>{g === 'All' ? 'All Genres' : g}</option>
              ))}
            </select>
          </div>

          {/* Availability Filter */}
          <div className="filter-dropdown-wrapper">
            <BookOpen size={14} className="dropdown-icon" />
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="filter-select"
            >
              <option value="">All Statuses</option>
              <option value="available">Available in Stock</option>
            </select>
          </div>

          <button className="btn btn-secondary" onClick={handleResetFilters}>Reset</button>
        </div>
      </div>

      <div className="genre-chip-row">
        {genresList.filter((g) => g !== 'All').map((g) => (
          <button
            key={g}
            className={`genre-chip ${genre === g ? 'genre-chip-active' : ''}`}
            onClick={() => setGenre(g)}
          >
            {g}
          </button>
        ))}
      </div>

      {/* Error State */}
      {error && (
        <div className="catalog-error-state glass-panel">
          <AlertCircle size={32} className="error-icon" />
          <p>{error}</p>
          <button onClick={fetchBooks} className="btn btn-secondary mt-2">Try Again</button>
        </div>
      )}

      {/* Catalog Grid */}
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader"></div>
          <p style={{ color: 'var(--text-secondary)' }}>Flipping pages...</p>
        </div>
      ) : books.length > 0 ? (
        <div className="catalog-grid">
          {sortedBooks.map(book => (
            <BookCard
              key={book._id}
              book={book}
              userRole={user?.role}
              onBorrow={handleBorrow}
              onEdit={openEditModal}
              onDelete={handleDelete}
              activeBorrows={activeBorrows}
              isFavorite={favorites.includes(book._id)}
              onToggleFavorite={toggleFavorite}
              onViewDetails={(bk) => {
                setDetailedBook(bk);
                setIsDetailModalOpen(true);
              }}
            />
          ))}
        </div>
      ) : (
        <div className="empty-catalog-state glass-panel">
          <BookOpen size={48} className="empty-icon" />
          <h3>No books match your criteria</h3>
          <p>Try refining your search, checking another genre, or registering a new item.</p>
        </div>
      )}

      {/* ADD BOOK MODAL */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Register New Book"
      >
        <form onSubmit={handleAddSubmit} className="modal-form">
          {formError && <div className="modal-error-banner">{formError}</div>}

          <div className="input-group">
            <label className="input-label">Book Title</label>
            <input
              type="text"
              className="input-field"
              placeholder="e.g. The Odyssey"
              value={bookFormData.title}
              onChange={(e) => setBookFormData({...bookFormData, title: e.target.value})}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label">Author Name</label>
            <input
              type="text"
              className="input-field"
              placeholder="e.g. Homer"
              value={bookFormData.author}
              onChange={(e) => setBookFormData({...bookFormData, author: e.target.value})}
              required
            />
          </div>

          <div className="grid-2-col">
            <div className="input-group">
              <label className="input-label">Genre</label>
              <select
                className="input-field"
                value={bookFormData.genre}
                onChange={(e) => setBookFormData({...bookFormData, genre: e.target.value})}
                required
                style={{ background: 'var(--bg-input)' }}
              >
                <option value="">Select Genre</option>
                {genresList.filter(g => g !== 'All').map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">ISBN Code</label>
              <input
                type="text"
                className="input-field"
                placeholder="e.g. 9780140449112"
                value={bookFormData.isbn}
                onChange={(e) => setBookFormData({...bookFormData, isbn: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="grid-2-col">
            <div className="input-group">
              <label className="input-label">Total Copies</label>
              <input
                type="number"
                min="1"
                className="input-field"
                value={bookFormData.copiesTotal}
                onChange={(e) => setBookFormData({...bookFormData, copiesTotal: Number(e.target.value)})}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Publish Year</label>
              <input
                type="number"
                min="0"
                className="input-field"
                value={bookFormData.publishYear}
                onChange={(e) => setBookFormData({...bookFormData, publishYear: Number(e.target.value)})}
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Cover Image URL (Optional)</label>
            <input
              type="url"
              className="input-field"
              placeholder="https://images.unsplash.com/..."
              value={bookFormData.coverImage}
              onChange={(e) => setBookFormData({...bookFormData, coverImage: e.target.value})}
            />
          </div>

          <button type="submit" disabled={formLoading} className="btn btn-primary w-full py-3 mt-2">
            {formLoading ? <div className="small-loader"></div> : 'Confirm Registration'}
          </button>
        </form>
      </Modal>

      {/* EDIT BOOK MODAL */}
      <Modal
        isOpen={isEditModalOpen}
        onClose={() => { setIsEditModalOpen(false); setSelectedBook(null); }}
        title="Modify Book Records"
      >
        <form onSubmit={handleEditSubmit} className="modal-form">
          {formError && <div className="modal-error-banner">{formError}</div>}

          <div className="input-group">
            <label className="input-label">Book Title</label>
            <input
              type="text"
              className="input-field"
              value={bookFormData.title}
              onChange={(e) => setBookFormData({...bookFormData, title: e.target.value})}
              required
            />
          </div>

          <div className="input-group">
            <label className="input-label">Author Name</label>
            <input
              type="text"
              className="input-field"
              value={bookFormData.author}
              onChange={(e) => setBookFormData({...bookFormData, author: e.target.value})}
              required
            />
          </div>

          <div className="grid-2-col">
            <div className="input-group">
              <label className="input-label">Genre</label>
              <select
                className="input-field"
                value={bookFormData.genre}
                onChange={(e) => setBookFormData({...bookFormData, genre: e.target.value})}
                required
                style={{ background: 'var(--bg-input)' }}
              >
                {genresList.filter(g => g !== 'All').map(g => (
                  <option key={g} value={g}>{g}</option>
                ))}
              </select>
            </div>

            <div className="input-group">
              <label className="input-label">ISBN Code</label>
              <input
                type="text"
                className="input-field"
                value={bookFormData.isbn}
                onChange={(e) => setBookFormData({...bookFormData, isbn: e.target.value})}
                required
              />
            </div>
          </div>

          <div className="grid-2-col">
            <div className="input-group">
              <label className="input-label">Total Copies</label>
              <input
                type="number"
                min="0"
                className="input-field"
                value={bookFormData.copiesTotal}
                onChange={(e) => setBookFormData({...bookFormData, copiesTotal: Number(e.target.value)})}
                required
              />
            </div>

            <div className="input-group">
              <label className="input-label">Publish Year</label>
              <input
                type="number"
                min="0"
                className="input-field"
                value={bookFormData.publishYear}
                onChange={(e) => setBookFormData({...bookFormData, publishYear: Number(e.target.value)})}
              />
            </div>
          </div>

          <div className="input-group">
            <label className="input-label">Cover Image URL</label>
            <input
              type="url"
              className="input-field"
              value={bookFormData.coverImage}
              onChange={(e) => setBookFormData({...bookFormData, coverImage: e.target.value})}
            />
          </div>

          <button type="submit" disabled={formLoading} className="btn btn-primary w-full py-3 mt-2">
            {formLoading ? <div className="small-loader"></div> : 'Save Modifications'}
          </button>
        </form>
      </Modal>

      {/* BOOK DETAIL MODAL */}
      <BookDetailModal
        book={detailedBook}
        isOpen={isDetailModalOpen}
        onClose={() => { setIsDetailModalOpen(false); setDetailedBook(null); }}
        onBorrow={handleBorrow}
        activeBorrows={activeBorrows}
        user={user}
        onSubmitReview={handleReviewSubmit}
      />

      <style dangerouslySetInnerHTML={{__html: `
        .catalog-container {
          width: 100%;
        }

        .catalog-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          gap: 1.5rem;
        }

        @media (max-width: 640px) {
          .catalog-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        .catalog-title {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .catalog-subtitle {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        .catalog-highlights-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.25rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 860px) {
          .catalog-highlights-grid {
            grid-template-columns: 1fr;
          }
        }

        .highlight-card {
          padding: 1.2rem !important;
          border-radius: 16px !important;
        }

        .highlight-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 0.9rem;
        }

        .highlight-header h3 {
          font-size: 1rem;
          color: var(--text-primary);
        }

        .highlight-list {
          display: grid;
          gap: 0.75rem;
        }

        .highlight-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 0.8rem;
          padding: 0.7rem 0.8rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .highlight-title {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .highlight-meta {
          font-size: 0.78rem;
          color: var(--text-secondary);
        }

        .highlight-badge {
          padding: 0.25rem 0.55rem;
          border-radius: 999px;
          background: rgba(99, 102, 241, 0.14);
          color: #c7d2fe;
          border: 1px solid rgba(99, 102, 241, 0.2);
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .mini-action-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-primary);
          cursor: pointer;
        }

        .highlight-empty {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .text-cyan { color: var(--accent-cyan); }
        .text-pink { color: var(--accent-pink); }

        .genre-chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
          margin-bottom: 1.5rem;
        }

        .genre-chip {
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: var(--text-secondary);
          padding: 0.5rem 0.85rem;
          border-radius: 999px;
          font-size: 0.82rem;
          cursor: pointer;
        }

        .genre-chip-active {
          background: var(--gradient-primary);
          color: white;
          border-color: transparent;
        }

        /* Filters Styling */
        .filters-panel {
          padding: 1.25rem !important;
          border-radius: 14px !important;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1.5rem;
          align-items: center;
          margin-bottom: 2rem;
          border-color: var(--border-light) !important;
        }

        @media (max-width: 800px) {
          .filters-panel {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
        }

        .search-box-container {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          color: var(--text-muted);
          pointer-events: none;
        }

        .catalog-search-input {
          width: 100%;
          background: rgba(8, 10, 24, 0.4);
          border: 1px solid var(--border-light);
          color: var(--text-primary);
          padding: 0.8rem 1rem 0.8rem 2.8rem;
          border-radius: 10px;
          outline: none;
          font-family: var(--font-body);
          font-size: 0.95rem;
          transition: all var(--transition-fast);
        }

        .catalog-search-input:focus {
          border-color: var(--accent-indigo);
          box-shadow: 0 0 0 2px rgba(99, 102, 241, 0.2);
          background: rgba(8, 10, 24, 0.8);
        }

        .dropdowns-group {
          display: flex;
          gap: 1rem;
        }

        @media (max-width: 480px) {
          .dropdowns-group {
            flex-direction: column;
            width: 100%;
          }
        }

        .filter-dropdown-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .dropdown-icon {
          position: absolute;
          left: 0.85rem;
          color: var(--text-muted);
          pointer-events: none;
        }

        .filter-select {
          background: rgba(8, 10, 24, 0.4);
          border: 1px solid var(--border-light);
          color: var(--text-secondary);
          padding: 0.8rem 2rem 0.8rem 2.2rem;
          border-radius: 10px;
          outline: none;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all var(--transition-fast);
          appearance: none;
          -webkit-appearance: none;
        }

        .filter-select:focus, .filter-select:hover {
          border-color: var(--border-hover);
          color: var(--text-primary);
        }

        /* Grid */
        .catalog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 2rem;
        }

        /* States */
        .catalog-error-state, .empty-catalog-state {
          text-align: center;
          padding: 4rem 2rem !important;
          border-radius: 20px !important;
          max-width: 600px;
          margin: 3rem auto;
        }

        .error-icon {
          color: var(--accent-red);
          margin-bottom: 1rem;
        }

        .empty-icon {
          color: var(--text-muted);
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .empty-catalog-state h3 {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
        }

        .empty-catalog-state p {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        /* Modal Forms layout helpers */
        .modal-form {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .grid-2-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        @media (max-width: 480px) {
          .grid-2-col {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }

        .modal-error-banner {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #fca5a5;
          padding: 0.75rem;
          border-radius: 8px;
          font-size: 0.85rem;
          margin-bottom: 1.2rem;
          text-align: center;
        }
      `}} />
    </div>
  );
};

export default CatalogPage;
