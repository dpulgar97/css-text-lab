// src/pages/Home.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import Island from '../features/typograghy-tool/Island';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import FAQ from '../components/FAQ';
import './Home.css';

const Home = () => {
    const { t, i18n } = useTranslation();

    // Función helper para renderizar HTML en traducciones (como <highlight>)
    const renderHTML = (text) => ({ __html: text });

    // Meta tags dinámicos según idioma (solo título y descripción)
    const getMetaTitle = () => {
        const baseTitle = "CSS Clamp Generator & Unit Converter | Typography Tool";
        if (i18n.language === 'es') return "Generador CSS Clamp y Conversor de Unidades | Typography Tool";
        if (i18n.language === 'pt') return "Gerador CSS Clamp e Conversor de Unidades | Typography Tool";
        return baseTitle;
    };

    const getMetaDescription = () => {
        if (i18n.language === 'es') return "Generador gratuito de CSS clamp() y conversor de unidades para desarrolladores. Genera valores de font-size responsivos al instante con vista previa en vivo.";
        if (i18n.language === 'pt') return "Gerador gratuito de CSS clamp() e conversor de unidades para desenvolvedores. Gere valores de font-size responsivos instantaneamente com visualização ao vivo.";
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

                {/* Canonical URL (siempre en inglés como versión principal) */}
                <link rel="canonical" href="https://tusioweb.com/" />

                {/* Hreflang para multi-idioma (IMPORTANTE para SEO) */}
                <link rel="alternate" hrefLang="en" href="https://tusioweb.com/" />
                <link rel="alternate" hrefLang="es" href="https://tusioweb.com/es/" />
                <link rel="alternate" hrefLang="pt" href="https://tusioweb.com/pt/" />
                <link rel="alternate" hrefLang="x-default" href="https://tusioweb.com/" />

                {/* Open Graph (en inglés como fallback global) */}
                <meta property="og:title" content="CSS Clamp Generator & Unit Converter" />
                <meta property="og:description" content="Generate responsive font-size clamp() values instantly. Free typography tool for developers." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tusioweb.com/" />
                <meta property="og:locale" content="en_US" />
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
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 7h10v10H7z" />
                                        <path d="M7 17l-4-4 4-4" />
                                        <path d="M17 7l4 4-4 4" />
                                    </svg>
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
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
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
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                        <circle cx="12" cy="12" r="3" />
                                    </svg>
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
                            <h2 className="section-title">{t('home.typographyMattersTitle')}</h2>

                            <div className="content-body">
                                <p>
                                    Typography is one of the most important aspects of web design. It affects readability,
                                    accessibility, and overall user experience. Yet, many developers struggle with making
                                    text scale properly across different screen sizes.
                                </p>

                                <h3>The Problem with Traditional Approaches</h3>
                                <p>
                                    Before CSS clamp(), developers relied on media queries to adjust font sizes at specific
                                    breakpoints. This approach has several drawbacks:
                                </p>
                                <ul>
                                    <li><strong>Discontinuous scaling:</strong> Text jumps between sizes instead of flowing smoothly.</li>
                                    <li><strong>Code bloat:</strong> Multiple media queries for each text element.</li>
                                    <li><strong>Maintenance nightmare:</strong> Changing one value requires updating multiple breakpoints.</li>
                                </ul>

                                <h3>The clamp() Solution</h3>
                                <p>
                                    CSS clamp() provides a mathematical approach to fluid typography. It defines a minimum
                                    size, a maximum size, and an ideal size that scales with the viewport. The result?
                                    Text that grows and shrinks smoothly without any media queries.
                                </p>

                                <div className="code-example">
                                    <code>Traditional approach</code>
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

                                    <code>With clamp()</code>
                                    <pre>{`h1 {
  font-size: clamp(1.5rem, 1rem + 2vw, 2.5rem);
}`}</pre>
                                </div>

                                <h3>Accessibility Considerations</h3>
                                <p>
                                    Responsive typography isn't just about aesthetics, it's about accessibility. Users with
                                    visual impairments may zoom their browsers or use custom font sizes. Using relative units
                                    like rem and ensuring your clamp() values have reasonable minimums helps ensure your
                                    content remains readable for everyone.
                                </p>
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