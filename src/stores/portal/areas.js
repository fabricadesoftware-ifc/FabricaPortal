import { defineStore } from 'pinia'
import { AreasService } from '@/services'
import { reactive } from 'vue'

export const useAreasStore = defineStore('areas', () => {
  const state = reactive({
    areas: [],
    error: false,
    isLoading: false
  })

  const getAreas = async () => {
    try {
      state.isLoading = true
      const areas = await AreasService.getAreas()
      state.areas = areas
    } catch (error) {
      state.error = true
    } finally {
      state.isLoading = false
    }
  }

  const getAreaById = async (id) => {
    try {
      state.isLoading = true
      const selectedArea = await AreasService.getAreaById(id)
      state.selectedArea = selectedArea
    } catch (error) {
      state.error = true
    } finally {
      state.isLoading = false
    }
  }

  return {
    state,
    getAreas,
    getAreaById
  }
})
