import { onBeforeUnmount, onMounted, ref } from 'vue'

/** Id of the section being read. */
export function useActiveSection(ids: string[]) {
  const active = ref(ids[0])
  let observer: IntersectionObserver | undefined

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        const entry = entries.find(({ isIntersecting }) => isIntersecting)
        if (entry) active.value = entry.target.id
      },
      // A line near the top of the screen.
      { rootMargin: '-25% 0px -74% 0px' },
    )

    for (const id of ids) {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    }
  })

  onBeforeUnmount(() => observer?.disconnect())

  return active
}
