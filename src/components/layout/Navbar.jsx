// src/components/layout/Navbar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import LanguageSelector from '../LanguageSelector';
import './Navbar.css';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const { lang } = useParams();
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const isActive = (path) => location.pathname === `/${lang}${path}`;

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.top = '0';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${!visible ? 'hidden' : ''}`}>
      <div className="container header-content">
        <Link to={`/${lang || 'en'}`} className="logo" onClick={closeMenu}>
          <span className="logo-text">Typography Tool</span>
        </Link>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          <Link
            to={`/${lang || 'en'}`}
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {t('nav.tool')}
          </Link>
          <Link
            to={`/${lang || 'en'}/blog`}
            className={`nav-link ${isActive('/blog') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {t('nav.blog')}
          </Link>
          <Link
            to={`/${lang || 'en'}/contact`}
            className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {t('nav.contact')}
          </Link>
          <div className="nav-item">
            <LanguageSelector />
          </div>
        </nav>

        <button
          className={`menu-toggle ${menuOpen ? 'hidden' : ''}`}
          onClick={toggleMenu}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <Menu size={24} />
        </button>

        <button
          className={`mobile-close-header ${menuOpen ? 'visible' : ''}`}
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      {menuOpen && <div className="nav-overlay active" onClick={closeMenu} />}
    </header>
  );
};

export default Navbar;
