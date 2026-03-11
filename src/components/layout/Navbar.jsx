import React from 'react';
import './Navbar.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-content">
        <div className="logo">
          <span className="logo-text">Typography Tool</span>
        </div>
        <nav className="main-nav">
          <a href="/" className="nav-link active">Tool</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/about" className="nav-link">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;