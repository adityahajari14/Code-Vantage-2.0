import { useState, useCallback } from 'react'
import { useNavigate, useLocation, Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    document.querySelector('.hamburger')?.classList.remove('active');
    document.querySelector('.navbar')?.classList.remove('extended');
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
    document.querySelector('.hamburger').classList.toggle('active');
    document.querySelector('.navbar').classList.toggle('extended');
  }, [isOpen]);

  const handleNavClick = useCallback((e, targetId) => {
    e.preventDefault();
    closeMenu();
    if (location.pathname === '/') {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: targetId } });
    }
  }, [location.pathname, navigate, closeMenu]);

  return (
    <nav>
      <div className={`navbar ${isOpen ? 'extended' : ''}`}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="/assets/Icon Logo.webp" 
            alt="Code Vantage Logo" 
            className="logo" 
            loading="eager"
            decoding="async"
          />
        </Link>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')}>About Us</a></li>
          <li><a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a></li>
          <li><Link to="/portfolio" onClick={closeMenu}>Portfolio</Link></li>
          <li><a href="#process" onClick={(e) => handleNavClick(e, 'process')}>Process</a></li>
          <li><a href="#faqs" onClick={(e) => handleNavClick(e, 'faqs')}>FAQs</a></li>
          <li className="mobile-button">
            <Button name="FREE CONSULTATION" />
          </li>
        </ul>

        <div className="desktop-button">
          <Button name="FREE CONSULTATION"/>
        </div>

        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="line line1" d="M4 14H24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path className="line line2" d="M4 14H24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path className="line line3" d="M4 14H24" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
