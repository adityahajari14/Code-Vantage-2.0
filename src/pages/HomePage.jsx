import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Herosection from '../section/hero_section/Herosection'
import Aboutsection from '../section/about_section/Aboutsection'
import Servicesection from '../section/services_section/Servicesection'
import Fillertextsection from '../section/Filler_text/Fillertextsection'
import Portfoliosection from '../section/portfolio_section/Portfoliosection'
import Socialsection from '../section/social_section/Socialsection'
import Faqsection from '../section/faq_section/Faqsection'
import Processsection from '../section/process_section/Processsection'

const HomePage = () => {
  const location = useLocation()

  useEffect(() => {
    const scrollTarget = location.state?.scrollTo
    if (scrollTarget) {
      const target = document.getElementById(scrollTarget)
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      }
      window.history.replaceState({}, document.title)
    }
  }, [location.state])

  return (
    <main>
      <Herosection />
      <Aboutsection />
      <Servicesection />
      <Fillertextsection />
      <Portfoliosection />
      <Processsection />
      <Socialsection />
      <Faqsection />
    </main>
  )
}

export default HomePage
