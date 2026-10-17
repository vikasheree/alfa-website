import { useState } from 'react'
import { useEnquiry } from '../context/useEnquiry'
import { FiClipboard, FiMinus, FiPlus, FiX } from 'react-icons/fi'
import { WHATSAPP_NUMBER } from '../config/contact'
import './EnquiryCart.css'

function EnquiryCart() {
  const [isOpen, setIsOpen] = useState(false)

  const {
    items,
    itemCount,
    removeFromEnquiry,
    updateQuantity,
    clearEnquiry,
  } = useEnquiry()

  const handleSendWhatsApp = () => {
    let message = `Hello ALFA Control Systems,

I would like to enquire about the following products:

`

    items.forEach((item, index) => {
      message += `${index + 1}. ${item.product.name}\n`

      if (item.product.productCode) {
        message += `   Product Code: ${item.product.productCode}\n`
      }

      message += `   Quantity: ${item.quantity}\n\n`
    })

    message += `Please share the price, availability, and quotation.

Thank you.`

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=` +
      encodeURIComponent(message)

    window.open(whatsappUrl, '_blank')

    clearEnquiry()
    setIsOpen(false)
  }

  // No products in enquiry list
  if (items.length === 0) {
    return null
  }

  // Enquiry list closed
  if (!isOpen) {
    return (
      <button
        type="button"
        className="enquiry-floating-button"
        onClick={() => setIsOpen(true)}
        aria-label={`Open enquiry list with ${itemCount} items`}
      >
        <span className="enquiry-floating-icon"><FiClipboard aria-hidden="true" /></span>

        <span className="enquiry-floating-text">
          Enquiry
        </span>

        <span className="enquiry-floating-count">
          {itemCount}
        </span>
      </button>
    )
  }

  // Enquiry list open
  return (
    <div className="enquiry-cart">

      {/* Header */}
      <div className="enquiry-cart-header">

        <div>
          <h3>Enquiry List</h3>

          <span>
            {itemCount} {itemCount === 1 ? 'item' : 'items'}
          </span>
        </div>

        <button
          type="button"
          className="enquiry-cart-close"
          onClick={() => setIsOpen(false)}
          title="Close enquiry list"
          aria-label="Close enquiry list"
        >
          <FiX aria-hidden="true" />
        </button>

      </div>

      {/* Products */}
      <div className="enquiry-cart-items">

        {items.map((item) => (
          <div
            className="enquiry-cart-item"
            key={item.productKey}
          >

            <div className="enquiry-cart-product">

              {item.product.images?.[0] && (
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                />
              )}

              <div>
                <h4>{item.product.name}</h4>

                {item.product.productCode && (
                  <p>
                    Code: {item.product.productCode}
                  </p>
                )}
              </div>

            </div>

            <div className="enquiry-cart-actions">

              <div className="quantity-control">

                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(
                      item.productKey,
                      item.quantity - 1
                    )
                  }
                  disabled={item.quantity <= 1}
                  aria-label="Decrease quantity"
                ><FiMinus aria-hidden="true" /></button>

                <span>
                  {item.quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    updateQuantity(
                      item.productKey,
                      item.quantity + 1
                    )
                  }
                  aria-label="Increase quantity"
                ><FiPlus aria-hidden="true" /></button>

              </div>

              <button
                type="button"
                className="remove-enquiry-item"
                onClick={() =>
                    removeFromEnquiry(item.productKey)
                }
                  aria-label={`Remove ${item.product.name} from enquiry`}
              >
                Remove
              </button>

            </div>

          </div>
        ))}

      </div>

      {/* Footer */}
      <div className="enquiry-cart-footer">

        <button
          type="button"
          className="clear-enquiry-button"
          onClick={clearEnquiry}
        >
          Clear All
        </button>

        <button
          type="button"
          className="submit-enquiry-button"
          onClick={handleSendWhatsApp}
        >
          Send Enquiry on WhatsApp
        </button>

      </div>

    </div>
  )
}

export default EnquiryCart
