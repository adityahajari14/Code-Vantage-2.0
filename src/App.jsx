import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import PortfolioDetailPage from './pages/PortfolioDetailPage'
import { 
  optimizeGSAP, 
  optimizeAnimations, 
  preloadCriticalImages, 
  getCriticalImages 
} from './utils/performanceOptimizations'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    const root = document.getElementById('root')
    if (root) root.scrollTop = 0
  }, [pathname])
  return null
}

const AppContent = () => {
  useEffect(() => {
    optimizeGSAP();
    optimizeAnimations();
    preloadCriticalImages(getCriticalImages());

    if (process.env.NODE_ENV === 'development') {
      console.log('Performance optimizations applied');
    }
  }, []);

  return (
    <>
      <Loader />
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
      </Routes>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App