import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

/** Whether enough of the element is on screen. */
export function useInView(element: Readonly<Ref<HTMLElement | null>>, threshold = 0.4) {
  const isInView = ref(false)
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    if (!element.value) return
    observer = new IntersectionObserver(
      ([entry]) => (isInView.value = entry?.isIntersecting ?? false),
      { threshold },
    )
    observer.observe(element.value)
  })

  onBeforeUnmount(() => observer?.disconnect())

  return isInView
}
