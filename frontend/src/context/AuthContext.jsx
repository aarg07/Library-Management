import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Validate token on load
  useEffect(() => {
    const loadUser = async () => {
      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/auth/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });

        const result = await response.json();

        if (result.success) {
          setUser(result.data);
          setIsAuthenticated(true);
        } else {
          // Token expired or invalid
          localStorage.removeItem('token');
          setToken(null);
          setUser(null);
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error('Failed to load user:', err);
        // Do not clear token immediately on network error, but handle it
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [token]);

  // Login handler
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem('token', result.data.token);
        setToken(result.data.token);
        setUser({
          _id: result.data._id,
          name: result.data.name,
          email: result.data.email,
          role: result.data.role
        });
        setIsAuthenticated(true);
        return { success: true };
      } else {
        setError(result.message || 'Login failed');
        return { success: false, message: result.message || 'Login failed' };
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Network error, please try again.');
      return { success: false, message: 'Network error, please try again.' };
    } finally {
      setLoading(false);
    }
  };

  // Register handler
  const signup = async (name, email, password, role) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password, role })
      });

      const result = await response.json();

      if (result.success) {
        localStorage.setItem('token', result.data.token);
        setToken(result.data.token);
        setUser({
          _id: result.data._id,
          name: result.data.name,
          email: result.data.email,
          role: result.data.role
        });
        setIsAuthenticated(true);
        return { success: true };
      } else {
        setError(result.message || 'Registration failed');
        return { success: false, message: result.message || 'Registration failed' };
      }
    } catch (err) {
      console.error('Registration error:', err);
      setError('Network error, please try again.');
      return { success: false, message: 'Network error, please try again.' };
    } finally {
      setLoading(false);
    }
  };

  // Logout handler
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setIsAuthenticated(false);
    setError(null);
  };

  const clearError = () => setError(null);

  const value = {
    user,
    token,
    isAuthenticated,
    loading,
    error,
    login,
    signup,
    logout,
    clearError
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
