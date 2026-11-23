import { STATION } from '@/constants/station'
import type { Weather } from '@/types/weather'

export type WeatherCondition =
  'clear' | 'partly' | 'cloudy' | 'showers' | 'rain' | 'storm' | 'sleet' | 'snow'

/** Rain from this rate on is falling now, in mm/h. */
const RAINING = 0.05
/** Up to this rate the rain is light, in mm/h. */
const LIGHT_RAIN = 2.5
/** From this rate on the rain is heavy, in mm/h. */
const HEAVY_RAIN = 10
/** Gusts from this speed on make the rain a storm, in km/h. */
const STORM_GUST = 45
/** The station has no sky sensor: a humid air is the best sign of clouds, in %. */
const CLOUDY_HUMIDITY = 90
const PARTLY_HUMIDITY = 75

const LABELS: Record<WeatherCondition, string> = {
  clear: 'Céu limpo',
  partly: 'Parcialmente nublado',
  cloudy: 'Nublado',
  showers: 'Chuva fraca',
  rain: 'Chuva',
  storm: 'Tempestade',
  sleet: 'Chuva com neve',
  snow: 'Neve',
}

const radians = (degrees: number) => (degrees * Math.PI) / 180

/** Whether the sun is above the horizon of the station, with the refraction of the air. */
export function isDaytime(date: Date) {
  const start = Date.UTC(date.getUTCFullYear(), 0, 0)
  const dayOfYear = (date.getTime() - start) / 86_400_000
  const declination = radians(23.44) * Math.sin(radians((360 / 365) * (dayOfYear + 284)))

  const hours = date.getUTCHours() + date.getUTCMinutes() / 60
  const hourAngle = radians(15 * (hours + STATION.longitude / 15 - 12))
  const latitude = radians(STATION.latitude)

  const elevation =
    Math.sin(latitude) * Math.sin(declination) +
    Math.cos(latitude) * Math.cos(declination) * Math.cos(hourAngle)
  return elevation > Math.sin(radians(-0.83))
}

/** Sky of the station, guessed from the rain, the wind, the humidity and the temperature. */
export function getCondition(weather: Weather): WeatherCondition {
  const { rainRate, windGust, humidity, temperature } = weather

  if (rainRate != null && rainRate >= RAINING) {
    if (temperature != null && temperature <= 0) return 'snow'
    if (temperature != null && temperature <= 2) return 'sleet'
    if (rainRate >= HEAVY_RAIN || (windGust != null && windGust >= STORM_GUST)) return 'storm'
    return rainRate < LIGHT_RAIN ? 'showers' : 'rain'
  }

  if (humidity == null) return 'clear'
  if (humidity >= CLOUDY_HUMIDITY) return 'cloudy'
  return humidity >= PARTLY_HUMIDITY ? 'partly' : 'clear'
}

export const conditionLabel = (condition: WeatherCondition) => LABELS[condition]
