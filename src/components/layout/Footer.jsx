// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-links">
          <Link to="/privacy" className="footer-link">
            {t('footer.privacy')}
          </Link>
          <Link to="/terms" className="footer-link">
            {t('footer.terms')}
          </Link>
          <Link to="/contact" className="footer-link">
            {t('footer.contact')}
          </Link>
        </div>
        <p className="footer-copy">
          © {currentYear} Typography Tool. {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;