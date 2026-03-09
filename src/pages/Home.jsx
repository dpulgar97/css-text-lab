// src/pages/Home.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Island from '../features/typograghy-tool/Island';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './Home.css';

const Home = () => {
    return (
        <>
            {/* SEO Meta Tags */}
            <Helmet>
                <title>CSS Clamp Generator & Unit Converter | Typography Tool</title>
                <meta
                    name="description"
                    content="Free CSS clamp() generator and unit converter for developers. Generate responsive font-size values instantly with live preview. Support for px, rem, em, vh, vw."
                />
                <meta
                    name="keywords"
                    content="css clamp, font size converter, responsive typography, rem to px, css units, clamp generator, fluid typography"
                />
                <link rel="canonical" href="https://tusioweb.com/" />

                {/* Open Graph */}
                <meta property="og:title" content="CSS Clamp Generator & Unit Converter" />
                <meta property="og:description" content="Generate responsive font-size clamp() values instantly. Free typography tool for developers." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://tusioweb.com/" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="CSS Clamp Generator & Unit Converter" />
                <meta name="twitter:description" content="Free typography tool for developers with live preview and unit conversion." />
            </Helmet>

            <Navbar />

            <main className="home-page">
                {/* Hero Section - La Herramienta */}
                <section className="hero-section">
                    <div className="container">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                Responsive Typography,<br />
                                <span className="highlight">Simplified</span>
                            </h1>
                            <p className="hero-subtitle">
                                Generate CSS clamp() values, convert units, and preview your typography
                                in real-time. Free tool for developers who care about responsive design.
                            </p>
                        </div>

                        {/* La Herramienta */}
                        <div className="tool-wrapper">
                            <Island />
                        </div>
                    </div>
                </section>

                {/* How It Works Section */}
                <section className="how-it-works-section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">How It Works</h2>
                            <p className="section-subtitle">
                                Three powerful tools in one place. Here's how to get the most out of them.
                            </p>
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
                                <h3 className="step-title">Unit Converter</h3>
                                <p className="step-description">
                                    Convert between px, rem, em, pt, vh, and vw instantly. Set your base font size
                                    for accurate rem/em calculations. Perfect for translating design specs to code.
                                </p>
                                <ul className="step-features">
                                    <li>✓ Support for 6 CSS units</li>
                                    <li>✓ Custom base font size (8-100px)</li>
                                    <li>✓ Viewport input for vh/vw</li>
                                    <li>✓ One-click copy to clipboard</li>
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
                                <h3 className="step-title">Clamp Generator</h3>
                                <p className="step-description">
                                    Generate fluid typography with CSS clamp(). Define your viewport range and
                                    font sizes, get the perfect formula for responsive text that scales smoothly.
                                </p>
                                <ul className="step-features">
                                    <li>✓ Min/Max viewport settings</li>
                                    <li>✓ Min/Max font size with unit selector</li>
                                    <li>✓ Automatic calculation of ideal value</li>
                                    <li>✓ Ready-to-use CSS output</li>
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
                                <h3 className="step-title">Live Preview</h3>
                                <p className="step-description">
                                    See your typography in action with real Google Fonts. Test how your clamp()
                                    values behave across different screen sizes before implementing in your project.
                                </p>
                                <ul className="step-features">
                                    <li>✓ 6 popular Google Fonts</li>
                                    <li>✓ Real-time font-size rendering</li>
                                    <li>✓ Full-width preview area</li>
                                    <li>✓ CSS output displayed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="features-section">
                    <div className="container">
                        <div className="section-header">
                            <h2 className="section-title">Why Developers Use This Tool</h2>
                            <p className="section-subtitle">
                                Built by developers, for developers. No fluff, just functionality.
                            </p>
                        </div>

                        <div className="features-grid">
                            <div className="feature-item">
                                <div className="feature-icon">⚡</div>
                                <h4 className="feature-title">Lightning Fast</h4>
                                <p className="feature-desc">
                                    No loading screens, no signup. Just open and start working.
                                </p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">🎯</div>
                                <h4 className="feature-title">Accurate Calculations</h4>
                                <p className="feature-desc">
                                    Precise formulas for clamp(), rem, em, and viewport units.
                                </p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">📱</div>
                                <h4 className="feature-title">Mobile Responsive</h4>
                                <p className="feature-desc">
                                    Works perfectly on any device. Test your typography anywhere.
                                </p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">🔓</div>
                                <h4 className="feature-title">100% Free</h4>
                                <p className="feature-desc">
                                    No paywalls, no premium features. Free forever for everyone.
                                </p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">🎨</div>
                                <h4 className="feature-title">Real Font Preview</h4>
                                <p className="feature-desc">
                                    See how different typefaces affect your typography scale.
                                </p>
                            </div>

                            <div className="feature-item">
                                <div className="feature-icon">📋</div>
                                <h4 className="feature-title">One-Click Copy</h4>
                                <p className="feature-desc">
                                    Copy generated CSS directly to your clipboard. Ready to paste.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Typography Matters Section */}
                <section className="typography-matters-section">
                    <div className="container">
                        <div className="content-block">
                            <h2 className="section-title">Why Responsive Typography Matters</h2>

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
                                    <code>/* Traditional approach */</code>
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

                                    <code>/* With clamp() */</code>
                                    <pre>{`h1 {
  font-size: clamp(1.5rem, 1rem + 2vw, 2.5rem);
}`}</pre>
                                </div>

                                <h3>Accessibility Considerations</h3>
                                <p>
                                    Responsive typography isn't just about aesthetics—it's about accessibility. Users with
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
                            <h2 className="section-title">Learn More About Typography</h2>
                            <p className="section-subtitle">
                                Dive deeper into responsive design best practices with our guides.
                            </p>
                            <a href="/blog" className="btn-primary">
                                Visit Blog →
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