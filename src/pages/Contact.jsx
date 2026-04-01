// src/pages/Contact.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom'; // ← Agregar este import
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();
    const { lang } = useParams(); // ← Obtener idioma de la URL
    const currentLang = lang || 'en';

    const toolName = "Typography Tool";
    const websiteUrl = "https://tusioweb.com";
    const contactEmail = "tu-email@domain.com";

    return (
        <>
            <Helmet>
                <title>{t('contact.title')} | {toolName}</title>
                <meta name="description" content={t('contact.subtitle')} />
                <link rel="canonical" href={`${websiteUrl}/${currentLang}/contact`} />
            </Helmet>

            <Header />

            <main className="contact-page">
                <div className="container">
                    <div className="contact-content">
                        <header className="contact-header">
                            <h1 className="contact-title">{t('contact.title')}</h1>
                            <p className="contact-subtitle">{t('contact.subtitle')}</p>
                        </header>

                        <section className="contact-card">
                            <div className="contact-method">
                                <div className="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div className="contact-details">
                                    <h3>{t('contact.emailTitle')}</h3>
                                    <p>{t('contact.emailDesc')}</p>
                                    <a href={`mailto:${contactEmail}`} className="contact-link">
                                        {contactEmail}
                                    </a>
                                </div>
                            </div>
                        </section>

                        <section className="contact-info">
                            <h2>{t('contact.whatToInclude')}</h2>
                            <p>{t('contact.whatToIncludeDesc')}</p>
                            <ul>
                                <li><strong>{t('contact.bugReports')}</strong></li>
                                <li><strong>{t('contact.featureRequests')}</strong></li>
                                <li><strong>{t('contact.generalQuestions')}</strong></li>
                            </ul>
                        </section>

                        <section className="contact-faq-teaser">
                            <h2>{t('contact.beforeYouWrite')}</h2>
                            {/* ⭐ ENLACE FAQ CON IDIOMA DINÁMICO ⭐ */}
                            <p>
                                {t('contact.checkFAQStart')}
                                <a href={`/${currentLang}#faq`}>{t('contact.faqLinkText')}</a>
                                {t('contact.checkFAQEnd')}
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default Contact;