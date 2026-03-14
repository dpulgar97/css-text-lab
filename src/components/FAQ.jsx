import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is the clamp() function supported by all modern browsers?",
      answer: "Yes. CSS clamp() is supported by all modern browsers (Chrome, Firefox, Safari, and Edge) since early 2020. If you need to support older browsers like Internet Explorer, we recommend adding a static font-size as a fallback before the clamp() code to ensure basic readability."
    },
    {
      question: "Why does the tool use up to 5 decimal places in its output?",
      answer: "Precision ensures your typography scales smoothly. Using multiple decimals prevents 'stuttering' or tiny jumps in font size that can happen on high-resolution screens (like 4K or Retina) when the mathematical values are rounded too early."
    },
    {
      question: "Does using rem instead of px affect WCAG accessibility compliance?",
      answer: "Absolutely. Using rem is a best practice for accessibility because it respects the user's browser settings. If a user increases their default font size, your website will scale accordingly. Using fixed px values ignores these preferences, making your site less accessible."
    },
    {
      question: "Can I use the generated code in utility-first frameworks like Tailwind CSS?",
      answer: "Yes! You can add the output to your tailwind.config.js file under the extend: { fontSize: { ... } } section. Alternatively, you can use Tailwind's arbitrary value syntax directly in your HTML, for example: text-[clamp(1rem,5vw,2.5rem)]."
    },
    {
     question: "What's the recommended base font size for responsive projects?",
  answer: "The industry standard is 16px (1rem), which is the default in most browsers. This provides a good balance between readability and scalability. However, some projects may use 14px for data-dense interfaces like dashboards, or 18px for content-focused sites like blogs. The key is consistency, once you choose a base size, use it throughout your project for all rem-based calculations."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">FAQs</h2>
          <p className="section-subtitle">
            Everything you need to know about CSS clamp() and responsive typography.
          </p>
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
                <span className="question-text">{faq.question}</span>
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