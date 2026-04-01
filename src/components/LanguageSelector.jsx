// src/components/layout/LanguageSelector.jsx
import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const location = useLocation();

  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'es', label: 'ES' },
    { code: 'pt', label: 'PT' },
  ];

  const changeLanguage = (newLang) => {
    const scrollPosition = {
      x: window.scrollX,
      y: window.scrollY,
    };

    i18n.changeLanguage(newLang);
    localStorage.setItem('i18nextLng', newLang);
    
    const currentPath = location.pathname.replace(`/${lang}`, '');
    navigate(`/${newLang}${currentPath || ''}`, { 
      state: { scrollPosition },
      replace: true
    });
  };

  // ⭐ PREVENIR SCROLL EN CLICK ⭐
  const handleFocus = (e) => {
    // Guardar posición actual
    const scrollPosition = { x: window.scrollX, y: window.scrollY };
    
    // Al perder el focus, restaurar posición
    e.target.addEventListener('blur', () => {
      window.scrollTo(scrollPosition.x, scrollPosition.y);
    }, { once: true });
  };

  return (
    <div className="language-selector">
      <select
        value={lang || i18n.language}
        onChange={(e) => changeLanguage(e.target.value)}
        onFocus={handleFocus}
        className="language-select"
        aria-label="Select language"
      >
        {languages.map((language) => (
          <option key={language.code} value={language.code}>
            {language.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;