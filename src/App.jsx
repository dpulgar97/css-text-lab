// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import LanguageRoute from './components/layout/LanguageRoute';
import Home from './pages/Home';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

import './App.css';

// ScrollHandler para anchors (#faq)
const ScrollHandler = () => {
  const location = useLocation();

  useEffect(() => {
    // Verificar si hay una posición guardada en el estado de navegación (cambio de idioma)
    if (location.state?.scrollPosition) {
      window.scrollTo(
        location.state.scrollPosition.x,
        location.state.scrollPosition.y
      );
      window.history.replaceState({}, document.title);
    }
    // Si hay un hash (#faq), hacer scroll al elemento
    else if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        // Esperar a que el contenido esté renderizado
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'auto', block: 'start' });
        }, 150);
      }
    }
    // Si es una navegación normal (cambio de ruta sin hash), scroll al top
    else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollHandler />
      <Routes>
        {/* Redirigir raíz a /en por defecto */}
        <Route path="/" element={<Navigate to="/en" replace />} />

        {/* Rutas con idioma */}
        <Route path="/:lang" element={<LanguageRoute><Home /></LanguageRoute>} />
        <Route path="/:lang/contact" element={<LanguageRoute><Contact /></LanguageRoute>} />
        <Route path="/:lang/privacy" element={<LanguageRoute><PrivacyPolicy /></LanguageRoute>} />

        {/* Redirigir rutas sin idioma a /en */}
        <Route path="/contact" element={<Navigate to="/en/contact" replace />} />
        <Route path="/privacy" element={<Navigate to="/en/privacy" replace />} />
      </Routes>
    </Router>
  );
}

export default App;