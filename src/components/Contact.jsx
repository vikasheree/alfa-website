import './Contact.css'

function Contact() {
  return (
    <section className="contact-section">

      {/* HEADING */}
      <div className="contact-heading">
        <h2>Contact Us</h2>
        <p>We're here to help! Reach out to us for any queries or assistance.</p>
      </div>

      {/* MAIN CONTACT AREA */}
      <div className="contact-container">

        {/* LEFT - FORM */}
        <div className="contact-form-box">

          <div className="contact-box-title">
            <span>✉</span>
            <div>
              <h3>Send Us a Message</h3>
              <div className="contact-title-line"></div>
            </div>
          </div>

          <form>

            <div className="form-row">

              <div className="form-field">
                <label>Your Name *</label>
                <input
                  type="text"
                  placeholder="Your full name"
                />
              </div>

              <div className="form-field">
                <label>Your Company Name</label>
                <input
                  type="text"
                  placeholder="Your company name"
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-field">
                <label>Your Mobile No. *</label>
                <input
                  type="tel"
                  placeholder="Your mobile number"
                />
              </div>

              <div className="form-field message-field">
                <label>Type Your Message Here... *</label>
                <textarea
                  placeholder="Write your message..."
                ></textarea>
              </div>

            </div>

            <div className="form-row">

              <div className="form-field">
                <label>Your Email *</label>
                <input
                  type="email"
                  placeholder="Your email address"
                />
              </div>

            </div>

            <button className="submit-button" type="submit">
              ➤ &nbsp; Submit
            </button>

          </form>

          <p className="form-note">
            🔒 Your information is safe with us. We never share your details.
          </p>

        </div>


        {/* RIGHT - COMPANY DETAILS */}
        <div className="contact-info-box">

          <h3>🏢 &nbsp; Corporate Office & Works</h3>

          <div className="contact-detail">
            <span>☎</span>
            <p>
              73070 - 40254<br />
              96435 - 01868<br />
              84272 - 40089
            </p>
          </div>

          <div className="contact-detail">
            <span>✉</span>
            <p>
              info@alfacontrolsystems.com<br />
              alpha_control03@yahoo.com
            </p>
          </div>

          <div className="contact-detail">
            <span>📍</span>
            <p>
              SCO 27, 1st Floor,<br />
              Royal Plaza Market, Sector 117,<br />
              Mohali (Pb) - 140301
            </p>
          </div>

          {/* MAP PLACEHOLDER */}
          <div className="contact-map">
            <iframe
              title="Alfa Control Systems Location"
              src="https://www.google.com/maps?q=Royal%20Plaza%20Market%20Sector%20117%20Mohali&output=embed"
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>


      {/* BOTTOM FEATURES */}
      <div className="contact-features">

        <div>
          <span>◷</span>
          <div>
            <strong>Quick Response</strong>
            <p>We reply to all inquiries<br />within 24 hours.</p>
          </div>
        </div>

        <div>
          <span>✓</span>
          <div>
            <strong>Trusted Support</strong>
            <p>Our team is here to<br />assist you.</p>
          </div>
        </div>

        <div>
          <span>🤝</span>
          <div>
            <strong>Reliable Solutions</strong>
            <p>Quality products and<br />dependable service.</p>
          </div>
        </div>

        <div>
          <span>👥</span>
          <div>
            <strong>Customer First</strong>
            <p>Your satisfaction is<br />our priority.</p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Contact