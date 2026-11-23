/**
 * Marks the element whose scrollbar is under the pointer with data-scrollbar-hover, so the CSS
 * can fade the thumb. Chromium does not animate ::-webkit-scrollbar-thumb:hover by itself.
 */
export function trackScrollbarHover() {
  let hovered: Element | null = null
  let isDragging = false

  function isOverScrollbar(element: Element, { clientX, clientY }: PointerEvent) {
    const isRoot = element === document.documentElement
    const box = element.getBoundingClientRect()
    // The root scrolls the viewport, so its box moves with the page.
    const x = isRoot ? clientX : clientX - box.left - element.clientLeft
    const y = isRoot ? clientY : clientY - box.top - element.clientTop

    const scrollsDown = element.scrollHeight > element.clientHeight
    const scrollsSideways = element.scrollWidth > element.clientWidth
    return (
      (scrollsDown && x >= element.clientWidth) || (scrollsSideways && y >= element.clientHeight)
    )
  }

  function mark(element: Element | null) {
    if (element === hovered) return
    hovered?.removeAttribute('data-scrollbar-hover')
    // Kept, so the thumb also fades out.
    element?.setAttribute('data-scrollbar', '')
    element?.setAttribute('data-scrollbar-hover', '')
    hovered = element
  }

  document.addEventListener(
    'pointermove',
    (event) => {
      if (isDragging || event.pointerType !== 'mouse') return
      const target = event.target instanceof Element ? event.target : null
      mark(target && isOverScrollbar(target, event) ? target : null)
    },
    { passive: true },
  )

  // The thumb stays lit while it is dragged off the bar.
  document.addEventListener('pointerdown', () => (isDragging = hovered !== null))
  document.addEventListener('pointerup', () => (isDragging = false))
  document.documentElement.addEventListener('pointerleave', () => {
    if (!isDragging) mark(null)
  })
}
