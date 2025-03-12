import api from '@/plugins/axios'

class ProjectsService {
  async getProjects() {
    try {
      const response = await api.get('/projects/')
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async getProjectById(id) {
    try {
      const response = await api.get(`/projects/${id}/`)
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async filterProjectsByMemberId(id) {
    try {
      const response = await api.get(`/projects/?member_id=${id}`)
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }


}

export default new ProjectsService()
