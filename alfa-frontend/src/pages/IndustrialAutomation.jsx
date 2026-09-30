import { useSearchParams } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { getProductImage } from '../utils/productImageMap'

import './IndustrialAutomation.css'
import industrialBanner from '../assets/INDUSTRIAL/Industrial Banner.png'
import industrialBannerMobile from '../assets/INDUSTRIAL/Industrial Banner R.png'
import { useEnquiry } from '../context/EnquiryContext'
import RequestQuoteModal from '../components/RequestQuoteModal'
import { getDivisionById } from '../api/divisionApi'


function IndustrialAutomation() {
  const [selectedCategory, setSelectedCategory] = useState('TEMPERATURE CONTROLLER')
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [showQuoteForm, setShowQuoteForm] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams()

  const [categories, setCategories] = useState([])
const [loadingCategories, setLoadingCategories] = useState(true)
const [categoryError, setCategoryError] = useState('')
const [categoryData, setCategoryData] = useState([])
const { addToEnquiry } = useEnquiry()



useEffect(() => {
  async function loadCategories() {
    try {
      setLoadingCategories(true)
      setCategoryError('')

      const division = await getDivisionById(1)

      console.log("INDUSTRIAL DIVISION:", division)

      const industrialCategories = (division.categories || [])
        .filter(category => category.isActive)
        .sort((a, b) => a.displayOrder - b.displayOrder)

      setCategoryData(industrialCategories)

      const categoryNames = industrialCategories.map(
        category => category.name
      )

      setCategories(categoryNames)

      if (categoryNames.length > 0) {
        setSelectedCategory(current => {
          return categoryNames.includes(current)
            ? current
            : categoryNames[0]
        })
      }

    } catch (error) {
      console.error('Failed to load Industrial categories:', error)
      setCategoryError('Unable to load categories.')
    } finally {
      setLoadingCategories(false)
    }
  }

  loadCategories()
}, [])


  const products = {}

categoryData.forEach(category => {
  const categoryName = category.name.toUpperCase()

  products[categoryName] = (category.products || [])
    .filter(product => product.isActive)
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .map(product => ({
  id: product.id,
  name: product.name,

      images: (product.images || [])
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .map(image => getProductImage(image.imageUrl))
        .filter(Boolean),

      productCode: product.productCode,

      availability: product.isInStock
        ? 'In Stock'
        : 'Out of Stock',

      description: product.description,

      price: `₹ ${product.price} / ${product.priceUnit}`,

      specifications: (product.specifications || [])
        .sort((a, b) => a.displayOrder - b.displayOrder)
        .map(spec => ({
          label: spec.specName,
          value: spec.specValue,
        })),
    }))
})


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

  {loadingCategories && (
    <p>Loading categories...</p>
  )}

  {categoryError && (
    <p>{categoryError}</p>
  )}

  {!loadingCategories && !categoryError && categories.map((category) => (
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
  {categoryData
    .find(
      (category) =>
        category.name.toUpperCase() === selectedCategory.toUpperCase()
    )
    ?.products?.map((product) => (
      <div
        className="industrial-product-card"
        key={product.id}
        onClick={() => {
          setSearchParams({
            product: createSlug(product.name),
          })
          setSelectedImage(0)
        }}
      >
        <div className="industrial-product-image">
          <img
            src={
              product.images?.length > 0
                ? getProductImage(product.images[0].imageUrl)
                : ''
            }
            alt={product.name}
          />
        </div>

        <div className="industrial-product-info">
          <h3>{product.name}</h3>

          <p className="industrial-product-price">
            {product.price
              ? `₹ ${product.price} / ${product.priceUnit}`
              : 'Contact for Price'}
          </p>

          <p className="industrial-product-code">
            Product Code: {product.productCode}
          </p>

          <p className="industrial-product-availability">
            {product.isInStock ? 'In Stock' : 'Out of Stock'}
          </p>
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


        


        


       <div className="industrial-detail-buttons">
  <button
    className="industrial-quote-button"
    onClick={() => setShowQuoteForm(true)}
  >
    Request a Quote
  </button>

  <button
    className="industrial-enquiry-button"
    onClick={() => addToEnquiry(currentProduct, 1)}
  >
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
<RequestQuoteModal
  isOpen={showQuoteForm}
  product={currentProduct}
  onClose={() => setShowQuoteForm(false)}
  theme="green"
/>

      </section>

    </div>
  )
}
export default IndustrialAutomation
