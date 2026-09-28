import { createContext, useContext, useState } from 'react'

const EnquiryContext = createContext(null)

const STORAGE_KEY = 'alfa-enquiry-cart'

export function EnquiryProvider({ children }) {

  // Load saved enquiry cart when app starts
  const [items, setItems] = useState(() => {
    try {
      const savedItems = localStorage.getItem(STORAGE_KEY)

      return savedItems ? JSON.parse(savedItems) : []
    } catch (error) {
      console.error('Failed to load enquiry cart:', error)
      return []
    }
  })

  // Save cart whenever items change
  const saveItems = (newItems) => {
    setItems(newItems)

    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(newItems)
      )
    } catch (error) {
      console.error('Failed to save enquiry cart:', error)
    }
  }

  // -----------------------------------------
  // UNIQUE PRODUCT KEY
  // -----------------------------------------

  const getProductKey = (product) => {
    if (!product) return null

    if (product.id !== undefined && product.id !== null) {
      return `id-${product.id}`
    }

    if (product.productCode) {
      return `code-${product.productCode}`
    }

    if (product.slug) {
      return `slug-${product.slug}`
    }

    if (product.name) {
      return `name-${product.name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-')
      }`
    }

    return null
  }

  // -----------------------------------------
  // ADD TO ENQUIRY
  // -----------------------------------------

  const addToEnquiry = (
    product,
    quantity = 1,
    message = ''
  ) => {

    if (!product) {
      console.error(
        'Cannot add product: product is missing'
      )
      return
    }

    const productKey = getProductKey(product)

    if (!productKey) {
      console.error(
        'Cannot add product: no unique identifier',
        product
      )
      return
    }

    setItems((currentItems) => {

      const existingItem = currentItems.find(
        (item) => item.productKey === productKey
      )

      let newItems

      // Product already exists
      if (existingItem) {

        newItems = currentItems.map((item) =>
          item.productKey === productKey
            ? {
                ...item,
                quantity:
                  item.quantity + quantity,
                message:
                  message || item.message,
              }
            : item
        )

      } else {

        // New product
        newItems = [
          ...currentItems,
          {
            product,
            productKey,
            quantity,
            message,
          },
        ]
      }

      // Save to localStorage
      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(newItems)
        )
      } catch (error) {
        console.error(
          'Failed to save enquiry cart:',
          error
        )
      }

      return newItems
    })
  }

  // -----------------------------------------
  // REMOVE PRODUCT
  // -----------------------------------------

  const removeFromEnquiry = (productKey) => {

    setItems((currentItems) => {

      const newItems = currentItems.filter(
        (item) =>
          item.productKey !== productKey
      )

      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(newItems)
        )
      } catch (error) {
        console.error(
          'Failed to save enquiry cart:',
          error
        )
      }

      return newItems
    })
  }

  // -----------------------------------------
  // UPDATE QUANTITY
  // -----------------------------------------

  const updateQuantity = (
    productKey,
    quantity
  ) => {

    if (quantity < 1) return

    setItems((currentItems) => {

      const newItems = currentItems.map(
        (item) =>
          item.productKey === productKey
            ? {
                ...item,
                quantity,
              }
            : item
      )

      try {
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify(newItems)
        )
      } catch (error) {
        console.error(
          'Failed to save enquiry cart:',
          error
        )
      }

      return newItems
    })
  }

  // -----------------------------------------
  // CLEAR ENQUIRY
  // -----------------------------------------

  const clearEnquiry = () => {

    setItems([])

    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch (error) {
      console.error(
        'Failed to clear enquiry cart:',
        error
      )
    }
  }

  // -----------------------------------------
  // TOTAL QUANTITY
  // -----------------------------------------

  const itemCount = items.reduce(
    (total, item) =>
      total + item.quantity,
    0
  )

  return (
    <EnquiryContext.Provider
      value={{
        items,
        itemCount,
        addToEnquiry,
        removeFromEnquiry,
        updateQuantity,
        clearEnquiry,
      }}
    >
      {children}
    </EnquiryContext.Provider>
  )
}

// -----------------------------------------
// CUSTOM HOOK
// -----------------------------------------

export function useEnquiry() {

  const context =
    useContext(EnquiryContext)

  if (!context) {
    throw new Error(
      'useEnquiry must be used inside EnquiryProvider'
    )
  }

  return context
}