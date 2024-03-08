// Imports
import React from 'react';
import './footnav.css'; // Import the CSS file
//react icons imports
import { FaPhone } from "react-icons/fa";
import { MdElectricalServices } from "react-icons/md";
import { FcAbout } from "react-icons/fc";

//main function

const Footnav = ({ onButtonClick }) => {
    return (
      <div className="navbar">
        <button onClick={() => onButtonClick(1)}><FcAbout /></button>
        <button onClick={() => onButtonClick(2)}><MdElectricalServices /></button>
        <button onClick={() => onButtonClick(3)}><FaPhone /></button>
      </div>
    );
  };
  
// Export the Footnav component as default
export default Footnav;