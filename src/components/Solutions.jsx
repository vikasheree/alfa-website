import './Solutions.css'

import industrialImage from '../assets/Industrial banner image.png'
import heaterImage from '../assets/Heater banner image.png'
import duroImage from '../assets/Duro banner image.png'
import solarImage from '../assets/Solar banner image.png'

function Solutions() {
  return (
    <section className="solutions">

      <h1>OUR SOLUTIONS</h1>

      <div className="solutions-grid">

        <div className="solution-card industrial">
          <div className="solution-image">
            <img src={industrialImage} alt="Industrial Automation" />
          </div>

          <div className="solution-content">
            <h3>INDUSTRIAL<br />AUTOMATION</h3>
            <p>
              Sensors, PLCs, controllers and more
              for smarter automation.
            </p>
          </div>

          <div className="solution-bottom">
            <span>Explore →</span>
          </div>
        </div>


        <div className="solution-card heating">
          <div className="solution-image">
            <img src={heaterImage} alt="Heating Solutions" />
          </div>

          <div className="solution-content">
            <h3>HEATING<br />SOLUTIONS</h3>
            <p>
              Reliable heating solutions for
              every industrial need.
            </p>
          </div>

          <div className="solution-bottom">
            <span>Explore →</span>
          </div>
        </div>


        <div className="solution-card duro">
          <div className="solution-image">
            <img src={duroImage} alt="Duro Mats" />
          </div>

          <div className="solution-content">
            <h3>DURO MATS</h3>
            <p>
              Durable. Reliable. Designed for
              safety and performance.
            </p>
          </div>

          <div className="solution-bottom">
            <span>Explore →</span>
          </div>
        </div>


        <div className="solution-card solar">
          <div className="solution-image">
            <img src={solarImage} alt="Solar Equipments" />
          </div>

          <div className="solution-content">
            <h3>SOLAR<br />EQUIPMENTS</h3>
            <p>
              Efficient. Sustainable. Built for
              a brighter tomorrow.
            </p>
          </div>

          <div className="solution-bottom">
            <span>Explore →</span>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Solutions