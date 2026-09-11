import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import './IndustrialAutomation.css'
import industrialBanner from '../assets/INDUSTRIAL/Industrial Banner.png'
import industrialBannerMobile from '../assets/INDUSTRIAL/Industrial Banner R.png'

import industrialProduct1 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/i-therm PI-99X/i-therm PI-99X 1.webp'
import industrialProduct2 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/i-therm PI-99X/i-therm PI-99X 2.webp'
import industrialProduct3 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/i-therm PI-99X/i-therm PI-99X 3.webp'
import industrialProduct4 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/i-therm PI-99X/i-therm PI-99X 4.webp'
import industrialProduct5 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/i-therm PI-99X/i-therm PI-99X 5.webp'

import industrialProduct6 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/PPI Omnix 48 - PID Temperature Controller/PPI Omnix 48 - PID Temperature Controller 1.webp'
import industrialProduct7 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/PPI Omnix 48 - PID Temperature Controller/PPI Omnix 48 - PID Temperature Controller 2.webp'
import industrialProduct8 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/PPI Omnix 48 - PID Temperature Controller/PPI Omnix 48 - PID Temperature Controller 3.webp'

import industrialProduct9 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/PPI Omnix 96 - PID Temperature Controller/PPI Omnix 96 - PID Temperature Controller 1.webp'
import industrialProduct10 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/PPI Omnix 96 - PID Temperature Controller/PPI Omnix 96 - PID Temperature Controller 2.webp'
import industrialProduct11 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/PPI Omnix 96 - PID Temperature Controller/PPI Omnix 96 - PID Temperature Controller 3.webp'
import industrialProduct12 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/PPI Omnix 96 - PID Temperature Controller/PPI Omnix 96 - PID Temperature Controller 4.webp'

import industrialProduct13 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/Selec TC544C/Selec TC544C 1.webp'
import industrialProduct14 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/Selec TC544C/Selec TC544C 2.webp'
import industrialProduct15 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/Selec TC544C/Selec TC544C 3.webp'
import industrialProduct16 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/Selec TC544C/Selec TC544C 4.webp'
import industrialProduct17 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/Selec TC544C/Selec TC544C 5.webp'

import industrialProduct18 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/SubZero SZ-7569/SubZero SZ-7569 1.webp'
import industrialProduct19 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/SubZero SZ-7569/SubZero SZ-7569 2.webp'
import industrialProduct20 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/SubZero SZ-7569/SubZero SZ-7569 3.webp'
import industrialProduct21 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/SubZero SZ-7569/SubZero SZ-7569 4.webp'
import industrialProduct22 from '../assets/INDUSTRIAL/C1 -- Temperature Controller/SubZero SZ-7569/SubZero SZ-7569 5.webp'






import industrialProduct23 from '../assets/INDUSTRIAL/C2 -- Pressure Transmitter/Danfoss MBS 1650 Pressure Transmitter/Danfoss MBS 1650 Pressure Transmitter 1.webp'
import industrialProduct24 from '../assets/INDUSTRIAL/C2 -- Pressure Transmitter/Danfoss MBS 1650 Pressure Transmitter/Danfoss MBS 1650 Pressure Transmitter 2.webp'
import industrialProduct25 from '../assets/INDUSTRIAL/C2 -- Pressure Transmitter/Danfoss MBS 1650 Pressure Transmitter/Danfoss MBS 1650 Pressure Transmitter 3.webp'
import industrialProduct26 from '../assets/INDUSTRIAL/C2 -- Pressure Transmitter/Danfoss MBS 1650 Pressure Transmitter/Danfoss MBS 1650 Pressure Transmitter 4.webp'

import industrialProduct27 from '../assets/INDUSTRIAL/C2 -- Pressure Transmitter/Danfoss Pressure Transmitter MBS 1650/Danfoss Pressure Transmitter MBS 1650 1.webp'
import industrialProduct28 from '../assets/INDUSTRIAL/C2 -- Pressure Transmitter/Danfoss Pressure Transmitter MBS 1650/Danfoss Pressure Transmitter MBS 1650 2.webp'
import industrialProduct29 from '../assets/INDUSTRIAL/C2 -- Pressure Transmitter/Danfoss Pressure Transmitter MBS 1650/Danfoss Pressure Transmitter MBS 1650 3.webp'
import industrialProduct30 from '../assets/INDUSTRIAL/C2 -- Pressure Transmitter/Danfoss Pressure Transmitter MBS 1650/Danfoss Pressure Transmitter MBS 1650 4.webp'

import industrialProduct31 from '../assets/INDUSTRIAL/C2 -- Pressure Transmitter/Mild Steel Digital Pressure Transmitter/Mild Steel Digital Pressure Transmitter 1.webp'




import industrialProduct32 from '../assets/INDUSTRIAL/C3 -- Pneumatics Solenoid Valves/1by8 Inch Brass Pneumatic Solenoid Valve/1by8 Inch Brass Pneumatic Solenoid Valve 1.webp'

import industrialProduct33 from '../assets/INDUSTRIAL/C3 -- Pneumatics Solenoid Valves/half Inch Brass Pneumatic Solenoid Valve/half Inch Brass Pneumatic Solenoid Valve 1.webp'



function IndustrialAutomation() {
  const [selectedCategory, setSelectedCategory] = useState('TEMPERATURE CONTROLLER')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)

  const [searchParams, setSearchParams] = useSearchParams()

  const categories = [
    'TEMPERATURE CONTROLLER',
    'PRESSURE TRANSMITTER',
    'PNEUMATICS SOLENOID VALVES',
  ]

  const products = {
  'TEMPERATURE CONTROLLER': [
    {
  name: 'i-therm PI-99X - ON/OFF, Digital Temperature Controller',
  images: [
    industrialProduct1,
    industrialProduct2,
    industrialProduct3,
    industrialProduct4,
    industrialProduct5,
  ],

  productCode: 'TC-i',

  availability: 'In Stock',

  description: 'The Itherm PI99X / ULT-99 Digital Temperature Controller is a high-performance controller designed for ultra-low temperature and deep freezer applications. It is widely used in laboratories, medical storage units, and industrial refrigeration systems where precise and stable temperature control is critical. This controller features a clear digital display for real-time temperature monitoring and supports accurate sensing through compatible temperature probes. Built for reliability, it ensures consistent cooling performance and protects sensitive materials stored at low temperatures.   With its robust panel-mount design and easy-to-use interface, the controller allows quick installation and smooth operation in demanding environments. It is suitable for continuous operation in deep freezers, cold storage systems, and refrigeration units. ',

  price: '₹ 1650/ Piece',

  specifications: [
    {
  label: 'Control Type',
  value: 'On/Off',
},
{
  label: 'Input Type',
  value: 'NTC Sensor',
},
{
  label: 'Output Type',
  value: 'Relay',
},
{
  label: 'Size',
  value: '96×96 mm',
},
{
  label: 'Supply Voltage',
  value: '100–240 VAC',
},
{
  label: 'Display Type',
  value: 'Digital Display',
},
{
  label: 'Control Outputs',
  value: '1 Output',
},
{
  label: 'Mounting Type',
  value: 'Panel Mount',
},
  ],
},

{
  name: 'PPI Omnix 48 - PID Temperature Controller',
  images: [
    industrialProduct6,
    industrialProduct7,
    industrialProduct8,
  ],

  productCode: 'TC-PPI',

  availability: 'In Stock',

  description: 'The PPI Omnix 48 PID Temperature Controller is a compact and high-precision controller designed for industrial temperature control applications. It features a dual LED display for continuous monitoring of process value (PV) and set value (SV), ensuring accurate and stable operation.  This controller supports thermocouple (J, K) and RTD (Pt100) inputs, making it suitable for a wide range of heating and cooling processes. With self-tune PID and ON/OFF control modes, it delivers efficient and consistent temperature regulation.  The Omnix 48 comes with configurable relay/SSR control output along with an auxiliary output for alarm or secondary control. Its compact 48×48 mm panel mount design makes it ideal for control panels where space is limited.',

  price: '₹ 1200/ Piece',

  specifications: [
    {
  label: 'Control Type',
  value: 'PID + On/Off',
},
{
  label: 'Input Type',
  value: 'Thermocouple + RTD',
},
{
  label: 'Output Type',
  value: 'Relay + SSR',
},
{
  label: 'Size',
  value: '48×48 mm',
},
{
  label: 'Supply Voltage',
  value: '85–270 VAC',
},
{
  label: 'Display Type',
  value: 'Dual Display',
},
{
  label: 'Control Outputs',
  value: '2 Outputs',
},
{
  label: 'Communication',
  value: 'RS485',
},
{
  label: 'Mounting Type',
  value: 'Panel Mount',
},
{
  label: 'Brand',
  value: 'PPI',
},

  ],
},

{
  name: 'PPI Omnix 96 - PID Temperature Controller',
  images: [
    industrialProduct9,
    industrialProduct10,
    industrialProduct11,
    industrialProduct12,
  ],

  productCode: 'TC-PPI',

  availability: 'In Stock',

  description: 'The PPI Omnix 96 PID Temperature Controller is a high-precision industrial controller designed for accurate temperature control in demanding process applications. It features a dual 4-digit LED display for real-time monitoring of process value (PV) and set value (SV), ensuring stable and efficient operation.  This controller supports multiple sensor inputs including thermocouples (J, K) and RTD Pt100, making it suitable for a wide range of industrial environments. With advanced self-tune PID and ON/OFF control modes, it provides precise temperature regulation with minimal overshoot. The Omnix 96 comes with configurable relay and SSR control outputs along with auxiliary output for alarm or compressor control. Its DIN standard 96×96 mm panel mount design makes it ideal for control panels in industrial setups. ',

  price: '₹ 950/ Piece',

  specifications: [
    {
  label: 'Control Type',
  value: 'PID + On/Off',
},
{
  label: 'Output Type',
  value: 'Relay + SSR',
},
{
  label: 'Size',
  value: '96×96 mm',
},
{
  label: 'Supply Voltage',
  value: '85–270 VAC',
},
{
  label: 'Display Type',
  value: 'Dual Display',
},
{
  label: 'Control Outputs',
  value: '2 Outputs',
},
{
  label: 'Communication',
  value: 'RS485',
},
{
  label: 'Brand',
  value: 'PPI',
},
{
  label: 'Input Type',
  value: 'Thermocouple (J,K) / RTD Pt100',
},

  ],
},


{
  name: 'Selec TC544C - PID Temperature Controller',
  images: [
    industrialProduct13,
    industrialProduct14,
    industrialProduct15,
    industrialProduct16,
    industrialProduct17,
  ],

  productCode: 'TC-S',

  availability: 'In Stock',

  description: 'The Selec TC544 Digital Temperature Controller is a high-performance industrial PID controller designed for accurate and reliable temperature control in various process applications. It features a dual LED display for real-time monitoring of process value (PV) and set value (SV), ensuring precise temperature management with minimal fluctuations.  This controller supports multiple sensor inputs including thermocouple (J, K, T, R, S) and RTD (PT100), making it highly versatile for different industrial environments. It offers both ON/OFF and auto-tune PID control modes, allowing users to achieve stable and efficient temperature regulation based on application requirements.   Equipped with a relay/SSR control output along with an auxiliary relay output, the TC544 enables effective control of heating and cooling systems, along with alarm functionality. Its compact 48×48 mm panel-mount design makes it suitable for control panels with limited space while ensuring easy installation and operation',

  price: '₹ 1900/ Piece',

  specifications: [
   {
  label: 'Control Type',
  value: 'PID + On/Off',
},
{
  label: 'Input Type',
  value: 'TC/RTD Compatible',
},
{
  label: 'Output Type',
  value: 'Relay + SSR',
},
{
  label: 'Size',
  value: '48×48 mm',
},
{
  label: 'Supply Voltage',
  value: '90–270 VAC',
},
{
  label: 'Display Type',
  value: 'Dual Display',
},
{
  label: 'Series',
  value: 'TC544',
},
{
  label: 'Control Outputs',
  value: '1 Output',
},
{
  label: 'Mounting Type',
  value: 'Panel Mount',
},
{
  label: 'Brand',
  value: 'Selec',
},

  ],
},


{
  name: 'SubZero SZ-7569, ON/OFF Digital Temperature Controller',
  images: [
    industrialProduct18,
    industrialProduct19,
    industrialProduct20,
    industrialProduct21,
    industrialProduct22,
  ],

  productCode: 'TC-S',

  availability: 'In Stock',

  description: 'Subzero SZ-7569 is a compact and reliable digital temperature controller designed for precise temperature regulation in refrigeration and industrial applications. It is widely used in deep freezers, display cabinets, chillers, and HVAC systems to maintain consistent temperature control and protect equipment performance.   Built with a user-friendly interface and high-accuracy sensing, this controller ensures stable operation with minimal manual intervention. Its panel-mount design allows easy installation in control panels and machinery setups.',

  price: '₹ 750/ Piece',

  specifications: [
    {
  label: 'Control Type',
  value: 'On/Off',
},
{
  label: 'Input Type',
  value: 'NTC Probe',
},
{
  label: 'Output Type',
  value: 'Relay',
},
{
  label: 'Application',
  value: 'Refrigeration, Freezer, Cold Room, Display Cabinets',
},
{
  label: 'Size',
  value: '35 × 75 mm',
},
{
  label: 'Supply Voltage',
  value: '12 VDC',
},
{
  label: 'Number Of Relays',
  value: '1 Relay',
},
{
  label: 'Display Type',
  value: 'LED',
},
{
  label: 'Brand',
  value: 'Subzero',
},

  ],
}
  ],







 'PRESSURE TRANSMITTER': [
 {
  name: 'Danfoss MBS 1650 Pressure Transmitter',
  images: [
    industrialProduct23,
    industrialProduct24,
    industrialProduct25,
    industrialProduct26,
  ],

  productCode: 'PR-D',

  availability: 'In Stock',

  description: 'The Danfoss MBS 1650 Pressure Transmitter is a compact and robust industrial sensor designed for accurate pressure measurement in demanding hydraulic and process applications. It is specially built for harsh environments where vibration, pressure spikes, and electrical noise are common.    This transmitter features an integrated pulse-snubber, which protects the sensor from cavitation and liquid hammer effects, ensuring stable and long-term performance. It provides reliable output signals such as 4–20 mA or voltage output, making it suitable for PLC and industrial automation systems.    With a fully welded stainless steel design and high immunity to electrical noise from VFDs and industrial equipment, the MBS 1650 ensures accurate readings even in tough operating conditions.',

  price: '₹ 3,800/ Piece',

  specifications: [
   {
  label: 'Pressure Type',
  value: 'Gauge',
},
{
  label: 'Pressure Range',
  value: '0–100 bar',
},
{
  label: 'Output Signal',
  value: '0–10 V',
},
{
  label: 'Process Connection',
  value: '¼ in BSP',
},
{
  label: 'Diaphragm Material',
  value: 'Stainless Steel',
},
{
  label: 'Accuracy',
  value: '±0.5%',
},

  ],
},

{
  name: 'Danfoss Pressure Transmitter MBS 1650',
  images: [
    industrialProduct27,
    industrialProduct28,
    industrialProduct29,
    industrialProduct30,
  ],

  productCode: 'RT-D',

  availability: 'In Stock',

  description: 'Danfoss MBS 1650 (Part No. 063G2835) is a compact and robust pressure transmitter designed for reliable measurement in hydraulic and industrial applications. It offers stable performance under high vibration, shock, and temperature variations, making it suitable for demanding environments.',

  price: '₹ 3,500/ Piece',

  specifications: [
   {
  label: 'Pressure Type',
  value: 'Gauge',
},
{
  label: 'Pressure Range',
  value: '0–100 bar',
},
{
  label: 'Output Signal',
  value: '0–10 V',
},
{
  label: 'Process Connection',
  value: '1/4',
},
{
  label: 'Diaphragm Material',
  value: 'SS316L',
},
{
  label: 'Accuracy',
  value: '±0.5%',
},
{
  label: 'Ingress Protection',
  value: 'IP67',
},
{
  label: 'Supply Voltage',
  value: '12–36 V DC',
},
{
  label: 'Brand',
  value: 'Danfoss',
},
{
  label: 'Availability',
  value: 'In Stock',
},

  ],
},


{
  name: 'Mild Steel Digital Pressure Transmitter',
  images: [
    industrialProduct31,
  ],

  productCode: 'PT-M',

  availability: 'In Stock',

  description: 'Mild Steel Digital Pressure Transmitter',

  price: '₹ 7,500/ Piece',

  specifications: [
   {
  label: 'Output Signal',
  value: 'RS485',
},
{
  label: 'Accuracy',
  value: '+-0.5%',
},
{
  label: 'Measurement Range',
  value: 'Upto 280 PSI',
},
{
  label: 'Product Material',
  value: 'Mild Steel',
},
{
  label: 'Usage Application',
  value: 'Used to measure and convert pressure into a digital signal',
},
{
  label: 'Voltage',
  value: '230 V',
},
{
  label: 'Display Type',
  value: 'LED',
},

  ],
},
],








'PNEUMATICS SOLENOID VALVES': [
  {
  name: '1/8 Inch Brass Pneumatic Solenoid Valve',
  images: [
    industrialProduct32,
  ],

  productCode: 'PS-S',

  availability: 'In Stock',

  description: '1/8 Inch Brass Pneumatic Solenoid Valve',

  price: '₹ 1,650/ Piece',

  specifications: [
   {
  label: 'Valve Size',
  value: '1/8 Inch',
},
{
  label: 'End Connection Type',
  value: 'Threaded',
},
{
  label: 'Automation Grade',
  value: 'Manual',
},
{
  label: 'Media',
  value: 'Air',
},
{
  label: 'Material',
  value: 'Brass',
},
{
  label: 'Maximum Pressure',
  value: '250 PSI',
},
{
  label: 'Application',
  value: 'Used to control compressed air across numerous industrial applications',
},

  ],
},

{
  name: '1/2 Inch Brass Pneumatic Solenoid Valve',
  images: [
    industrialProduct33,
  ],

  productCode: 'PS-S',

  availability: 'In Stock',

  description: '1/2 Inch Brass Pneumatic Solenoid Valve',

  price: '₹ 1950/ Piece',

  specifications: [
  {
  label: 'Valve Size',
  value: '1/2 Inch',
},
{
  label: 'End Connection Type',
  value: 'Threaded',
},
{
  label: 'Automation Grade',
  value: 'Manual',
},
{
  label: 'Media',
  value: 'Gas',
},
{
  label: 'Material',
  value: 'Brass',
},
{
  label: 'Maximum Pressure',
  value: '250 PSI',
},
{
  label: 'Application',
  value: 'Used to control compressed air across numerous industrial applications',
},

  ],
},



],

}

  // Create URL-friendly product slug
  const createSlug = (name) => {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
  }

  // Get product from URL
  const productSlug = searchParams.get('product')

  let urlProduct = null
  let urlCategory = null

  Object.entries(products).forEach(([category, categoryProducts]) => {

    const product = categoryProducts.find(
      item => createSlug(item.name) === productSlug
    )

    if (product) {
      urlProduct = product
      urlCategory = category
    }

  })

  const currentProduct = selectedProduct || urlProduct
 


  return (
    <div className="industrial-page">

     {/* Industrial Automation Banner */}
<section className="industrial-banner">
  <picture>
    <source
      media="(max-width: 768px)"
      srcSet={industrialBannerMobile}
    />

    <img
      src={industrialBanner}
      alt="Industrial Automation"
    />
  </picture>
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
                (urlCategory || selectedCategory) === category ? 'active' : ''
              }`}
              onClick={() => {
                setSelectedCategory(category)
                setSelectedProduct(null)
                setSearchParams({})
              }}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Selected Category */}
       
{!currentProduct && (
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
  setSearchParams({
    product: createSlug(product.name)
  })
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

            <p className="industrial-product-price">
              {product.price}
            </p>

  
             <p className="duro-product-description">
  {product.description}
</p>

<span className="duro-read-more">
  Read More →
</span>

          </div>

        </div>
      ))}

    </div>
  </>
)}

{currentProduct && (
  <div className="industrial-product-detail">

    {/* Back */}
    <button
      className="industrial-back-button"
      onClick={() => {
  setSearchParams({})
  setSelectedProduct(null)
}}
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
    src={currentProduct.images[selectedImage]}
    alt={currentProduct.name}
  />
</div>

<div className="industrial-image-thumbnails">

  {currentProduct.images.map((image, index) => (
    <button
      key={index}
      className={`industrial-thumbnail ${
        selectedImage === index ? 'active' : ''
      }`}
      onClick={() => setSelectedImage(index)}
    >
      <img
        src={image}
        alt={`${currentProduct.name} ${index + 1}`}
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
          {currentProduct.name}
        </h2>


        {/* Product Code */}
        <p className="industrial-product-code">
          Product Code: {currentProduct.productCode}
        </p>


        {/* Availability */}
        <div className="industrial-availability">
          ● {currentProduct.availability}
        </div>

{/* Price */}
        <div className="industrial-detail-price">
          {currentProduct.price}
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

          {currentProduct.specifications?.map((spec) => (
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
        {/* Description */}
        <p className="industrial-detail-description">
          {currentProduct.description}
        </p>

      </div>
      

    </div>

    

  </div>
)}

    
      </section>

    </div>
  )
}

export default IndustrialAutomation