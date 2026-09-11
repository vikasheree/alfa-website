import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Partners from './components/Partners'
import About from './components/About'
import Contact from './components/Contact'
import CoreValues from './components/CoreValues'

import { FaWhatsapp } from 'react-icons/fa'


import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import IndustrialAutomation from './pages/IndustrialAutomation'
import HeatingSolutions from './pages/HeatingSolutions'
import DuroMats from "./pages/DuroMats"
import SolarEquipments from "./pages/SolarEquipments"

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

function AppContent() {
  const location = useLocation()

  return (
    <>
      <Navbar />

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

      </Routes>

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
  href="https://wa.me/919877665644"
  className="whatsapp-button"
  aria-label="Let's Chat"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp className="whatsapp-icon" />
  Let's Chat!
</a>

    </>
  )
}

export default App