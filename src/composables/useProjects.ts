import { onMounted, ref } from 'vue'
import { portfolioProjects } from '@/constants/portfolio'
import type { PortfolioProject } from '@/types/project'
import { loadProjects } from '@/utils/loadProjects'

/** Every project. Uses the list of the site when the API is unavailable. */
export function useProjects() {
  const projects = ref<PortfolioProject[]>([])
  const isLoading = ref(true)

  onMounted(async () => {
    try {
      projects.value = await loadProjects()
    } catch (error) {
      console.warn('Não foi possível carregar os projetos.', error)
      projects.value = portfolioProjects
    } finally {
      isLoading.value = false
    }
  })

  return { projects, isLoading }
}
