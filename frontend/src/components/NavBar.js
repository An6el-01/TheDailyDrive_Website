import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.PNG';

function NavBar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.body.style.backgroundColor = isDarkMode ? '#fff' : '#000';
        document.body.style.color = isDarkMode ? '#000' : '#fff';
    };

    const styles = {
        navbar: {
            position: 'sticky',
            top: 0,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 20px',
            backgroundColor: isDarkMode ? '#000' : '#fff',
            color: isDarkMode ? '#fff' : '#000',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            zIndex: 1000,
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: isDarkMode ? '#fff' : '#007bff',
            textDecoration: 'none',
        },
        navLinks: {
            display: 'flex',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            gap: '20px',
        },
        link: {
            textDecoration: 'none',
            color: isDarkMode ? '#fff' : '#000',
            fontSize: '1rem',
        },
        actions: {
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
        },
        authButton: {
            padding: '5px 10px',
            border: 'none',
            borderRadius: '4px',
            backgroundColor: '#007bff',
            color: '#fff',
            cursor: 'pointer',
        },
        darkModeToggle: {
            fontSize: '1.5rem',
            cursor: 'pointer',
        },
    };

    return (
        <nav style={styles.navbar}>
            <Link to="/" style={styles.logo}>
                <img src={logo} alt="App Logo" style={{ width: '50px', height: 'auto' }} />
            </Link>
            <ul style={styles.navLinks}>
                <li><Link to="/home" style={styles.link}>Home</Link></li>
                <li><Link to="/shop" style={styles.link}>Shop</Link></li>
                <li><Link to="/courses" style={styles.link}>Courses</Link></li>
                <li><Link to="/apps" style={styles.link}>Apps</Link></li>
                <li><Link to="/contact" style={styles.link}>Contact Us</Link></li>
            </ul>
            <div style={styles.actions}>
            <Link to="/auth">
                <button style={styles.authButton}>Login</button>
            </Link>
                <button style={styles.authButton}>Cart</button>
                <span
                    onClick={toggleDarkMode}
                    style={styles.darkModeToggle}
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </span>
            </div>
        </nav>
    );
}

export default NavBar;
