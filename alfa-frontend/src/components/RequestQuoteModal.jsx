import { useState } from 'react'
import './RequestQuoteModal.css'
import { createEnquiry } from '../api/enquiryApi'

function RequestQuoteModal({
  isOpen,
  product,
  onClose,
  theme = 'green',
}) {
  const [formData, setFormData] = useState({
    customerName: '',
    companyName: '',
    email: '',
    phone: '',
    quantity: 1,
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  if (!isOpen || !product) {
    return null
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((current) => ({
      ...current,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  if (!product?.id) {
    alert('Product information is missing.')
    return
  }

  try {
    setIsSubmitting(true)

    const enquiryData = {
      customerName: formData.customerName,
      email: formData.email,
      phone: formData.phone,
      companyName: formData.companyName,
      message: formData.message,
      items: [
        {
          productId: product.id,
          quantity: Number(formData.quantity),
        },
      ],
    }

    console.log('Sending enquiry:', enquiryData)

    await createEnquiry(enquiryData)

    alert('Quote request submitted successfully!')

    setFormData({
      customerName: '',
      companyName: '',
      email: '',
      phone: '',
      quantity: 1,
      message: '',
    })

    onClose()
  } catch (error) {
    console.error('Failed to submit enquiry:', error)

    alert(
      error?.message ||
      'Failed to submit quote request. Please try again.'
    )
  } finally {
    setIsSubmitting(false)
  }
}

  return (
    <div className={`quote-modal-overlay ${theme}`}>
      <div className="quote-modal">

        <button
          type="button"
          className="quote-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <h2>Request a Quote</h2>

        <p className="quote-modal-product">
          {product.name}
        </p>

        {product.productCode && (
          <p className="quote-modal-code">
            Product Code: {product.productCode}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="customerName"
            placeholder="Your Name"
            value={formData.customerName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            min="1"
            value={formData.quantity}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="quote-submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? 'Submitting...'
              : 'Submit Quote Request'}
          </button>

        </form>

      </div>
    </div>
  )
}

export default RequestQuoteModal