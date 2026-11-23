import { onBeforeUnmount, onMounted, watch } from 'vue'

/** The menu and the loading screens may lock it at the same time. */
let locks = 0

function change(amount: 1 | -1) {
  locks += amount
  document.documentElement.style.overflow = locks ? 'hidden' : ''
}

/**
 * Locks the page scroll while the component is mounted, or only while `isLocked` is true.
 */
export function useScrollLock(isLocked?: () => boolean) {
  let isHeld = false

  function hold(value: boolean) {
    if (value === isHeld) return
    isHeld = value
    change(value ? 1 : -1)
  }

  if (isLocked) watch(isLocked, hold)
  else onMounted(() => hold(true))

  onBeforeUnmount(() => hold(false))
}
