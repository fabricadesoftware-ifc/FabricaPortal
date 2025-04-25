import { defineStore } from 'pinia'
import { MembersService } from '@/services'
import { reactive } from 'vue'

export const useMembersStore = defineStore('members', () => {
  const state = reactive({
    members: [],
    selectedMember: null,
    searchedMembers: [],
    error: false,
    isLoading: false,
  })

  const getMembers = async () => {
    try {
      state.isLoading = true
      const members =  await MembersService.getMembers()
      state.members = members
    } catch (error) {
      state.error = true
    } finally {
      state.isLoading = false
    }
  }

  const getMemberById = async (id) => {
    try {
      state.isLoading = true
      const selectedMember = await MembersService.getMemberById(id)
      state.selectedMember = selectedMember
    } catch (error) {
      state.error = true
    } finally {
      state.isLoading = false
    }
  }

  const searchMembers = async (type, name) => {
    try {
      state.isLoading = true
      const members = await MembersService.searchMember(type, name)
      state.members = members
    } catch (error) {
      state.error = true
    } finally {
      state.isLoading = false
    }
  }


  return {
    state,
    getMembers,
    getMemberById,
    searchMembers,
  }
})
