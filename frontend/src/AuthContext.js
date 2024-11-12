import React, { createContext, useState, useEffect } from 'react';
import { loginUser, logoutUser, registerUser } from './services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  // Save token and user in localStorage and set state
  useEffect(() => {
    if (token && user) {
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }, [token, user]);

  // Login function
  const login = async (userData) => {
    try {
      const response = await loginUser(userData);
      setToken(response.data.token);
      setUser(response.data.user); // Set actual user data from backend response
      alert('Successfully logged in!');
    } catch (error) {
      console.error('Login error:', error);
      alert('Failed to login. Please check your credentials.');
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      await registerUser(userData);
      alert('Registration successful. You can now log in.');
    } catch (error) {
      console.error('Registration error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await logoutUser(token);
      setToken('');
      setUser(null);
      alert('Successfully logged out!');
    } catch (error) {
      console.error('Logout error:', error);
      alert('Failed to log out. Please try again.');
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};
