import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Courses from './pages/Courses';
import Apps from './pages/Apps';
import Contact from './pages/Contact';
import Authentication from './pages/Authentication';
import { AuthProvider } from './AuthContext'; // Correctly import and use AuthProvider

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <AuthProvider>
      <Router>
        <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
        <Footer isDarkMode={isDarkMode} />
      </Router>
    </AuthProvider>
  );
}

export default App;
