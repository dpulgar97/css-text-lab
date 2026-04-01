// src/components/layout/LanguageRoute.jsx
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LanguageRoute = ({ children }) => {
    const { lang } = useParams();
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    const supportedLanguages = ['en', 'es', 'pt'];

    useEffect(() => {
        // Si el idioma en la URL es válido, cambiar i18n
        if (lang && supportedLanguages.includes(lang)) {
            i18n.changeLanguage(lang);
            localStorage.setItem('i18nextLng', lang);
        } else {
            // Si no es válido, redirigir a inglés por defecto
            navigate('/en');
        }
    }, [lang, i18n, navigate]);

    return children;
};

export default LanguageRoute;