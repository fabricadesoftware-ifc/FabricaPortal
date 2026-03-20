import api from '@/plugins/axios'
import type { IMember } from '@/types/member'
import { AxiosError } from 'axios'

class MembersService {
  async getMembers(): Promise<IMember[] | AxiosError> {
    try {
      const response = await api.get<IMember[]>('/members/')
      return response.data
    } catch (error) {
      return error as AxiosError
    }
  }

  async getMemberById(id: string | number): Promise<IMember | AxiosError> {
    try {
      const response = await api.get<IMember>(`/members/${id}/`)
      return response.data
    } catch (error) {
      return error as AxiosError
    }
  }

  async searchMember(type?: string, name?: string): Promise<IMember[] | AxiosError> {
    try {
      const params = new URLSearchParams()

      if (type && type !== 'Todos') {
        params.append('type', type)
      }

      if (name) {
        params.append('name', name)
      }

      const response = await api.get<IMember[]>('/members/', { params })
      return response.data
    } catch (error) {
      return error as AxiosError
    }
  }
}

export default new MembersService()
