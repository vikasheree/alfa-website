import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import './DuroMats.css'
import duroBanner from '../assets/DURO/Duro Banner.png'
import duroBannerMobile from '../assets/DURO/Duro Banner R.png'
import { useEnquiry } from '../context/EnquiryContext'
import RequestQuoteModal from '../components/RequestQuoteModal'
import { getDivisionById } from '../api/divisionApi'

const duroImageFiles = import.meta.glob(
  '../assets/DURO/**/*.{webp,png,jpg,jpeg}',
  {
    eager: true,
    import: 'default'
  }
)

function DuroMats() {
  const [showQuoteForm, setShowQuoteForm] = useState(false)
  const { addToEnquiry } = useEnquiry()
const getDuroImage = (imageUrl) => {
  const imagePath = Object.keys(duroImageFiles).find(
    path => path.endsWith(`/DURO/${imageUrl}`)
  )

  return imagePath ? duroImageFiles[imagePath] : ''
}
  const [selectedCategory, setSelectedCategory] = useState('DURO FLOOR MATS')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)

  const [duroData, setDuroData] = useState(null)

  const [searchParams, setSearchParams] = useSearchParams()

useEffect(() => {
  async function loadDuroData() {
    try {
      const data = await getDivisionById(3)

      console.log('DURO DIVISION:', data)

      setDuroData(data)
    } catch (error) {
      console.error('Failed to load Duro Mats:', error)
    }
  }

  loadDuroData()
}, [])

  const categories = (duroData?.categories || [])
  .filter(category => category.isActive)
  .sort((a, b) => a.displayOrder - b.displayOrder)
  .map(category => category.name)


  const selectedCategoryData = duroData?.categories?.find(
  category => category.name === selectedCategory
)

const backendProducts = selectedCategoryData?.products || []

const duroProducts = backendProducts.map(product => ({
  id: product.id,
  name: product.name,

  images: (product.images || [])
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .map(image => getDuroImage(image.imageUrl)),

  productCode: product.productCode,

  availability: product.isInStock ? 'In Stock' : 'Out of Stock',

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

duroData?.categories?.forEach((category) => {

  const product = category.products?.find(
    item => item.slug === productSlug
  )

  if (product) {
    urlCategory = category.name

    urlProduct = {
  id: product.id,
  name: product.name,

      images: (product.images || [])
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .map(image => getDuroImage(image.imageUrl)),

      productCode: product.productCode,

      availability: product.isInStock
        ? 'In Stock'
        : 'Out of Stock',

      price:
        product.price !== null && product.price !== undefined
          ? `₹ ${product.price}${product.priceUnit ? `/${product.priceUnit}` : ''}`
          : 'Price on Request',

      description:
        product.description ||
        product.shortDescription ||
        '',

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

    <div className="duro-page">


      {/* =========================
          DURO MATS BANNER
      ========================= */}

      <section className="duro-banner">
  <picture>
    <source
      media="(max-width: 768px)"
      srcSet={duroBannerMobile}
    />

    <img
      src={duroBanner}
      alt="Duro Mats"
    />
  </picture>
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

            <h2 className="duro-category-title">
              {selectedCategory}
            </h2>


            <div className="duro-product-grid">

              {duroProducts.map((product) => (

                <div
                  className="duro-product-card"

                  key={product.name}

                  onClick={() => {

                    setSearchParams({
                      product: createSlug(product.name)
                    })

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


                    <p className="duro-product-price">
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



        {/* =========================
            PRODUCT DETAIL
        ========================= */}

        {currentProduct && (

          <div className="duro-product-detail">


            {/* BACK BUTTON */}

            <button
              className="duro-back-button"

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



            <div className="duro-detail-container">


              {/* =========================
                  LEFT SIDE
              ========================= */}

              <div className="duro-detail-left">


                {/* MAIN IMAGE */}

                <div className="duro-detail-image">

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

                <div className="duro-image-thumbnails">

                  {currentProduct.images.map(
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

              <div className="duro-detail-info">


                {/* PRODUCT NAME */}

                <h2>
                  {currentProduct.name}
                </h2>



                {/* PRODUCT CODE */}

                <p className="duro-product-code">

                  Product Code:{' '}

                  {currentProduct.productCode}

                </p>



                {/* AVAILABILITY */}

                <div className="duro-availability">

                  ● {currentProduct.availability}

                </div>



 {/* PRICE */}

                <div className="duro-detail-price">

                  {currentProduct.price}

                </div>

                
{/* BUTTONS */}

                <div className="duro-detail-buttons">


                 <button
  type="button"
  className="duro-quote-button"
  onClick={() => setShowQuoteForm(true)}
>
  Request a Quote
</button>


                  <button
  type="button"
  className="duro-enquiry-button"
  onClick={() => addToEnquiry(currentProduct, 1)}
>
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



                  {currentProduct.specifications?.map(
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

                {/* DESCRIPTION */}

                <p className="duro-detail-description">

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
        theme="blue"
      />

    </div>

  )

}

export default DuroMats