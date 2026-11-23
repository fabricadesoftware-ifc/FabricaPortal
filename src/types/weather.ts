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
