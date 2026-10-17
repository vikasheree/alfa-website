import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import logo from '../assets-optimized/HOME/Alfa Logo.webp'

const pages = {
  '/': {
    title: 'ALFA Control Systems | Industrial Automation, Heating, Solar & Duro Mats',
    description: 'Explore industrial automation, heating solutions, Duro industrial mats and solar equipment from ALFA Control Systems.',
    name: 'Home',
  },
  '/industrial-automation': {
    title: 'Industrial Automation Products | ALFA Control Systems',
    description: 'Browse industrial automation products including temperature controllers, sensors, process instruments and control components.',
    name: 'Industrial Automation',
  },
  '/heating': {
    title: 'Industrial Heating Solutions | ALFA Control Systems',
    description: 'Explore industrial heaters and heating solutions for process and manufacturing applications from ALFA Control Systems.',
    name: 'Heating Solutions',
  },
  '/duro-mats': {
    title: 'Industrial Floor Mats | Duro Mats by ALFA Control Systems',
    description: 'Browse Duro industrial floor mats for workplace, commercial and industrial flooring applications.',
    name: 'Duro Mats',
  },
  '/solar': {
    title: 'Solar Equipment | ALFA Control Systems',
    description: 'Explore solar lighting and related solar equipment from ALFA Control Systems.',
    name: 'Solar Equipment',
  },
}

const setMeta = (key, value, attribute = 'name') => {
  let element = document.head.querySelector(`meta[${attribute}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', value)
}

function SeoManager() {
  const location = useLocation()

  useEffect(() => {
    const page = pages[location.pathname]
    const title = page?.title || 'Page not found | ALFA Control Systems'
    const description = page?.description || 'The requested page could not be found on ALFA Control Systems.'
    const siteUrl = (import.meta.env.VITE_SITE_URL || window.location.origin).replace(/\/+$/, '')
    const canonicalUrl = `${siteUrl}${location.pathname}${location.search}`
    const canonical = document.head.querySelector('link[rel="canonical"]') || document.createElement('link')
    canonical.rel = 'canonical'
    canonical.href = canonicalUrl
    if (!canonical.parentNode) document.head.appendChild(canonical)

    document.title = title
    setMeta('description', description)
    setMeta('robots', page ? 'index, follow' : 'noindex, follow')
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:url', canonicalUrl, 'property')
    setMeta('og:site_name', 'ALFA Control Systems', 'property')
    setMeta('og:image', `${siteUrl}${logo}`, 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', `${siteUrl}${logo}`)

    const graph = [
      {
        '@type': 'Organization',
        '@id': `${siteUrl}/#organization`,
        name: 'ALFA Control Systems',
        url: `${siteUrl}/`,
        logo: { '@type': 'ImageObject', url: `${siteUrl}${logo}` },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: `${siteUrl}/`,
        name: 'ALFA Control Systems',
        publisher: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
          ...(location.pathname === '/' ? [] : [{
            '@type': 'ListItem', position: 2, name: page?.name || 'Page not found', item: canonicalUrl,
          }]),
        ],
      },
    ]
    let schema = document.getElementById('alfa-site-schema')
    if (!schema) {
      schema = document.createElement('script')
      schema.id = 'alfa-site-schema'
      schema.type = 'application/ld+json'
      document.head.appendChild(schema)
    }
    schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
  }, [location.pathname, location.search])

  return null
}

export function ProductStructuredData({ product }) {
  useEffect(() => {
    if (!product) return undefined
    let script = document.getElementById('alfa-product-schema')
    if (!script) {
      script = document.createElement('script')
      script.id = 'alfa-product-schema'
      script.type = 'application/ld+json'
      document.head.appendChild(script)
    }
    const productData = {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      brand: { '@type': 'Brand', name: 'ALFA Control Systems' },
    }
    if (product.description) productData.description = product.description
    if (product.productCode) productData.sku = product.productCode
    const images = (product.images || []).filter(Boolean)
    if (images.length) productData.image = images
    script.textContent = JSON.stringify(productData)
    return () => script.remove()
  }, [product])

  return null
}

export default SeoManager
