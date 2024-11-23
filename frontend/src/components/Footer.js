import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPinterest, FaYoutube, FaTiktok } from 'react-icons/fa';

function Footer({ isDarkMode }) {
    const styles = {
        footer: {
            backgroundColor: isDarkMode ? '#fff' : '#1c1c1e',
            color: isDarkMode ? '#000' : '#f2f2f2',
            padding: '20px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            borderTop: '1px solid #444',
            fontFamily: 'Arial, sans-serif',
        },
        footerLinks: {
            display: 'flex',
            gap: '20px',
            marginBottom: '15px',
            textAlign: 'center',
        },
        link: {
            textDecoration: 'none',
            color: isDarkMode ? '#000' : '#f2f2f2',
            fontSize: '14px',
            transition: 'color 0.3s ease',
        },
        socialMedia: {
            display: 'flex',
            gap: '20px',
            marginBottom: '15px',
        },
        socialMediaIcon: {
            color: isDarkMode ? '#000' : '#f2f2f2',
            transition: 'color 0.3s ease',
        },
        footerText: {
            fontSize: '14px',
            margin: '0',
        },
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.footerLinks}>
                <Link to="/privacy-policy" style={styles.link}>
                    Privacy Policy
                </Link>
                <Link to="/terms" style={styles.link}>
                    Terms of Service
                </Link>
                <Link to="/about" style={styles.link}>
                    About Us
                </Link>
            </div>
            <div style={styles.socialMedia}>
                <a
                    href="https://www.instagram.com/thedxilydrive/profilecard/?igsh=MW5ud3lkdng2bTFwaw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialMediaIcon}
                >
                    <FaInstagram size={24} />
                </a>
                <a
                    href="https://youtube.com/@thedxilydrive?si=UcbyWVWZtkMGublf"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialMediaIcon}
                >
                    <FaYoutube size={24} />
                </a>
                <a
                    href="https://www.tiktok.com/@thedxilydrive?_t=8rLIPFA5xYW&_r=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialMediaIcon}
                >
                    <FaTiktok size={24} />
                </a>
                <a
                    href="https://pin.it/27XJDCys9"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.socialMediaIcon}
                >
                    <FaPinterest size={24} />
                </a>
            </div>
            <p style={styles.footerText}>&copy; {new Date().getFullYear()} The Daily Drive</p>
        </footer>
    );
}

export default Footer;
