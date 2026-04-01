import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-links">
          <Link to={`/${lang || 'en'}/privacy`} className="footer-link">
            {t('footer.privacy')}
          </Link>
          {/* <Link to={`/${lang || 'en'}/terms`} className="footer-link">
            {t('footer.terms')}
          </Link>
          <Link to={`/${lang || 'en'}/contact`} className="footer-link">
            {t('footer.contact')}
          </Link> */}
        </div>
        <p className="footer-copy">
          © {currentYear} Typography Tool.
        </p>
      </div>
    </footer>
  );
};

export default Footer;