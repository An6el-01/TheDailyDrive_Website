import React, { useEffect, useState, createContext, useContext } from 'react';
import { loginUser, logoutUser, registerUser } from './services/authService';
import api from './api';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';

// Create AuthContext to manage the authentication state globally
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  // Save token in localStorage and set user state when token changes
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      setUser({ email: 'user@example.com' }); // Replace with actual user info if available
    } else {
      localStorage.removeItem('token');
      setUser(null);
    }
  }, [token]);

  // Login function
  const login = async (userData) => {
    try {
      const response = await loginUser(userData);
      setToken(response.data.token);
      setUser(response.data.user); // Set user data from response if available
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  // Register function
  const register = async (userData) => {
    try {
      await registerUser(userData);
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await logoutUser(token);
      setToken('');
      setUser(null);
    } catch (error) {
      console.error('Logout error:', error);
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
