import { useState } from 'react'
import './About.css'

import aboutImage from '../assets/About Us.png'

import Srijan from '../assets/Team 1.jpeg'
import Rakesh from '../assets/Team 2.jpeg'
import Hriday from '../assets/Team 3.jpeg'
import Vikas from '../assets/Team 4.jpeg'


function About() {
  const [showTeam, setShowTeam] = useState(false)

  return (
    <>
      {/* ABOUT SECTION */}
      <section className="about">

        {/* LEFT - TEXT */}
        <div className="about-content">

          <div className="about-label">
            ABOUT US
          </div>

          <h2>
            <span>Alfa</span> Control Systems
          </h2>

          <div className="about-line"></div>

          <p>
  Alfa Control Systems is a trusted provider of industrial automation,
  heating, safety and solar solutions. We combine technical expertise
  with practical industry experience to deliver reliable solutions
  that improve efficiency, productivity and performance.
</p>

<p>
  Our extensive product portfolio includes industrial control systems,
  sensors, controllers, industrial heaters, Duro Mats and solar
  equipment, serving a wide range of industries and applications.
</p>

<p>
  We focus on delivering quality products backed by dependable service,
  technical support and timely solutions. Every product and solution
  is selected with reliability, safety and long-term performance in mind.
</p>

<p>
  With a customer-first approach, we work closely with our clients
  to understand their requirements and provide solutions that are
  practical, cost-effective and built to meet their specific needs.
</p>

<p>
  Our commitment to quality, innovation and continuous improvement
  drives us to build lasting partnerships and deliver solutions
  our customers can depend on.
</p>

          <div className="about-features">

            <div>
              <strong>♧</strong>
              <span>Quality<br />Products</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>Reliable<br />Performance</span>
            </div>

            <div>
              <strong>♧</strong>
              <span>Customer<br />Focused</span>
            </div>

            <div>
              <strong>→</strong>
              <span>Timely<br />Delivery</span>
            </div>

          </div>

          {/* OUR TEAM BUTTON */}
          <div className="team-dropdown">
            <button
              className="about-link team-button"
              onClick={() => setShowTeam(!showTeam)}
            >
              Our Team →
            </button>
          </div>

        </div>


        {/* RIGHT - IMAGE */}
        <div className="about-image">
          <img
            src={aboutImage}
            alt="Alfa Control Systems"
          />
        </div>

      </section>


      {/* TEAM SECTION */}
      {showTeam && (
        <section className={`team-section ${showTeam ? 'team-open' : ''}`}>

          <h2>Our Team</h2>

          <div className="team-grid">

            {/* TEAM 1 */}
            <div className="team-card">
              <img src={Srijan} alt="Srijan" />
              <h3>Srijan</h3>
              <h4>Managing Director</h4>
              <p>
                Leads overall strategy and business development.
              </p>
            </div>


            {/* TEAM 2 */}
            <div className="team-card">
              <img src={Rakesh} alt="Rakesh" />
              <h3>Rakesh</h3>
              <h4>Director – Operations</h4>
              <p>
                Oversees operations and ensures excellence.
              </p>
            </div>


            {/* TEAM 3 */}
            <div className="team-card">
              <img src={Hriday} alt="Hriday" />
              <h3>Hriday</h3>
              <h4>Director – Sales & Marketing</h4>
              <p>
                Drives growth and builds strong client relationships.
              </p>
            </div>


            {/* TEAM 4 */}
            <div className="team-card">
              <img src={Vikas} alt="Vikas" />
              <h3>Vikas</h3>
              <h4>Head – Technical</h4>
              <p>
                Leads technical team and product development.
              </p>
            </div>

          </div>

        </section>
      )}

      {/* CORE VALUES */}
<section className="values-section">

  <div className="values-heading">
    <span></span>
    <h2>Our Core Values</h2>
    <span></span>
  </div>

  <div className="values-grid">

    <div className="value-card">
      <div className="value-icon">♡</div>
      <h3>Integrity</h3>
      <p>
        We conduct our business with honesty, transparency
        and strong ethics.
      </p>
      <div className="value-line"></div>
    </div>

    <div className="value-card">
      <div className="value-icon">💡</div>
      <h3>Innovation</h3>
      <p>
        We embrace new ideas and technologies to deliver
        better solutions.
      </p>
      <div className="value-line"></div>
    </div>

    <div className="value-card">
      <div className="value-icon">♧</div>
      <h3>Customer Focus</h3>
      <p>
        Our customers' success is at the heart of everything
        we do.
      </p>
      <div className="value-line"></div>
    </div>

    <div className="value-card">
      <div className="value-icon">◎</div>
      <h3>Excellence</h3>
      <p>
        We are committed to quality and continuous
        improvement.
      </p>
      <div className="value-line"></div>
    </div>

    <div className="value-card">
      <div className="value-icon">→</div>
      <h3>Timely Delivery</h3>
      <p>
        We value your time and ensure prompt and
        reliable delivery.
      </p>
      <div className="value-line"></div>
    </div>

  </div>

</section>

    </>
  )
}

export default About