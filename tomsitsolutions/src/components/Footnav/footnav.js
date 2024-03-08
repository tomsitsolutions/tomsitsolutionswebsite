// Imports
import React from 'react';
import './footnav.css'; // Import the CSS file

//main function

const Footnav = ({ onButtonClick }) => {
    return (
      <div className="navbar">
        <button onClick={() => onButtonClick(1)}>About Us</button>
        <button onClick={() => onButtonClick(2)}>Services</button>
        <button onClick={() => onButtonClick(3)}>Contact Us</button>
      </div>
    );
  };
  
// Export the Footnav component as default
export default Footnav;