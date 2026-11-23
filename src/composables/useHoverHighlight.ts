import { computed, ref, type Ref } from 'vue'

/**
 * Box behind the item under the pointer, which slides from item to item. Coming from outside,
 * it appears in place, and on leaving it fades where it was. Items need data-hover-item.
 */
export function useHoverHighlight(container: Readonly<Ref<HTMLElement | null>>) {
  const box = ref<{ left: number; width: number } | null>(null)
  const isHovering = ref(false)
  const isSliding = ref(false)

  function enter({ currentTarget }: PointerEvent) {
    const item = currentTarget as HTMLElement
    isSliding.value = isHovering.value
    box.value = { left: item.offsetLeft, width: item.offsetWidth }
    isHovering.value = true
  }

  function leave({ relatedTarget }: PointerEvent) {
    // The gap between the items is the container itself.
    const target = relatedTarget as HTMLElement | null
    if (target === container.value || target?.closest('[data-hover-item]')) return
    isHovering.value = false
  }

  /** For the container, so the box also goes when the pointer leaves through a gap. */
  function leaveAll() {
    isHovering.value = false
  }

  const style = computed(
    () => box.value && { translate: `${box.value.left}px`, width: `${box.value.width}px` },
  )
  const classes = computed(() => [
    isSliding.value ? 'transition-[translate,width,opacity]' : 'transition-opacity',
    { 'opacity-0': !isHovering.value },
  ])

  return { box, style, classes, enter, leave, leaveAll }
}
