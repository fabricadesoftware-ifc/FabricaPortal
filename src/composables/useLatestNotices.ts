import { onMounted, ref } from 'vue'
import { latestNotices } from '@/constants/notices'
import type { Notice } from '@/types/notice'
import { loadNotices } from '@/utils/loadNotices'

const MAX_NOTICES = 3

/** Keeps the notices of the site when the API is unavailable. */
export function useLatestNotices() {
  const notices = ref<Notice[]>(latestNotices)

  onMounted(async () => {
    try {
      notices.value = (await loadNotices()).slice(0, MAX_NOTICES)
    } catch (error) {
      console.warn('Não foi possível carregar as notícias.', error)
    }
  })

  return notices
}
