import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const FlagUS = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flag-icon">
    <rect x="2" y="4" width="20" height="16" rx="2" fill="#fff" />
    <rect x="2" y="4" width="20" height="1.45" fill="#B22234" />
    <rect x="2" y="6.9" width="20" height="1.45" fill="#B22234" />
    <rect x="2" y="9.8" width="20" height="1.45" fill="#B22234" />
    <rect x="2" y="12.7" width="20" height="1.45" fill="#B22234" />
    <rect x="2" y="15.6" width="20" height="1.45" fill="#B22234" />
    <rect x="2" y="18.5" width="20" height="1.45" fill="#B22234" />
    <rect x="2" y="4" width="9" height="8.7" rx="1" fill="#3C3B6E" />
    <circle cx="4.5" cy="5.5" r="0.5" fill="#fff" />
    <circle cx="6.5" cy="5.5" r="0.5" fill="#fff" />
    <circle cx="8.5" cy="5.5" r="0.5" fill="#fff" />
    <circle cx="4.5" cy="7" r="0.5" fill="#fff" />
    <circle cx="6.5" cy="7" r="0.5" fill="#fff" />
    <circle cx="8.5" cy="7" r="0.5" fill="#fff" />
    <circle cx="4.5" cy="8.5" r="0.5" fill="#fff" />
    <circle cx="6.5" cy="8.5" r="0.5" fill="#fff" />
    <circle cx="8.5" cy="8.5" r="0.5" fill="#fff" />
    <circle cx="4.5" cy="10" r="0.5" fill="#fff" />
    <circle cx="6.5" cy="10" r="0.5" fill="#fff" />
    <circle cx="8.5" cy="10" r="0.5" fill="#fff" />
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#404040" strokeWidth="0.5" fill="none" />
  </svg>
);

const FlagES = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flag-icon">
    <rect x="2" y="4" width="20" height="16" rx="2" fill="#AA151B" />
    <rect x="2" y="7.2" width="20" height="9.6" fill="#F1BF00" />
    <rect x="10" y="8.5" width="4" height="5" rx="0.5" fill="#AA151B" />
    <rect x="10.8" y="8.5" width="0.8" height="5" fill="#F1BF00" />
    <rect x="12" y="9" width="1.2" height="0.8" fill="#F1BF00" />
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#404040" strokeWidth="0.5" fill="none" />
  </svg>
);

const FlagBR = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flag-icon">
    <rect x="2" y="4" width="20" height="16" rx="2" fill="#009C3B" />
    <polygon points="12,5.5 20,12 12,18.5 4,12" fill="#FFDF00" />
    <circle cx="12" cy="12" r="3.5" fill="#002776" />
    <rect x="8" y="11.2" width="8" height="1.6" rx="0.8" fill="#fff" />
    <text x="12" y="11.7" textAnchor="middle" fontSize="1.1" fontWeight="bold" fill="#009C3B" fontFamily="sans-serif">●</text>
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="#404040" strokeWidth="0.5" fill="none" />
  </svg>
);

const FLAGS = {
  en: FlagUS,
  es: FlagES,
  pt: FlagBR,
};

const LANGUAGES = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'pt', label: 'PT' },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const location = useLocation();

  const currentLang = lang || i18n.language || 'en';

  const changeLanguage = (newLang) => {
    if (newLang === currentLang) return;

    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);

    const currentPath = location.pathname.replace(`/${lang}`, '');
    navigate(`/${newLang}${currentPath || ''}`, { replace: true });
  };

  return (
    <div className="language-selector" role="radiogroup" aria-label="Select language">
      {LANGUAGES.map((lang) => {
        const FlagComponent = FLAGS[lang.code];
        return (
          <button
            key={lang.code}
            className={`lang-btn ${lang.code === currentLang ? 'active' : ''}`}
            onClick={() => changeLanguage(lang.code)}
            role="radio"
            aria-checked={lang.code === currentLang}
            aria-label={lang.label}
          >
            <FlagComponent />
            <span className="lang-label">{lang.label}</span>
          </button>
        );
      })}
      <div
        className="lang-indicator"
        style={{ transform: `translateX(${LANGUAGES.findIndex((l) => l.code === currentLang) * 100}%)` }}
      />
    </div>
  );
};

export default LanguageSelector;
