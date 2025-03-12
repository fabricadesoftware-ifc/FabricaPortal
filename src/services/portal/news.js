import api from '@/plugins/axios'

class NewsServices {
  async getNews() {
    try {
      const response = await api.get('/news/')
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }
  
  async getNewById(id) {
    try {
      const response = await api.get(`/news/${id}/`)
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

export default new NewsServices();
