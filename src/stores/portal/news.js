import { defineStore } from 'pinia'
import { NewsService } from '@/services'
import { reactive } from 'vue'

export const useNewsStore = defineStore('news', () => {
  const state = reactive({
    news: [],
    selectedNew: null,
    error: false,
    isLoading: false,
  })

  const getNews = async () => {
    try {
      state.isLoading = true
      const news = await NewsService.getNews()
      state.news = news
    } catch (error) {
      state.error = true
    } finally {
      state.isLoading = false
    }
  }

  const getNewById = async (id) => {
    try {
      state.isLoading = true
      const selectedNew = await NewsService.getNewById(id)
      state.selectedNew = selectedNew
    } catch (error) {
      state.error = true
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
