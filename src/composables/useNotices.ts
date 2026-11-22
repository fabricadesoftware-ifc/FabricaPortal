import { onMounted, ref } from 'vue'
import { latestNotices } from '@/constants/notices'
import type { Notice } from '@/types/notice'
import { loadNotices } from '@/utils/loadNotices'

/** Every notice, most recent first. Uses the list of the site when the API is unavailable. */
export function useNotices() {
  const notices = ref<Notice[]>([])
  const isLoading = ref(true)

  onMounted(async () => {
    try {
      notices.value = await loadNotices()
    } catch (error) {
      console.warn('Não foi possível carregar as notícias.', error)
      notices.value = latestNotices
    } finally {
      isLoading.value = false
    }
  })

  return { notices, isLoading }
}
