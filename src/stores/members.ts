import { defineStore } from 'pinia'
import MembersService from '@/services/members'
import { reactive } from 'vue'
import type { IMembersState } from '@/types/member'

export const useMembersStore = defineStore('members', () => {
  const state = reactive<IMembersState>({
    members: [],
    selectedMember: null,
    searchedMembers: [],
    error: false,
    isLoading: false,
  })

  const getMembers = async (): Promise<void> => {
    try {
      state.isLoading = true
      state.error = false
      const members = await MembersService.getMembers()
      if (members instanceof Error) throw members
      state.members = members || []
    } catch (error) {
      state.error = true
      console.error('Erro ao carregar membros:', error)
    } finally {
      state.isLoading = false
    }
  }

  const getMemberById = async (id: string | number): Promise<void> => {
    try {
      state.isLoading = true
      state.error = false
      const selectedMember = await MembersService.getMemberById(id)
      if (selectedMember instanceof Error) throw selectedMember
      state.selectedMember = selectedMember
    } catch (error) {
      state.error = true
      console.error(`Erro ao buscar membro ${id}:`, error)
    } finally {
      state.isLoading = false
    }
  }

  const searchMembers = async (type?: string, name?: string): Promise<void> => {
    try {
      state.isLoading = true
      state.error = false
      const members = await MembersService.searchMember(type, name)
      if (members instanceof Error) throw members
      state.members = members || []
    } catch (error) {
      state.error = true
      console.error('Erro na busca de membros:', error)
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
