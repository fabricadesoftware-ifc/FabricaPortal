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

  async searchProject(name, areas) {
    const areasJoin = areas.join(',')
    console.log(areasJoin)
    let url = ``

    if (name && areas) {
      url = `/projects/?name=${name}&areas=${areasJoin}`
    } else if (name) {
      url = `/projects/?name=${name}`
    } else if (areas) {
      url = `/projects/?areas=${areasJoin}`
    }

    try {
      const response = await api.get(url)
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

export default new ProjectsService()
