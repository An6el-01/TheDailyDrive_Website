import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Courses from './pages/Courses';
import Apps from './pages/Apps';
import Contact from './pages/Contact';
import Authentication from './pages/Authentication';
import { AuthProvider } from './AuthContext'; // Import AuthProvider

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auth" element={<Authentication />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
