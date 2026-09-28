import { useEffect, useState } from 'react'
import './Contact.css'
import { createEnquiry } from '../api/enquiryApi'
import { getCompanyInfo } from '../api/companyInfoApi'

function Contact() {
  const [formData, setFormData] = useState({
    customerName: '',
    companyName: '',
    phone: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [companyInfo, setCompanyInfo] = useState(null)

  useEffect(() => {
    const loadCompanyInfo = async () => {
      try {
        const data = await getCompanyInfo()

        if (data && data.length > 0) {
          setCompanyInfo(data[0])
        }
      } catch (error) {
        console.error('Failed to load company information:', error)
      }
    }

    loadCompanyInfo()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log('Contact form submitted')
    console.log('Sending data:', formData)

    setIsSubmitting(true)
    setSubmitted(false)

    try {
      const response = await createEnquiry({
        customerName: formData.customerName,
        companyName: formData.companyName,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
        enquiryType: 'CONTACT_MESSAGE',
        items: [],
      })

      console.log('Contact enquiry created successfully:', response)

      setSubmitted(true)

      setFormData({
        customerName: '',
        companyName: '',
        phone: '',
        email: '',
        message: '',
      })
    } catch (error) {
      console.error('Contact enquiry failed:', error)

      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">

      <div className="contact-heading">
        <h2>Contact Us</h2>

        <p>
          We're here to help! Reach out to us for any queries or assistance.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-form-box">

          <div className="contact-box-title">
            <span>✉</span>

            <div>
              <h3>Send Us a Message</h3>
              <div className="contact-title-line"></div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-row">

              <div className="form-field">
                <label>Your Name *</label>

                <input
                  type="text"
                  name="customerName"
                  placeholder="Your full name"
                  value={formData.customerName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field">
                <label>Your Company Name</label>

                <input
                  type="text"
                  name="companyName"
                  placeholder="Your company name"
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="form-row">

              <div className="form-field">
                <label>Your Mobile No. *</label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="Your mobile number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-field message-field">
                <label>Type Your Message Here... *</label>

                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

            </div>

            <div className="form-row">

              <div className="form-field">
                <label>Your Email *</label>

                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <button
              className="submit-button"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : '➤  Submit'}
            </button>

          </form>

          {submitted && (
            <p className="success-message">
              ✓ Thank you! Your message has been submitted successfully.
            </p>
          )}

          <p className="form-note">
            🔒 Your information is safe with us. We never share your details.
          </p>

        </div>

        <div className="contact-info-box">

          <h3>🏢 &nbsp; Corporate Office & Works</h3>

          <div className="contact-detail">
            <span>☎</span>

            <p>
              {companyInfo?.phone1}<br />
              {companyInfo?.phone2}<br />
              {companyInfo?.phone3}
            </p>
          </div>

          <div className="contact-detail">
            <span>✉</span>

            <p>
              {companyInfo?.email1}<br />
              {companyInfo?.email2}
            </p>
          </div>

          <div className="contact-detail">
            <span>📍</span>

            <p>
              {companyInfo?.address}
            </p>
          </div>

          <div className="contact-map">
            {companyInfo?.googleMapsUrl && (
              <iframe
                title="Alfa Control Systems Location"
                src={`${companyInfo.googleMapsUrl}&output=embed`}
                loading="lazy"
                allowFullScreen
              ></iframe>
            )}
          </div>

        </div>

      </div>

      <div className="contact-features">

        <div>
          <span>◷</span>

          <div>
            <strong>Quick Response</strong>

            <p>
              We reply to all inquiries<br />
              within 24 hours.
            </p>
          </div>
        </div>

        <div>
          <span>✓</span>

          <div>
            <strong>Trusted Support</strong>

            <p>
              Our team is here to<br />
              assist you.
            </p>
          </div>
        </div>

        <div>
          <span>🤝</span>

          <div>
            <strong>Reliable Solutions</strong>

            <p>
              Quality products and<br />
              dependable service.
            </p>
          </div>
        </div>

        <div>
          <span>👥</span>

          <div>
            <strong>Customer First</strong>

            <p>
              Your satisfaction is<br />
              our priority.
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Contact