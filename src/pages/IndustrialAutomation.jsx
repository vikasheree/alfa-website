import { useState } from 'react'
import './IndustrialAutomation.css'
import industrialBanner from '../assets/Industrial Banner.png'
import industrialProduct1 from '../assets/Product 1 Image 1.png'
import industrialProduct2 from '../assets/Product 1 Image 2.png'
import industrialProduct3 from '../assets/Product 1 Image 3.png'
import industrialProduct4 from '../assets/Product 1 Image 4.png'

function IndustrialAutomation() {
  const [selectedCategory, setSelectedCategory] = useState('Category 1')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)

  const categories = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
    'Category 6',
    'Category 7',
    'Category 8',
  ]

  const products = {
  'Category 1': [
    {
  name: 'Product 1',
  images: [
    industrialProduct1,
    industrialProduct2,
    industrialProduct3,
    industrialProduct4,
  ],

  productCode: 'IA-M18-001',

  availability: 'In Stock',

  description: 'High quality industrial automation product designed for reliable and efficient operation.',

  price: '₹ 650 / Piece',

  specifications: [
    {
      label: 'Model',
      value: 'M18',
    },
    {
      label: 'Sensing Type',
      value: 'Inductive',
    },
    {
      label: 'Sensing Distance',
      value: '8 mm',
    },
    {
      label: 'Output Type',
      value: 'NPN / PNP (NO/NC)',
    },
    {
      label: 'Supply Voltage',
      value: '10 – 30 VDC',
    },
    {
      label: 'Connection Type',
      value: '3 Wire',
    },
    {
      label: 'Protection Class',
      value: 'IP67',
    },
  ],
}
  ],

 'Category 2': [
  {
    name: 'Product 5',
    images: [
      industrialProduct1,
      industrialProduct2,
      industrialProduct3,
      industrialProduct4,
    ],
    description: 'Product information',
    price: '₹ 750 / Piece',
  },

  {
    name: 'Product 6',
    images: [
      industrialProduct1,
      industrialProduct2,
      industrialProduct3,
      industrialProduct4,
    ],
    description: 'Product information',
    price: '₹ 850 / Piece',
  },
],
}

  return (
    <div className="industrial-page">

      {/* Industrial Automation Banner */}
      <section className="industrial-banner">
        <img
          src={industrialBanner}
          alt="Industrial Automation"
        />
      </section>


      {/* Industrial Automation Products */}
      <section className="industrial-categories">

        <h1 className="industrial-products-title">
          Industrial Automation Products
        </h1>

        {/* Categories */}
        <div className="industrial-category-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`industrial-category-tab ${
                selectedCategory === category ? 'active' : ''
              }`}
             onClick={() => {
  setSelectedCategory(category)
  setSelectedProduct(null)
}}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Selected Category */}
       
{!selectedProduct && (
  <>
    <h2 className="industrial-category-title">
      {selectedCategory}
    </h2>

    <div className="industrial-product-grid">

      {products[selectedCategory]?.map((product) => (
        <div
          className="industrial-product-card"
          key={product.name}
          onClick={() => {
  setSelectedProduct(product)
  setSelectedImage(0)
}}
        >

          <div className="industrial-product-image">
            <img     
  
  src={product.images[0]}
  alt={product.name}
/>

          </div>

          <div className="industrial-product-info">

            <h3>
              {product.name}
            </h3>

            <p className="industrial-product-description">
              {product.description}
            </p>

            <p className="industrial-product-price">
              {product.price}
            </p>

          </div>

        </div>
      ))}

    </div>
  </>
)}

{selectedProduct && (
  <div className="industrial-product-detail">

    {/* Back */}
    <button
      className="industrial-back-button"
      onClick={() => setSelectedProduct(null)}
    >
      ← Back to Products
    </button>


    <div className="industrial-detail-container">

      {/* =========================
          LEFT SIDE
      ========================= */}

      <div className="industrial-detail-left">

        <div className="industrial-detail-image">
  <img
    src={selectedProduct.images[selectedImage]}
    alt={selectedProduct.name}
  />
</div>

<div className="industrial-image-thumbnails">

  {selectedProduct.images.map((image, index) => (
    <button
      key={index}
      className={`industrial-thumbnail ${
        selectedImage === index ? 'active' : ''
      }`}
      onClick={() => setSelectedImage(index)}
    >
      <img
        src={image}
        alt={`${selectedProduct.name} ${index + 1}`}
      />
    </button>
  ))}

</div>

      </div>


      {/* =========================
          RIGHT SIDE
      ========================= */}

      <div className="industrial-detail-info">

        <h2>
          {selectedProduct.name}
        </h2>


        {/* Product Code */}
        <p className="industrial-product-code">
          Product Code: {selectedProduct.productCode}
        </p>


        {/* Availability */}
        <div className="industrial-availability">
          ● {selectedProduct.availability}
        </div>


        {/* Description */}
        <p className="industrial-detail-description">
          {selectedProduct.description}
        </p>


        {/* Price */}
        <div className="industrial-detail-price">
          {selectedProduct.price}
        </div>


        {/* Buttons */}
        <div className="industrial-detail-buttons">

          <button className="industrial-quote-button">
            Request a Quote
          </button>

          <button className="industrial-enquiry-button">
            Add to Enquiry
          </button>

        </div>


        {/* =========================
            TECHNICAL SPECIFICATIONS
        ========================= */}

        <div className="industrial-specifications">

          <h3>
            ⚙ Technical Specifications
          </h3>

          {selectedProduct.specifications?.map((spec) => (
            <div
              className="spec-row"
              key={spec.label}
            >

              <span>
                {spec.label}
              </span>

              <span>
                {spec.value}
              </span>

            </div>
          ))}

        </div>

      </div>

    </div>

  </div>
)}

    
      </section>

    </div>
  )
}

export default IndustrialAutomation