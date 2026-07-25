import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Modal from '../components/Modal';
import { 
  BarChart3, Users, BookOpen, AlertTriangle, 
  Search, Check, Trash2, Edit3, Plus, ArrowUpRight 
} from 'lucide-react';

const LibrarianDashboard = () => {
  const { token } = useAuth();

  // Navigation tab state: 'loans', 'books', 'members'
  const [activeTab, setActiveTab] = useState('loans');

  // API Data states
  const [dashboardData, setDashboardData] = useState(null);
  const [loans, setLoans] = useState([]);
  const [books, setBooks] = useState([]);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);

  // Search filters
  const [loansSearch, setLoansSearch] = useState('');
  const [booksSearch, setBooksSearch] = useState('');
  const [membersSearch, setMembersSearch] = useState('');

  // Modals (Add / Edit Book)
  const [isAddBookOpen, setIsAddBookOpen] = useState(false);
  const [isEditBookOpen, setIsEditBookOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
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

  const genresList = ['Fantasy', 'Sci-Fi', 'Dystopian', 'Fiction', 'Biography', 'Thriller', 'Self-Help', 'History', 'Romance'];

  // Fetch Librarian Dashboard data
  const fetchDashboardData = async () => {
    try {
      // 1. Fetch dashboard analytics
      const analyticsRes = await fetch('/api/dashboard/librarian', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const analyticsJson = await analyticsRes.json();
      if (analyticsJson.success) {
        setDashboardData(analyticsJson.data);
      }

      // 2. Fetch all transactions
      const loansRes = await fetch('/api/transactions/all', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const loansJson = await loansRes.json();
      if (loansJson.success) {
        setLoans(loansJson.data);
      }

      // 3. Fetch all books
      const booksRes = await fetch('/api/books');
      const booksJson = await booksRes.json();
      if (booksJson.success) {
        setBooks(booksJson.data);
      }

      // 4. Fetch all members
      const membersRes = await fetch('/api/dashboard/users', {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      const membersJson = await membersRes.json();
      if (membersJson.success) {
        setMembers(membersJson.data);
      }
    } catch (err) {
      console.error('Error fetching admin dashboard data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, [token]);

  // Handle book return approval
  const handleApproveReturn = async (txId) => {
    if (actionLoading) return;
    if (!window.confirm('Approve return of physical copy? This resets stock levels.')) return;

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
        alert(result.message || 'Failed to approve return.');
      }
    } catch (err) {
      console.error(err);
      alert('Error connecting to server.');
    } finally {
      setActionLoading(false);
    }
  };

  // Add Book Submission
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setActionLoading(true);

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
        setIsAddBookOpen(false);
        setBookFormData({
          title: '',
          author: '',
          genre: '',
          isbn: '',
          copiesTotal: 1,
          publishYear: new Date().getFullYear(),
          coverImage: ''
        });
        fetchDashboardData();
      } else {
        setFormError(result.message || 'Failed to register book.');
      }
    } catch (err) {
      console.error(err);
      setFormError('Server connection error.');
    } finally {
      setActionLoading(false);
    }
  };

  // Edit Book modal setup
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
    setIsEditBookOpen(true);
  };

  // Edit Book Submission
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setActionLoading(true);

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
        setIsEditBookOpen(false);
        setSelectedBook(null);
        fetchDashboardData();
      } else {
        setFormError(result.message || 'Failed to edit book records.');
      }
    } catch (err) {
      console.error(err);
      setFormError('Server connection error.');
    } finally {
      setActionLoading(false);
    }
  };

  // Delete Book
  const handleDeleteBook = async (bookId) => {
    if (!window.confirm('Are you absolutely sure you want to delete this book from database?')) return;
    
    try {
      const response = await fetch(`/api/books/${bookId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      if (result.success) {
        fetchDashboardData();
      } else {
        alert(result.message || 'Failed to delete book.');
      }
    } catch (err) {
      console.error(err);
      alert('Error deleting book.');
    }
  };

  // Filter lists based on searches
  const filteredLoans = loans.filter(tx => {
    const term = loansSearch.toLowerCase();
    return (
      (tx.user?.name || '').toLowerCase().includes(term) ||
      (tx.book?.title || '').toLowerCase().includes(term) ||
      (tx.status || '').toLowerCase().includes(term)
    );
  });

  const filteredBooks = books.filter(b => {
    const term = booksSearch.toLowerCase();
    return (
      b.title.toLowerCase().includes(term) ||
      b.author.toLowerCase().includes(term) ||
      b.isbn.toLowerCase().includes(term) ||
      b.genre.toLowerCase().includes(term)
    );
  });

  const filteredMembers = members.filter(m => {
    const term = membersSearch.toLowerCase();
    return (
      m.name.toLowerCase().includes(term) ||
      m.email.toLowerCase().includes(term)
    );
  });

  if (loading) {
    return (
      <div className="loader-wrapper">
        <div className="loader"></div>
        <p style={{ color: 'var(--text-secondary)' }}>Compiling database analytics...</p>
      </div>
    );
  }

  const { stats, genreStats } = dashboardData || {};

  // Find max value in genre aggregates for relative SVG chart scales
  const maxGenreCopies = genreStats?.length > 0 ? Math.max(...genreStats.map(g => g.value)) : 10;

  return (
    <div className="admin-container">
      {/* Title Header */}
      <div className="admin-header-row">
        <div>
          <h1 className="admin-title gradient-title">Librarian Headquarters</h1>
          <p className="admin-subtitle">Monitor loans, control catalog stock, and review member accounts.</p>
        </div>
        <button onClick={() => { setIsAddBookOpen(true); setFormError(''); }} className="btn btn-primary">
          <Plus size={18} />
          <span>Add New Book</span>
        </button>
      </div>

      {/* Widgets Summary Cards */}
      <div className="widgets-row">
        <div className="widget-card glass-panel w-glow-purple">
          <BookOpen className="widget-icon text-purple" size={24} />
          <div>
            <div className="widget-value">{stats?.totalBooks || 0}</div>
            <div className="widget-label">Unique Titles</div>
          </div>
        </div>

        <div className="widget-card glass-panel w-glow-blue">
          <Users className="widget-icon text-cyan" size={24} />
          <div>
            <div className="widget-value">{stats?.totalMembers || 0}</div>
            <div className="widget-label">Members</div>
          </div>
        </div>

        <div className="widget-card glass-panel w-glow-emerald">
          <ArrowUpRight className="widget-icon text-emerald" size={24} />
          <div>
            <div className="widget-value">{stats?.activeLoans || 0}</div>
            <div className="widget-label">Active Loans</div>
          </div>
        </div>

        <div className={`widget-card glass-panel ${stats?.overdueLoans > 0 ? 'w-glow-red' : 'w-glow-green'}`}>
          <AlertTriangle className={stats?.overdueLoans > 0 ? 'widget-icon text-red' : 'widget-icon text-emerald'} size={24} />
          <div>
            <div className="widget-value">{stats?.overdueLoans || 0}</div>
            <div className="widget-label">Overdue Alerts</div>
          </div>
        </div>
      </div>

      {/* Charts & Analytics */}
      <div className="analytics-layout">
        {/* Genre Aggregation Chart */}
        <div className="chart-card glass-panel">
          <div className="chart-header">
            <BarChart3 size={18} className="text-purple" />
            <h3>Book Copies by Genre</h3>
          </div>
          
          <div className="chart-body">
            {genreStats && genreStats.length > 0 ? (
              <div className="genre-chart-list">
                {genreStats.map(g => {
                  const percent = (g.value / maxGenreCopies) * 100;
                  return (
                    <div key={g.name} className="chart-row-item">
                      <span className="row-label">{g.name}</span>
                      <div className="bar-wrapper">
                        <div className="bar-track">
                          <div className="bar-fill" style={{ width: `${percent}%` }}></div>
                        </div>
                        <span className="row-value">{g.value} copy{g.value > 1 ? 's' : ''}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)' }}>No genre statistics registered.</p>
            )}
          </div>
        </div>

        {/* Stock status chart (donut simulation) */}
        <div className="chart-card glass-panel">
          <div className="chart-header">
            <BookOpen size={18} className="text-cyan" />
            <h3>Total Stock Allocation</h3>
          </div>

          <div className="chart-body flex-center-col">
            <div className="stock-ratio-ring-container">
              {/* Radial Progress Ring SVG */}
              <svg width="160" height="160" viewBox="0 0 160 160" className="svg-ring">
                <circle cx="80" cy="80" r="65" stroke="rgba(255,255,255,0.03)" strokeWidth="12" fill="transparent" />
                <circle 
                  cx="80" cy="80" r="65" 
                  stroke="var(--accent-emerald)" 
                  strokeWidth="12" 
                  fill="transparent" 
                  strokeDasharray={2 * Math.PI * 65}
                  strokeDashoffset={2 * Math.PI * 65 * (1 - (stats?.availableCopies / stats?.totalCopies || 1))}
                  strokeLinecap="round"
                  transform="rotate(-90 80 80)"
                />
              </svg>
              <div className="ring-inner-content">
                <span className="ring-percentage">
                  {stats?.totalCopies > 0 ? Math.round((stats.availableCopies / stats.totalCopies) * 100) : 100}%
                </span>
                <span className="ring-label">Available</span>
              </div>
            </div>

            <div className="chart-legends-grid">
              <div className="legend-item">
                <span className="legend-dot bg-emerald"></span>
                <div className="legend-info">
                  <span className="legend-name">Available</span>
                  <span className="legend-val">{stats?.availableCopies || 0}</span>
                </div>
              </div>
              <div className="legend-item">
                <span className="legend-dot bg-purple"></span>
                <div className="legend-info">
                  <span className="legend-name">Borrowed / Out</span>
                  <span className="legend-val">{stats?.borrowedCopies || 0}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Layout */}
      <div className="tab-control-strip">
        <button onClick={() => setActiveTab('loans')} className={`tab-btn ${activeTab === 'loans' ? 'tab-btn-active' : ''}`}>
          Active Loans & Returns
        </button>
        <button onClick={() => setActiveTab('books')} className={`tab-btn ${activeTab === 'books' ? 'tab-btn-active' : ''}`}>
          Catalog Manager
        </button>
        <button onClick={() => setActiveTab('members')} className={`tab-btn ${activeTab === 'members' ? 'tab-btn-active' : ''}`}>
          Library Members
        </button>
      </div>

      {/* Search Input for active tab lists */}
      <div className="table-search-row">
        {activeTab === 'loans' && (
          <div className="search-box-container">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search loans by member, book title, status..."
              value={loansSearch}
              onChange={(e) => setLoansSearch(e.target.value)}
              className="catalog-search-input"
            />
          </div>
        )}
        {activeTab === 'books' && (
          <div className="search-box-container">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search books by title, author, genre, ISBN..."
              value={booksSearch}
              onChange={(e) => setBooksSearch(e.target.value)}
              className="catalog-search-input"
            />
          </div>
        )}
        {activeTab === 'members' && (
          <div className="search-box-container">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              placeholder="Search members by name, email..."
              value={membersSearch}
              onChange={(e) => setMembersSearch(e.target.value)}
              className="catalog-search-input"
            />
          </div>
        )}
      </div>

      {/* Lists Displays */}
      <div className="admin-tables-container">
        {/* Tab 1: Loans List */}
        {activeTab === 'loans' && (
          filteredLoans.length > 0 ? (
            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Member</th>
                    <th>Book Checked Out</th>
                    <th>Issue Date</th>
                    <th>Due Date</th>
                    <th>Status</th>
                    <th style={{ textAlign: 'right' }}>Action Approval</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLoans.map(tx => (
                    <tr key={tx._id}>
                      <td>
                        <div className="member-table-cell">
                          <span className="cell-main">{tx.user?.name}</span>
                          <span className="cell-sub">{tx.user?.email}</span>
                        </div>
                      </td>
                      <td>
                        <div className="member-table-cell">
                          <span className="cell-main">{tx.book?.title}</span>
                          <span className="cell-sub">{tx.book?.isbn}</span>
                        </div>
                      </td>
                      <td>{new Date(tx.borrowDate).toLocaleDateString()}</td>
                      <td>{new Date(tx.dueDate).toLocaleDateString()}</td>
                      <td>
                        <span className={`badge ${tx.status === 'overdue' ? 'badge-overdue' : tx.status === 'returned' ? 'badge-returned' : 'badge-borrowed'}`}>
                          {tx.status}
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        {tx.status !== 'returned' ? (
                          <button
                            disabled={actionLoading}
                            onClick={() => handleApproveReturn(tx._id)}
                            className="btn btn-secondary btn-sm btn-approve"
                          >
                            <Check size={14} className="text-emerald" />
                            <span>Confirm Return</span>
                          </button>
                        ) : (
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>
                            Returned on {tx.returnDate ? new Date(tx.returnDate).toLocaleDateString() : 'N/A'}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-table-state glass-panel">
              <p>No active borrows or historic loans match this filter.</p>
            </div>
          )
        )}

        {/* Tab 2: Books Manager */}
        {activeTab === 'books' && (
          filteredBooks.length > 0 ? (
            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Title & Author</th>
                    <th>Genre</th>
                    <th>ISBN Code</th>
                    <th>Availability Status</th>
                    <th style={{ textAlign: 'right' }}>Modify Records</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBooks.map(b => (
                    <tr key={b._id}>
                      <td>
                        <div className="member-table-cell">
                          <span className="cell-main">{b.title}</span>
                          <span className="cell-sub">by {b.author}</span>
                        </div>
                      </td>
                      <td>{b.genre}</td>
                      <td style={{ fontFamily: 'monospace' }}>{b.isbn}</td>
                      <td>
                        <span className={`badge ${b.copiesAvailable > 0 ? 'badge-available' : 'badge-overdue'}`}>
                          {b.copiesAvailable} / {b.copiesTotal} available
                        </span>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <div className="manager-actions-row">
                          <button onClick={() => openEditModal(b)} className="btn-icon" title="Edit book records">
                            <Edit3 size={15} />
                          </button>
                          <button onClick={() => handleDeleteBook(b._id)} className="btn-icon text-red" title="Remove book">
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-table-state glass-panel">
              <p>No catalog records matched your search query.</p>
            </div>
          )
        )}

        {/* Tab 3: Members directory */}
        {activeTab === 'members' && (
          filteredMembers.length > 0 ? (
            <div className="table-container">
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>Member Details</th>
                    <th>Account Registration</th>
                    <th>Active Borrows</th>
                    <th>Overdues</th>
                    <th>Completed Returns</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredMembers.map(m => (
                    <tr key={m._id}>
                      <td>
                        <div className="member-table-cell">
                          <span className="cell-main">{m.name}</span>
                          <span className="cell-sub">{m.email}</span>
                        </div>
                      </td>
                      <td>{new Date(m.createdAt).toLocaleDateString()}</td>
                      <td>
                        <span className={`badge ${m.activeLoans > 0 ? 'badge-borrowed' : 'badge-returned'}`}>
                          {m.activeLoans} active
                        </span>
                      </td>
                      <td>
                        <span className={`badge ${m.overdueLoans > 0 ? 'badge-overdue' : 'badge-returned'}`}>
                          {m.overdueLoans} overdue
                        </span>
                      </td>
                      <td>{m.returnedLoans} returns</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="empty-table-state glass-panel">
              <p>No registered library members match this filter.</p>
            </div>
          )
        )}
      </div>

      {/* ADD BOOK MODAL */}
      <Modal
        isOpen={isAddBookOpen}
        onClose={() => setIsAddBookOpen(false)}
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
                {genresList.map(g => (
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

          <button type="submit" disabled={actionLoading} className="btn btn-primary w-full py-3 mt-2">
            {actionLoading ? <div className="small-loader"></div> : 'Confirm Registration'}
          </button>
        </form>
      </Modal>

      {/* EDIT BOOK MODAL */}
      <Modal
        isOpen={isEditBookOpen}
        onClose={() => { setIsEditBookOpen(false); setSelectedBook(null); }}
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
                {genresList.map(g => (
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

          <button type="submit" disabled={actionLoading} className="btn btn-primary w-full py-3 mt-2">
            {actionLoading ? <div className="small-loader"></div> : 'Save Modifications'}
          </button>
        </form>
      </Modal>

      <style dangerouslySetInnerHTML={{__html: `
        .admin-container {
          width: 100%;
        }

        .admin-header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2.5rem;
          gap: 1.5rem;
        }

        @media (max-width: 640px) {
          .admin-header-row {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        .admin-title {
          font-size: 2.25rem;
          font-weight: 800;
          margin-bottom: 0.25rem;
        }

        .admin-subtitle {
          color: var(--text-secondary);
          font-size: 0.95rem;
        }

        /* Analytics Layout Charts */
        .analytics-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-bottom: 3rem;
        }

        @media (max-width: 900px) {
          .analytics-layout {
            grid-template-columns: 1fr;
          }
        }

        .chart-card {
          padding: 2rem !important;
          border-radius: 20px !important;
          border-color: var(--border-light) !important;
          display: flex;
          flex-direction: column;
          min-height: 280px;
        }

        .chart-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--border-light);
          padding-bottom: 0.75rem;
        }

        .chart-header h3 {
          font-size: 1.15rem;
          color: white;
        }

        .chart-body {
          flex: 1;
        }

        .genre-chart-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .chart-row-item {
          display: grid;
          grid-template-columns: 100px 1fr;
          align-items: center;
          gap: 1rem;
        }

        .row-label {
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--text-secondary);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .bar-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
        }

        .bar-track {
          height: 10px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 5px;
          flex: 1;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          background: var(--gradient-primary);
          border-radius: 5px;
          box-shadow: 0 0 10px rgba(168, 85, 247, 0.3);
          transition: width var(--transition-slow);
        }

        .row-value {
          font-size: 0.78rem;
          font-weight: 700;
          color: var(--text-primary);
          white-space: nowrap;
        }

        /* Ring Donut Chart */
        .flex-center-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
        }

        .stock-ratio-ring-container {
          position: relative;
          width: 160px;
          height: 160px;
        }

        .svg-ring {
          width: 100%;
          height: 100%;
        }

        .ring-inner-content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.1rem;
        }

        .ring-percentage {
          font-size: 1.8rem;
          font-weight: 800;
          font-family: var(--font-display);
          color: white;
        }

        .ring-label {
          font-size: 0.72rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 600;
        }

        .chart-legends-grid {
          display: flex;
          gap: 2rem;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .legend-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }

        .bg-emerald { background: var(--accent-emerald); }
        .bg-purple { background: var(--accent-purple); }

        .legend-info {
          display: flex;
          flex-direction: column;
        }

        .legend-name {
          font-size: 0.78rem;
          color: var(--text-muted);
          font-weight: 500;
        }

        .legend-val {
          font-size: 0.9rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        /* Tab controls */
        .tab-control-strip {
          display: flex;
          border-bottom: 1px solid var(--border-light);
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          overflow-x: auto;
        }

        .tab-btn {
          background: none;
          border: none;
          color: var(--text-secondary);
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.95rem;
          padding: 0.75rem 0.5rem;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: all var(--transition-fast);
          white-space: nowrap;
        }

        .tab-btn:hover {
          color: var(--text-primary);
        }

        .tab-btn-active {
          color: var(--text-primary);
          border-color: var(--accent-indigo);
          text-shadow: 0 0 10px rgba(99, 102, 241, 0.2);
        }

        .table-search-row {
          margin-bottom: 1.5rem;
        }

        .member-table-cell {
          display: flex;
          flex-direction: column;
        }

        .cell-main {
          font-weight: 700;
          color: var(--text-primary);
        }

        .cell-sub {
          font-size: 0.78rem;
          color: var(--text-muted);
        }

        .btn-approve {
          background: rgba(16, 185, 129, 0.1);
          color: #a7f3d0;
          border: 1px solid rgba(16, 185, 129, 0.2);
          transition: all var(--transition-fast);
        }

        .btn-approve:hover {
          background: rgba(16, 185, 129, 0.2);
          border-color: var(--accent-emerald);
          color: white;
          transform: translateY(-1px);
        }

        .manager-actions-row {
          display: flex;
          justify-content: flex-end;
          gap: 0.5rem;
        }
      `}} />
    </div>
  );
};

export default LibrarianDashboard;
