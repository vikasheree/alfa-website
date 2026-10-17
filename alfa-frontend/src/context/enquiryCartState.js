export const ENQUIRY_STORAGE_KEY = 'alfa-enquiry-cart'

export function getProductKey(product) {
  if (!product) return null
  if (product.id !== undefined && product.id !== null) return `id-${product.id}`
  if (product.productCode) return `code-${product.productCode}`
  if (product.slug) return `slug-${product.slug}`
  if (product.name) return `name-${product.name.trim().toLowerCase().replace(/\s+/g, '-')}`
  return null
}

export function normalizeEnquiryItems(items) {
  if (!Array.isArray(items)) return []
  return items.flatMap((item) => {
    if (!item?.product) return []
    const productKey = item.productKey || getProductKey(item.product)
    if (!productKey) return []
    const quantity = Number(item.quantity)
    return [{
      ...item,
      productKey,
      quantity: Number.isSafeInteger(quantity) && quantity > 0 ? quantity : 1,
    }]
  })
}

export function loadEnquiryItems(storage = localStorage) {
  try {
    const savedItems = storage.getItem(ENQUIRY_STORAGE_KEY)
    return normalizeEnquiryItems(savedItems ? JSON.parse(savedItems) : [])
  } catch (error) {
    console.error('Failed to load enquiry cart:', error)
    return []
  }
}

export function saveEnquiryItems(items, storage = localStorage) {
  try {
    if (items.length) storage.setItem(ENQUIRY_STORAGE_KEY, JSON.stringify(items))
    else storage.removeItem(ENQUIRY_STORAGE_KEY)
  } catch (error) {
    console.error('Failed to save enquiry cart:', error)
  }
}

export function addEnquiryItem(items, product, quantity = 1, message = '') {
  const productKey = getProductKey(product)
  if (!productKey) return items
  const requestedQuantity = Number(quantity)
  const safeQuantity = Number.isSafeInteger(requestedQuantity) && requestedQuantity > 0
    ? requestedQuantity
    : 1
  const existingItem = items.find((item) => item.productKey === productKey)
  if (!existingItem) return [...items, { product, productKey, quantity: safeQuantity, message }]

  return items.map((item) => item.productKey === productKey
    ? {
        ...item,
        product,
        quantity: item.quantity + safeQuantity,
        message: message || item.message,
      }
    : item)
}

export function removeEnquiryItem(items, productKey) {
  return items.filter((item) => item.productKey !== productKey)
}

export function updateEnquiryQuantity(items, productKey, quantity) {
  const safeQuantity = Number(quantity)
  if (!Number.isSafeInteger(safeQuantity) || safeQuantity < 1) return items
  return items.map((item) => item.productKey === productKey
    ? { ...item, quantity: safeQuantity }
    : item)
}

export function getEnquiryItemCount(items) {
  return items.reduce((total, item) => total + item.quantity, 0)
}
