import { computed, onMounted, ref } from 'vue'
import { fetchNotice } from '@/services/notices'

const WORDS_PER_MINUTE = 200

/** Text of a notice. Stays empty when the API is unavailable. */
export function useNoticeText(id: number) {
  const text = ref('')
  const readingTime = computed(() =>
    Math.max(1, Math.round(text.value.split(/\s+/).length / WORDS_PER_MINUTE)),
  )

  onMounted(async () => {
    try {
      const { description } = await fetchNotice(id)
      // Some texts have loose backslashes.
      text.value = description.replaceAll('\\', '').replaceAll('\r\n', '\n').trim()
    } catch (error) {
      console.warn('Não foi possível carregar o texto da notícia.', error)
    }
  })

  return { text, readingTime }
}
