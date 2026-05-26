import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import articles from '../data/articles';
import './Blog.css';

const BlogArticle = () => {
  const { t } = useTranslation();
  const { lang, slug } = useParams();
  const currentLang = lang || 'en';

  const article = useMemo(() => {
    return articles.find((a) => a.slug === slug);
  }, [slug]);

  if (!article) {
    return <Navigate to={`/${currentLang}/blog`} replace />;
  }

  const content = article[currentLang] || article.en;

  const formatDate = (dateStr) => {
    const date = new Date(dateStr + 'T00:00:00');
    const locale = currentLang === 'es' ? 'es-ES' : currentLang === 'pt' ? 'pt-BR' : 'en-US';
    return date.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <Helmet>
        <title>{content.title} | Typography Tool</title>
        <meta name="description" content={content.preview} />
        <link
          rel="canonical"
          href={`https://tusioweb.com/${currentLang}/blog/${article.slug}`}
        />
      </Helmet>

      <Navbar />

      <main className="article-page">
        <div className="container">
          <Link to={`/${currentLang}/blog`} className="article-back-link">
            {t('blog.backToBlog')}
          </Link>

          <article className="article-full">
            <header className="article-header">
              <h1 className="article-title">{content.title}</h1>
              <div className="article-meta">
                <time dateTime={article.date}>
                  {t('blog.publishedOn')} {formatDate(article.date)}
                </time>
              </div>
            </header>

            <nav className="article-toc" aria-label="Table of Contents">
              <h2 className="article-toc-title">{t('blog.tableOfContents')}</h2>
              <ol className="article-toc-list">
                {content.sections.map((section, index) => (
                  <li key={index}>
                    <a href={`#section-${index}`}>{section.title}</a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="article-body">
              {content.sections.map((section, index) => (
                <section key={index} id={`section-${index}`} className="article-section">
                  <h2 className="article-section-title">{section.title}</h2>
                  <p className="article-section-text">{section.text}</p>
                </section>
              ))}
            </div>

            <footer className="article-footer">
              <Link to={`/${currentLang}/blog`} className="article-back-btn">
                {t('blog.backToBlog')}
              </Link>
            </footer>
          </article>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogArticle;
