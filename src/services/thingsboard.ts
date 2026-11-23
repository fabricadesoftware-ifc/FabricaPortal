import type { ApiDashboard, ApiTelemetry, Weather } from '@/types/weather'

/** The public dashboard of the station. Its address also says the server and the public id. */
export const DASHBOARD_URL = import.meta.env.VITE_THINGSBOARD_URL

const HOUR = 3_600_000
const KEYS = [
  'temperature',
  'thermal_sensation',
  'humidity',
  'pressure',
  'wind_avg',
  'wind_gust',
  'wind_direction_deg',
  'rain_daily',
  'rain_intensity',
  'rain_monthly',
  'air_quality_index',
  'mics_aqi_index',
  'esp32_temperature',
]

function parseDashboard() {
  const url = new URL(DASHBOARD_URL)
  const publicId = url.searchParams.get('publicId')
  const dashboardId = url.pathname.split('/').pop()
  if (!publicId || !dashboardId) throw new Error('VITE_THINGSBOARD_URL sem dashboard público')

  return { origin: url.origin, publicId, dashboardId }
}

let token: Promise<string> | undefined
let deviceId: Promise<string> | undefined

async function logIn() {
  const { origin, publicId } = parseDashboard()
  const response = await fetch(`${origin}/api/auth/login/public`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ publicId }),
  })
  if (!response.ok) throw new Error(`Falha ao entrar no ThingsBoard (${response.status})`)

  return ((await response.json()) as { token: string }).token
}

/** Asks with the token of the public dashboard. An expired token is replaced once. */
async function request<T>(path: string, isRetry = false): Promise<T> {
  token ??= logIn().catch((error) => {
    token = undefined
    throw error
  })

  const response = await fetch(`${parseDashboard().origin}/api${path}`, {
    headers: { 'X-Authorization': `Bearer ${await token}` },
  })

  if (response.status === 401 && !isRetry) {
    token = undefined
    return request(path, true)
  }
  if (!response.ok) throw new Error(`Falha ao buscar ${path} (${response.status})`)
  return response.json()
}

/** The station is the device the dashboard shows. */
async function findDevice() {
  const dashboard = await request<ApiDashboard>(`/dashboard/${parseDashboard().dashboardId}`)
  const device = Object.values(dashboard.configuration.entityAliases)
    .map(({ filter }) => filter.singleEntity)
    .find((entity) => entity?.entityType === 'DEVICE')
  if (!device) throw new Error('Dashboard sem dispositivo')

  return device.id
}

function telemetry(keys: string[], params: Record<string, number | string>) {
  deviceId ??= findDevice().catch((error) => {
    deviceId = undefined
    throw error
  })

  return deviceId.then((id) => {
    const query = new URLSearchParams({ keys: keys.join(','), ...params } as Record<string, string>)
    return request<ApiTelemetry>(`/plugins/telemetry/DEVICE/${id}/values/timeseries?${query}`)
  })
}

/** Reading of a key, or null when it is missing or outside of what the sensor can measure. */
function reading(data: ApiTelemetry, key: string, min: number, max: number) {
  const value = Number(data[key]?.[0]?.value)
  return Number.isFinite(value) && value >= min && value <= max ? value : null
}

function highest(data: ApiTelemetry, key: string, min: number, max: number) {
  const values = (data[key] ?? [])
    .map(({ value }) => Number(value))
    .filter((value) => Number.isFinite(value) && value >= min && value <= max)
  return values.length ? Math.max(...values) : null
}

/**
 * Latest readings of the station. The device sometimes sends readings dated decades ahead, so
 * the readings come from a window that ends now, never from the "latest" of ThingsBoard.
 */
export async function fetchWeather(): Promise<Weather> {
  const now = Date.now()
  const midnight = new Date(now).setHours(0, 0, 0, 0)
  const end = now + HOUR
  const today = { startTs: midnight, endTs: now, interval: Math.max(1, now - midnight) }

  const [latest, gusts, lowest, highestToday] = await Promise.all([
    telemetry(KEYS, { startTs: now - 24 * HOUR, endTs: end, limit: 1, orderBy: 'DESC' }),
    telemetry(['wind_gust'], { startTs: now - HOUR / 6, endTs: end, limit: 500 }),
    telemetry(['temperature'], { ...today, agg: 'MIN' }),
    telemetry(['temperature'], { ...today, agg: 'MAX' }),
  ])

  const times = Object.values(latest).flatMap((points) => points?.map(({ ts }) => ts) ?? [])

  let airQuality = reading(latest, 'air_quality_index', 0, 2000)
  const gasIndex = reading(latest, 'mics_aqi_index', 0, 100)
  // Without the main sensor, the gas sensor gives the index, on a scale four times smaller.
  if (!airQuality && gasIndex !== null) airQuality = gasIndex * 4

  return {
    temperature: reading(latest, 'temperature', -20, 60),
    feelsLike: reading(latest, 'thermal_sensation', -30, 70),
    min: reading(lowest, 'temperature', -20, 60),
    max: reading(highestToday, 'temperature', -20, 60),
    humidity: reading(latest, 'humidity', 0, 100),
    pressure: reading(latest, 'pressure', 800, 1100),
    windSpeed: reading(latest, 'wind_avg', 0, 300),
    windGust: highest(gusts, 'wind_gust', 0, 300) ?? reading(latest, 'wind_gust', 0, 300),
    windDirection: reading(latest, 'wind_direction_deg', 0, 360),
    rainToday: reading(latest, 'rain_daily', 0, 2000),
    rainRate: reading(latest, 'rain_intensity', 0, 2000),
    rainMonth: reading(latest, 'rain_monthly', 0, 5000),
    airQuality,
    boardTemperature: reading(latest, 'esp32_temperature', -20, 120),
    updatedAt: times.length ? Math.max(...times) : null,
  }
}
