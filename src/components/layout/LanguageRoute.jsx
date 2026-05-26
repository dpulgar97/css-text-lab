// src/components/layout/LanguageRoute.jsx
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const supportedLanguages = ['en', 'es', 'pt'];

const LanguageRoute = ({ children }) => {
    const { lang } = useParams();
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    useEffect(() => {
        if (lang && supportedLanguages.includes(lang)) {
            i18n.changeLanguage(lang);
            localStorage.setItem('i18nextLng', lang);
        } else {
            navigate('/en');
        }
    }, [lang, i18n, navigate]);

    return children;
};

export default LanguageRoute;