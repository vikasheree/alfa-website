import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './SolarEquipments.css'
import solarBanner from '../assets/SOLAR/Solar Banner.png'
import solarBannerMobile from '../assets/SOLAR/Solar Banner R.png'
import { useEnquiry } from '../context/EnquiryContext'
import RequestQuoteModal from '../components/RequestQuoteModal'


const solarImageFiles = import.meta.glob(
  '../assets/SOLAR/**/*.{webp,png,jpg,jpeg}',
  {
    eager: true,
    import: 'default'
  }
)

function SolarEquipments() {
  const [showQuoteForm, setShowQuoteForm] = useState(false)

  const { addToEnquiry } = useEnquiry()

  const [selectedCategory, setSelectedCategory] = useState('LED Flood Light')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)

  const [searchParams, setSearchParams] = useSearchParams()

  const [solarData, setSolarData] = useState(null)


  useEffect(() => {
  async function loadSolarData() {
    try {
      const response = await fetch(
        'http://localhost:8080/api/divisions/4'
      )

      if (!response.ok) {
        throw new Error('Failed to load Solar Equipments')
      }

      const data = await response.json()

      console.log('SOLAR DIVISION:', data)

      setSolarData(data)
    } catch (error) {
      console.error('Failed to load Solar Equipments:', error)
    }
  }

  loadSolarData()
}, [])

const getSolarImage = (imageUrl) => {
  const imagePath = Object.keys(solarImageFiles).find(
    path => path.endsWith(`/SOLAR/${imageUrl}`)
  )

  return imagePath ? solarImageFiles[imagePath] : ''
}
 const categories = (solarData?.categories || [])
  .filter(category => category.isActive)
  .sort((a, b) => a.displayOrder - b.displayOrder)
  .map(category => category.name)


const selectedCategoryData = solarData?.categories?.find(
  category => category.name === selectedCategory
)

const backendProducts = selectedCategoryData?.products || []

const solarProducts = backendProducts.map(product => ({
  slug: product.slug,
  name: product.name,

  images: (product.images || [])
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .map(image => getSolarImage(image.imageUrl)),

  productCode: product.productCode,

  availability: product.isInStock ? 'In Stock' : 'Out of Stock',

  price:
    product.price !== null && product.price !== undefined
      ? `₹ ${product.price}${product.priceUnit ? `/${product.priceUnit}` : ''}`
      : 'Price on Request',

  description: product.description || product.shortDescription || '',

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

solarData?.categories?.forEach((category) => {
  const product = category.products?.find(
    item => item.slug === productSlug
  )

  if (product) {
    urlCategory = category.name

    urlProduct = {
      name: product.name,

      images: (product.images || [])
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .map(image => getSolarImage(image.imageUrl)),

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

              {solarProducts.map((product, index) => (

                <div
                  className="solar-product-card"

                  key={product.name}

                  onClick={() => {

                    setSearchParams({
  product: product.slug
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


                  <button
  type="button"
  className="solar-quote-button"
  onClick={() => setShowQuoteForm(true)}
>
  Request a Quote
</button>



                  <button
  type="button"
  className="solar-enquiry-button"
  onClick={() => addToEnquiry(currentProduct, 1)}
>
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

      <RequestQuoteModal
        isOpen={showQuoteForm}
        product={currentProduct}
        onClose={() => setShowQuoteForm(false)}
        theme="yellow"
      />

    </div>

  )

}

export default SolarEquipments