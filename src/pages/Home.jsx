// src/pages/Home.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Island from '../features/typograghy-tool/Island';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FAQ from '../components/FAQ';
import './Home.css';

const Home = () => {
    const { t, i18n } = useTranslation();
    const { lang } = useParams();
    const currentLang = lang || 'en';
    const websiteURL = 'https://tusioweb.com/';

    // Función helper para renderizar HTML en traducciones (como <highlight>)
    const renderHTML = (text) => ({ __html: text });

    // Meta tags dinámicos según idioma (solo título y descripción)
    const getMetaTitle = () => {
        if (currentLang === 'es') return "Generador CSS Clamp y Conversor de Unidades | Typography Tool";
        if (currentLang === 'pt') return "Gerador CSS Clamp e Conversor de Unidades | Typography Tool";
        return "CSS Clamp Generator & Unit Converter | Typography Tool";
    };

    const getMetaDescription = () => {
        if (currentLang === 'es') return "Generador gratuito de CSS clamp() y conversor de unidades para desarrolladores. Genera valores de font-size responsivos al instante con vista previa en vivo.";
        if (currentLang === 'pt') return "Gerador gratuito de CSS clamp() e conversor de unidades para desenvolvedores. Gere valores de font-size responsivos instantaneamente com visualização ao vivo.";
        return "Free CSS clamp() generator and unit converter for developers. Generate responsive font-size values instantly with live preview. Support for px, rem, em, vh, vw.";
    };

    return (
        <>
            <Helmet>
                {/* Título y descripción dinámicos según idioma */}
                <title>{getMetaTitle()}</title>
                <meta name="description" content={getMetaDescription()} />

                {/* Keywords en inglés (base para SEO) */}
                <meta
                    name="keywords"
                    content="css clamp, font size converter, responsive typography, rem to px, css units, clamp generator, fluid typography"
                />

                <link rel="canonical" href={`${websiteURL}/${currentLang}`} />

                {/* Hreflang tags para SEO multi-idioma */}
                <link rel="alternate" hrefLang="en" href={`${websiteURL}/en`} />
                <link rel="alternate" hrefLang="es" href={`${websiteURL}/es`} />
                <link rel="alternate" hrefLang="pt" href={`${websiteURL}/pt`} />
                <link rel="alternate" hrefLang="x-default" href={`${websiteURL}/en`} />

                {/* Open Graph con locale */}
                <meta property="og:locale" content={currentLang === 'es' ? 'es_ES' : currentLang === 'pt' ? 'pt_BR' : 'en_US'} />
                <meta property="og:url" content={`${websiteURL}/${currentLang}`} />
                {/* Hreflang para multi-idioma (IMPORTANTE para SEO) */}

                {/* Open Graph (en inglés como fallback global) */}
                <meta property="og:title" content="CSS Clamp Generator & Unit Converter" />
                <meta property="og:description" content="Generate responsive font-size clamp() values instantly. Free typography tool for developers." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${websiteURL}/${currentLang}`} />
                <meta property="og:locale" content={currentLang === 'es' ? 'es_ES' : currentLang === 'pt' ? 'pt_BR' : 'en_US'} />
                <meta property="og:locale:alternate" content="es_ES" />
                <meta property="og:locale:alternate" content="pt_BR" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="CSS Clamp Generator & Unit Converter" />
                <meta name="twitter:description" content="Free typography tool for developers with live preview and unit conversion." />
            </Helmet>

            <Navbar />

            <main className="home-page">
                {/* Hero Section */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            {/* Título con HTML (highlight) */}
                            <h1
                                className="hero-title"
                                dangerouslySetInnerHTML={renderHTML(t('home.heroTitle'))}
                            />
                            {/* Subtítulo traducido */}
                            <p className="hero-subtitle">{t('home.heroSubtitle')}</p>
                        </div>

                        {/* La Herramienta (NO se traduce, se mantiene en inglés) */}
                        <div className="tool-wrapper">
                            <Island />
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="how-it-works-section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">{t('home.howItWorks')}</h2>
                            <p className="section-subtitle">{t('home.howItWorksSubtitle')}</p>
                        </div>

                        <div className="steps-grid">
                            {/* Step 1: Unit Converter */}
                            <div className="step-card">
                                <div className="step-number">01</div>
                                <div className="step-icon">
                                   {/* Ícono de conversión (puedes usar cualquier SVG) */}
                                </div>
                                <h3 className="step-title">{t('home.step1Title')}</h3>
                                <p className="step-description">{t('home.step1Desc')}</p>
                                <ul className="step-features">
                                    {/* Features TRADUCIDAS - Mapeo del array */}
                                    {t('home.step1Features', { returnObjects: true }).map((feature, index) => (
                                        <li key={index}>✓ {feature}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Step 2: Clamp Generator */}
                            <div className="step-card">
                                <div className="step-number">02</div>
                                <div className="step-icon">
                                    {/* Ícono de generación (puedes usar cualquier SVG) */}
                                </div>
                                <h3 className="step-title">{t('home.step2Title')}</h3>
                                <p className="step-description">{t('home.step2Desc')}</p>
                                <ul className="step-features">
                                    {/* Features TRADUCIDAS - Mapeo del array */}
                                    {t('home.step2Features', { returnObjects: true }).map((feature, index) => (
                                        <li key={index}>✓ {feature}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Step 3: Live Preview */}
                            <div className="step-card">
                                <div className="step-number">03</div>
                                <div className="step-icon">
                                    {/* Ícono de vista previa (puedes usar cualquier SVG) */}
                                </div>
                                <h3 className="step-title">{t('home.step3Title')}</h3>
                                <p className="step-description">{t('home.step3Desc')}</p>
                                <ul className="step-features">
                                    {/* Features TRADUCIDAS - Mapeo del array */}
                                    {t('home.step3Features', { returnObjects: true }).map((feature, index) => (
                                        <li key={index}>✓ {feature}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq">
                    <FAQ />
                </section>

                {/* Why Typography Matters Section */}
                <section className="typography-matters-section">
                    <div className="container">
                        <div className="content-block">
                            {/* Título - YA TRADUCIDO */}
                            <h2 className="section-title">{t('home.typographyMattersTitle')}</h2>

                            <div className="content-body">
                                {/* Intro - TRADUCIDO */}
                                <p>{t('home.typographyMatters.intro')}</p>

                                {/* Problem Section - TRADUCIDO */}
                                <h3>{t('home.typographyMatters.problemTitle')}</h3>
                                <p>{t('home.typographyMatters.problemIntro')}</p>
                                <ul>
                                    <li>
                                        <strong>{t('home.typographyMatters.problem1')}</strong>
                                    </li>
                                    <li>
                                        <strong>{t('home.typographyMatters.problem2')}</strong>
                                    </li>
                                    <li>
                                        <strong>{t('home.typographyMatters.problem3')}</strong>
                                    </li>
                                </ul>

                                {/* Solution Section - TRADUCIDO */}
                                <h3>{t('home.typographyMatters.solutionTitle')}</h3>
                                <p>{t('home.typographyMatters.solution')}</p>

                                {/* Code Example - LOS LABELS SE TRADUCEN, EL CÓDIGO NO */}
                                <div className="code-example">
                                    <code>{t('home.typographyMatters.codeTraditional')}</code>
                                    <pre>{`h1 {
  font-size: 1.5rem;
}

@media (min-width: 768px) {
  h1 {
    font-size: 2rem;
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 2.5rem;
  }
}`}</pre>

                                    <code>{t('home.typographyMatters.codeClamp')}</code>
                                    <pre>{`h1 {
  font-size: clamp(1.5rem, 1rem + 2vw, 2.5rem);
}`}</pre>
                                </div>

                                {/* Accessibility Section - TRADUCIDO */}
                                <h3>{t('home.typographyMatters.accessibilityTitle')}</h3>
                                <p>{t('home.typographyMatters.accessibility')}</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Teaser Section */}
                <section className="blog-teaser-section">
                    <div className="container">
                        <div className="teaser-content">
                            <h2 className="section-title">{t('home.blogTeaserTitle')}</h2>
                            <p className="section-subtitle">{t('home.blogTeaserSubtitle')}</p>
                            <a href="/blog" className="btn-primary">
                                {t('home.visitBlog')} →
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
};

export default Home;