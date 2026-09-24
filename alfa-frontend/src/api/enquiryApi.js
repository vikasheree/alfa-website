import apiClient from "./apiClient";

export function createEnquiry(enquiryData) {
  return apiClient("/enquiries", {
    method: "POST",
    body: JSON.stringify(enquiryData),
  });
}