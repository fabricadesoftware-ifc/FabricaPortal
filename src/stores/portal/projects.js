import { defineStore } from 'pinia'
import { ProjectsService } from '@/services'
import { reactive } from 'vue'

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

  return {
    state,
    getProjects,
    getProjectById,
    filterProjectsByMemberId
  }
})
