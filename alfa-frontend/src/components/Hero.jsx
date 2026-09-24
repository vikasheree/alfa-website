import { useEffect, useState } from 'react'
import './Hero.css'

import banner1 from '../assets/HOME/Home Banner 1.png'
import banner2 from '../assets/HOME/Home Banner 2.png'

function Hero() {
  const banners = [banner1, banner2, banner1]

  const [currentBanner, setCurrentBanner] = useState(0)
  const [transition, setTransition] = useState(true)

  const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  })
}

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentBanner((prev) => prev + 1)
    }, 4000)

    return () => clearTimeout(timer)
  }, [currentBanner])

  useEffect(() => {
    if (currentBanner === 2) {
      const reset = setTimeout(() => {
        setTransition(false)
        setCurrentBanner(0)

        setTimeout(() => {
          setTransition(true)
        }, 50)
      }, 2500)

      return () => clearTimeout(reset)
    }
  }, [currentBanner])

  return (
    <>
      {/* =========================
          HERO BANNER
      ========================= */}
     <section className="hero">

  <div
    className="hero-track"
    style={{
      transform: `translateX(-${currentBanner * 100}%)`,
      transition: transition
        ? 'transform 2.5s cubic-bezier(0.65, 0, 0.35, 1)'
        : 'none'
    }}
  >
    {banners.map((banner, index) => (
      <img
        key={index}
        src={banner}
        alt="ALFA Control Systems"
      />
    ))}
  </div>

  <div className="hero-overlay"></div>

  <div className="hero-content">

    <div className="hero-accent">
      <span></span>
      ALFA CONTROL SYSTEMS
    </div>

    <h1>
      Reliable Industrial &amp;
      <strong> Automation Solutions</strong>
    </h1>

    <p>
      Providing reliable industrial automation, heating,
      Duro Mats and solar solutions for modern industries.
    </p>

    <div className="hero-actions">
  <button onClick={() => scrollToSection('solutions')}>
    Explore Solutions
  </button>

  <button
    className="hero-secondary"
    onClick={() => scrollToSection('contact')}
  >
    Contact Us
  </button>
</div>

  </div>

</section>

      {/* =========================
          PRODUCT STRIP
      ========================= */}
      <section className="product-strip">
        <div className="product-track">
          <span>DURO MATS</span>
          <span>SOLAR PV MODULES</span>
          <span>SOLAR DC CABLES</span>
          <span>SOLAR EQUIPMENTS</span>
          <span>INDUSTRIAL SENSORS</span>
          <span>SOLAR CHARGE CONTROLLERS</span>
          <span>SOLAR PV MODULES</span>
          <span>BAND HEATERS</span>
          <span>TEMPERATURE CONTROLLERS</span>
          <span>PRESSURE TRANSMITTERS</span>
          <span>INDUSTRIAL SENSORS</span>
          <span>DIGITAL PANEL METERS</span>
          <span>SIGNAL CONDITIONERS</span>
          <span>INDUSTRIAL TIMERS</span>
          <span>TEMPERATURE SENSORS</span>
          <span>PRESSURE SWITCHES</span>
        </div>
      </section>
    </>
  )
}

export default Hero