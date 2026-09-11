import './Solutions.css'
import { Link } from 'react-router-dom'

import industrialImage from '../assets/INDUSTRIAL/industrial product card.png'
import heaterImage from '../assets/HEATER/heating product card.png'
import duroImage from '../assets/DURO/duro product card.png'
import solarImage from '../assets/SOLAR/solar product card.png'



function Solutions() {
 return (
  <section id="solutions" className="solutions">

  <div className="solutions-heading">
  <h2>
    OUR <span>SOLUTIONS</span>
  </h2>
</div>

    <h3></h3>

    <div className="solutions-grid">

        <Link to="/industrial-automation" className="solution-card industrial">
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
      </Link>


    <Link to="/heating" className="solution-card heating">
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
</Link>


       <Link to="/duro-mats" className="solution-card duro">
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
    </Link>


       <Link to="/solar" className="solution-card solar">
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
        </Link>

      </div>

    </section>
  )
}

export default Solutions