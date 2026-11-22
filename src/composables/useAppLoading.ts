import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { isUnknownEntry } from '@/utils/isUnknownEntry'
import { loadRouteAssets } from '@/utils/loadRouteAssets'
import { useProgress } from './useProgress'

/** Two full cycles of the press, so the animation is never cut short. */
const MIN_DURATION = 3000
const END_DELAY = 250

/** Loading state of the first visit to the site. */
export function useAppLoading() {
  const router = useRouter()
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const { progress, isLoading, start } = useProgress({
    minDuration: reducedMotion ? 0 : MIN_DURATION,
    endDelay: END_DELAY,
  })

  // Unknown addresses open with the route loading.
  if (isUnknownEntry(router)) return { progress, isLoading }

  const mounted = new Promise<void>((resolve) => onMounted(resolve))
  const ready = router.isReady()

  start([
    // Fonts are only requested once there is text on the page.
    mounted.then(() => document.fonts.ready),
    ready,
    ready.then(() => loadRouteAssets(router.currentRoute.value.name)),
  ])

  return { progress, isLoading }
}
