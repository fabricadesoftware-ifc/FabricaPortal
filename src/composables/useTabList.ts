import { nextTick, type Ref } from 'vue'

/** Selects a tab of a list, keeping the focus and the sideways scroll on it. */
export function useTabList(
  list: Readonly<Ref<HTMLElement | null>>,
  active: Ref<number>,
  length: () => number,
) {
  async function select(index: number) {
    active.value = (index + length()) % length()
    await nextTick()

    const tab = list.value?.querySelector<HTMLElement>('[aria-selected="true"]')
    tab?.focus({ preventScroll: true })
    // On small screens the list scrolls sideways.
    tab?.scrollIntoView({ block: 'nearest', inline: 'center' })
  }

  function onKeydown(event: KeyboardEvent) {
    const targets: Record<string, number> = {
      ArrowRight: active.value + 1,
      ArrowLeft: active.value - 1,
      Home: 0,
      End: length() - 1,
    }
    const target = targets[event.key]
    if (target === undefined) return

    event.preventDefault()
    select(target)
  }

  return { select, onKeydown }
}
