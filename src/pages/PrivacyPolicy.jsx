// src/pages/PrivacyPolicy.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    const lastUpdated = "January 15, 2025"; // ← ACTUALIZAR CON LA FECHA REAL
    const toolName = "Typography Tool";
    const websiteUrl = "https://tusioweb.com";
    const contactEmail = "tu-email@domain.com"; // ← TU EMAIL REAL
    const { lang } = useParams();
    const currentLang = lang || 'en';

    return (
        <>
            <Helmet>
                <title>{t('privacy.title')} | {toolName}</title>
                <meta name="description" content={t('privacy.section1Content')} />
                <link rel="canonical" href={`${websiteUrl}/${currentLang}/privacy`} />
            </Helmet>

            <Header />

            <main className="privacy-page">
                <div className="container">
                    <div className="policy-content">
                        <header className="policy-header">
                            {/* Título - TRADUCIDO */}
                            <h1 className="policy-title">{t('privacy.title')}</h1>

                            {/* Fecha - TRADUCIDO + fecha dinámica */}
                            <p className="policy-updated">
                                {t('privacy.lastUpdated')}: {lastUpdated}
                            </p>
                        </header>

                        {/* Section 1: Introduction */}
                        <section className="policy-section">
                            <h2>{t('privacy.section1Title')}</h2>
                            <p>{t('privacy.section1Content')}</p>
                        </section>

                        {/* Section 2: Information We Collect */}
                        <section className="policy-section">
                            <h2>{t('privacy.section2Title')}</h2>

                            <h3>{t('privacy.section2Subtitle1')}</h3>
                            <p>{t('privacy.section2Content1')}</p>
                            <ul>
                                <li>{t('privacy.section2List1')}</li>
                                <li>{t('privacy.section2List2')}</li>
                                <li>{t('privacy.section2List3')}</li>
                                <li>{t('privacy.section2List4')}</li>
                            </ul>
                            <p>{t('privacy.section2Content2')}</p>

                            <h3>{t('privacy.section2Subtitle2')}</h3>
                            <p>{t('privacy.section2Content3')}</p>
                        </section>

                        {/* Section 3: Third-Party Services */}
                        <section className="policy-section">
                            <h2>{t('privacy.section3Title')}</h2>

                            <h3>{t('privacy.section3Subtitle1')}</h3>
                            <p>{t('privacy.section3Content1')}</p>

                            <h3>{t('privacy.section3Subtitle2')}</h3>
                            <p>{t('privacy.section3Content2')}</p>
                        </section>

                        {/* Section 4: How We Use Your Information */}
                        <section className="policy-section">
                            <h2>{t('privacy.section4Title')}</h2>
                            <p>{t('privacy.section4Content')}</p>
                            <ul>
                                <li>{t('privacy.section4List1')}</li>
                                <li>{t('privacy.section4List2')}</li>
                                <li>{t('privacy.section4List3')}</li>
                                <li>{t('privacy.section4List4')}</li>
                            </ul>
                        </section>

                        {/* Section 5: Data Retention */}
                        <section className="policy-section">
                            <h2>{t('privacy.section5Title')}</h2>
                            <ul>
                                <li>{t('privacy.section5List1')}</li>
                                <li>{t('privacy.section5List2')}</li>
                                <li>{t('privacy.section5List3')}</li>
                            </ul>
                        </section>

                        {/* Section 6: Your Rights (GDPR) */}
                        <section className="policy-section">
                            <h2>{t('privacy.section6Title')}</h2>
                            <p>{t('privacy.section6Content')}</p>
                            <ul>
                                <li>{t('privacy.section6List1')}</li>
                                <li>{t('privacy.section6List2')}</li>
                                <li>{t('privacy.section6List3')}</li>
                                <li>{t('privacy.section6List4')}</li>
                                <li>{t('privacy.section6List5')}</li>
                                <li>{t('privacy.section6List6')}</li>
                            </ul>
                            <p>{t('privacy.section6Content2')}</p>
                        </section>

                        {/* Section 7: Children's Privacy */}
                        <section className="policy-section">
                            <h2>{t('privacy.section7Title')}</h2>
                            <p>{t('privacy.section7Content')}</p>
                        </section>

                        {/* Section 8: Changes to Policy */}
                        <section className="policy-section">
                            <h2>{t('privacy.section8Title')}</h2>
                            <p>{t('privacy.section8Content')}</p>
                        </section>

                        {/* Section 9: Contact Us */}
                        <section className="policy-section">
                            <h2>{t('privacy.section9Title')}</h2>
                            <p>{t('privacy.section9Content')}</p>
                            <div className="contact-info">
                                <p><strong>{t('privacy.contactEmail')}:</strong> {contactEmail}</p>
                                <p><strong>{t('privacy.contactWebsite')}:</strong> {websiteUrl}/contact</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
};

export default PrivacyPolicy;