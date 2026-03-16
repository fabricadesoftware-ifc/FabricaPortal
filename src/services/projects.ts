import api from '@/plugins/axios'
import type { IProject } from '@/types/project'
import type { AxiosError } from 'axios'

class ProjectsService {
  async getProjects(): Promise<IProject[] | AxiosError> {
    try {
      const response = await api.get<IProject[]>('/projects/')
      return response.data
    } catch (error) {
      console.error('Erro ao buscar projetos:', error)
      return error as AxiosError
    }
  }

  async getProjectById(id: string | number): Promise<IProject | AxiosError> {
    try {
      const response = await api.get<IProject>(`/projects/${id}/`)
      return response.data
    } catch (error) {
      console.error(`Erro ao buscar projeto ${id}:`, error)
      return error as AxiosError
    }
  }

  async filterProjectsByMemberId(id: string | number): Promise<IProject[] | AxiosError> {
    try {
      const response = await api.get<IProject[]>(`/projects/?member_id=${id}`)
      return response.data
    } catch (error) {
      console.error(`Erro ao filtrar por membro ${id}:`, error)
      return error as AxiosError
    }
  }

  /**
   * @param name
   * @param areas
   */
  async searchProject(name?: string, areas?: string[]): Promise<IProject[] | AxiosError> {
    const params = new URLSearchParams()

    if (name) params.append('name', name)
    if (areas && areas.length > 0) params.append('areas', areas.join(','))

    try {
      const response = await api.get<IProject[]>(`/projects/`, { params })
      return response.data
    } catch (error) {
      console.error('Erro na busca de projetos:', error)
      return error as AxiosError
    }
  }
}

export default new ProjectsService()
