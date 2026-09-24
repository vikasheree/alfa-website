import apiClient from "./apiClient";

export function getDivisions() {
  return apiClient("/divisions");
}

export function getDivisionById(id) {
  return apiClient(`/divisions/${id}`);
}
