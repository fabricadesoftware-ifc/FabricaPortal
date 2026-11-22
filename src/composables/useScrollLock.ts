import { onBeforeUnmount, onMounted } from 'vue'

/** Locks the page scroll while the component is mounted. */
export function useScrollLock() {
  onMounted(() => (document.documentElement.style.overflow = 'hidden'))
  onBeforeUnmount(() => (document.documentElement.style.overflow = ''))
}
