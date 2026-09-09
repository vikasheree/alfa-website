import { useState } from 'react'
import './HeatingSolutions.css'
import heatingBanner from '../assets/Heating Banner.png'

import heatingProduct1 from '../assets/Heater banner image.png'
import heatingProduct2 from '../assets/Heater banner image.png'
import heatingProduct3 from '../assets/Heater banner image.png'


function HeatingSolutions() {

  const [selectedCategory, setSelectedCategory] = useState('Category 1')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)


  const categories = [
    'Category 1',
    'Category 2',
  ]


  const products = {

    /* =========================
       CATEGORY 1
    ========================= */

    'Category 1': [

      {
        name: 'Heating Product 1',

        images: [
          heatingProduct1,
          heatingProduct2,
          heatingProduct3,
        ],

        productCode: 'HS-001',

        availability: 'In Stock',

        description:
          'High quality heating solution designed for reliable and efficient operation.',

        price: '₹ 650 / Piece',

        specifications: [
          {
            label: 'Model',
            value: 'H-100',
          },
          {
            label: 'Voltage',
            value: '230 VAC',
          },
          {
            label: 'Power',
            value: '1000 W',
          },
          {
            label: 'Material',
            value: 'Stainless Steel',
          },
        ],
      },


      {
        name: 'Heating Product 2',

        images: [
          heatingProduct1,
          heatingProduct2,
          heatingProduct3,
        ],

        productCode: 'HS-002',

        availability: 'In Stock',

        description:
          'Reliable industrial heating product suitable for various heating applications.',

        price: '₹ 850 / Piece',

        specifications: [
          {
            label: 'Model',
            value: 'H-200',
          },
          {
            label: 'Voltage',
            value: '230 VAC',
          },
          {
            label: 'Power',
            value: '1500 W',
          },
          {
            label: 'Material',
            value: 'Stainless Steel',
          },
        ],
      },


      {
        name: 'Heating Product 3',

        images: [
          heatingProduct1,
          heatingProduct2,
          heatingProduct3,
        ],

        productCode: 'HS-003',

        availability: 'In Stock',

        description:
          'Industrial heating equipment designed for consistent performance and durability.',

        price: '₹ 1,200 / Piece',

        specifications: [
          {
            label: 'Model',
            value: 'H-300',
          },
          {
            label: 'Voltage',
            value: '230 VAC',
          },
          {
            label: 'Power',
            value: '2000 W',
          },
          {
            label: 'Material',
            value: 'Stainless Steel',
          },
        ],
      },

    ],


    /* =========================
       CATEGORY 2
    ========================= */

    'Category 2': [

      {
        name: 'Heating Product 4',

        images: [
          heatingProduct1,
          heatingProduct2,
          heatingProduct3,
        ],

        productCode: 'HS-004',

        availability: 'In Stock',

        description:
          'Efficient heating solution designed for industrial applications.',

        price: '₹ 950 / Piece',

        specifications: [
          {
            label: 'Model',
            value: 'H-400',
          },
          {
            label: 'Voltage',
            value: '230 VAC',
          },
          {
            label: 'Power',
            value: '1200 W',
          },
          {
            label: 'Material',
            value: 'Stainless Steel',
          },
        ],
      },

    ],

  }


  return (

    <div className="heating-page">


      {/* =========================
          HEATING BANNER
      ========================= */}

      <section className="heating-banner">

        <img
          src={heatingBanner}
          alt="Heating Solutions"
        />

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

            <h2 className="heating-category-title">
              {selectedCategory}
            </h2>


            <div className="heating-product-grid">

              {products[selectedCategory]?.map((product) => (

                <div
                  className="heating-product-card"

                  key={product.name}

                  onClick={() => {

                    setSelectedProduct(product)

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


                    <p className="heating-product-description">
                      {product.description}
                    </p>


                    <p className="heating-product-price">
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

          <div className="heating-product-detail">


            {/* BACK BUTTON */}

            <button
              className="heating-back-button"

              onClick={() =>
                setSelectedProduct(null)
              }

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
                      selectedProduct.images[
                        selectedImage
                      ]
                    }

                    alt={selectedProduct.name}
                  />

                </div>



                {/* IMAGE THUMBNAILS */}

                <div className="heating-image-thumbnails">

                  {selectedProduct.images.map(
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

              <div className="heating-detail-info">


                {/* PRODUCT NAME */}

                <h2>
                  {selectedProduct.name}
                </h2>



                {/* PRODUCT CODE */}

                <p className="heating-product-code">

                  Product Code:{' '}

                  {selectedProduct.productCode}

                </p>



                {/* AVAILABILITY */}

                <div className="heating-availability">

                  ● {selectedProduct.availability}

                </div>



                {/* DESCRIPTION */}

                <p className="heating-detail-description">

                  {selectedProduct.description}

                </p>



                {/* PRICE */}

                <div className="heating-detail-price">

                  {selectedProduct.price}

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



                  {selectedProduct.specifications?.map(
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


              </div>


            </div>


          </div>

        )}


      </section>


    </div>

  )

}


export default HeatingSolutions