import React from 'react';
import { Book, Edit3, Trash2, Calendar, FileText, Heart } from 'lucide-react';

const BookCard = ({ book, userRole, onBorrow, onEdit, onDelete, onViewDetails, activeBorrows = [], isFavorite = false, onToggleFavorite }) => {
  const { _id, title, author, genre, isbn, copiesTotal, copiesAvailable, coverImage, publishYear } = book;

  // Check if current user has an active borrow of this book
  const isBorrowedByUser = activeBorrows.some(
    tx => tx.book?._id === _id && (tx.status === 'borrowed' || tx.status === 'overdue')
  );

  const borrowTx = activeBorrows.find(
    tx => tx.book?._id === _id && (tx.status === 'borrowed' || tx.status === 'overdue')
  );

  const ratingAverage = book.ratingAverage || 0;
  const reviewsCount = book.reviews?.length || 0;

  // Generate solid background colors based on genre for CSS book cover fallback
  const getGenreColor = (genreStr) => {
    const genreLower = (genreStr || '').toLowerCase();
    if (genreLower.includes('fantasy')) return 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)';
    if (genreLower.includes('sci-fi') || genreLower.includes('dystopian')) return 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
    if (genreLower.includes('thriller') || genreLower.includes('mystery')) return 'linear-gradient(135deg, #450a0a 0%, #1c0404 100%)';
    if (genreLower.includes('biography') || genreLower.includes('history')) return 'linear-gradient(135deg, #14532d 0%, #064e3b 100%)';
    if (genreLower.includes('romance')) return 'linear-gradient(135deg, #831843 0%, #4c0519 100%)';
    return 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)';
  };

  const isAvailable = copiesAvailable > 0;
  const stockPercentage = (copiesAvailable / copiesTotal) * 100;

  const handleCardClick = () => {
    if (onViewDetails) {
      onViewDetails(book);
    }
  };

  return (
    <div className="book-card glass-panel">
      {/* Book Cover Banner */}
      <div className="book-cover-container" onClick={handleCardClick} style={{ cursor: onViewDetails ? 'pointer' : 'default' }}>
        {coverImage ? (
          <img src={coverImage} alt={title} className="book-cover-img" onError={(e) => { e.target.style.display = 'none'; }} />
        ) : null}
        
        {/* CSS Backup Book Cover */}
        <div className="book-cover-fallback" style={{ background: getGenreColor(genre) }}>
          <div className="spine-effect"></div>
          <div className="fallback-content">
            <Book size={32} className="fallback-icon" />
            <h4 className="fallback-title">{title}</h4>
            <span className="fallback-author">{author}</span>
          </div>
          <div className="fallback-badge">{genre}</div>
        </div>
      </div>

      {/* Book Details */}
      <div className="book-card-details">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
          <span className="book-genre-tag" style={{ margin: 0 }}>{genre}</span>
          
          <button
            type="button"
            className={`favorite-toggle-btn ${isFavorite ? 'is-favorited' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite?.(_id);
            }}
            title={isFavorite ? 'Remove from saved list' : 'Save for later'}
          >
            <Heart size={14} fill={isFavorite ? 'currentColor' : 'none'} />
          </button>
          
          {/* Average Rating Star Tag */}
          <div className="card-stars-wrapper">
            {ratingAverage > 0 ? (
              <span className="card-rating-tag" title={`${ratingAverage.toFixed(1)} stars from ${reviewsCount} reviews`}>
                <span className="star-icon">★</span>
                <span>{ratingAverage.toFixed(1)}</span>
              </span>
            ) : (
              <span className="card-no-rating-tag">Unrated</span>
            )}
          </div>
        </div>

        <h3 className="book-title" title={title} onClick={handleCardClick} style={{ cursor: onViewDetails ? 'pointer' : 'default' }}>{title}</h3>
        <p className="book-author">by {author}</p>

        <div className="book-meta-grid">
          <div className="meta-item">
            <Calendar size={13} />
            <span>{publishYear || 'N/A'}</span>
          </div>
          <div className="meta-item" title="ISBN Code">
            <FileText size={13} />
            <span className="isbn-text">{isbn}</span>
          </div>
        </div>

        {/* Stock Status */}
        <div className="stock-container">
          <div className="stock-info">
            <span className="stock-label">Stock Status</span>
            <span className="stock-ratio">{copiesAvailable} / {copiesTotal} Left</span>
          </div>
          <div className="stock-bar-track">
            <div 
              className={`stock-bar-fill ${stockPercentage < 30 ? 'stock-low' : stockPercentage < 60 ? 'stock-medium' : 'stock-high'}`}
              style={{ width: `${stockPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Action Section */}
        <div className="book-actions">
          {userRole === 'librarian' ? (
            <div className="librarian-actions">
              <button onClick={() => onEdit(book)} className="btn btn-secondary flex-1 btn-edit">
                <Edit3 size={16} />
                <span>Edit</span>
              </button>
              <button onClick={() => onDelete(_id)} className="btn btn-danger btn-delete" title="Delete Book">
                <Trash2 size={16} />
              </button>
            </div>
          ) : (
            <div className="member-actions">
              {isBorrowedByUser ? (
                <div className="borrowed-status-badge">
                  <span className="badge badge-borrowed w-full justify-center py-2 text-sm">
                    Borrowed (Due: {new Date(borrowTx.dueDate).toLocaleDateString()})
                  </span>
                </div>
              ) : (
                <button
                  onClick={() => onBorrow(_id)}
                  disabled={!isAvailable}
                  className={`btn w-full ${isAvailable ? 'btn-primary' : 'btn-disabled'}`}
                >
                  {isAvailable ? 'Borrow Book' : 'Out of Stock'}
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .book-card {
          padding: 0 !important;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .book-cover-container {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: rgba(0, 0, 0, 0.2);
          border-bottom: 1px solid var(--border-light);
        }

        .book-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
          z-index: 1;
          transition: transform var(--transition-slow);
        }

        .book-card:hover .book-cover-img {
          transform: scale(1.08);
        }

        .book-cover-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          color: white;
          position: relative;
          z-index: 0;
        }

        .spine-effect {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 12px;
          background: linear-gradient(to right, rgba(0,0,0,0.3) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.2) 100%);
          border-right: 1px solid rgba(255,255,255,0.05);
        }

        .fallback-content {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          max-width: 90%;
        }

        .fallback-icon {
          opacity: 0.6;
        }

        .fallback-title {
          font-family: var(--font-display);
          font-size: 1.1rem;
          font-weight: 700;
          line-height: 1.3;
          margin-top: 0.25rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .fallback-author {
          font-size: 0.75rem;
          opacity: 0.8;
          font-weight: 500;
        }

        .fallback-badge {
          position: absolute;
          bottom: 0.75rem;
          right: 0.75rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.2rem 0.5rem;
          font-size: 0.6rem;
          border-radius: 4px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
        }

        .book-card-details {
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .book-genre-tag {
          font-size: 0.65rem;
          color: var(--accent-indigo);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 800;
          margin-bottom: 0.4rem;
        }

        .book-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .book-author {
          font-size: 0.88rem;
          color: var(--text-secondary);
          margin-bottom: 1rem;
        }

        .book-meta-grid {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.2rem;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .isbn-text {
          font-family: monospace;
          letter-spacing: 0.02em;
        }

        .stock-container {
          margin-top: auto;
          margin-bottom: 1.2rem;
        }

        .stock-info {
          display: flex;
          justify-content: space-between;
          font-size: 0.75rem;
          margin-bottom: 0.35rem;
        }

        .stock-label {
          color: var(--text-muted);
          font-weight: 500;
        }

        .stock-ratio {
          color: var(--text-secondary);
          font-weight: 600;
        }

        .stock-bar-track {
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 3px;
          overflow: hidden;
        }

        .stock-bar-fill {
          height: 100%;
          border-radius: 3px;
          transition: width var(--transition-normal);
        }

        .stock-high {
          background: var(--accent-emerald);
          box-shadow: 0 0 8px rgba(16, 185, 129, 0.4);
        }

        .stock-medium {
          background: var(--accent-amber);
          box-shadow: 0 0 8px rgba(245, 158, 11, 0.4);
        }

        .stock-low {
          background: var(--accent-red);
          box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);
        }

        .book-actions {
          display: flex;
        }

        .librarian-actions {
          display: flex;
          gap: 0.5rem;
          width: 100%;
        }

        .flex-1 {
          flex: 1;
        }

        .btn-edit {
          padding: 0.6rem 1rem;
          font-size: 0.85rem;
        }

        .btn-delete {
          padding: 0.6rem;
        }

        .member-actions {
          width: 100%;
        }

        .btn-disabled {
          background: rgba(255, 255, 255, 0.03);
          color: var(--text-muted);
          border: 1px solid rgba(255, 255, 255, 0.05);
          cursor: not-allowed;
        }

        .w-full {
          width: 100%;
        }

        .favorite-toggle-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .favorite-toggle-btn:hover {
          color: var(--accent-pink);
          border-color: rgba(236, 72, 153, 0.2);
          transform: translateY(-1px);
        }

        .favorite-toggle-btn.is-favorited {
          color: var(--accent-pink);
          background: rgba(236, 72, 153, 0.14);
          border-color: rgba(236, 72, 153, 0.24);
        }

        .card-stars-wrapper {
          display: flex;
          align-items: center;
        }

        .card-rating-tag {
          display: flex;
          align-items: center;
          gap: 0.2rem;
          background: rgba(245, 158, 11, 0.1);
          color: #fcd34d;
          border: 1px solid rgba(245, 158, 11, 0.2);
          padding: 0.15rem 0.4rem;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 700;
        }

        .star-icon {
          color: #f59e0b;
        }

        .card-no-rating-tag {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 500;
        }
      `}} />
    </div>
  );
};

export default BookCard;
