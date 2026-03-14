import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    const lastUpdated = "January 15, 2025";
    const toolName = "Typography Tool";
    const websiteUrl = "https://tusioweb.com";
    const contactEmail = "tu-email@domain.com";

    return (
        <>
            <Helmet>
                <title>Privacy Policy | {toolName}</title>
                <meta name="description" content="Privacy Policy for Typography Tool. Learn how we collect, use, and protect your data." />
                <link rel="canonical" href={`${websiteUrl}/privacy`} />
            </Helmet>

            <Header />

            <main className="privacy-page">
                <div className="container">
                    <div className="policy-content">
                        <header className="policy-header">
                            <h1 className="policy-title">Privacy Policy</h1>
                            <p className="policy-updated">Last Updated: {lastUpdated}</p>
                        </header>

                        <section className="policy-section">
                            <h2>1. Introduction</h2>
                            <p>
                                Welcome to <strong>{toolName}</strong> (accessible at {websiteUrl}).
                                We value your privacy and are committed to protecting any information we may collect
                                through our website. This Privacy Policy explains what information we collect, how we
                                use it, and your rights regarding your data.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>2. Information We Collect</h2>

                            <h3>Log Files</h3>
                            <p>
                                Like most websites, we collect information that your browser sends whenever you visit.
                                This may include:
                            </p>
                            <ul>
                                <li>IP address</li>
                                <li>Browser type and version</li>
                                <li>Pages visited and time spent</li>
                                <li>Referring website (if any)</li>
                            </ul>
                            <p>
                                This data is collected automatically through Google Analytics to help us understand
                                how users interact with our tool and improve the user experience.
                            </p>

                            <h3>Local Storage</h3>
                            <p>
                                We use browser local storage to save your preferences (such as base font size and
                                unit selections) to improve your experience. This data is stored <strong>locally on
                                    your device</strong> and is not transmitted to our servers or shared with third parties.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>3. Third-Party Services</h2>

                            <h3>Google Fonts</h3>
                            <p>
                                We use Google Fonts to provide the live typography preview feature. When you use this
                                tool, your browser may connect directly to Google servers to load font files. Google
                                may collect technical data about your connection as described in their
                                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
                                    {" "}Privacy Policy
                                </a>.
                            </p>

                            <h3>Google Analytics</h3>
                            <p>
                                We use Google Analytics to analyze website usage and improve our service. Google
                                Analytics collects anonymized data about your visit. You can opt out of Google
                                Analytics tracking by installing the
                                <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
                                    {" "}Google Analytics Opt-out Browser Add-on
                                </a>.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>4. How We Use Your Information</h2>
                            <p>We use the collected information to:</p>
                            <ul>
                                <li>Provide and maintain our tool</li>
                                <li>Understand how users interact with our website</li>
                                <li>Improve user experience and functionality</li>
                                <li>Monitor website performance and security</li>
                            </ul>
                        </section>

                        <section className="policy-section">
                            <h2>5. Data Retention</h2>
                            <ul>
                                <li>
                                    <strong>Log files and Analytics:</strong> Retained for 14 months
                                    (Google Analytics default)
                                </li>
                                <li>
                                    <strong>Local storage data:</strong> Stored indefinitely on your device
                                    until you clear your browser cache
                                </li>
                                <li>
                                    <strong>No personal data is stored on our servers</strong>
                                </li>
                            </ul>
                        </section>

                        <section className="policy-section">
                            <h2>6. Your Rights (GDPR Compliance)</h2>
                            <p>
                                If you are located in the European Economic Area (EEA), you have the following rights:
                            </p>
                            <ul>
                                <li>Access to your personal data</li>
                                <li>Correction of inaccurate data</li>
                                <li>Deletion of your data</li>
                                <li>Restriction of processing</li>
                                <li>Data portability</li>
                                <li>Object to processing</li>
                            </ul>
                            <p>
                                To exercise these rights, please contact us at {contactEmail}.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>7. Children's Privacy</h2>
                            <p>
                                Our tool is not intended for children under the age of 13. We do not knowingly
                                collect personal information from children under 13. If you believe we have
                                collected such information, please contact us immediately.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>8. Changes to This Privacy Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any
                                changes by posting the new Privacy Policy on this page and updating the
                                "Last Updated" date.
                            </p>
                        </section>

                        <section className="policy-section">
                            <h2>9. Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className="contact-info">
                                <p><strong>Email:</strong> {contactEmail}</p>
                                <p><strong>Website:</strong> {websiteUrl}/contact</p>
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