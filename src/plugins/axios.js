import axios from "axios";
import { useLoadingStore } from "@/stores";

const API_URL = import.meta.env.VITE_API_URL + "/";

console.log("API_URL:", API_URL);

const api = axios.create({
  baseURL: API_URL?.endsWith("/") ? API_URL.slice(0, -1) : API_URL, 
});

api.interceptors.request.use((config) => {
  const loadingStore = useLoadingStore();
  loadingStore.startLoading();
  return config;
});

api.interceptors.response.use(
  (response) => {
    const loadingStore = useLoadingStore();
    loadingStore.stopLoading();
    return response;
  },
  (error) => {
    const loadingStore = useLoadingStore();
    loadingStore.stopLoading();
    return Promise.reject(error);
  }
);


export default api;
