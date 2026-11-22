import { onBeforeUnmount, onMounted, ref, watch, type Ref, type WatchSource } from 'vue'

interface SlidingHighlightOptions {
  /** Finds the active item inside the container. */
  selector: string
  /** Moves the highlight when this changes. */
  source: WatchSource<unknown>
  /** Keeps the highlight in place while true. */
  isPaused?: () => boolean
}

/** Box of the highlight behind the active item. Null while there is nothing to highlight. */
export function useSlidingHighlight(
  container: Readonly<Ref<HTMLElement | null>>,
  { selector, source, isPaused }: SlidingHighlightOptions,
) {
  const highlight = ref<{ left: number; width: number } | null>(null)

  function move() {
    if (isPaused?.()) return

    const item = container.value?.querySelector<HTMLElement>(selector)
    highlight.value = item?.offsetWidth ? { left: item.offsetLeft, width: item.offsetWidth } : null
  }

  watch(source, move, { flush: 'post' })

  // The items change size when the fonts load and when the layout changes.
  let resizeObserver: ResizeObserver | undefined

  onMounted(() => {
    if (!container.value) return
    resizeObserver = new ResizeObserver(move)
    resizeObserver.observe(container.value)
    for (const item of container.value.children) resizeObserver.observe(item)
  })

  onBeforeUnmount(() => resizeObserver?.disconnect())

  return highlight
}
