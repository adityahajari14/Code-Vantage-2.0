import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import portfolioData from '../data/portfolioData.json'
import Button from '../components/Button'
import './PortfolioPage.css'

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(portfolioData.map(project => project.category))]
    return ['All', ...uniqueCategories]
  }, [])

  useEffect(() => {
    document.title = 'Our Work — Code Vantage'
    return () => { document.title = 'Code Vantage' }
  }, [])

  const filtered = activeFilter === 'All'
    ? portfolioData
    : portfolioData.filter(p => p.category === activeFilter)

  return (
    <main className="portfolio-page">
      <div className="portfolio-page-header">
        <p className="portfolio-page-label">/ PORTFOLIO</p>
        <h1 className="portfolio-page-heading">Our Work</h1>
        <p className="portfolio-page-subheading">Real projects we&apos;ve shipped. Every one built with craft and intent.</p>
      </div>

      <div className="portfolio-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="portfolio-grid">
          {filtered.map(item => (
            <Link key={item.id} to={`/portfolio/${item.slug}`} className="portfolio-card">
              <div className="portfolio-card-image">
                <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
                <div className="portfolio-card-overlay">
                  <span>View Case Study &rarr;</span>
                </div>
              </div>
              <div className="portfolio-card-info">
                <span className="portfolio-card-category">{item.category}</span>
                <h2 className="portfolio-card-name">{item.name}</h2>
                <p className="portfolio-card-tagline">{item.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="portfolio-empty">
          <p>No projects in this category yet — check back soon.</p>
        </div>
      )}

      <div className="portfolio-page-cta">
        <p className="portfolio-page-cta-label">/ READY TO START?</p>
        <h2>Don&apos;t see your industry here?</h2>
        <p className="portfolio-page-cta-sub">We&apos;ve worked across many domains. Let&apos;s talk about what we can build for you.</p>
        <Button name="BOOK FREE CALL" />
      </div>
    </main>
  )
}

export default PortfolioPage
