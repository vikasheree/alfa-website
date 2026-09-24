import apiClient from "./apiClient";

export function getCategories() {
  return apiClient("/categories");
}

export function getCategoryById(id) {
  return apiClient(`/categories/${id}`);
}