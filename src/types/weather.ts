import type { WeatherCondition } from '@/utils/weatherCondition'

/** Readings of a key of ThingsBoard, the newest first. Values come as text. */
export type ApiTelemetry = Record<string, { ts: number; value: string }[] | undefined>

/** The part of a dashboard of ThingsBoard that the site uses. */
export interface ApiDashboard {
  configuration: {
    entityAliases: Record<
      string,
      { filter: { type: string; singleEntity?: { entityType: string; id: string } } }
    >
  }
}

/** The part of the forecast of Open-Meteo that the site uses. Lists follow `time`. */
export interface ApiForecast {
  hourly: {
    /** Local time, as in 2026-11-22T09:00. */
    time: string[]
    temperature_2m: (number | null)[]
    precipitation_probability: (number | null)[]
    weather_code: (number | null)[]
    is_day: (0 | 1)[]
    uv_index: (number | null)[]
  }
  daily: {
    temperature_2m_max: (number | null)[]
    temperature_2m_min: (number | null)[]
    precipitation_probability_max: (number | null)[]
    uv_index_max: (number | null)[]
  }
}

export interface ForecastHour {
  /** Local time of the station, as in 2026-11-22T09:00. */
  time: string
  /** 0 to 23, in the time zone of the station. */
  hour: number
  temperature: number | null
  /** Chance of rain, in %. */
  rainChance: number | null
  condition: WeatherCondition
  isDay: boolean
  /** Ultraviolet index, from 0 up. */
  uvIndex: number | null
}

export interface Forecast {
  max: number | null
  min: number | null
  /** Highest chance of rain of the day, in %. */
  rainChance: number | null
  /** Highest ultraviolet index of the day. */
  uvMax: number | null
  /** From some hours ago to some hours ahead. */
  hours: ForecastHour[]
}

/** Latest readings of the weather station. Null when the reading is missing or impossible. */
export interface Weather {
  temperature: number | null
  feelsLike: number | null
  /** Lowest and highest temperatures since midnight. */
  min: number | null
  max: number | null
  humidity: number | null
  pressure: number | null
  /** km/h */
  windSpeed: number | null
  /** Strongest gust of the last 10 minutes, in km/h. */
  windGust: number | null
  /** Degrees from north, where the wind comes from. */
  windDirection: number | null
  /** mm */
  rainToday: number | null
  /** mm/h */
  rainRate: number | null
  /** mm */
  rainMonth: number | null
  /** Air quality index: the higher, the worse. */
  airQuality: number | null
  /** Temperature of the ESP32 board, in °C. */
  boardTemperature: number | null
  /** Time of the latest reading, in milliseconds. */
  updatedAt: number | null
}
