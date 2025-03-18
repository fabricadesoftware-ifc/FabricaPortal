import { defineStore } from 'pinia'
import { ProjectsService } from '@/services'
import { reactive, computed } from 'vue'

export const useProjectsStore = defineStore('projects', () => {
  const state = reactive({
    projects: [],
    selectedProject: null,
    filteredProjects: [],
    error: false,
    isLoading: false
  })

  const getProjects = async () => {
    try {
      state.isLoading = true
      const projects = await ProjectsService.getProjects()
      state.projects = projects
    } catch (error) {
      state.error = true
    } finally {
      state.isLoading = false
    }
  }

  const getProjectById = async (id) => {
    try {
      state.isLoading = true
      const selectedProject = await ProjectsService.getProjectById(id)
      state.selectedProject = selectedProject
    } catch (error) {
      state.error = true
    } finally {
      state.isLoading = false
    }
  }

  const filterProjectsByMemberId = async (id) => {
    try {
      state.isLoading = true
      const projects = await ProjectsService.filterProjectsByMemberId(id)
      state.filteredProjects = projects
    } catch (error) {
      state.error = true
    } finally {
      state.isLoading = false
    }
  }

  const searchProject = async (name, areas) => {
    try {
      state.isLoading = true
      const projects = await ProjectsService.searchProject(name, areas)
      state.projects = projects
    } catch (error) {
      state.error = true
    } finally {
      state.isLoading
    }
  }

  // 🔹 Calcular os projetos da página atual
  const paginatedProjects = computed(() => {
    const start = (state.currentPage - 1) * state.itemsPerPage
    const end = start + state.itemsPerPage
    return state.projects.slice(start, end)
  })

  // 🔹 Calcular número total de páginas
  const totalPages = computed(() => Math.ceil(state.projects.length / state.itemsPerPage))

  // 🔹 Alterar a página
  const changePage = (page) => {
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
    changePage
  }
})
