import { onBeforeUnmount, ref } from 'vue'

/** A resource that never answers must not lock the page. */
const MAX_DURATION = 8000

interface ProgressOptions {
  minDuration: number
  /** Time at 100% before the screen leaves. */
  endDelay: number
}

const ignoreErrors = () => {}

/** Turns a list of tasks into a smooth progress, from 0 to 1. */
export function useProgress({ minDuration, endDelay }: ProgressOptions) {
  const progress = ref(0)
  const isLoading = ref(false)
  let frame = 0
  let timeout = 0

  function stop() {
    cancelAnimationFrame(frame)
    clearTimeout(timeout)
  }

  function start(tasks: Promise<unknown>[]) {
    stop()
    progress.value = 0
    isLoading.value = true

    let finished = 0
    for (const task of tasks) {
      // A failed task also counts: the page handles its own errors.
      task.catch(ignoreErrors).then(() => finished++)
    }

    const startedAt = performance.now()
    let lastTime = startedAt

    function tick(time: number) {
      const elapsed = time - startedAt
      const delta = Math.max(0, time - lastTime) / 1000
      lastTime = time

      const isDone = finished === tasks.length || elapsed > MAX_DURATION
      const loaded = isDone ? 1 : 0.3 + (finished / tasks.length) * 0.6
      const target = Math.min(loaded, minDuration ? elapsed / minDuration : 1)

      progress.value += (target - progress.value) * (1 - Math.exp(-10 * delta))

      if (target === 1 && progress.value > 0.99) {
        progress.value = 1
        timeout = window.setTimeout(() => (isLoading.value = false), endDelay)
      } else {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
  }

  onBeforeUnmount(stop)

  return { progress, isLoading, start }
}
