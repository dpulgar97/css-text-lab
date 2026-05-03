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
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
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
          <button
            className="mobile-close"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <Link
            to={`/${lang || 'en'}`}
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {t('nav.tool')}
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
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Open menu"
          aria-expanded={menuOpen}
        >
          <Menu size={24} />
        </button>
      </div>

      {menuOpen && <div className="nav-overlay active" onClick={closeMenu} />}
    </header>
  );
};

export default Navbar;
