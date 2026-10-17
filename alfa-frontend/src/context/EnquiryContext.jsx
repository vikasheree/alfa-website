import { useEffect, useState } from 'react'
import { EnquiryContext } from './EnquiryContextBase'
import {
  addEnquiryItem,
  getEnquiryItemCount,
  loadEnquiryItems,
  removeEnquiryItem,
  saveEnquiryItems,
  updateEnquiryQuantity,
} from './enquiryCartState'

export function EnquiryProvider({ children }) {
  const [items, setItems] = useState(loadEnquiryItems)

  useEffect(() => {
    saveEnquiryItems(items)
  }, [items])

  const addToEnquiry = (product, quantity = 1, message = '') => {
    setItems((currentItems) => addEnquiryItem(currentItems, product, quantity, message))
  }

  const removeFromEnquiry = (productKey) => {
    setItems((currentItems) => removeEnquiryItem(currentItems, productKey))
  }

  const updateQuantity = (productKey, quantity) => {
    setItems((currentItems) => updateEnquiryQuantity(currentItems, productKey, quantity))
  }

  const clearEnquiry = () => setItems([])
  const itemCount = getEnquiryItemCount(items)

  return (
    <EnquiryContext.Provider
      value={{ items, itemCount, addToEnquiry, removeFromEnquiry, updateQuantity, clearEnquiry }}
    >
      {children}
    </EnquiryContext.Provider>
  )
}
