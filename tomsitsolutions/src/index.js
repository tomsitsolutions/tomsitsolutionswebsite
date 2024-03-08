import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/header.js';
import reportWebVitals from './reportWebVitals';
import Footnav from './components/Footnav/footnav.js';
import Contact from './components/Contact/contact.js';
import About from './components/About/about.js';

const App = () => {
  const [showAbout, setShowAbout] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const handleButtonClick = (buttonNumber) => {
    if (buttonNumber === 1) {
      setShowAbout(true);
      setShowContact(false);
    } else if (buttonNumber === 3) {
      setShowContact(true);
      setShowAbout(false);
    }
  };

  return (
    <div>
      <Header />
      {showAbout && <About />}
      {showContact && <Contact />}
      <Footnav onButtonClick={handleButtonClick} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();