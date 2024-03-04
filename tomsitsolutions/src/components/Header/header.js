import React, { useState } from 'react';
import './header.css'; // Import your CSS file for styling

// Header component
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src="logo.png" alt="Logo" />
            </div>
            <div className="title">
                <h1>Tom's IT Solutions</h1>
            </div>
            <div className="menu">
                <button className="hamburger-menu" onClick={toggleMenu}>&#9776;</button>
                {isMenuOpen && (
                    <div className="menu-options">
                        <ul>
                            <li>Contact Us</li>
                            {/* Add more menu options here */}
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
}

export default Header;