import { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import portfolioData from '../data/portfolioData.json'
import Button from '../components/Button'
import './PortfolioDetailPage.css'

const PortfolioDetailPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()

  const project = portfolioData.find(p => p.slug === slug)
  const otherProjects = portfolioData.filter(p => p.slug !== slug)

  useEffect(() => {
    if (!project) {
      navigate('/portfolio', { replace: true })
      return
    }
    document.title = `${project.name} — Code Vantage`
    return () => { document.title = 'Code Vantage' }
  }, [project, navigate])

  if (!project) return null

  return (
    <main className="detail-page">

      <Link to="/portfolio" className="detail-back">
        &larr; Back to Our Work
      </Link>

      <div className="detail-hero">
        <img src={project.image} alt={project.name} loading="eager" decoding="async" />
      </div>

      <div className="detail-header">
        <div className="detail-header-left">
          <span className="detail-category">{project.category}</span>
          <h1 className="detail-name">{project.name}</h1>
          <p className="detail-tagline">{project.tagline}</p>
        </div>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="detail-live-btn"
        >
          Visit Live Site &#8599;
        </a>
      </div>

      <div className="detail-divider" />

      <div className="detail-content">
        <div className="detail-description">
          <h2>About the project</h2>
          <p>{project.description}</p>
        </div>
        <div className="detail-meta">
          <div className="detail-meta-block">
            <h3>Services</h3>
            <div className="detail-tags">
              {project.services.map(s => (
                <span key={s} className="detail-tag">{s}</span>
              ))}
            </div>
          </div>
          <div className="detail-meta-block">
            <h3>Tech Stack</h3>
            <div className="detail-tags">
              {project.tech.map(t => (
                <span key={t} className="detail-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {project.testimonial && (
        <div className="detail-testimonial">
          <blockquote>&ldquo;{project.testimonial.quote}&rdquo;</blockquote>
          <cite>— {project.testimonial.author}, {project.testimonial.role}</cite>
        </div>
      )}

      {project.results && (
        <div className="detail-results">
          {project.results.map((r, i) => (
            <div key={i} className="detail-result-card">
              <span className="detail-result-value">{r.value}</span>
              <span className="detail-result-label">{r.label}</span>
            </div>
          ))}
        </div>
      )}

      <div className="detail-cta">
        <p className="detail-cta-label">/ LET&apos;S WORK TOGETHER</p>
        <h2>Ready to build something like this?</h2>
        <p className="detail-cta-sub">Your first consultation is free. Let&apos;s figure out what we can create together.</p>
        <Button name="BOOK FREE CALL" />
      </div>

      {otherProjects.length > 0 && (
        <div className="detail-more">
          <h2>More Work</h2>
          <div className="detail-more-grid">
            {otherProjects.map(p => (
              <Link key={p.id} to={`/portfolio/${p.slug}`} className="detail-more-card">
                <img src={p.image} alt={p.name} loading="lazy" decoding="async" />
                <div className="detail-more-overlay">
                  <span className="detail-more-category">{p.category}</span>
                  <span className="detail-more-name">{p.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

    </main>
  )
}

export default PortfolioDetailPage
