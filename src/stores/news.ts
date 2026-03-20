import { defineStore } from 'pinia'
import { reactive } from 'vue'
import NewsServices from '@/services/news'
import type { INewsState } from '@/types/news'

export const useNewsStore = defineStore('news', () => {
  const state = reactive<INewsState>({
    news: [],
    selectedNew: null,
    error: false,
    isLoading: false,
  })

  const getNews = async (): Promise<void> => {
    try {
      state.isLoading = true
      state.error = false
      const news = await NewsServices.getNews()
      if (news instanceof Error) throw news
      state.news = news
    } catch (error) {
      state.error = true
      console.error('Erro ao buscar notícias:', error)
    } finally {
      state.isLoading = false
    }
  }

  const getNewById = async (id: number | string): Promise<void> => {
    try {
      state.isLoading = true
      state.error = false
      const selectedNew = await NewsServices.getNewById(id)
      if (selectedNew instanceof Error) throw selectedNew
      state.selectedNew = selectedNew
    } catch (error) {
      state.error = true
      console.error(`Erro ao buscar notícia ${id}:`, error)
    } finally {
      state.isLoading = false
    }
  }

  return {
    state,
    getNews,
    getNewById,
  }
})
