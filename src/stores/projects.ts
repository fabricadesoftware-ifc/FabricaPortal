import { defineStore } from 'pinia'
import { reactive, computed } from 'vue'
import ProjectsService from '@/services/projects'
import type { IProject, IProjectsState } from '@/types/project'

export const useProjectsStore = defineStore('projects', () => {
  const state = reactive<IProjectsState>({
    projects: [],
    selectedProject: null,
    filteredProjects: [],
    error: false,
    isLoading: false,
    currentPage: 1,
    itemsPerPage: 6,
  })

  const getProjects = async (): Promise<void> => {
    try {
      state.isLoading = true
      state.error = false
      const projects = await ProjectsService.getProjects()
      if (projects instanceof Error) throw projects
      state.projects = projects || []
    } catch (error) {
      console.error('Erro ao buscar projetos:', error)
      state.error = true
    } finally {
      state.isLoading = false
    }
  }

  const getProjectById = async (id: string | number): Promise<void> => {
    try {
      state.isLoading = true
      state.error = false
      const selectedProject = await ProjectsService.getProjectById(id)
      if (selectedProject instanceof Error) throw selectedProject
      state.selectedProject = selectedProject
    } catch (error) {
      console.error(`Erro ao buscar projeto ${id}:`, error)
      state.error = true
    } finally {
      state.isLoading = false
    }
  }

  const filterProjectsByMemberId = async (id: string | number): Promise<void> => {
    try {
      state.isLoading = true
      state.error = false
      const projects = await ProjectsService.filterProjectsByMemberId(id)
      if (projects instanceof Error) throw projects
      state.filteredProjects = projects || []
    } catch (error) {
      console.error(`Erro ao filtrar projetos por membro ${id}:`, error)
      state.error = true
    } finally {
      state.isLoading = false
    }
  }

  const searchProject = async (name?: string, areas?: string[]): Promise<void> => {
    try {
      state.isLoading = true
      state.error = false
      const projects = await ProjectsService.searchProject(name, areas)
      if (projects instanceof Error) throw projects
      state.projects = projects || []
      state.currentPage = 1
    } catch (error) {
      console.error('Erro na busca de projetos:', error)
      state.error = true
    } finally {
      state.isLoading = false
    }
  }

  const paginatedProjects = computed<IProject[]>(() => {
    const start = (state.currentPage - 1) * state.itemsPerPage
    const end = start + state.itemsPerPage
    return state.projects.slice(start, end)
  })

  const totalPages = computed<number>(() => Math.ceil(state.projects.length / state.itemsPerPage))

  const changePage = (page: number): void => {
    if (page >= 1 && page <= totalPages.value) {
      state.currentPage = page
    }
  }

  return {
    state,
    getProjects,
    getProjectById,
    filterProjectsByMemberId,
    searchProject,
    paginatedProjects,
    totalPages,
    changePage,
  }
})
