import axios, {
  type AxiosInstance,
  type InternalAxiosRequestConfig,
  type AxiosResponse,
} from 'axios'
import { useLoadingStore } from '@/stores/loading'
import type { AxiosError } from 'axios'

const API_URL: string = import.meta.env.VITE_API_URL || ''

const baseURL: string = API_URL.endsWith('/') ? API_URL.slice(0, -1) : API_URL

const api: AxiosInstance = axios.create({
  baseURL,
})

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const loadingStore = useLoadingStore()
    loadingStore.startLoading()
    return config
  },
  (error: AxiosError) => {
    const loadingStore = useLoadingStore()
    loadingStore.stopLoading()
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (response: AxiosResponse) => {
    const loadingStore = useLoadingStore()
    loadingStore.stopLoading()
    return response
  },
  (error: AxiosError) => {
    const loadingStore = useLoadingStore()
    loadingStore.stopLoading()

    if (error.response) {
      console.error('Erro na API:', error.response.status, error.response.data)
    }

    return Promise.reject(error)
  },
)

export default api
