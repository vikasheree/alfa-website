import { useState } from 'react'
import './SolarEquipments.css'
import solarBanner from '../assets/Solar Banner.png'

import solarProduct1 from '../assets/Solar banner image.png'
import solarProduct2 from '../assets/Solar banner image.png'
import solarProduct3 from '../assets/Solar banner image.png'


function SolarEquipments() {

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

    /* =========================
       CATEGORY 1
    ========================= */

    'Category 1': [

      {
        name: 'Solar Product 1',

        images: [
          solarProduct1,
          solarProduct2,
          solarProduct3,
        ],

        productCode: 'SE-001',

        availability: 'In Stock',

        description:
          'High quality solar equipment designed for reliable and efficient solar applications.',

        price: '₹ 650 / Piece',

        specifications: [
          {
            label: 'Model',
            value: 'SE-100',
          },
          {
            label: 'Power',
            value: '1000 W',
          },
          {
            label: 'Voltage',
            value: '230 VAC',
          },
          {
            label: 'Material',
            value: 'Aluminium',
          },
        ],
      },


      {
        name: 'Solar Product 2',

        images: [
          solarProduct1,
          solarProduct2,
          solarProduct3,
        ],

        productCode: 'SE-002',

        availability: 'In Stock',

        description:
          'Reliable solar equipment suitable for residential and commercial applications.',

        price: '₹ 850 / Piece',

        specifications: [
          {
            label: 'Model',
            value: 'SE-200',
          },
          {
            label: 'Power',
            value: '1500 W',
          },
          {
            label: 'Voltage',
            value: '230 VAC',
          },
          {
            label: 'Material',
            value: 'Aluminium',
          },
        ],
      },


      {
        name: 'Solar Product 3',

        images: [
          solarProduct1,
          solarProduct2,
          solarProduct3,
        ],

        productCode: 'SE-003',

        availability: 'In Stock',

        description:
          'Efficient solar equipment designed for dependable performance and long-term use.',

        price: '₹ 1,200 / Piece',

        specifications: [
          {
            label: 'Model',
            value: 'SE-300',
          },
          {
            label: 'Power',
            value: '2000 W',
          },
          {
            label: 'Voltage',
            value: '230 VAC',
          },
          {
            label: 'Material',
            value: 'Aluminium',
          },
        ],
      },

    ],


    /* =========================
       CATEGORY 2
    ========================= */

    'Category 2': [

      {
        name: 'Solar Product 4',

        images: [
          solarProduct1,
          solarProduct2,
          solarProduct3,
        ],

        productCode: 'SE-004',

        availability: 'In Stock',

        description:
          'High quality solar solution designed for efficient energy applications.',

        price: '₹ 950 / Piece',

        specifications: [
          {
            label: 'Model',
            value: 'SE-400',
          },
          {
            label: 'Power',
            value: '1200 W',
          },
          {
            label: 'Voltage',
            value: '230 VAC',
          },
          {
            label: 'Material',
            value: 'Aluminium',
          },
        ],
      },

    ],

  }


  return (

    <div className="solar-page">


      {/* =========================
          SOLAR BANNER
      ========================= */}

      <section className="solar-banner">

        <img
          src={solarBanner}
          alt="Solar Equipment"
        />

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

              }}

            >
              {category}

            </button>

          ))}

        </div>



        {/* =========================
            PRODUCT LIST
        ========================= */}

        {!selectedProduct && (

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

                    setSelectedProduct(product)

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


                    <p className="solar-product-description">
                      {product.description}
                    </p>


                    <p className="solar-product-price">
                      {product.price}
                    </p>

                  </div>


                </div>

              ))}

            </div>

          </>

        )}



        {/* =========================
            PRODUCT DETAIL
        ========================= */}

        {selectedProduct && (

          <div className="solar-product-detail">


            {/* BACK BUTTON */}

            <button
              className="solar-back-button"

              onClick={() =>
                setSelectedProduct(null)
              }

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
                      selectedProduct.images[
                        selectedImage
                      ]
                    }

                    alt={selectedProduct.name}
                  />

                </div>



                {/* IMAGE THUMBNAILS */}

                <div className="solar-image-thumbnails">

                  {selectedProduct.images.map(
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
                          alt={`${selectedProduct.name} ${
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
                  {selectedProduct.name}
                </h2>



                {/* PRODUCT CODE */}

                <p className="solar-product-code">

                  Product Code:{' '}

                  {selectedProduct.productCode}

                </p>



                {/* AVAILABILITY */}

                <div className="solar-availability">

                  ● {selectedProduct.availability}

                </div>



                {/* DESCRIPTION */}

                <p className="solar-detail-description">

                  {selectedProduct.description}

                </p>



                {/* PRICE */}

                <div className="solar-detail-price">

                  {selectedProduct.price}

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



                  {selectedProduct.specifications?.map(
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


              </div>


            </div>


          </div>

        )}


      </section>


    </div>

  )

}


export default SolarEquipments