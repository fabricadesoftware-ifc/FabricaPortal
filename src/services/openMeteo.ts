import { STATION } from '@/constants/station'
import type { ApiForecast, Forecast } from '@/types/weather'
import { cachedRequest } from '@/utils/cachedRequest'
import type { WeatherCondition } from '@/utils/weatherCondition'

/** Public API, without key or account. */
const OPEN_METEO_URL = 'https://api.open-meteo.com/v1/forecast'

/** Hours of the forecast before and after the current one. */
export const PAST_HOURS = 6
const NEXT_HOURS = 18

/** Weather codes of the WMO, as the icons of the site. */
function toCondition(code: number): WeatherCondition {
  if (code <= 1) return 'clear'
  if (code === 2) return 'partly'
  if (code <= 48) return 'cloudy'
  if (code <= 57 || code === 61 || code === 80) return 'showers'
  if (code === 66 || code === 67) return 'sleet'
  if (code <= 65 || code === 81 || code === 82) return 'rain'
  if (code <= 86) return 'snow'
  return 'storm'
}

async function sendForecast(): Promise<Forecast> {
  const query = new URLSearchParams({
    latitude: String(STATION.latitude),
    longitude: String(STATION.longitude),
    hourly: 'temperature_2m,precipitation_probability,weather_code,is_day,uv_index',
    daily: 'temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max',
    timezone: STATION.timeZone,
    past_hours: String(PAST_HOURS),
    forecast_hours: String(NEXT_HOURS + 1),
    // The hours may reach tomorrow; the summary is still of today.
    forecast_days: '2',
  })

  const response = await fetch(`${OPEN_METEO_URL}?${query}`)
  if (!response.ok) throw new Error(`Falha ao buscar a previsão (${response.status})`)

  const { hourly, daily }: ApiForecast = await response.json()

  return {
    max: daily.temperature_2m_max[0] ?? null,
    min: daily.temperature_2m_min[0] ?? null,
    rainChance: daily.precipitation_probability_max[0] ?? null,
    uvMax: daily.uv_index_max[0] ?? null,
    hours: hourly.time.map((time, index) => ({
      time,
      hour: Number(time.slice(11, 13)),
      temperature: hourly.temperature_2m[index] ?? null,
      rainChance: hourly.precipitation_probability[index] ?? null,
      condition: toCondition(hourly.weather_code[index] ?? 0),
      isDay: hourly.is_day[index] === 1,
      uvIndex: hourly.uv_index[index] ?? null,
    })),
  }
}

/** Current hour in the time zone of the station, as in 2026-11-22T09, like the forecast. */
export function stationHourKey() {
  const now = new Date()
  const date = now.toLocaleDateString('sv-SE', { timeZone: STATION.timeZone })
  const hour = now.toLocaleTimeString('en-GB', { hour: '2-digit', timeZone: STATION.timeZone })
  return `${date}T${hour}`
}

/** Forecast around the current hour, hour by hour. Cached for 15 minutes. */
export function fetchForecast() {
  return cachedRequest(`forecast:v2:${stationHourKey()}`, sendForecast)
}
