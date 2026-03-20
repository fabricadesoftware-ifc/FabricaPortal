import api from '@/plugins/axios'
import type { INew } from '@/types/news'
import type { AxiosError } from 'axios'

class NewsServices {
  /**
   * @returns
   */
  async getNews(): Promise<INew[] | AxiosError> {
    try {
      const response = await api.get<INew[]>('/news/')
      return response.data
    } catch (error) {
      console.error('Erro ao buscar notícias:', error)
      return error as AxiosError
    }
  }

  /**
   * @param id
   * @returns
   */
  async getNewById(id: string | number): Promise<INew | AxiosError> {
    try {
      const response = await api.get<INew>(`/news/${id}/`)
      return response.data
    } catch (error) {
      console.error(`Erro ao buscar notícia com ID ${id}:`, error)
      return error as AxiosError
    }
  }
}

export default new NewsServices()
