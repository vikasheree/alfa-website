import { useEffect, useState } from 'react'
import './Hero.css'

import banner1 from '../assets/Home Banner 1.png'
import banner2 from '../assets/Home Banner 2.png'

function Hero() {
  const banners = [banner1, banner2, banner1]

  const [currentBanner, setCurrentBanner] = useState(0)
  const [transition, setTransition] = useState(true)

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
      {/* Banner */}
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
      </section>

      {/* Product Names */}
      <section className="product-strip">
        <div className="product-track">
          <span>INDUSTRIAL AUTOMATION</span>
          <span>HEATING SOLUTIONS</span>
          <span>DURO MATS</span>
          <span>SOLAR EQUIPMENTS</span>
          <span>INDUSTRIAL AUTOMATION</span>
          <span>HEATING SOLUTIONS</span>
          <span>DURO MATS</span>
          <span>SOLAR EQUIPMENTS</span>
          

          <span>INDUSTRIAL AUTOMATION</span>
          <span>HEATING SOLUTIONS</span>
          <span>DURO MATS</span>
          <span>SOLAR EQUIPMENTS</span>
          <span>INDUSTRIAL AUTOMATION</span>
          <span>HEATING SOLUTIONS</span>
          <span>DURO MATS</span>
          <span>SOLAR EQUIPMENTS</span>
        </div>
      </section>
    </>
  )
}

export default Hero