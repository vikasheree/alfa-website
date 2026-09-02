import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Solutions from './components/Solutions'
import Partners from './components/Partners'
import About from './components/About'
import Contact from './components/Contact'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndustrialAutomation from './pages/IndustrialAutomation'
import HeatingSolutions from './pages/HeatingSolutions'
import DuroMats from "./pages/DuroMats";
import SolarEquipments from "./pages/SolarEquipments";

function App() {
  return (
    <BrowserRouter>

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
              <Contact />
            </>
          }
        />


        {/* INDUSTRIAL AUTOMATION */}
        <Route
          path="/industrial-automation"
          element={<IndustrialAutomation />}
        />

        <Route
  path="/heating"
  element={<HeatingSolutions />}
/>

<Route
  path="/duro-mats"
  element={<DuroMats />}
/>

<Route
  path="/solar"
  element={<SolarEquipments />}
/>

      </Routes>

      <a href="/request-quote" className="quote-button">
        Enquire Now
      </a>

      <a
        href="#"
        className="whatsapp-button"
        aria-label="Let's Chat"
      >
        <span className="whatsapp-icon">●</span>
        Let's Chat!
      </a>

    </BrowserRouter>
  )
}

export default App