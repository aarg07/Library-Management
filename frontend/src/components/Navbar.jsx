import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Library, BookOpen, LayoutDashboard, LogOut, User as UserIcon } from 'lucide-react';

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const isActive = (path) => {
    return location.pathname === path ? 'nav-link-active' : '';
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand">
          <div className="brand-logo">
            <Library size={24} className="brand-icon-svg" />
          </div>
          <span className="brand-text">
            Library <span className="brand-highlight">Cipher</span>
          </span>
        </Link>

        <div className="navbar-links">
          <Link to="/catalog" className={`nav-link ${isActive('/catalog')}`}>
            <BookOpen size={18} />
            <span>Catalog</span>
          </Link>

          {isAuthenticated && (
            <Link to="/dashboard" className={`nav-link ${isActive('/dashboard')}`}>
              <LayoutDashboard size={18} />
              <span>Dashboard</span>
            </Link>
          )}
        </div>

        <div className="navbar-actions">
          {isAuthenticated ? (
            <div className="user-profile-badge">
              <div className="user-info">
                <span className="user-name">{user?.name}</span>
                <span className={`role-tag ${user?.role === 'librarian' ? 'role-librarian' : 'role-member'}`}>
                  {user?.role}
                </span>
              </div>
              <button onClick={handleLogout} className="btn-logout" title="Log Out">
                <LogOut size={18} />
              </button>
            </div>
          ) : (
            <Link to="/" className="btn btn-primary btn-sm">
              <UserIcon size={16} />
              <span>Get Started</span>
            </Link>
          )}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .navbar-container {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 72px;
          background: rgba(8, 10, 24, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(99, 102, 241, 0.15);
          z-index: 100;
          display: flex;
          align-items: center;
        }

        .navbar-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          color: var(--text-primary);
        }

        .brand-logo {
          background: var(--gradient-primary);
          padding: 0.5rem;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
        }

        .brand-icon-svg {
          color: white;
        }

        .brand-text {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.25rem;
          letter-spacing: -0.01em;
        }

        .brand-highlight {
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          color: var(--text-secondary);
          font-family: var(--font-display);
          font-weight: 500;
          font-size: 0.95rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all var(--transition-fast);
        }

        .nav-link:hover {
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .nav-link-active {
          color: var(--text-primary) !important;
          background: rgba(99, 102, 241, 0.1) !important;
          border: 1px solid rgba(99, 102, 241, 0.25);
        }

        .navbar-actions {
          display: flex;
          align-items: center;
        }

        .user-profile-badge {
          display: flex;
          align-items: center;
          gap: 1rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-light);
          padding: 0.4rem 0.4rem 0.4rem 1rem;
          border-radius: 12px;
        }

        .user-info {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 0.1rem;
        }

        .user-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-primary);
        }

        .role-tag {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0.1rem 0.4rem;
          border-radius: 4px;
        }

        .role-librarian {
          background: rgba(168, 85, 247, 0.15);
          color: #d8b4fe;
          border: 1px solid rgba(168, 85, 247, 0.3);
        }

        .role-member {
          background: rgba(99, 102, 241, 0.15);
          color: #c7d2fe;
          border: 1px solid rgba(99, 102, 241, 0.3);
        }

        .btn-logout {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          color: #fca5a5;
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-fast);
        }

        .btn-logout:hover {
          background: rgba(239, 68, 68, 0.3);
          color: white;
          border-color: var(--accent-red);
        }

        .btn-sm {
          padding: 0.5rem 1rem;
          font-size: 0.85rem;
        }
      `}} />
    </nav>
  );
};

export default Navbar;
