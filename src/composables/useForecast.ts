import { computed, onMounted, ref, shallowRef } from 'vue'
import { fetchForecast, stationHourKey } from '@/services/openMeteo'
import type { Forecast } from '@/types/weather'

/** Forecast around now, loaded when the panel opens. Null until it arrives or when it fails. */
export function useForecast() {
  const forecast = shallowRef<Forecast | null>(null)
  const hasFailed = ref(false)

  onMounted(async () => {
    try {
      forecast.value = await fetchForecast()
    } catch {
      // Extra information: the panel works without it.
      hasFailed.value = true
    }
  })

  const currentKey = stationHourKey()
  /** Position of the current hour in the forecast, or -1. */
  const currentIndex = computed(
    () => forecast.value?.hours.findIndex(({ time }) => time.startsWith(currentKey)) ?? -1,
  )

  return { forecast, hasFailed, currentIndex }
}
