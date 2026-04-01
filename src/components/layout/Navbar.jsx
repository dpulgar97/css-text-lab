// src/components/layout/Header.jsx
import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LanguageSelector';
import './Navbar.css';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const { lang } = useParams();

  const isActive = (path) => location.pathname === `/${lang}${path}`;

  return (
    <header className="site-header">
      <div className="container header-content">
        <Link to={`/${lang || 'en'}`} className="logo">
          <span className="logo-text">Typography Tool</span>
        </Link>
        
        <nav className="main-nav">
          <Link 
            to={`/${lang || 'en'}`} 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            {t('nav.tool')}
          </Link>
          <Link 
            to={`/${lang || 'en'}/contact`} 
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