// src/components/faq/FAQ.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './FAQ.css';

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  // Obtener preguntas del JSON de traducciones
  const faqs = t('faq.questions', { returnObjects: true });

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          {/* Título - TRADUCIDO */}
          <h2 className="section-title">{t('faq.title')}</h2>

          {/* Subtítulo - TRADUCIDO */}
          <p className="section-subtitle">{t('faq.subtitle')}</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {/* Pregunta - TRADUCIDA */}
                <span className="question-text">{faq.question}</span>

                {/* Ícono + (gira al abrir) */}
                <span className="question-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className="faq-answer"
                role="region"
                aria-hidden={openIndex !== index}
              >
                <div className="answer-content">
                  {/* Respuesta - TRADUCIDA */}
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;