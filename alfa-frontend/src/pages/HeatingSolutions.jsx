import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './HeatingSolutions.css'
import heatingBanner from '../assets/HEATER/Heating Banner.png'
import heatingBannerMobile from '../assets/HEATER/Heating Banner R.png'
import { useEnquiry } from '../context/EnquiryContext'
import RequestQuoteModal from '../components/RequestQuoteModal'




const heatingImageFiles = import.meta.glob(
  '../assets/HEATER/**/*.{webp,png,jpg,jpeg}',
  {
    eager: true,
    import: 'default'
  }
)

function HeatingSolutions() {

  const [selectedCategory, setSelectedCategory] = useState('CERAMIC BAND HEATER')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [heatingData, setHeatingData] = useState(null)
  const [searchParams, setSearchParams] = useSearchParams()
  const { addToEnquiry } = useEnquiry()
  const [showQuoteForm, setShowQuoteForm] = useState(false)

useEffect(() => {
  async function loadHeatingData() {
    try {
      const response = await fetch(
        'http://localhost:8080/api/divisions/2'
      )

      if (!response.ok) {
        throw new Error('Failed to load Heating Solutions')
      }

      const data = await response.json()

      console.log('HEATING DIVISION:', data)

      setHeatingData(data)
    } catch (error) {
      console.error('Failed to load Heating Solutions:', error)
    }
  }

  loadHeatingData()
}, [])

const getHeatingImage = (imageUrl) => {
  const imagePath = Object.keys(heatingImageFiles).find(
    path => path.endsWith(`/HEATER/${imageUrl}`)
  )

  return imagePath ? heatingImageFiles[imagePath] : ''
}

  const categories = (heatingData?.categories || [])
  .filter(category => category.isActive)
  .sort((a, b) => a.displayOrder - b.displayOrder)
  .map(category => category.name)

const selectedCategoryData = heatingData?.categories?.find(
  category => category.name === selectedCategory
)

const backendProducts = selectedCategoryData?.products || []

const heatingProducts = backendProducts.map(product => ({
  id: product.id,
  slug: product.slug,
  name: product.name,

 images: (product.images || [])
  .sort((a, b) => a.displayOrder - b.displayOrder)
  .map(image => getHeatingImage(image.imageUrl)),

  productCode: product.productCode,

  availability: product.isInStock
    ? 'In Stock'
    : 'Out of Stock',

  price:
    product.price !== null && product.price !== undefined
      ? `₹ ${product.price}${product.priceUnit ? `/${product.priceUnit}` : ''}`
      : 'Price on Request',

  description:
    product.description || product.shortDescription || '',

  specifications: (product.specifications || [])
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .map(spec => ({
      label: spec.specName,
      value: spec.specValue
    }))
}))

  // Get product from URL
  const productSlug = searchParams.get('product')

let urlProduct = null
let urlCategory = null

heatingData?.categories?.forEach((category) => {
  const product = category.products?.find(
    item => item.slug === productSlug
  )

  if (product) {
    urlCategory = category.name

    urlProduct = {
  id: product.id,
  slug: product.slug,
  name: product.name,

      images: (product.images || [])
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .map(image => getHeatingImage(image.imageUrl)),

      productCode: product.productCode,

      availability: product.isInStock
        ? 'In Stock'
        : 'Out of Stock',

      price:
        product.price !== null && product.price !== undefined
          ? `₹ ${product.price}${product.priceUnit ? `/${product.priceUnit}` : ''}`
          : 'Price on Request',

      description:
        product.description || product.shortDescription || '',

      specifications: (product.specifications || [])
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .map(spec => ({
          label: spec.specName,
          value: spec.specValue
        }))
    }
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

              {heatingProducts.map((product) => (

                <div
                  className="heating-product-card"

                 key={product.id} 

                  onClick={() => {

                    setSearchParams({
  product: product.slug
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


                  <button
  type="button"
  className="heating-quote-button"
  onClick={() => setShowQuoteForm(true)}
>
  Request a Quote
</button>



                 <button
  type="button"
  className="heating-enquiry-button"
  onClick={() => addToEnquiry(currentProduct, 1)}
>
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

<RequestQuoteModal
  isOpen={showQuoteForm}
  product={currentProduct}
  onClose={() => setShowQuoteForm(false)}
  theme="orange"
/>
    </div>

  )

}


export default HeatingSolutions