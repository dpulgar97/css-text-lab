// src/components/layout/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-links">
          <a href="/privacy" className="footer-link">Privacy Policy</a>
          <a href="/terms" className="footer-link">Terms of Service</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
        <p className="footer-copy">
          © {currentYear} Typography Tool. Built for developers.
        </p>
      </div>
    </footer>
  );
};

export default Footer;