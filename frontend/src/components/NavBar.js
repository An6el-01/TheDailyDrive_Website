import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return(
        <nav className="navbar">
            <Link to="/" className="logo">The Daily Drive</Link>
            <ul className="nav-links">
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/apps">Apps</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            <div className="auth-buttons">
                <Link to="/auth"><button>Login</button></Link>
                <button>Cart</button>
            </div>
        </nav>
    )
}

export default NavBar;