import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing-page.css';// Import the CSS file for styling
// Make sure you have this CSS file or modify accordingly

const LandingPage = () => {
  return (
    <div className='landing-div'>
    <div className="landing-page">
      <h1 className="landing-title">Welcome to the Agrivalue connect</h1>
      {/* <p className="landing-description">
        Discover a range of value-added agricultural products directly from farmers.
      </p> */}

      <img 
        src="/landing.jpg" 
        alt="Farm Products" 
        className="middle-image"
      />

      <div className="landing-buttons">
        <Link to="/login" className="landing-button">Login</Link>
        <Link to="/register" className="landing-button">Register</Link>
        <Link to="/products" className="landing-button">Explore Products</Link>
      </div>

      
    </div>
    <Footer />
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p>Email: support@yourfarmapp.com</p>
        <p>Phone: +1 (234) 567-8901</p>
        <p>Address: 123 Farm Lane, Agriculture City, Country</p>
      </div>
    </footer>
  );
};

export default LandingPage;
