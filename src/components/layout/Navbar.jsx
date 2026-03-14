// src/components/layout/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';
import './Navbar.css';

const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="site-header">
      <div className="container header-content">
        <Link to="/" className="logo">
          <span className="logo-text">Typography Tool</span>
        </Link>
        
        <nav className="main-nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            {t('nav.tool')}
          </Link>
          <Link 
            to="/blog" 
            className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
          >
            {t('nav.blog')}
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
          >
            {t('nav.contact')}
          </Link>
        </nav>

        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;