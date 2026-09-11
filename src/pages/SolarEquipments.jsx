import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './SolarEquipments.css'
import solarBanner from '../assets/SOLAR/Solar Banner.png'
import solarBannerMobile from '../assets/SOLAR/Solar Banner R.png'


import solarProduct1 from '../assets/SOLAR/C1 -- Led Flood Light/50W Portable LED Solar Lamp/50W Portable LED Solar Lamp 1.webp'
import solarProduct2 from '../assets/SOLAR/C1 -- Led Flood Light/50W Portable LED Solar Lamp/50W Portable LED Solar Lamp 2.webp'
import solarProduct3 from '../assets/SOLAR/C1 -- Led Flood Light/50W Portable LED Solar Lamp/50W Portable LED Solar Lamp 3.webp'
import solarProduct4 from '../assets/SOLAR/C1 -- Led Flood Light/50W Portable LED Solar Lamp/50W Portable LED Solar Lamp 4.webp'





import solarProduct5 from '../assets/SOLAR/C2 -- LED Solar Lamp/30W Solar Flood Light/30W Solar Flood Light 1.webp'
import solarProduct6 from '../assets/SOLAR/C2 -- LED Solar Lamp/30W Solar Flood Light/30W Solar Flood Light 2.webp'
import solarProduct7 from '../assets/SOLAR/C2 -- LED Solar Lamp/30W Solar Flood Light/30W Solar Flood Light 3.webp'
import solarProduct8 from '../assets/SOLAR/C2 -- LED Solar Lamp/30W Solar Flood Light/30W Solar Flood Light 4.webp'

import solarProduct9 from '../assets/SOLAR/C2 -- LED Solar Lamp/40W Solar Flood Light/40W Solar Flood Light 1.webp'
import solarProduct10 from '../assets/SOLAR/C2 -- LED Solar Lamp/40W Solar Flood Light/40W Solar Flood Light 2.webp'
import solarProduct11 from '../assets/SOLAR/C2 -- LED Solar Lamp/40W Solar Flood Light/40W Solar Flood Light 3.webp'
import solarProduct12 from '../assets/SOLAR/C2 -- LED Solar Lamp/40W Solar Flood Light/40W Solar Flood Light 4.webp'


function SolarEquipments() {

  const [selectedCategory, setSelectedCategory] = useState('LED Flood Light')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)

  const [searchParams, setSearchParams] = useSearchParams()


  const categories = [
    'LED Flood Light',
    'LED SOLAR LAMP',
  ]


  const products = {

    /* =========================
       CATEGORY 1
    ========================= */

    'LED Flood Light': [

      {
        name: '30W Solar Flood Light',

        images: [
          solarProduct5,
          solarProduct6,
          solarProduct7,
          solarProduct8,
        ],

        productCode: 'SE-L',

        availability: 'In Stock',

        description:
          'High quality solar equipment designed for reliable and efficient solar applications.',

        price: '₹ 3,550/ Piece',

        specifications: [
          {
  label: 'Power',
  value: '30 Watt',
},
{
  label: 'Weight',
  value: '1.5 kg',
},
{
  label: 'Light Color',
  value: 'White',
},
{
  label: 'Light Type',
  value: 'Flood Light',
},
{
  label: 'Power Source',
  value: 'Solar',
},
{
  label: 'Brand Name',
  value: 'Alfa',
},
        ],
      },


      {
        name: '40W Solar Flood Light',

        images: [
          solarProduct9,
          solarProduct10,
          solarProduct11,
          solarProduct12,
        ],

        productCode: 'SE-SF',

        availability: 'In Stock',

        description:
          'Reliable solar equipment suitable for residential and commercial applications.',

        price: '₹ 4,200/ Piece',

        specifications: [
          {
  label: 'Power',
  value: '40 Watt',
},
{
  label: 'Light Color',
  value: 'White',
},
{
  label: 'Weight',
  value: '1.8 Kg',
},
{
  label: 'Power Source',
  value: 'Solar',
},
{
  label: 'Light Type',
  value: 'Flood Light',
},
{
  label: 'Brand Name',
  value: 'Alfa',
},
        ],
      },

    ],


    /* =========================
       CATEGORY 2
    ========================= */

    'LED SOLAR LAMP': [

      {
        name: '50W Portable LED Solar Lamp',

        images: [
          solarProduct1,
          solarProduct2,
          solarProduct3,
          solarProduct4,
        ],

        productCode: 'SE-P',

        availability: 'In Stock',

        description:
          'High quality solar solution designed for efficient energy applications.',

        price: '₹ 2,250/ Piece',

        specifications: [
          {
  label: 'Power Rating',
  value: '50W',
},
{
  label: 'Usage/Application',
  value: 'Outdoor',
},
{
  label: 'Lighting Type',
  value: 'LED',
},
{
  label: 'IP Rating',
  value: 'IP65',
},
{
  label: 'Body Material',
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

 Object.values(products).forEach((categoryProducts) => {

  const product = categoryProducts.find(
    item => createSlug(item.name) === productSlug
  )

  if (product) {
    urlProduct = product
  }

})

  const currentProduct = selectedProduct || urlProduct


  return (

    <div className="solar-page">


      {/* =========================
          SOLAR BANNER
      ========================= */}

      <section className="solar-banner">
  <picture>
    <source
      media="(max-width: 768px)"
      srcSet={solarBannerMobile}
    />

    <img
      src={solarBanner}
      alt="Solar Equipment"
    />
  </picture>
</section>



      {/* =========================
          SOLAR PRODUCTS
      ========================= */}

      <section className="solar-categories">


        <h1 className="solar-products-title">
          Solar Equipment Products
        </h1>



        {/* =========================
            CATEGORY BUTTONS
        ========================= */}

        <div className="solar-category-tabs">

          {categories.map((category) => (

            <button
              key={category}

              className={`solar-category-tab ${
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

            <h2 className="solar-category-title">
              {selectedCategory}
            </h2>


            <div className="solar-product-grid">

              {products[selectedCategory]?.map((product) => (

                <div
                  className="solar-product-card"

                  key={product.name}

                  onClick={() => {

                    setSearchParams({
                      product: createSlug(product.name)
                    })

                    setSelectedImage(0)

                  }}

                >


                  {/* PRODUCT IMAGE */}

                  <div className="solar-product-image">

                    <img
                      src={product.images[0]}
                      alt={product.name}
                    />

                  </div>



                  {/* PRODUCT INFORMATION */}

                  <div className="solar-product-info">

                    <h3>
                      {product.name}
                    </h3>
<p className="solar-product-price">
                      {product.price}
                    </p>

                    <p className="Solar-product-description">
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

          <div className="solar-product-detail">


            {/* BACK BUTTON */}

            <button
              className="solar-back-button"

              onClick={() => {
                setSearchParams({})
                setSelectedProduct(null)
              }}

            >
              ← Back to Products
            </button>



            <div className="solar-detail-container">


              {/* =========================
                  LEFT SIDE
              ========================= */}

              <div className="solar-detail-left">


                {/* MAIN IMAGE */}

                <div className="solar-detail-image">

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

                <div className="solar-image-thumbnails">

                  {currentProduct.images.map(
                    (image, index) => (

                      <button
                        key={index}

                        className={`solar-thumbnail ${
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

              <div className="solar-detail-info">


                {/* PRODUCT NAME */}

                <h2>
                  {currentProduct.name}
                </h2>



                {/* PRODUCT CODE */}

                <p className="solar-product-code">

                  Product Code:{' '}

                  {currentProduct.productCode}

                </p>



                {/* AVAILABILITY */}

                <div className="solar-availability">

                  ● {currentProduct.availability}

                </div>

{/* PRICE */}

                <div className="solar-detail-price">

                  {currentProduct.price}

                </div>

                



                



                {/* BUTTONS */}

                <div className="solar-detail-buttons">


                  <button className="solar-quote-button">

                    Request a Quote

                  </button>



                  <button className="solar-enquiry-button">

                    Add to Enquiry

                  </button>


                </div>



                {/* =========================
                    TECHNICAL SPECIFICATIONS
                ========================= */}

                <div className="solar-specifications">


                  <h3>

                    ⚙ Technical Specifications

                  </h3>



                  {currentProduct.specifications?.map(
                    (spec) => (

                      <div
                        className="solar-spec-row"

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

                <p className="solar-detail-description">

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


export default SolarEquipments