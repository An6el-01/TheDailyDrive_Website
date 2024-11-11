// App.js
import React, { useEffect, useState, createContext, useContext } from 'react';
import { loginUser, logoutUser, registerUser } from './services/authService';
import api from './api';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

// Create AuthContext to manage the authentication state globally
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
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

function AppContent() {
  const { user, login, register, logout } = useContext(AuthContext);
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/test')
      .then(response => {
        setMessage(response.data.message);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome To TheDailyDrive</h1>
      <p>{message}</p>

      {/* Conditionally render based on user's login status */}
      {!user ? (
        <div>
          <h2>Login</h2>
          <Login />
          <h2>Register</h2>
          <Register />
        </div>
      ) : (
        <div>
          <p>Welcome, {user.email}!</p>
          <Logout />
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
