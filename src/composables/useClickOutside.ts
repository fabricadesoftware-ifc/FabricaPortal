import { onBeforeUnmount, onMounted, type Ref } from 'vue'

/** Runs when something outside of the element is pressed. */
export function useClickOutside(element: Readonly<Ref<HTMLElement | null>>, onOutside: () => void) {
  function onPointerdown({ target }: PointerEvent) {
    if (!element.value?.contains(target as Node)) onOutside()
  }

  onMounted(() => document.addEventListener('pointerdown', onPointerdown))
  onBeforeUnmount(() => document.removeEventListener('pointerdown', onPointerdown))
}
