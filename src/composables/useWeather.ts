import { onBeforeUnmount, onMounted, shallowRef } from 'vue'
import { fetchWeather } from '@/services/thingsboard'
import type { Weather } from '@/types/weather'

/** The station sends a reading about every minute. */
const REFRESH = 60_000

/** Shared by every button of the page, so they ask the station only once. */
const weather = shallowRef<Weather | null>(null)
let users = 0
let timer: ReturnType<typeof setInterval> | undefined

async function load() {
  if (document.visibilityState === 'hidden') return
  try {
    weather.value = await fetchWeather()
  } catch {
    // Decorative information: keeps the last readings, or stays hidden.
  }
}

/** Readings of the weather station, refreshed while the tab is seen. Null until the first one. */
export function useWeather() {
  onMounted(() => {
    if (users++) return
    load()
    timer = setInterval(load, REFRESH)
    document.addEventListener('visibilitychange', load)
  })

  onBeforeUnmount(() => {
    if (--users) return
    clearInterval(timer)
    document.removeEventListener('visibilitychange', load)
  })

  return { weather, refresh: load }
}
