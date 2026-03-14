// src/pages/Contact.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './Contact.css';

const Contact = () => {
    const toolName = "Typography Tool";
    const websiteUrl = "https://tusioweb.com";
    const contactEmail = "tu-email@domain.com"; // ← CAMBIAR POR TU EMAIL REAL

    return (
        <>
            <Helmet>
                <title>Contact | {toolName}</title>
                <meta name="description" content="Get in touch with the Typography Tool team. Report bugs, suggest features, or just say hello." />
                <link rel="canonical" href={`${websiteUrl}/contact`} />
            </Helmet>

            <Header />

            <main className="contact-page">
                <div className="container">
                    <div className="contact-content">
                        <header className="contact-header">
                            <h1 className="contact-title">Contact Us</h1>
                            <p className="contact-subtitle">
                                Have a question, found a bug, or want to suggest a feature?
                                We'd love to hear from you.
                            </p>
                        </header>

                        {/* Email Contact Card */}
                        <section className="contact-card">
                            <div className="contact-method">
                                <div className="contact-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <polyline points="22,6 12,13 2,6" />
                                    </svg>
                                </div>
                                <div className="contact-details">
                                    <h3>Email</h3>
                                    <p>The fastest way to reach us. We typically respond within 1-2 business days.</p>
                                    <a href={`mailto:${contactEmail}`} className="contact-link">
                                        {contactEmail}
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Additional Info */}
                        <section className="contact-info">
                            <h2>What to Include in Your Message</h2>
                            <p>To help us assist you better, please include:</p>
                            <ul>
                                <li><strong>Bug reports:</strong> Steps to reproduce, browser/version, and screenshots if possible</li>
                                <li><strong>Feature requests:</strong> Describe the problem you're trying to solve</li>
                                <li><strong>General questions:</strong> Be as specific as you can about what you need</li>
                            </ul>
                        </section>

                        {/* FAQ Teaser */}
                        <section className="contact-faq-teaser">
                            <h2>Before You Write</h2>
                            <p>
                                Check our <a href="/#faq">Frequently Asked Questions</a> section.
                                Your question might already be answered there!
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