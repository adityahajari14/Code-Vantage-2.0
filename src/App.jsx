import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Herosection from './section/hero_section/Herosection'
import Aboutsection from './section/about_section/Aboutsection'
import Servicesection from './section/services_section/Servicesection'
import Fillertextsection from './section/Filler_text/Fillertextsection'
import Portfoliosection from './section/portfolio_section/Portfoliosection'
import Socialsection from './section/social_section/Socialsection'
import Faqsection from './section/faq_section/Faqsection'
import Footer from './components/Footer'
import Loader from './components/Loader'
import './globals.css'

function App() {
  useEffect(() => {
    document.documentElement.style.overflowX = 'hidden';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.width = '100%';
    document.body.style.width = '100%';
  }, []);

  return (
    <>
      <Loader/>
      <Navbar />
      <main>
      <Herosection />
      <Aboutsection />
      <Servicesection/>
      <Fillertextsection />
      <Portfoliosection />
      <Socialsection />
      <Faqsection />
      </main>
      <Footer />
    </>
  )
}

export default App