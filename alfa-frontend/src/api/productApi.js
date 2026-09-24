import apiClient from './apiClient'

export function getProducts() {
  return apiClient('/products')
}