import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is the clamp() function supported by all modern browsers?",
      answer: "Yes, the CSS clamp() function is widely supported in all evergreen browsers (Chrome, Firefox, Safari, and Edge) since early 2020. If your project requires support for legacy browsers like Internet Explorer, we recommend providing a static font-size fallback before the clamp() declaration to ensure basic readability."
    },
    {
      question: "Why does the tool use 3 to 5 decimal places in its output?",
      answer: "Precision is key in responsive design. We provide up to 5 decimal places to ensure that the fluid scaling remains smooth across all screen resolutions. This prevents 'rounding jumps' in typography that can sometimes occur in high-density displays (Retina/4K) when using simpler values."
    },
    {
      question: "Does using rem instead of px affect WCAG accessibility compliance?",
      answer: "Absolutely. Using rem is a best practice for accessibility because it respects the user's browser font-size settings. If a visually impaired user increases their default browser font size, your website will scale accordingly. Using fixed px values ignores these preferences, potentially making your site less accessible."
    },
    {
      question: "Can I use the generated font-clamp code in utility-first frameworks like Tailwind CSS?",
      answer: "Yes! You can easily integrate the output into your tailwind.config.js file by adding it to the extend: { fontSize: { ... } } section. Alternatively, you can use Tailwind's arbitrary value syntax, for example: text-[clamp(1rem,5vw,2.5rem)]."
    },
    {
      question: "How does the Dynamic Viewport simulation differ from Chrome DevTools?",
      answer: "While DevTools is great for testing overall layout, our simulator is specifically calibrated to show you the 'clamping points' in real-time. It allows you to visualize exactly when your typography stops shrinking or growing based on your specific configuration, without having to switch between different device presets."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
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