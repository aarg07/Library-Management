import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { LogIn, UserPlus, BookOpen, Users, Bookmark, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

const LandingPage = () => {
  const { login, signup, isAuthenticated, error, clearError } = useAuth();
  const navigate = useNavigate();
  
  // Auth Form State
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'member' // default
  });
  const [formError, setFormError] = useState('');
  const [loading, setLoading] = useState(false);

  // Stats State
  const [totalBooks, setTotalBooks] = useState(8);
  const [uniqueGenres, setUniqueGenres] = useState(5);
  const [featuredBooks, setFeaturedBooks] = useState([]);
  const [featuredLoading, setFeaturedLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/catalog');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    // Clear auth context errors when switching tabs
    clearError();
    setFormError('');
  }, [isLoginTab]);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/books');
        const result = await response.json();
        if (result.success) {
          setTotalBooks(result.data.length);
          const genres = new Set(result.data.map(b => b.genre));
          setUniqueGenres(genres.size);
        }
      } catch (err) {
        console.error('Error loading stats:', err);
      }
    };

    const fetchFeatured = async () => {
      try {
        setFeaturedLoading(true);
        const response = await fetch('/api/books/featured');
        const result = await response.json();
        if (result.success) {
          setFeaturedBooks(result.data.featuredBooks || []);
        }
      } catch (err) {
        console.error('Error loading featured books:', err);
      } finally {
        setFeaturedLoading(false);
      }
    };

    fetchStats();
    fetchFeatured();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError('');
    setLoading(true);

    if (isLoginTab) {
      if (!formData.email || !formData.password) {
        setFormError('Please enter both email and password.');
        setLoading(false);
        return;
      }
      const res = await login(formData.email, formData.password);
      if (res.success) {
        navigate('/catalog');
      } else {
        setFormError(res.message || 'Invalid email or password.');
      }
    } else {
      if (!formData.name || !formData.email || !formData.password) {
        setFormError('Please fill out all fields.');
        setLoading(false);
        return;
      }
      if (formData.password.length < 6) {
        setFormError('Password must be at least 6 characters.');
        setLoading(false);
        return;
      }
      const res = await signup(formData.name, formData.email, formData.password, formData.role);
      if (res.success) {
        navigate('/catalog');
      } else {
        setFormError(res.message || 'Registration failed.');
      }
    }
    setLoading(false);
  };

  return (
    <div className="landing-page-container">
      {/* Dynamic Background Glowing Blobs */}
      <div className="glow-shape blob-1 spin-slow"></div>
      <div className="glow-shape blob-2"></div>

      <div className="landing-layout">
        {/* Left Side: Brand presentation */}
        <div className="landing-hero-section">
          <div className="hero-badge">
            <Sparkles size={14} className="sparkle-icon" />
            <span>Introducing Library Cipher 2.0</span>
          </div>
          <h1 className="hero-title">
            The Ultimate Digital <br />
            Portal for <span className="gradient-title">Book Lovers</span>
          </h1>
          <p className="hero-subtitle">
            Seamlessly search catalogs, manage loans, and track your reading milestones in a premium, high-speed user interface designed for modern learners.
          </p>

          {/* Bullet features */}
          <div className="feature-bullets">
            <div className="bullet-item">
              <CheckCircle2 size={18} className="bullet-check" />
              <span>Role-Based Librarian & Member views</span>
            </div>
            <div className="bullet-item">
              <CheckCircle2 size={18} className="bullet-check" />
              <span>Real-time borrowing status indicators</span>
            </div>
            <div className="bullet-item">
              <CheckCircle2 size={18} className="bullet-check" />
              <span>Interactive dashboard charts and logs</span>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="stats-grid">
            <div className="stat-card glass-panel">
              <BookOpen size={24} className="stat-icon icon-blue" />
              <div className="stat-value">{totalBooks}</div>
              <div className="stat-label">Total Books</div>
            </div>
            <div className="stat-card glass-panel">
              <Bookmark size={24} className="stat-icon icon-purple" />
              <div className="stat-value">{uniqueGenres}</div>
              <div className="stat-label">Categories</div>
            </div>
            <div className="stat-card glass-panel">
              <Users size={24} className="stat-icon icon-teal" />
              <div className="stat-value">Active</div>
              <div className="stat-label">Community</div>
            </div>
          </div>

          <div className="featured-spotlight glass-panel">
            <div className="featured-spotlight-header">
              <div>
                <p className="featured-eyebrow">Popular right now</p>
                <h3>Curated picks for your next read</h3>
              </div>
              <span className="featured-pill">Fresh every day</span>
            </div>
            <div className="featured-list">
              {featuredLoading ? (
                <p className="featured-empty">Loading favorites...</p>
              ) : featuredBooks.length > 0 ? (
                featuredBooks.map((book) => (
                  <div key={book._id} className="featured-book-item">
                    <div>
                      <p className="featured-book-title">{book.title}</p>
                      <p className="featured-book-meta">{book.author} · {book.genre}</p>
                    </div>
                    <div className="featured-book-action">
                      <span>{book.ratingAverage ? `${book.ratingAverage.toFixed(1)}★` : 'New'}</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                ))
              ) : (
                <p className="featured-empty">More selections will appear here as the catalog grows.</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Auth Form Container */}
        <div className="landing-auth-section">
          <div className="auth-form-card glass-panel">
            {/* Tabs */}
            <div className="auth-tabs">
              <button 
                onClick={() => setIsLoginTab(true)} 
                className={`auth-tab-btn ${isLoginTab ? 'auth-tab-active' : ''}`}
              >
                <LogIn size={16} />
                <span>Sign In</span>
              </button>
              <button 
                onClick={() => setIsLoginTab(false)} 
                className={`auth-tab-btn ${!isLoginTab ? 'auth-tab-active' : ''}`}
              >
                <UserPlus size={16} />
                <span>Register</span>
              </button>
            </div>

            <div className="auth-tab-divider"></div>

            <form onSubmit={handleSubmit} className="auth-form">
              {formError && (
                <div className="auth-error-banner">
                  <span>{formError}</span>
                </div>
              )}

              {!isLoginTab && (
                <div className="input-group">
                  <label className="input-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="input-field"
                    required={!isLoginTab}
                  />
                </div>
              )}

              <div className="input-group">
                <label className="input-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@example.com"
                  className="input-field"
                  required
                />
              </div>

              <div className="input-group">
                <label className="input-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="••••••••"
                  className="input-field"
                  required
                />
              </div>

              {!isLoginTab && (
                <div className="input-group">
                  <label className="input-label">Account Role</label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    className="input-field"
                    style={{ background: 'var(--bg-input)' }}
                  >
                    <option value="member">Library Member (Student)</option>
                    <option value="librarian">Librarian (Admin)</option>
                  </select>
                </div>
              )}

              <button 
                type="submit" 
                disabled={loading} 
                className="btn btn-primary w-full mt-4 py-3"
              >
                {loading ? (
                  <div className="small-loader"></div>
                ) : isLoginTab ? (
                  <>
                    <LogIn size={18} />
                    <span>Enter Library Portal</span>
                  </>
                ) : (
                  <>
                    <UserPlus size={18} />
                    <span>Create Account</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .landing-page-container {
          position: relative;
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          padding-top: 1rem;
        }

        .glow-shape {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: -1;
          filter: blur(120px);
          opacity: 0.2;
        }

        .blob-1 {
          width: 450px;
          height: 450px;
          background: var(--accent-indigo);
          top: 10%;
          left: 5%;
        }

        .blob-2 {
          width: 350px;
          height: 350px;
          background: var(--accent-purple);
          bottom: 10%;
          right: 5%;
        }

        .landing-layout {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 4rem;
          width: 100%;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .landing-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.25);
          padding: 0.4rem 0.9rem;
          border-radius: 99px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #c7d2fe;
          margin-bottom: 1.5rem;
        }

        .sparkle-icon {
          color: var(--accent-purple);
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: 3.5rem;
          line-height: 1.15;
          font-weight: 800;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }

        @media (max-width: 640px) {
          .hero-title {
            font-size: 2.5rem;
          }
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: var(--text-secondary);
          line-height: 1.6;
          margin-bottom: 2rem;
          max-width: 600px;
        }

        .feature-bullets {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
        }

        .bullet-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-primary);
          font-size: 0.95rem;
          font-weight: 500;
        }

        .bullet-check {
          color: var(--accent-teal);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 600px;
        }

        .featured-spotlight {
          margin-top: 1.5rem;
          max-width: 680px;
          padding: 1.4rem 1.2rem !important;
        }

        .featured-spotlight-header {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          align-items: center;
          margin-bottom: 1rem;
        }

        .featured-eyebrow {
          color: var(--accent-cyan);
          font-size: 0.75rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          font-weight: 700;
          margin-bottom: 0.3rem;
        }

        .featured-spotlight h3 {
          font-size: 1.05rem;
          color: var(--text-primary);
        }

        .featured-pill {
          background: rgba(99, 102, 241, 0.14);
          color: #c7d2fe;
          border: 1px solid rgba(99, 102, 241, 0.22);
          border-radius: 999px;
          padding: 0.25rem 0.6rem;
          font-size: 0.72rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .featured-list {
          display: grid;
          gap: 0.75rem;
        }

        .featured-book-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          padding: 0.8rem 0.9rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .featured-book-title {
          font-weight: 700;
          color: var(--text-primary);
          margin-bottom: 0.2rem;
        }

        .featured-book-meta {
          font-size: 0.82rem;
          color: var(--text-secondary);
        }

        .featured-book-action {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          color: var(--accent-teal);
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .featured-empty {
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        .stat-card {
          text-align: center;
          padding: 1.25rem 1rem !important;
          border-radius: 14px !important;
        }

        .stat-icon {
          margin: 0 auto 0.5rem auto;
        }

        .icon-blue { color: var(--accent-cyan); }
        .icon-purple { color: var(--accent-purple); }
        .icon-teal { color: var(--accent-teal); }

        .stat-value {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-top: 0.2rem;
        }

        /* Auth Card styling */
        .auth-form-card {
          padding: 2.5rem !important;
          border-radius: 20px !important;
          box-shadow: var(--shadow-lg) !important;
          border-color: var(--border-light) !important;
        }

        .auth-tabs {
          display: flex;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.25rem;
          border-radius: 10px;
          margin-bottom: 1.5rem;
        }

        .auth-tab-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: none;
          border: none;
          color: var(--text-secondary);
          padding: 0.6rem 0.8rem;
          border-radius: 8px;
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .auth-tab-active {
          background: var(--gradient-primary);
          color: white;
          box-shadow: 0 4px 10px rgba(168, 85, 247, 0.25);
        }

        .auth-tab-divider {
          height: 1px;
          background: var(--border-light);
          margin-bottom: 1.5rem;
        }

        .auth-error-banner {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.25);
          color: #fca5a5;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .mt-4 {
          margin-top: 1rem;
        }

        .small-loader {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          border-top-color: white;
          animation: spin 0.8s linear infinite;
        }
      `}} />
    </div>
  );
};

export default LandingPage;
