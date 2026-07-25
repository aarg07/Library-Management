import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import BookDetailModal from '../components/BookDetailModal';
import { BookOpen, AlertTriangle, Calendar, Award, RotateCcw, Clock, Plus, Minus, ThumbsUp, ArrowRight } from 'lucide-react';

const MemberDashboard = () => {
  const { token, user } = useAuth();
  
  // Dashboard states
  const [stats, setStats] = useState(null);
  const [upcomingDue, setUpcomingDue] = useState(null);
  const [preferences, setPreferences] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [catalogBooks, setCatalogBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  
  // Reading Goal State
  const [monthlyGoal, setMonthlyGoal] = useState(user?.monthlyGoal || 3);
  const [updatingGoal, setUpdatingGoal] = useState(false);

  // Detail Modal State
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [detailedBook, setDetailedBook] = useState(null);

  // Fetch Member Dashboard Analytics & History
  const fetchDashboardData = async () => {
    try {
      // 1. Fetch dashboard stats
      const statsRes = await fetch('/api/dashboard/member', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const statsJson = await statsRes.json();
      
      if (statsJson.success) {
        setStats(statsJson.data.stats);
        setUpcomingDue(statsJson.data.upcomingDue);
        setPreferences(statsJson.data.genrePreferences);
      }

      // 2. Fetch borrowing transaction history
      const txRes = await fetch('/api/transactions/my', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const txJson = await txRes.json();
      if (txJson.success) {
        setTransactions(txJson.data);
      }

      // 3. Fetch full catalog for recommendations
      const booksRes = await fetch('/api/books');
      const booksJson = await booksRes.json();
      if (booksJson.success) {
        setCatalogBooks(booksJson.data);
      }

      // Sync goal from context or stats
      if (user?.monthlyGoal) {
        setMonthlyGoal(user.monthlyGoal);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [token, user]);

  // Adjust reading goal
  const handleAdjustGoal = async (change) => {
    if (updatingGoal) return;
    const newGoal = monthlyGoal + change;
    if (newGoal < 1) return;

    setUpdatingGoal(true);
    setMonthlyGoal(newGoal);

    try {
      const response = await fetch('/api/auth/goal', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ goal: newGoal })
      });
      
      const result = await response.json();
      if (!result.success) {
        // Fallback on error
        setMonthlyGoal(monthlyGoal);
        alert(result.message || 'Failed to update goal.');
      }
    } catch (err) {
      console.error(err);
      setMonthlyGoal(monthlyGoal);
    } finally {
      setUpdatingGoal(false);
    }
  };

  // Handle Book Return
  const handleReturn = async (txId) => {
    if (actionLoading) return;
    if (!window.confirm('Are you returning this book?')) return;
    
    setActionLoading(true);
    try {
      const response = await fetch(`/api/transactions/return/${txId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      if (result.success) {
        fetchDashboardData();
      } else {
        alert(result.message || 'Failed to return book.');
      }
    } catch (err) {
      console.error(err);
      alert('Error returning book.');
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Book Borrowing (for recommendations list)
  const handleBorrow = async (bookId) => {
    setActionLoading(true);
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
        fetchDashboardData();
      } else {
        alert(result.message || 'Failed to borrow book.');
      }
    } catch (err) {
      console.error(err);
      alert('Error connecting to server.');
    } finally {
      setActionLoading(false);
    }
  };

  // Handle Review Submission from detailed modal
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
        fetchDashboardData();
        // Update detailed book state
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

  // Calculate monthly reading progress
  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();
  const booksReturnedThisMonth = transactions.filter(t => {
    if (t.status !== 'returned' || !t.returnDate) return false;
    const d = new Date(t.returnDate);
    return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
  }).length;

  const goalPercentage = Math.min((booksReturnedThisMonth / monthlyGoal) * 100, 100);

  // Recommendations Engine:
  // 1. Get favorite genre from preferences
  // 2. Filter catalog books of that genre that are NOT currently borrowed by user
  const favGenre = preferences.length > 0 ? preferences[0].name : 'Fiction';
  const activeBookIds = transactions
    .filter(t => t.status === 'borrowed' || t.status === 'overdue')
    .map(t => t.book?._id);

  const recommendations = catalogBooks
    .filter(b => b.genre === favGenre && !activeBookIds.includes(b._id) && b.copiesAvailable > 0)
    .slice(0, 3);

  // Filter transactions lists
  const activeLoansList = transactions.filter(t => t.status === 'borrowed' || t.status === 'overdue');
  const pastLoansList = transactions.filter(t => t.status === 'returned');

  const openDetailModal = (bk) => {
    setDetailedBook(bk);
    setIsDetailModalOpen(true);
  };

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
        <p style={{ color: 'var(--text-secondary)' }}>Gathering reading stats...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      {/* Title */}
      <div className="dashboard-header">
        <h1 className="dashboard-title gradient-title">Member Dashboard</h1>
        <p className="dashboard-subtitle">Track your loans, view reading achievements, and coordinate returns.</p>
      </div>

      {/* Grid of counter widgets */}
      <div className="widgets-row">
        <div className="widget-card glass-panel w-glow-blue">
          <BookOpen className="widget-icon text-cyan" size={24} />
          <div>
            <div className="widget-value">{stats?.activeLoans || 0}</div>
            <div className="widget-label">Active Borrows</div>
          </div>
        </div>

        <div className={`widget-card glass-panel ${stats?.overdueLoans > 0 ? 'w-glow-red' : 'w-glow-green'}`}>
          <AlertTriangle className={stats?.overdueLoans > 0 ? 'widget-icon text-red' : 'widget-icon text-emerald'} size={24} />
          <div>
            <div className="widget-value">{stats?.overdueLoans || 0}</div>
            <div className="widget-label">Overdue Items</div>
          </div>
        </div>

        <div className="widget-card glass-panel w-glow-emerald">
          <RotateCcw className="widget-icon text-emerald" size={24} />
          <div>
            <div className="widget-value">{stats?.returnedLoans || 0}</div>
            <div className="widget-label">Completed Returns</div>
          </div>
        </div>

        <div className="widget-card glass-panel w-glow-purple">
          <Award className="widget-icon text-purple" size={24} />
          <div>
            <div className="widget-value">{stats?.totalBorrowed || 0}</div>
            <div className="widget-label">Total Read</div>
          </div>
        </div>
      </div>

      {/* NEW SECTION: Monthly Reading Goals & Genre Preferences */}
      <div className="goals-preferences-layout">
        
        {/* Monthly Reading Goal Progress Dial */}
        <div className="goals-widget-card glass-panel goals-glow">
          <div className="goals-header">
            <h3>Monthly Reading Target</h3>
            <span className="month-badge">{new Date().toLocaleString('default', { month: 'long' })}</span>
          </div>

          <div className="goals-body">
            <div className="goal-dial-container">
              <svg width="150" height="150" viewBox="0 0 150 150" className="dial-svg">
                <circle cx="75" cy="75" r="60" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="10" fill="transparent" />
                <circle 
                  cx="75" 
                  cy="75" 
                  r="60" 
                  stroke="url(#goalGradient)" 
                  strokeWidth="10" 
                  fill="transparent" 
                  strokeDasharray={2 * Math.PI * 60}
                  strokeDashoffset={2 * Math.PI * 60 * (1 - goalPercentage / 100)}
                  strokeLinecap="round"
                  transform="rotate(-90 75 75)"
                  className="dial-fill-animation"
                />
                <defs>
                  <linearGradient id="goalGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--accent-indigo)" />
                    <stop offset="100%" stopColor="var(--accent-pink)" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="dial-inner-text">
                <span className="dial-count">{booksReturnedThisMonth} / {monthlyGoal}</span>
                <span className="dial-label">Books Read</span>
              </div>
            </div>

            <div className="goal-controls-wrapper">
              <span className="controls-label">Adjust Monthly Target:</span>
              <div className="controls-btns">
                <button onClick={() => handleAdjustGoal(-1)} disabled={monthlyGoal <= 1 || updatingGoal} className="goal-adj-btn">
                  <Minus size={14} />
                </button>
                <span className="current-goal-val">{monthlyGoal}</span>
                <button onClick={() => handleAdjustGoal(1)} disabled={updatingGoal} className="goal-adj-btn">
                  <Plus size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Favorite genres display */}
        <div className="genre-pref-card glass-panel">
          <h3 className="pref-title">Your Genre Preferences</h3>
          {preferences.length > 0 ? (
            <div className="pref-list">
              {preferences.slice(0, 3).map((p, idx) => (
                <div key={p.name} className="pref-item">
                  <div className="pref-rank-box">#{idx + 1}</div>
                  <div className="pref-text-info">
                    <span className="pref-name">{p.name}</span>
                    <span className="pref-count">{p.count} book{p.count > 1 ? 's' : ''} read</span>
                  </div>
                  <div className="pref-meter-track">
                    <div 
                      className="pref-meter-fill" 
                      style={{ width: `${(p.count / stats.totalBorrowed) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '1rem' }}>
              Borrow books to reveal your analytical category insights here.
            </p>
          )}
        </div>
      </div>

      {/* Countdown Panel & Smart Recommendations */}
      <div className="dashboard-insights-grid">
        {/* Next Return Warning Banner */}
        {upcomingDue ? (
          <div className={`insight-card glass-panel ${upcomingDue.daysLeft <= 0 ? 'insight-overdue' : upcomingDue.daysLeft <= 3 ? 'insight-warning' : 'insight-safe'}`}>
            <Clock className="insight-icon" size={32} />
            <div className="insight-details">
              <span className="insight-badge-label">
                {upcomingDue.daysLeft <= 0 ? 'OVERDUE NOTICE' : 'UPCOMING DUE DATE'}
              </span>
              <h3 className="insight-title">{upcomingDue.bookTitle}</h3>
              <p className="insight-desc">
                {upcomingDue.daysLeft <= 0 
                  ? `This book was due on ${new Date(upcomingDue.dueDate).toLocaleDateString()}. Please return it as soon as possible to avoid library lockouts.`
                  : upcomingDue.daysLeft === 1
                  ? `Due tomorrow (${new Date(upcomingDue.dueDate).toLocaleDateString()}). Make plans to drop it off or register a self-return.`
                  : `Due in ${upcomingDue.daysLeft} days (on ${new Date(upcomingDue.dueDate).toLocaleDateString()}).`
                }
              </p>
            </div>
          </div>
        ) : (
          <div className="insight-card glass-panel insight-empty">
            <Award className="insight-icon text-muted" size={32} />
            <div className="insight-details">
              <span className="insight-badge-label text-muted">Reading Status</span>
              <h3 className="insight-title" style={{ color: 'var(--text-secondary)' }}>All caught up!</h3>
              <p className="insight-desc">No active due dates. Explore the catalog and choose your next adventure.</p>
            </div>
          </div>
        )}

        {/* Recommended Books Card */}
        <div className="recommendations-card glass-panel rec-glow">
          <div className="rec-header">
            <ThumbsUp size={18} className="text-cyan" />
            <h3>Suggested for You</h3>
          </div>
          
          <div className="rec-list">
            {recommendations.length > 0 ? (
              recommendations.map(bk => (
                <div key={bk._id} className="rec-item" onClick={() => openDetailModal(bk)}>
                  <div className="rec-img-box">
                    {bk.coverImage ? (
                      <img src={bk.coverImage} alt={bk.title} className="rec-img" />
                    ) : (
                      <div className="rec-img-fallback"><Book size={14} /></div>
                    )}
                  </div>
                  <div className="rec-info">
                    <span className="rec-title" title={bk.title}>{bk.title}</span>
                    <span className="rec-author">by {bk.author}</span>
                  </div>
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleBorrow(bk._id); }} 
                    disabled={actionLoading} 
                    className="btn btn-secondary btn-icon rec-btn" 
                    title="Quick borrow"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              ))
            ) : (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
                We will display personalized suggestions here once catalog data matches your preferences.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Main active loans and logs */}
      <div className="dashboard-tables-section">
        {/* Active Loans */}
        <div className="table-block">
          <h2 className="table-block-title">Currently Borrowed</h2>
          {activeLoansList.length > 0 ? (
            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Book Details</th>
                    <th>Borrow Date</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {activeLoansList.map(tx => (
                    <tr key={tx._id}>
                      <td>
                        <div className="book-table-detail" onClick={() => openDetailModal(tx.book)} style={{ cursor: 'pointer' }}>
                          <span className="b-title">{tx.book?.title}</span>
                          <span className="b-author">by {tx.book?.author}</span>
                        </div>
                      </td>
                      <td>{new Date(tx.borrowDate).toLocaleDateString()}</td>
                      <td>{new Date(tx.dueDate).toLocaleDateString()}</td>
                      <td>
                        <span className={`badge ${tx.status === 'overdue' ? 'badge-overdue' : 'badge-borrowed'}`}>
                          {tx.status}
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <button
                          disabled={actionLoading}
                          onClick={() => handleReturn(tx._id)}
                          className="btn btn-secondary btn-sm"
                        >
                          Return Book
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-table-state glass-panel">
              <Clock size={36} className="text-muted mb-2" />
              <p>You do not have any books checked out right now.</p>
            </div>
          )}
        </div>

        {/* Return History */}
        <div className="table-block" style={{ marginTop: '3rem' }}>
          <h2 className="table-block-title">Borrowing History</h2>
          {pastLoansList.length > 0 ? (
            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Book Details</th>
                    <th>Borrow Date</th>
                    <th>Return Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {pastLoansList.slice(0, 10).map(tx => (
                    <tr key={tx._id}>
                      <td>
                        <div className="book-table-detail" onClick={() => openDetailModal(tx.book)} style={{ cursor: 'pointer' }}>
                          <span className="b-title">{tx.book?.title}</span>
                          <span className="b-author">by {tx.book?.author}</span>
                        </div>
                      </td>
                      <td>{new Date(tx.borrowDate).toLocaleDateString()}</td>
                      <td>{tx.returnDate ? new Date(tx.returnDate).toLocaleDateString() : 'N/A'}</td>
                      <td>
                        <span className="badge badge-returned">Returned</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-table-state glass-panel">
              <p style={{ color: 'var(--text-muted)' }}>Your returned books logs will appear here once you complete a loan.</p>
            </div>
          )}
        </div>
      </div>

      {/* BOOK DETAIL MODAL */}
      <BookDetailModal
        book={detailedBook}
        isOpen={isDetailModalOpen}
        onClose={() => { setIsDetailModalOpen(false); setDetailedBook(null); }}
        onBorrow={handleBorrow}
        activeBorrows={activeLoansList}
        user={user}
        onSubmitReview={handleReviewSubmit}
      />

      <style dangerouslySetInnerHTML={{__html: `
        .dashboard-container {
          width: 100%;
        }

        .dashboard-header {
          margin-bottom: 2.5rem;
        }

        .dashboard-title {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .dashboard-subtitle {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        /* Widgets Layout */
        .widgets-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2.5rem;
        }

        @media (max-width: 1024px) {
          .widgets-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 550px) {
          .widgets-row {
            grid-template-columns: 1fr;
          }
        }

        .widget-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem !important;
          border-radius: 16px !important;
          border-color: var(--border-light) !important;
        }

        .widget-icon {
          padding: 0.6rem;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
          border: 1px solid var(--border-light);
        }

        .text-cyan { color: var(--accent-cyan); }
        .text-emerald { color: var(--accent-emerald); }
        .text-purple { color: var(--accent-purple); }
        .text-red { color: var(--accent-red); }

        .widget-value {
          font-family: var(--font-display);
          font-size: 1.8rem;
          font-weight: 800;
          line-height: 1.2;
        }

        .widget-label {
          font-size: 0.78rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        /* Glowing accents on widgets */
        .w-glow-blue:hover { box-shadow: 0 0 25px rgba(6, 182, 212, 0.25) !important; border-color: rgba(6, 182, 212, 0.3) !important; }
        .w-glow-green:hover { box-shadow: 0 0 25px rgba(16, 185, 129, 0.25) !important; border-color: rgba(16, 185, 129, 0.3) !important; }
        .w-glow-red:hover { box-shadow: 0 0 25px rgba(239, 68, 68, 0.25) !important; border-color: rgba(239, 68, 68, 0.3) !important; }
        .w-glow-emerald:hover { box-shadow: 0 0 25px rgba(16, 185, 129, 0.25) !important; border-color: rgba(16, 185, 129, 0.3) !important; }
        .w-glow-purple:hover { box-shadow: 0 0 25px rgba(168, 85, 247, 0.25) !important; border-color: rgba(168, 85, 247, 0.3) !important; }

        /* Goals & Preferences grid */
        .goals-preferences-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2.5rem;
        }

        @media (max-width: 900px) {
          .goals-preferences-layout {
            grid-template-columns: 1fr;
          }
        }

        .goals-widget-card {
          padding: 2rem !important;
          border-radius: 20px !important;
          border-color: var(--border-light) !important;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .goals-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .goals-header h3 {
          font-size: 1.15rem;
          color: white;
        }

        .month-badge {
          background: rgba(168, 85, 247, 0.15);
          color: #d8b4fe;
          border: 1px solid rgba(168, 85, 247, 0.2);
          padding: 0.2rem 0.6rem;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
        }

        .goals-body {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 2rem;
          flex: 1;
        }

        @media (max-width: 450px) {
          .goals-body {
            flex-direction: column;
            gap: 1.5rem;
          }
        }

        .goal-dial-container {
          position: relative;
          width: 150px;
          height: 150px;
        }

        .dial-svg {
          width: 100%;
          height: 100%;
        }

        .dial-inner-text {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .dial-count {
          font-size: 1.6rem;
          font-weight: 800;
          color: white;
          font-family: var(--font-display);
        }

        .dial-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
        }

        .goal-controls-wrapper {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .controls-label {
          font-size: 0.82rem;
          color: var(--text-secondary);
          font-weight: 600;
        }

        .controls-btns {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          padding: 0.3rem 0.5rem;
          border-radius: 10px;
          width: fit-content;
        }

        .goal-adj-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          width: 28px;
          height: 28px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .goal-adj-btn:hover:not(:disabled) {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--border-hover);
        }

        .goal-adj-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .current-goal-val {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          min-width: 20px;
          text-align: center;
        }

        .goals-glow:hover {
          box-shadow: 0 0 25px rgba(236, 72, 153, 0.15) !important;
          border-color: rgba(236, 72, 153, 0.25) !important;
        }

        /* Insights grid */
        .dashboard-insights-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        @media (max-width: 900px) {
          .dashboard-insights-grid {
            grid-template-columns: 1fr;
          }
        }

        .insight-card {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
          padding: 2rem !important;
          border-radius: 20px !important;
          border: 1px solid transparent !important;
        }

        .insight-icon {
          flex-shrink: 0;
          padding: 0.5rem;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }

        .insight-details {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .insight-badge-label {
          font-size: 0.68rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .insight-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: white;
        }

        .insight-desc {
          font-size: 0.92rem;
          color: var(--text-secondary);
          line-height: 1.5;
        }

        /* Insight status colors */
        .insight-overdue {
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.15) 0%, rgba(13, 17, 39, 0.45) 100%) !important;
          border-color: rgba(239, 68, 68, 0.3) !important;
          box-shadow: 0 8px 30px rgba(239, 68, 68, 0.1) !important;
        }
        .insight-overdue .insight-icon { color: var(--accent-red); background: rgba(239, 68, 68, 0.1); }
        .insight-overdue .insight-badge-label { color: #fca5a5; }

        .insight-warning {
          background: linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(13, 17, 39, 0.45) 100%) !important;
          border-color: rgba(245, 158, 11, 0.3) !important;
        }
        .insight-warning .insight-icon { color: var(--accent-amber); background: rgba(245, 158, 11, 0.1); }
        .insight-warning .insight-badge-label { color: #fde68a; }

        .insight-safe {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(13, 17, 39, 0.45) 100%) !important;
          border-color: var(--border-light) !important;
        }
        .insight-safe .insight-icon { color: var(--accent-indigo); background: rgba(99, 102, 241, 0.1); }
        .insight-safe .insight-badge-label { color: #c7d2fe; }

        .insight-empty {
          border-color: var(--border-light) !important;
        }

        /* Recommendations widget card */
        .recommendations-card {
          padding: 2rem !important;
          border-radius: 20px !important;
          border-color: var(--border-light) !important;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .rec-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .rec-header h3 {
          font-size: 1.15rem;
          color: white;
        }

        .rec-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .rec-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.04);
          padding: 0.6rem 0.8rem;
          border-radius: 10px;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .rec-item:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: var(--border-light);
          transform: translateX(4px);
        }

        .rec-img-box {
          width: 36px;
          height: 52px;
          border-radius: 4px;
          overflow: hidden;
          background: rgba(0,0,0,0.3);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .rec-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .rec-img-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-muted);
        }

        .rec-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .rec-title {
          font-size: 0.88rem;
          font-weight: 700;
          color: white;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .rec-author {
          font-size: 0.72rem;
          color: var(--text-muted);
        }

        .rec-btn {
          padding: 0.4rem;
          border-radius: 6px;
        }

        .rec-glow:hover {
          box-shadow: 0 0 25px rgba(6, 182, 212, 0.12) !important;
          border-color: rgba(6, 182, 212, 0.25) !important;
        }

        /* Favorite Genres Card */
        .genre-pref-card {
          padding: 2rem !important;
          border-radius: 20px !important;
          border-color: var(--border-light) !important;
        }

        .pref-title {
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .pref-list {
          display: flex;
          flex-direction: column;
          gap: 1.2rem;
        }

        .pref-item {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 1rem;
          row-gap: 0.5rem;
        }

        .pref-rank-box {
          background: var(--gradient-primary);
          color: white;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          font-family: var(--font-display);
          font-size: 0.85rem;
          box-shadow: 0 4px 10px rgba(99, 102, 241, 0.3);
        }

        .pref-text-info {
          display: flex;
          flex-direction: column;
        }

        .pref-name {
          font-weight: 700;
          font-size: 0.92rem;
          color: var(--text-primary);
        }

        .pref-count {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .pref-meter-track {
          grid-column: 1 / span 3;
          height: 4px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 2px;
          overflow: hidden;
        }

        .pref-meter-fill {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 2px;
        }

        /* Tables segment */
        .table-block-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 1rem;
          font-family: var(--font-display);
        }

        .book-table-detail {
          display: flex;
          flex-direction: column;
        }

        .book-table-detail .b-title {
          font-weight: 700;
          color: var(--text-primary);
          transition: color var(--transition-fast);
        }

        .book-table-detail:hover .b-title {
          color: var(--accent-indigo);
        }

        .book-table-detail .b-author {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .empty-table-state {
          padding: 3rem 1.5rem !important;
          text-align: center;
          color: var(--text-secondary);
          border-radius: 12px !important;
          border-style: dashed !important;
          border-color: var(--border-light) !important;
        }

        .mb-2 {
          margin-bottom: 0.5rem;
        }
      `}} />
    </div>
  );
};

export default MemberDashboard;
