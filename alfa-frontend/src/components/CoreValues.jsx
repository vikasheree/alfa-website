import { FiAward, FiHeart, FiZap, FiTruck, FiUsers } from 'react-icons/fi'
function CoreValues() {
  return (
    <>
      {/* CORE VALUES */}
      <section className="values-section">

        <div className="values-heading">
          <span></span>
          <h2>Our Core Values</h2>
          <span></span>
        </div>

        <div className="values-grid">

          <div className="value-card">
            <div className="value-icon"><FiHeart aria-hidden="true" /></div>
            <h3>Integrity</h3>
            <p>
              We conduct our business with honesty, transparency
              and strong ethics.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon"><FiZap aria-hidden="true" /></div>
            <h3>Innovation</h3>
            <p>
              We embrace new ideas and technologies to deliver
              better solutions.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon"><FiUsers aria-hidden="true" /></div>
            <h3>Customer Focus</h3>
            <p>
              Our customers' success is at the heart of everything
              we do.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon"><FiAward aria-hidden="true" /></div>
            <h3>Excellence</h3>
            <p>
              We are committed to quality and continuous
              improvement.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon"><FiTruck aria-hidden="true" /></div>
            <h3>Timely Delivery</h3>
            <p>
              We value your time and ensure prompt and
              reliable delivery.
            </p>
          </div>

        </div>
      </section>
    </>
  )
}

export default CoreValues
