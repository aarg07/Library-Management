import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import { Book, Star, Calendar, FileText, Send, CheckCircle2 } from 'lucide-react';

const BookDetailModal = ({ book, isOpen, onClose, onBorrow, activeBorrows = [], user, onSubmitReview }) => {
  if (!book) return null;

  const { _id, title, author, genre, isbn, copiesTotal, copiesAvailable, coverImage, publishYear, description, ratingAverage } = book;

  // Review form states
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [formLoading, setFormLoading] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  // Reset form states when modal opens/closes
  useEffect(() => {
    setRating(5);
    setComment('');
    setFormMessage('');
  }, [book, isOpen]);

  // Check if book is already borrowed by current user
  const isBorrowedByUser = activeBorrows.some(
    tx => tx.book?._id === _id && (tx.status === 'borrowed' || tx.status === 'overdue')
  );

  const borrowTx = activeBorrows.find(
    tx => tx.book?._id === _id && (tx.status === 'borrowed' || tx.status === 'overdue')
  );

  const isAvailable = copiesAvailable > 0;
  const stockPercentage = (copiesAvailable / copiesTotal) * 100;
  const reviewsCount = book.reviews?.length || 0;

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    setFormLoading(true);
    setFormMessage('');
    
    try {
      const res = await onSubmitReview(_id, rating, comment);
      if (res.success) {
        setFormMessage('Review submitted successfully!');
        setComment('');
        setRating(5);
      } else {
        setFormMessage(res.message || 'Failed to submit review.');
      }
    } catch (err) {
      console.error(err);
      setFormMessage('Error submitting review.');
    } finally {
      setFormLoading(false);
    }
  };

  const getGenreColor = (genreStr) => {
    const genreLower = (genreStr || '').toLowerCase();
    if (genreLower.includes('fantasy')) return 'linear-gradient(135deg, #1e1b4b 0%, #311042 100%)';
    if (genreLower.includes('sci-fi') || genreLower.includes('dystopian')) return 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)';
    if (genreLower.includes('thriller') || genreLower.includes('mystery')) return 'linear-gradient(135deg, #450a0a 0%, #1c0404 100%)';
    if (genreLower.includes('biography') || genreLower.includes('history')) return 'linear-gradient(135deg, #14532d 0%, #064e3b 100%)';
    if (genreLower.includes('romance')) return 'linear-gradient(135deg, #831843 0%, #4c0519 100%)';
    return 'linear-gradient(135deg, #1e3a8a 0%, #172554 100%)';
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book Details">
      <div className="book-detail-wrapper">
        
        {/* Upper Layout: Cover + Main Meta details */}
        <div className="detail-upper-layout">
          <div className="detail-cover-container">
            {coverImage ? (
              <img src={coverImage} alt={title} className="detail-cover-img" onError={(e) => { e.target.style.display = 'none'; }} />
            ) : null}
            <div className="detail-cover-fallback" style={{ background: getGenreColor(genre) }}>
              <div className="spine-effect"></div>
              <Book size={48} className="detail-fallback-icon" />
              <h4 className="detail-fallback-title">{title}</h4>
              <span className="detail-fallback-author">{author}</span>
            </div>
          </div>

          <div className="detail-meta-box">
            <span className="badge badge-available mb-2" style={{ alignSelf: 'flex-start' }}>{genre}</span>
            <h2 className="detail-title">{title}</h2>
            <p className="detail-author">by {author}</p>

            <div className="detail-spec-grid">
              <div className="spec-item">
                <Calendar size={15} />
                <span>Published: {publishYear || 'N/A'}</span>
              </div>
              <div className="spec-item">
                <FileText size={15} />
                <span>ISBN: {isbn}</span>
              </div>
            </div>

            {/* Average Rating Stars summary */}
            <div className="detail-rating-summary">
              {ratingAverage > 0 ? (
                <>
                  <div className="stars-row">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={18} 
                        fill={star <= Math.round(ratingAverage) ? '#f59e0b' : 'none'} 
                        stroke={star <= Math.round(ratingAverage) ? '#f59e0b' : 'var(--text-muted)'} 
                      />
                    ))}
                  </div>
                  <span className="rating-text">
                    <strong>{ratingAverage.toFixed(1)}</strong> out of 5 ({reviewsCount} review{reviewsCount > 1 ? 's' : ''})
                  </span>
                </>
              ) : (
                <span className="rating-text text-muted">No reviews yet</span>
              )}
            </div>

            {/* Stock Progress bar */}
            <div className="detail-stock-box">
              <div className="stock-label-row">
                <span>Available Inventory</span>
                <span className="stock-ratio-bold">{copiesAvailable} / {copiesTotal} Left</span>
              </div>
              <div className="stock-bar-track">
                <div 
                  className={`stock-bar-fill ${stockPercentage < 30 ? 'stock-low' : stockPercentage < 60 ? 'stock-medium' : 'stock-high'}`}
                  style={{ width: `${stockPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* Borrow action */}
            {user?.role !== 'librarian' && (
              <div className="detail-borrow-action mt-2">
                {isBorrowedByUser ? (
                  <div className="badge badge-borrowed w-full justify-center py-2 text-sm" style={{ padding: '0.6rem' }}>
                    Borrowed (Due: {new Date(borrowTx.dueDate).toLocaleDateString()})
                  </div>
                ) : (
                  <button
                    onClick={() => onBorrow(_id)}
                    disabled={!isAvailable}
                    className={`btn w-full ${isAvailable ? 'btn-primary' : 'btn-disabled'}`}
                  >
                    {isAvailable ? 'Borrow Book Copy' : 'Out of Stock'}
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Book Description */}
        <div className="detail-description-section">
          <h3>Synopsis</h3>
          <p>{description || 'No description available for this book in the records.'}</p>
        </div>

        {/* Reviews Section */}
        <div className="detail-reviews-section">
          <h3>Community Reviews</h3>
          
          <div className="reviews-list">
            {reviewsCount > 0 ? (
              book.reviews.map((rev, idx) => (
                <div key={rev._id || idx} className="review-item-card glass-panel">
                  <div className="review-header">
                    <span className="reviewer-name">{rev.userName}</span>
                    <div className="stars-row-small">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={12} 
                          fill={star <= rev.rating ? '#f59e0b' : 'none'} 
                          stroke={star <= rev.rating ? '#f59e0b' : 'var(--text-muted)'} 
                        />
                      ))}
                    </div>
                  </div>
                  <p className="review-content">{rev.comment}</p>
                  <span className="review-date">{new Date(rev.createdAt).toLocaleDateString()}</span>
                </div>
              ))
            ) : (
              <div className="empty-reviews-state">
                <p>There are no reviews for this book yet.</p>
              </div>
            )}
          </div>

          {/* Leave a Review Form */}
          {user && user.role !== 'librarian' && (
            <form onSubmit={handleReviewSubmit} className="add-review-form glass-panel">
              <h4>Write a Review</h4>
              {formMessage && (
                <div className={`form-msg-banner ${formMessage.includes('successfully') ? 'msg-success' : 'msg-error'}`}>
                  {formMessage.includes('successfully') && <CheckCircle2 size={15} />}
                  <span>{formMessage}</span>
                </div>
              )}

              <div className="review-stars-selector">
                <span className="input-label" style={{ margin: 0 }}>Rating:</span>
                <div className="interactive-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className="star-btn"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      <Star 
                        size={20} 
                        fill={star <= (hoverRating || rating) ? '#f59e0b' : 'none'} 
                        stroke={star <= (hoverRating || rating) ? '#f59e0b' : 'var(--text-muted)'} 
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="input-group" style={{ marginBottom: '1rem' }}>
                <textarea
                  placeholder="Share your thoughts about the book..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="input-field"
                  rows="3"
                  required
                  style={{ resize: 'none' }}
                />
              </div>

              <button type="submit" disabled={formLoading || !comment.trim()} className="btn btn-secondary btn-sm" style={{ alignSelf: 'flex-end' }}>
                <Send size={14} />
                <span>Submit Review</span>
              </button>
            </form>
          )}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .book-detail-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding-top: 0.5rem;
        }

        .detail-upper-layout {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 1.75rem;
        }

        @media (max-width: 500px) {
          .detail-upper-layout {
            grid-template-columns: 1fr;
          }
          .detail-cover-container {
            width: 140px;
            height: 200px;
            margin: 0 auto;
          }
        }

        .detail-cover-container {
          position: relative;
          height: 250px;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
        }

        .detail-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          z-index: 1;
        }

        .detail-cover-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          color: white;
          text-align: center;
          position: relative;
          z-index: 0;
        }

        .detail-fallback-icon {
          opacity: 0.5;
          margin-bottom: 0.5rem;
        }

        .detail-fallback-title {
          font-size: 0.95rem;
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 0.25rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .detail-fallback-author {
          font-size: 0.7rem;
          opacity: 0.8;
        }

        .detail-meta-box {
          display: flex;
          flex-direction: column;
        }

        .detail-title {
          font-size: 1.5rem;
          font-weight: 800;
          color: white;
          line-height: 1.25;
          margin-bottom: 0.25rem;
        }

        .detail-author {
          color: var(--text-secondary);
          font-size: 0.95rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }

        .detail-spec-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .spec-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: var(--text-muted);
        }

        .detail-rating-summary {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.2rem;
        }

        .stars-row {
          display: flex;
          gap: 0.15rem;
        }

        .rating-text {
          font-size: 0.85rem;
          color: var(--text-secondary);
        }

        .detail-stock-box {
          margin-bottom: 1rem;
        }

        .stock-label-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.82rem;
          color: var(--text-muted);
          margin-bottom: 0.4rem;
        }

        .stock-ratio-bold {
          font-weight: 700;
          color: var(--text-secondary);
        }

        /* Synopsis Section */
        .detail-description-section h3, .detail-reviews-section h3 {
          font-size: 1.1rem;
          font-family: var(--font-display);
          font-weight: 700;
          color: white;
          margin-bottom: 0.75rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.5rem;
        }

        .detail-description-section p {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Reviews lists */
        .reviews-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          max-height: 250px;
          overflow-y: auto;
          padding-right: 0.25rem;
        }

        /* Reviews Scrollbar */
        .reviews-list::-webkit-scrollbar {
          width: 4px;
        }
        .reviews-list::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
        }

        .review-item-card {
          padding: 1rem !important;
          border-radius: 10px !important;
          background: rgba(255, 255, 255, 0.02) !important;
          border-color: rgba(255, 255, 255, 0.05) !important;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .reviewer-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .stars-row-small {
          display: flex;
          gap: 1px;
        }

        .review-content {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.4;
        }

        .review-date {
          font-size: 0.7rem;
          color: var(--text-muted);
          align-self: flex-end;
        }

        .empty-reviews-state {
          text-align: center;
          padding: 1.5rem;
          color: var(--text-muted);
          font-size: 0.88rem;
          border: 1px dashed rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        /* Add Review Form */
        .add-review-form {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          padding: 1.25rem !important;
          border-radius: 12px !important;
          border-color: var(--border-light) !important;
        }

        .add-review-form h4 {
          font-size: 0.95rem;
          font-weight: 700;
          color: white;
        }

        .review-stars-selector {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .interactive-stars {
          display: flex;
          gap: 0.25rem;
        }

        .star-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: transform var(--transition-fast);
        }

        .star-btn:hover {
          transform: scale(1.15);
        }

        .form-msg-banner {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0.75rem;
          border-radius: 6px;
          font-size: 0.82rem;
          margin-bottom: 0.25rem;
        }

        .msg-success {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.25);
          color: #a7f3d0;
        }

        .msg-error {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #fca5a5;
        }
      `}} />
    </Modal>
  );
};

export default BookDetailModal;
