import { computed, ref, type Ref } from 'vue'
import type { Notice, NoticeCategory } from '@/types/notice'
import { normalizeText } from '@/utils/normalizeText'

/** Filters of the notices page. A null category means all of them. */
export function useNoticeFilters(notices: Readonly<Ref<Notice[]>>) {
  const search = ref('')
  const category = ref<NoticeCategory | null>(null)

  const matches = computed(() =>
    notices.value.filter(
      (notice) =>
        (!category.value || notice.category === category.value) &&
        normalizeText(`${notice.title} ${notice.summary ?? ''}`).includes(
          normalizeText(search.value),
        ),
    ),
  )

  function clear() {
    search.value = ''
    category.value = null
  }

  return { search, category, matches, clear }
}
