/** Pixels that tell a swipe from a tap. */
const MIN_DISTANCE = 40

/** Listeners of sideways touch swipes: 1 goes to the next item, -1 to the previous one. */
export function useSwipe(onSwipe: (direction: 1 | -1) => void) {
  let startX: number | null = null

  return {
    pointerdown(event: PointerEvent) {
      startX = event.pointerType === 'mouse' ? null : event.clientX
    },
    pointerup(event: PointerEvent) {
      if (startX === null) return

      const distance = event.clientX - startX
      startX = null
      if (Math.abs(distance) >= MIN_DISTANCE) onSwipe(distance < 0 ? 1 : -1)
    },
    // The browser took over the gesture, to scroll the page.
    pointercancel() {
      startX = null
    },
  }
}
