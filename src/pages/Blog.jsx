import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import articles from '../data/articles';
import './Blog.css';

const Blog = () => {
  const { t } = useTranslation();
  const { lang } = useParams();
  const currentLang = lang || 'en';

  const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));

  const formatDate = (dateStr) => {
    const date = new Date(dateStr + 'T00:00:00');
    const locale = currentLang === 'es' ? 'es-ES' : currentLang === 'pt' ? 'pt-BR' : 'en-US';
    return date.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <Helmet>
        <title>{t('blog.title')} | Typography Tool</title>
        <meta name="description" content={t('blog.subtitle')} />
        <link rel="canonical" href={`https://tusioweb.com/${currentLang}/blog`} />
      </Helmet>

      <Navbar />

      <main className="blog-page">
        <div className="container">
          <header className="blog-header">
            <h1 className="blog-title">{t('blog.title')}</h1>
            <p className="blog-subtitle">{t('blog.subtitle')}</p>
          </header>

          <div className="articles-list">
            {sortedArticles.map((article) => {
              const content = article[currentLang] || article.en;
              return (
                <article key={article.id} className="article-card">
                  <div className="article-card-date">
                    <time dateTime={article.date}>{formatDate(article.date)}</time>
                  </div>
                  <div className="article-card-content">
                    <h2 className="article-card-title">
                      <Link to={`/${currentLang}/blog/${article.slug}`}>
                        {content.title}
                      </Link>
                    </h2>
                    <p className="article-card-preview">{content.preview}</p>
                    <Link
                      to={`/${currentLang}/blog/${article.slug}`}
                      className="article-card-link"
                    >
                      {t('blog.readArticle')} →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Blog;
