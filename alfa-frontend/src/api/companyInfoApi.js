import apiClient from './apiClient'


export function getCompanyInfo() {
  return apiClient('/company-info')
}