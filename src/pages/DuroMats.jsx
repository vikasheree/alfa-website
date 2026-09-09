import { useState } from 'react'
import './DuroMats.css'
import duroBanner from '../assets/Duro Banner.png'

import duroProduct1 from '../assets/Duro banner image.png'
import duroProduct2 from '../assets/Duro banner image.png'
import duroProduct3 from '../assets/Duro banner image.png'


function DuroMats() {

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
        name: 'Duro Product 1',

        images: [
          duroProduct1,
          duroProduct2,
          duroProduct3,
        ],

        productCode: 'DM-001',

        availability: 'In Stock',

        description:
          'High quality Duro Mat designed for durable and reliable industrial applications.',

        price: '₹ 650 / Piece',

        specifications: [
          {
            label: 'Model',
            value: 'DM-100',
          },
          {
            label: 'Material',
            value: 'Rubber',
          },
          {
            label: 'Thickness',
            value: '10 mm',
          },
          {
            label: 'Colour',
            value: 'Black',
          },
        ],
      },


      {
        name: 'SRIJAN',

        images: [
          duroProduct1,
          duroProduct2,
          duroProduct3,
        ],

        productCode: 'DM-002',

        availability: 'In Stock',

        description:
          'Durable and versatile mat suitable for industrial and commercial applications.',

        price: '₹ 1,200 / Piece',

        specifications: [
          {
            label: 'Model',
            value: 'DM-200',
          },
          {
            label: 'Material',
            value: 'Rubber',
          },
          {
            label: 'Thickness',
            value: '12 mm',
          },
          {
            label: 'Colour',
            value: 'Black',
          },
        ],
      },

    ],


    /* =========================
       CATEGORY 2
    ========================= */

    'Category 2': [

      {
        name: 'Duro Product 4',

        images: [
          duroProduct1,
          duroProduct2,
          duroProduct3,
        ],

        productCode: 'DM-004',

        availability: 'In Stock',

        description:
          'Industrial grade Duro Mat designed for long-lasting performance.',

        price: '₹ 950 / Piece',

        specifications: [
          {
            label: 'Model',
            value: 'DM-400',
          },
          {
            label: 'Material',
            value: 'Rubber',
          },
          {
            label: 'Thickness',
            value: '10 mm',
          },
          {
            label: 'Colour',
            value: 'Black',
          },
        ],
      },

    ],

  }


  return (

    <div className="duro-page">


      {/* =========================
          DURO MATS BANNER
      ========================= */}

      <section className="duro-banner">

        <img
          src={duroBanner}
          alt="Duro Mats"
        />

      </section>



      {/* =========================
          DURO MATS PRODUCTS
      ========================= */}

      <section className="duro-categories">


        <h1 className="duro-products-title">
          Duro Mats Products
        </h1>



        {/* =========================
            CATEGORY BUTTONS
        ========================= */}

        <div className="duro-category-tabs">

          {categories.map((category) => (

            <button
              key={category}

              className={`duro-category-tab ${
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

            <h2 className="duro-category-title">
              {selectedCategory}
            </h2>


            <div className="duro-product-grid">

              {products[selectedCategory]?.map((product) => (

                <div
                  className="duro-product-card"

                  key={product.name}

                  onClick={() => {

                    setSelectedProduct(product)

                    setSelectedImage(0)

                  }}

                >


                  {/* PRODUCT IMAGE */}

                  <div className="duro-product-image">

                    <img
                      src={product.images[0]}
                      alt={product.name}
                    />

                  </div>



                  {/* PRODUCT INFORMATION */}

                  <div className="duro-product-info">

                    <h3>
                      {product.name}
                    </h3>


                    <p className="duro-product-description">
                      {product.description}
                    </p>


                    <p className="duro-product-price">
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

          <div className="duro-product-detail">


            {/* BACK BUTTON */}

            <button
              className="duro-back-button"

              onClick={() =>
                setSelectedProduct(null)
              }

            >
              ← Back to Products
            </button>



            <div className="duro-detail-container">


              {/* =========================
                  LEFT SIDE
              ========================= */}

              <div className="duro-detail-left">


                {/* MAIN IMAGE */}

                <div className="duro-detail-image">

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

                <div className="duro-image-thumbnails">

                  {selectedProduct.images.map(
                    (image, index) => (

                      <button
                        key={index}

                        className={`duro-thumbnail ${
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

              <div className="duro-detail-info">


                {/* PRODUCT NAME */}

                <h2>
                  {selectedProduct.name}
                </h2>



                {/* PRODUCT CODE */}

                <p className="duro-product-code">

                  Product Code:{' '}

                  {selectedProduct.productCode}

                </p>



                {/* AVAILABILITY */}

                <div className="duro-availability">

                  ● {selectedProduct.availability}

                </div>



                {/* DESCRIPTION */}

                <p className="duro-detail-description">

                  {selectedProduct.description}

                </p>



                {/* PRICE */}

                <div className="duro-detail-price">

                  {selectedProduct.price}

                </div>



                {/* BUTTONS */}

                <div className="duro-detail-buttons">


                  <button className="duro-quote-button">

                    Request a Quote

                  </button>



                  <button className="duro-enquiry-button">

                    Add to Enquiry

                  </button>


                </div>



                {/* =========================
                    TECHNICAL SPECIFICATIONS
                ========================= */}

                <div className="duro-specifications">


                  <h3>

                    ⚙ Technical Specifications

                  </h3>



                  {selectedProduct.specifications?.map(
                    (spec) => (

                      <div
                        className="duro-spec-row"

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


export default DuroMats