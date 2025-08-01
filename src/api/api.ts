// src/api/api.ts
import axios from "axios";

const baseURL = "https://kitsu.io/api/edge";

const api = axios.create({
  baseURL,
  headers: {
    "Accept": "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json"
  },
  timeout: 10000
});

// Add response interceptor for error handling
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      console.error('API Error:', error.response.status, error.response.data);
    } else if (error.request) {
      console.error('API Request Error:', error.request);
    } else {
      console.error('API Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;