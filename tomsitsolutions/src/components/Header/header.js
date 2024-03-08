import React, { useState } from 'react';
import './header.css'; // Import your CSS file for styling
import logo from '../../../src/logo.png'
// Header component
function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="Logo" />
            </div>
            <div className="title">
                <h1>Tom's IT Solutions</h1>
            </div>

        </header>
    );
}

export default Header;