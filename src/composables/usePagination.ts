import { computed, ref, watch, type Ref } from 'vue'

/** Splits a list in pages. Goes back to the first one when the list changes. */
export function usePagination<T>(items: Readonly<Ref<T[]>>, pageSize: number) {
  const page = ref(1)
  const pageCount = computed(() => Math.ceil(items.value.length / pageSize))
  const pageItems = computed(() =>
    items.value.slice((page.value - 1) * pageSize, page.value * pageSize),
  )

  watch(items, () => (page.value = 1))

  return { page, pageCount, pageItems }
}
