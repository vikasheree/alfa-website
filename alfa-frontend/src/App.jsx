import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Partners from './components/Partners'
import About from './components/About'
import Contact from './components/Contact'
import CoreValues from './components/CoreValues'

import { FaWhatsapp } from 'react-icons/fa'
import { WHATSAPP_NUMBER } from './config/contact'

import { BrowserRouter, Routes, Route, Link, useLocation, useNavigationType } from 'react-router-dom'
import { lazy, Suspense, useLayoutEffect } from 'react'
import SeoManager from './components/SeoManager'

const IndustrialAutomation = lazy(() => import('./pages/IndustrialAutomation'))
const HeatingSolutions = lazy(() => import('./pages/HeatingSolutions'))
const DuroMats = lazy(() => import('./pages/DuroMats'))
const SolarEquipments = lazy(() => import('./pages/SolarEquipments'))

import EnquiryCart from './components/EnquiryCart'



function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
    
    
  )
}

function AppContent() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const preserveScroll = location.state?.preserveScroll

  useLayoutEffect(() => {
    if (navigationType === 'POP' || preserveScroll) return

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [location.pathname, location.key, navigationType, preserveScroll])
  useLayoutEffect(() => {
    const productSlug = new URLSearchParams(location.search).get('product')
    if (!productSlug || navigationType === 'POP') return

    const productDetailSelector = [
      '.industrial-product-detail',
      '.duro-product-detail',
      '.heating-product-detail',
      '.solar-product-detail',
    ].join(', ')

    let observer
    let timeoutId

    const scrollToProduct = () => {
      const productDetail = document.querySelector(productDetailSelector)
      if (!productDetail) return false

      const navbarHeight = document.querySelector('.navbar')?.getBoundingClientRect().height ?? 0
      const top = window.scrollY + productDetail.getBoundingClientRect().top - navbarHeight - 12
      window.scrollTo({ top: Math.max(0, top), left: 0, behavior: 'instant' })
      return true
    }

    if (scrollToProduct()) return

    observer = new MutationObserver(() => {
      if (scrollToProduct()) {
        observer.disconnect()
        window.clearTimeout(timeoutId)
      }
    })
    observer.observe(document.body, { childList: true, subtree: true })
    timeoutId = window.setTimeout(() => observer.disconnect(), 10000)

    return () => {
      observer?.disconnect()
      window.clearTimeout(timeoutId)
    }
  }, [location.pathname, location.search, location.key, navigationType])

  return (
    <>
      <Navbar />
      <SeoManager />

      <Suspense fallback={null}>
      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={
            <>
           
              <Hero />
              <Solutions />
              <Partners />
              <About />
               
            </>
          }
        />

        {/* INDUSTRIAL AUTOMATION */}
        <Route
          path="/industrial-automation"
          element={<IndustrialAutomation />}
        />

        {/* HEATING */}
        <Route
          path="/heating"
          element={<HeatingSolutions />}
        />

        {/* DURO MATS */}
        <Route
          path="/duro-mats"
          element={<DuroMats />}
        />

        {/* SOLAR */}
        <Route
          path="/solar"
          element={<SolarEquipments />}
        />

        <Route path="*" element={<main className="not-found-page"><h1>Page not found</h1><p>The page you requested is unavailable.</p><Link to="/">Return to the home page</Link></main>} />

      </Routes>
      </Suspense>

      {/* Partners on all pages except Home */}
{location.pathname !== '/' && <Partners />}

{/* Core Values on every page */}
<CoreValues />

{/* Contact */}
<Contact />

      

      <a href="#contact" className="quote-button">
  Enquire Now
</a>

      <a
  href={`https://wa.me/${WHATSAPP_NUMBER}`}
  className="whatsapp-button"
  aria-label="Let's Chat"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp className="whatsapp-icon" />
  Let's Chat!
</a>

<EnquiryCart />

    </>
  )
}

export default App
