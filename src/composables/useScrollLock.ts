import { onBeforeUnmount, onMounted } from 'vue'

/** The menu and the loading screens may lock it at the same time. */
let locks = 0

function change(amount: 1 | -1) {
  locks += amount
  document.documentElement.style.overflow = locks ? 'hidden' : ''
}

/** Locks the page scroll while the component is mounted. */
export function useScrollLock() {
  onMounted(() => change(1))
  onBeforeUnmount(() => change(-1))
}
