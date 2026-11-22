import { onBeforeUnmount, onMounted, ref, type Ref } from 'vue'

/** Position of a list that scrolls sideways. The selector finds the items inside of it. */
export function useScrollRail(rail: Readonly<Ref<HTMLElement | null>>, selector: string) {
  /** Indexes of the first and the last items on screen. */
  const visible = ref({ first: 0, last: 0 })
  const isAtStart = ref(true)
  const isAtEnd = ref(true)

  const findItems = () => [...(rail.value?.querySelectorAll<HTMLElement>(selector) ?? [])]

  function measure() {
    if (!rail.value) return

    const { scrollLeft, clientWidth, scrollWidth } = rail.value
    const { left, right } = rail.value.getBoundingClientRect()
    // An item counts when its center is on screen.
    const isVisible = (item: HTMLElement) => {
      const box = item.getBoundingClientRect()
      const center = box.left + box.width / 2
      return center >= left && center <= right
    }

    const flags = findItems().map(isVisible)
    visible.value = { first: flags.indexOf(true), last: flags.lastIndexOf(true) }
    isAtStart.value = scrollLeft <= 1
    isAtEnd.value = scrollLeft + clientWidth >= scrollWidth - 1
  }

  const behavior = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'

  /** Moves most of a screen: 1 goes forward, -1 goes back. */
  function scroll(direction: 1 | -1) {
    if (!rail.value) return
    rail.value.scrollBy({
      left: direction * rail.value.clientWidth * 0.7,
      behavior: behavior(),
    })
  }

  /** Brings an item to the center, without moving the page. */
  function scrollTo(index: number) {
    const item = findItems()[index]
    if (!rail.value || !item) return

    const railBox = rail.value.getBoundingClientRect()
    const itemBox = item.getBoundingClientRect()
    rail.value.scrollBy({
      left: itemBox.left + itemBox.width / 2 - (railBox.left + railBox.width / 2),
      behavior: behavior(),
    })
  }

  let resizeObserver: ResizeObserver | undefined

  onMounted(() => {
    if (!rail.value) return
    rail.value.addEventListener('scroll', measure, { passive: true })
    resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(rail.value)
  })

  onBeforeUnmount(() => {
    rail.value?.removeEventListener('scroll', measure)
    resizeObserver?.disconnect()
  })

  return { visible, isAtStart, isAtEnd, scroll, scrollTo }
}
