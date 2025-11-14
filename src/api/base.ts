// Axios instances configuration for different API endpoints
import axios from "axios";

// Axios instance for main Star Wars API (characters, films, starships)
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

// Axios instance for characters images API
export const apiImages = axios.create({
  baseURL: import.meta.env.VITE_API_IMAGES_URL,
});
