import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './HeatingSolutions.css'
import heatingBanner from '../assets/HEATER/Heating Banner.png'
import heatingBannerMobile from '../assets/HEATER/Heating Banner R.png'

import heatingProduct1 from '../assets/HEATER/C1 -- Ceramic Band Heater/180mm Industrial Ceramic Band Heater/180mm Industrial Ceramic Band Heater 2.webp'
import heatingProduct2 from '../assets/HEATER/C1 -- Ceramic Band Heater/180mm Industrial Ceramic Band Heater/180mm Industrial Ceramic Band Heater 3.webp'
import heatingProduct3 from '../assets/HEATER/C1 -- Ceramic Band Heater/180mm Industrial Ceramic Band Heater/180mm Industrial Ceramic Band Heater1.webp'

import heatingProduct4 from '../assets/HEATER/C1 -- Ceramic Band Heater/250mm Industrial Ceramic Band Heater/250mm Industrial Ceramic Band Heater 1.webp'

import heatingProduct5 from '../assets/HEATER/C1 -- Ceramic Band Heater/Ceramic Barrel Heater/Ceramic Barrel Heater 1.webp'




import heatingProduct6 from '../assets/HEATER/C2 -- Immersion Heaters/1000W Copper Water Immersion Heater/1000W Copper Water Immersion Heater 1.webp'
import heatingProduct7 from '../assets/HEATER/C2 -- Immersion Heaters/1000W Copper Water Immersion Heater/1000W Copper Water Immersion Heater 2.webp'
import heatingProduct8 from '../assets/HEATER/C2 -- Immersion Heaters/1000W Copper Water Immersion Heater/1000W Copper Water Immersion Heater 3.webp'

import heatingProduct9 from '../assets/HEATER/C2 -- Immersion Heaters/Immersion Heater/Immersion Heater 1.webp'
import heatingProduct10 from '../assets/HEATER/C2 -- Immersion Heaters/Immersion Heater/Immersion Heater 2.webp'



import heatingProduct11 from '../assets/HEATER/C3 -- One Product/Bobbin Heater/Bobbin Heater 1.webp'
import heatingProduct12 from '../assets/HEATER/C3 -- One Product/Bobbin Heater/Bobbin Heater 2.webp'
import heatingProduct13 from '../assets/HEATER/C3 -- One Product/Bobbin Heater/Bobbin Heater 3.webp'

import heatingProduct14 from '../assets/HEATER/C3 -- One Product/Finned Heater/Finned Heater 1.webp'
import heatingProduct15 from '../assets/HEATER/C3 -- One Product/Finned Heater/Finned Heater 2.webp'
import heatingProduct16 from '../assets/HEATER/C3 -- One Product/Finned Heater/Finned Heater 3.webp'

function HeatingSolutions() {

  const [selectedCategory, setSelectedCategory] = useState('CERAMIC BAND HEATER')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)

  const [searchParams, setSearchParams] = useSearchParams()


  const categories = [
    'CERAMIC BAND HEATER',
    'IMMERSION HEATERS',
     'ONE PRODUCT',
  ]


  const products = {

    /* =========================
       CATEGORY 1
    ========================= */

    'CERAMIC BAND HEATER': [

      {
        name: '180mm Industrial Ceramic Band Heater',

        images: [
          heatingProduct1,
          heatingProduct2,
          heatingProduct3,
        ],

        productCode: 'HS-IC',

        availability: 'In Stock',

        description:
          '180mm Industrial Ceramic Band Heater',

        price: '₹ 320/ Piece',

        specifications: [
          {
  label: 'Voltage',
  value: '220V',
},
{
  label: 'Power',
  value: '320W',
},
{
  label: 'Size',
  value: '180mm (Dia)',
},
{
  label: 'Heater Type',
  value: 'Ceramic Heater',
},
{
  label: 'Max Operating Temperature',
  value: '300 Degree Celsius',
},
{
  label: 'Heater Material',
  value: 'Ceramic',
},
{
  label: 'Shape',
  value: 'Round',
},
          
        ],
      },


    {
        name: '250mm Industrial Ceramic Band Heater',

        images: [
          heatingProduct4,
      
        ],

        productCode: 'HS-IC',

        availability: 'In Stock',

        description:
          '250mm Industrial Ceramic Band Heater',

        price: '₹ 500/ Piece',

        specifications: [
          {
  label: 'Voltage',
  value: '440V',
},
{
  label: 'Power',
  value: '450W',
},
{
  label: 'Size',
  value: '250 mm (Dia)',
},
{
  label: 'Heater Type',
  value: 'Ceramic Heater',
},
{
  label: 'Max Operating Temperature',
  value: '300 Degree Celsius',
},
{
  label: 'Heater Material',
  value: 'Ceramic',
},
{
  label: 'Shape',
  value: 'Round',
},
          
        ],
      },


      {
        name: 'Ceramic Barrel Heater',

        images: [
          heatingProduct5,
        ],

        productCode: 'HS-IC',

        availability: 'In Stock',

        description:
          'Ceramic Barrel Heater',

        price: '₹ 20/ Square inch',

        specifications: [
          {
            label: 'Model',
            value: 'C-Barrel Heater',
          },
          
        ],
      },

    ],


    /* =========================
       CATEGORY 2
    ========================= */

    'IMMERSION HEATERS': [

      {
        name: '1000W Copper Water Immersion Heater',

        images: [
          heatingProduct6,
          heatingProduct7,
          heatingProduct8,
        ],

        productCode: 'IH-C',

        availability: 'In Stock',

        description: '1000W Copper Water Immersion Heater',

        price: '₹ 350/ Piece',

        specifications: [
          {
  label: 'Power (Watt)',
  value: '1000 W',
},
{
  label: 'Material',
  value: 'Copper',
},
{
  label: 'Heating Element',
  value: 'Copper',
},
{
  label: 'Max Water Heater Tank Capacity',
  value: '10 L',
},
{
  label: 'Corrosion Resistance',
  value: 'Yes',
},
          
        ],
      },

      {
        name: 'Immersion Heater',

        images: [
          heatingProduct9,
          heatingProduct10,
        ],

        productCode: 'HS-IC',

        availability: 'In Stock',

        description:
          'Water Immersion Heater',

        price: '₹ 500/ Piece',

        specifications: [
          {
  label: 'Material',
  value: 'Stainless Steel',
},
{
  label: 'Wattage',
  value: '3000 W',
},
          
        ],
      },

    ],


     'ONE PRODUCT': [

      {
        name: '460V Ceramic Bobbin Heater',

        images: [
          heatingProduct11,
          heatingProduct12,
          heatingProduct13,
        ],

        productCode: 'OP-C',

        availability: 'In Stock',

        description:
          '460V Ceramic Bobbin Heater',

        price: '₹ 2500/ Piece',

        specifications: [
          {
  label: 'Voltage',
  value: '460 V',
},
{
  label: 'Heater Material',
  value: 'Ceramic',
},
{
  label: 'Power',
  value: '10 KW',
},
{
  label: 'Power Source',
  value: 'Electric',
},
{
  label: 'Usage/Application',
  value: 'Used for heating gases, liquids',
},
{
  label: 'Water Proof',
  value: 'Yes',
},
          
        ],
      },

      {
        name: '440V Stainless Steel Spiral Fined Heater',

        images: [
          heatingProduct14,
          heatingProduct15,
          heatingProduct16,
        ],

        productCode: 'HS-IC',

        availability: 'In Stock',

        description:
          '440V Stainless Steel Spiral Fined Heater',

        price: '₹ 1500/ Piece',

        specifications: [
          {
  label: 'Voltage',
  value: '440V',
},
{
  label: 'Type',
  value: 'Finned Heater',
},
{
  label: 'Frequency',
  value: '50 Hz',
},
{
  label: 'Phase',
  value: 'Single Phase',
},
{
  label: 'Watts',
  value: '1500 W',
},
{
  label: 'Material',
  value: 'Stainless Steel',
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
    <div className="heating-page">


      {/* =========================
          HEATING BANNER
      ========================= */}

      <section className="heating-banner">
  <picture>
    <source
      media="(max-width: 768px)"
      srcSet={heatingBannerMobile}
    />

    <img
      src={heatingBanner}
      alt="Heating Solutions"
    />
  </picture>
</section>



      {/* =========================
          HEATING PRODUCTS
      ========================= */}

      <section className="heating-categories">


        <h1 className="heating-products-title">
          Heating Solutions Products
        </h1>



        {/* =========================
            CATEGORY BUTTONS
        ========================= */}

        <div className="heating-category-tabs">

          {categories.map((category) => (

            <button
              key={category}

              className={`heating-category-tab ${
                selectedCategory === category
                  ? 'active'
                  : ''
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



        {/* =========================
            PRODUCT LIST
        ========================= */}

        {!currentProduct && (

          <>

            <h2 className="heating-category-title">
              {selectedCategory}
            </h2>


            <div className="heating-product-grid">

              {products[selectedCategory]?.map((product) => (

                <div
                  className="heating-product-card"

                  key={product.name}

                  onClick={() => {

                    setSearchParams({
                      product: createSlug(product.name)
                    })

                    setSelectedImage(0)

                  }}

                >


                  {/* PRODUCT IMAGE */}

                  <div className="heating-product-image">

                    <img
                      src={product.images[0]}
                      alt={product.name}
                    />

                  </div>



                  {/* PRODUCT INFORMATION */}

                  <div className="heating-product-info">

                    <h3>
                      {product.name}
                    </h3>

<p className="heating-product-price">
                      {product.price}
                    </p>
                    <p className="heating-product-description">
                      {product.description}
                    </p>

<span className="Solar-read-more">
  Read More →
</span>
                    

                  </div>


                </div>

              ))}

            </div>

          </>

        )}



        {/* =========================
            PRODUCT DETAIL
        ========================= */}

        {currentProduct && (

          <div className="heating-product-detail">


            {/* BACK BUTTON */}

            <button
              className="heating-back-button"

              onClick={() => {
                if (urlCategory) {
                  setSelectedCategory(urlCategory)
                }

                setSearchParams({})
                setSelectedProduct(null)
              }}

            >
              ← Back to Products
            </button>



            <div className="heating-detail-container">


              {/* =========================
                  LEFT SIDE
              ========================= */}

              <div className="heating-detail-left">


                {/* MAIN IMAGE */}

                <div className="heating-detail-image">

                  <img
                    src={
                      currentProduct.images[
                        selectedImage
                      ]
                    }

                    alt={currentProduct.name}
                  />

                </div>



                {/* IMAGE THUMBNAILS */}

                <div className="heating-image-thumbnails">

                  {currentProduct.images.map(
                    (image, index) => (

                      <button
                        key={index}

                        className={`heating-thumbnail ${
                          selectedImage === index
                            ? 'active'
                            : ''
                        }`}

                        onClick={() =>
                          setSelectedImage(index)
                        }

                      >

                        <img
                          src={image}
                          alt={`${currentProduct.name} ${
                            index + 1
                          }`}
                        />

                      </button>

                    )
                  )}

                </div>


              </div>



              {/* =========================
                  RIGHT SIDE
              ========================= */}

              <div className="heating-detail-info">


                {/* PRODUCT NAME */}

                <h2>
                  {currentProduct.name}
                </h2>



                {/* PRODUCT CODE */}

                <p className="heating-product-code">

                  Product Code:{' '}

                  {currentProduct.productCode}

                </p>



                {/* AVAILABILITY */}

                <div className="heating-availability">

                  ● {currentProduct.availability}

                </div>

 {/* PRICE */}

                <div className="heating-detail-price">

                  {currentProduct.price}

                </div>

                



               



                {/* BUTTONS */}

                <div className="heating-detail-buttons">


                  <button className="heating-quote-button">

                    Request a Quote

                  </button>



                  <button className="heating-enquiry-button">

                    Add to Enquiry

                  </button>


                </div>



                {/* =========================
                    TECHNICAL SPECIFICATIONS
                ========================= */}

                <div className="heating-specifications">


                  <h3>

                    ⚙ Technical Specifications

                  </h3>



                  {currentProduct.specifications?.map(
                    (spec) => (

                      <div
                        className="heating-spec-row"

                        key={spec.label}
                      >

                        <span>
                          {spec.label}
                        </span>


                        <span>
                          {spec.value}
                        </span>

                      </div>

                    )
                  )}


                </div>
{/* DESCRIPTION */}

                <p className="heating-detail-description">

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


export default HeatingSolutions