import { onBeforeUnmount, ref } from 'vue'
import {
  isNavigationFailure,
  NavigationFailureType,
  START_LOCATION,
  useRouter,
  type RouteRecordNameGeneric,
} from 'vue-router'
import { isUnknownEntry } from '@/utils/isUnknownEntry'
import { loadRouteAssets } from '@/utils/loadRouteAssets'
import { useProgress } from './useProgress'

/** One full loop of the smoke. */
const MIN_DURATION = 1100
const END_DELAY = 100
/** The page only changes after the screen covers it. Must match its enter transition. */
const ENTER_DURATION = 200

const wait = (duration: number) => new Promise((resolve) => setTimeout(resolve, duration))

/** Loading state of the route changes, and of visits that start at an unknown address. */
export function useRouteLoading() {
  const router = useRouter()
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const { progress, isLoading, start } = useProgress({
    minDuration: MIN_DURATION,
    endDelay: END_DELAY,
  })
  const destination = ref<RouteRecordNameGeneric>()
  let finishNavigation: (() => void) | undefined

  if (isUnknownEntry(router) && !reducedMotion) {
    destination.value = 'not-found'
    start([router.isReady()])
  }

  const removeGuards = [
    router.beforeEach(async (to, from) => {
      // The first visit has its own loading, and hashes or queries stay on the page.
      if (from === START_LOCATION || to.path === from.path || reducedMotion) return

      destination.value = to.name
      start([
        new Promise<void>((resolve) => (finishNavigation = resolve)),
        loadRouteAssets(to.name),
      ])
      await wait(ENTER_DURATION)
    }),
    router.afterEach((_to, _from, failure) => {
      // Cancelled means that a newer navigation took over the screen.
      if (!isNavigationFailure(failure, NavigationFailureType.cancelled)) finishNavigation?.()
    }),
    router.onError(() => finishNavigation?.()),
  ]

  onBeforeUnmount(() => removeGuards.forEach((remove) => remove()))

  return { progress, isLoading, destination }
}
