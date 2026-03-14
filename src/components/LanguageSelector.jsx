import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const languages = [
        { code: 'en', label: 'EN', name: 'English' },
        { code: 'es', label: 'ES', name: 'Español' },
        { code: 'pt', label: 'PT', name: 'Português' },
    ];

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('i18nextLng', lng);
    };

    return (
        <div className="language-selector">
            <select
                value={i18n.language}
                onChange={(e) => changeLanguage(e.target.value)}
                className="language-select"
                aria-label="Select language"
            >
                {languages.map((lang) => (
                    <option key={lang.code} value={lang.code}>
                        {lang.label} - {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;