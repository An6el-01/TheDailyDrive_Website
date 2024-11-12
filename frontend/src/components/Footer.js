import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaPinterest, FaYoutube, FaTiktok } from 'react-icons/fa';

function Footer() {
    return(
        <footer className="footer">
            <div className="footer-links">
                <Link to="/privacy-policy">Privacy Policy</Link>
                <Link to="/terms">Terms of Service</Link>
                <Link to="/about">About Us</Link>
            </div>
            <div className="social-media">
                <a href="https://www.instagram.com/thedxilydrive/profilecard/?igsh=MW5ud3lkdng2bTFwaw==" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={24}/>
                </a>
                <a href="https://youtube.com/@thedxilydrive?si=UcbyWVWZtkMGublf" target="_blank" rel="noopener noreferrer">
                    <FaYoutube size={24}/>
                </a>
                <a href="https://www.tiktok.com/@thedxilydrive?_t=8rLIPFA5xYW&_r=1" target="_blank" rel="noopener noreferrer">
                    <FaTiktok size={24}/>
                </a>
                <a href="https://pin.it/27XJDCys9" target="_blank" rel="noopener noreferrer">
                    <FaPinterest size={24}/>
                </a>
            </div>
            <p>&copy; {new Date().getFullYear()} The Daily Drive</p>
        </footer>
    )
}

export default Footer;

