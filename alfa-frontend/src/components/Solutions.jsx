import { useEffect, useState } from 'react'
import './Solutions.css'
import { Link } from 'react-router-dom'

import { getDivisions } from '../api/divisionApi'

import industrialImage from '../assets-optimized/INDUSTRIAL/industrial product card.webp'
import heaterImage from '../assets-optimized/HEATER/heating product card.webp'
import duroImage from '../assets-optimized/DURO/duro product card.webp'
import solarImage from '../assets-optimized/SOLAR/solar product card.webp'


function Solutions() {

  const [divisions, setDivisions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {

    async function loadDivisions() {

      try {
        const data = await getDivisions()
        setDivisions(data)
      } catch (err) {
        console.error('Failed to load divisions:', err)
        setError('Unable to load solutions.')
      } finally {
        setLoading(false)
      }

    }

    loadDivisions()

  }, [])


const divisionImages = {
  'industrial-automation': industrialImage,
  'heating-solutions': heaterImage,
  'duro-mats': duroImage,
  'solar-equipments': solarImage
}

const divisionRoutes = {
  'industrial-automation': '/industrial-automation',
  'heating-solutions': '/heating',
  'duro-mats': '/duro-mats',
  'solar-equipments': '/solar'
}

const divisionClasses = {
  'industrial-automation': 'industrial',
  'heating-solutions': 'heating',
  'duro-mats': 'duro',
  'solar-equipments': 'solar'
}



  if (loading) {
    return (
      <section id="solutions" className="solutions">
        <div className="solutions-heading">
          <h2>
            OUR <span>SOLUTIONS</span>
          </h2>
        </div>

        <div className="solutions-grid">
          <p>Loading solutions...</p>
        </div>
      </section>
    )
  }


  if (error) {
    return (
      <section id="solutions" className="solutions">
        <div className="solutions-heading">
          <h2>
            OUR <span>SOLUTIONS</span>
          </h2>
        </div>

        <div className="solutions-grid">
          <p>{error}</p>
        </div>
      </section>
    )
  }


  return (
    <section id="solutions" className="solutions">

      <div className="solutions-heading">
        <h2>
          OUR <span>SOLUTIONS</span>
        </h2>
      </div>

      <h3></h3>

      <div className="solutions-grid">

        {divisions.map((division) => {

          return (
            <Link
  key={division.id}
  to={divisionRoutes[division.slug]}
  className={`solution-card ${divisionClasses[division.slug]}`}
>

              <div className="solution-image">
                <img
  src={divisionImages[division.slug]}
  alt={division.name}
/>
              </div>

              <div className="solution-content">

                <h3>
                  {division.name}
                </h3>

                <p>
                  {division.description}
                </p>

              </div>

              <div className="solution-bottom">
                <span>Explore →</span>
              </div>

            </Link>
          )

        })}

      </div>

    </section>
  )
}

export default Solutions