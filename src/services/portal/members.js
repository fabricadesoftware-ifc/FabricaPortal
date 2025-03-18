import api from '@/plugins/axios'

class MembersService {
  async getMembers() {
    try {
      const response = await api.get('/members/')
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async getMemberById(id) {
    try {
      const response = await api.get(`/members/${id}/`)
      return response.data
    } catch (error) {
      console.error(error)
      return null
    }
  }

  async searchMember(type, name) {
    try {
      if (type && name) {
        const response = await api.get(`/members/?type=${type}&name=${name}`)
        return response.data
      } else if (type != 'Todos' && type) {
        const response = await api.get(`/members/?type=${type}`)
        return response.data
      } else if (name) {
        const response = await api.get(`/members/?name=${name}`)
        return response.data
      }
      else if(type == 'Todos') {
        const response = await api.get(`/members/`)
        return response.data
      }
    } catch (error) {
      console.error(error)
      return null
    }
  }
}

export default new MembersService()
