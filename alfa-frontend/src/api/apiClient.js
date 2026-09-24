const API_BASE_URL = "http://localhost:8080/api";

async function apiClient(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    let errorMessage = "Something went wrong";

    try {
      const errorData = await response.json();
      errorMessage = errorData.message || errorMessage;
    } catch {
      // Response may not contain JSON
    }

    throw new Error(errorMessage);
  }

  // Handle responses with no body
  if (response.status === 204) {
    return null;
  }

  return response.json();
}

export default apiClient;