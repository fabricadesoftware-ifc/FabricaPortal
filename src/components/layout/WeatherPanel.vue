<script setup lang="ts">
import { computed } from 'vue'
import AppIcon from '@/components/global/AppIcon.vue'
import WeatherIcon from '@/components/global/WeatherIcon.vue'
import { useForecast } from '@/composables/useForecast'
import WeatherForecast from './WeatherForecast.vue'
import WeatherScale, { type ScaleLevel } from './WeatherScale.vue'
import { DASHBOARD_URL } from '@/services/thingsboard'
import type { Weather } from '@/types/weather'
import { formatReading } from '@/utils/formatReading'
import { conditionLabel, getCondition, isDaytime } from '@/utils/weatherCondition'

const props = defineProps<{
  weather: Weather
  /** Id of the title, which names the dialog or the popover around the panel. */
  titleId: string
}>()

const emit = defineEmits<{ close: [] }>()

/** Readings older than this are shown as old. */
const LIVE_LIMIT = 15 * 60_000
const DIRECTIONS = [
  'N',
  'NNE',
  'NE',
  'ENE',
  'L',
  'ESE',
  'SE',
  'SSE',
  'S',
  'SSO',
  'SO',
  'OSO',
  'O',
  'ONO',
  'NO',
  'NNO',
]

/** The last level ends the bar: worse indexes stay at its end. */
const AIR_QUALITY: ScaleLevel[] = [
  { upTo: 40, label: 'Boa', color: '#22c55e' },
  { upTo: 80, label: 'Moderada', color: '#facc15' },
  { upTo: 120, label: 'Ruim', color: '#f97316' },
  { upTo: 200, label: 'Muito ruim', color: '#ef4444' },
  { upTo: 300, label: 'Péssima', color: '#991b1b' },
]

/** Levels of the World Health Organization. */
const ULTRAVIOLET: ScaleLevel[] = [
  { upTo: 2, label: 'Baixo', color: '#22c55e' },
  { upTo: 5, label: 'Moderado', color: '#facc15' },
  { upTo: 7, label: 'Alto', color: '#f97316' },
  { upTo: 10, label: 'Muito alto', color: '#ef4444' },
  { upTo: 14, label: 'Extremo', color: '#a855f7' },
]

/** Ticks of the compass, every 15 degrees. */
const TICKS = Array.from({ length: 24 }, (_, index) => index * 15)
const CARDINALS = [
  { label: 'N', x: 50, y: 16 },
  { label: 'L', x: 84, y: 50 },
  { label: 'S', x: 50, y: 84 },
  { label: 'O', x: 16, y: 50 },
]

const weather = computed(() => props.weather)
const clamp = (value: number) => Math.min(1, Math.max(0, value))

const isLive = computed(
  () => !!weather.value.updatedAt && Date.now() - weather.value.updatedAt <= LIVE_LIMIT,
)

const condition = computed(() => getCondition(weather.value))
const isDay = computed(() => isDaytime(new Date(weather.value.updatedAt ?? Date.now())))
const updatedText = computed(() => {
  const time = weather.value.updatedAt
  if (!time) return 'Sem dados recentes'

  const date = new Date(time)
  const hour = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
  if (isLive.value) return `Atualizado às ${hour}`
  return `Último dado às ${hour} de ${date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' })}`
})

const direction = computed(() => {
  const degrees = weather.value.windDirection
  return degrees == null ? null : DIRECTIONS[Math.round(degrees / 22.5) % 16]
})

const rainState = computed(() => {
  const { rainRate, rainToday } = weather.value
  if (rainRate != null && rainRate >= 0.05) return `${formatReading(rainRate)} mm/h agora`
  return rainToday != null && rainToday >= 0.2 ? 'Choveu hoje' : 'Sem chuva hoje'
})

/** Where the temperature is between the lowest and the highest of the day, from 0 to 1. */
const rangePosition = computed(() => {
  const { temperature, min, max } = weather.value
  if (temperature == null || min == null || max == null) return null
  return max > min ? clamp((temperature - min) / (max - min)) : 0.5
})

const { forecast, hasFailed: forecastFailed, currentIndex } = useForecast()

const airQuality = computed(() =>
  weather.value.airQuality == null ? null : Math.round(weather.value.airQuality),
)

/** Ultraviolet index of the current hour, from the forecast. */
const ultraviolet = computed(() => {
  const index = forecast.value?.hours[currentIndex.value]?.uvIndex
  return index == null ? null : Math.round(index)
})

const metrics = computed(() => {
  const data = weather.value
  return [
    { label: 'Umidade', value: formatReading(data.humidity, 0), unit: '%', fill: data.humidity },
    { label: 'Pressão', value: formatReading(data.pressure), unit: 'hPa' },
    { label: 'Chuva hoje', value: formatReading(data.rainToday), unit: 'mm' },
    { label: 'Intensidade', value: formatReading(data.rainRate), unit: 'mm/h' },
    { label: 'Chuva no mês', value: formatReading(data.rainMonth), unit: 'mm' },
    { label: 'Placa ESP32', value: formatReading(data.boardTemperature), unit: '°C' },
  ]
})
</script>

<template>
  <div class="panel">
    <header class="reveal relative flex items-start justify-between px-5 pt-5" style="--i: 0">
      <div>
        <p class="type-label text-subtle">Estação meteorológica</p>
        <h2 :id="titleId" class="type-h4 mt-0.5">IFC Araquari</h2>
      </div>
      <div class="flex items-center gap-1">
        <span
          class="type-label flex items-center gap-1.5 rounded-full border px-2.5 py-1 tracking-wider"
          :class="
            isLive
              ? 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300'
              : 'border-amber-500/25 bg-amber-500/10 text-amber-300'
          "
        >
          <span
            class="size-1.5 rounded-full"
            :class="isLive ? 'bg-emerald-400' : 'bg-amber-500'"
            aria-hidden="true"
          />
          {{ isLive ? 'Ao vivo' : 'Offline' }}
        </span>
        <button
          type="button"
          aria-label="Fechar estação meteorológica"
          class="-mr-2 grid size-9 cursor-pointer place-items-center rounded-lg text-muted transition-colors hover:bg-white/5 hover:text-white"
          @click="emit('close')"
        >
          <AppIcon name="close" class="size-4" />
        </button>
      </div>
    </header>

    <div class="relative grid grid-cols-[1fr_auto] gap-3 px-5 pt-4">
      <!-- Temperature -->
      <div class="reveal card relative" style="--i: 1">
        <WeatherIcon
          :condition="condition"
          :is-day="isDay"
          class="absolute top-2.5 right-2.5 size-11"
        />
        <p
          class="flex items-start text-[3.25rem] leading-none font-light tracking-tighter tabular-nums"
        >
          {{ formatReading(weather.temperature)
          }}<span class="mt-1.5 ml-0.5 text-lg font-normal text-muted">°C</span>
        </p>
        <p class="mt-2 text-xs text-muted">
          Sensação
          <span class="font-medium text-white">{{ formatReading(weather.feelsLike) }} °C</span>
        </p>
        <p class="mt-0.5 text-xs text-subtle">
          <span class="font-medium text-white/85">{{ conditionLabel(condition) }}</span>
          · {{ rainState }}
        </p>

        <div v-if="rangePosition != null" class="mt-3.5">
          <div class="relative h-1 rounded-full bg-white/8">
            <div class="range-fill absolute inset-0 rounded-full" />
            <span
              class="marker absolute top-1/2 size-2.5 -translate-1/2 rounded-full border-2 border-surface bg-white"
              :style="{ left: `${rangePosition * 100}%` }"
            />
          </div>
          <div class="type-label mt-1.5 flex justify-between text-subtle tabular-nums">
            <span>Mín {{ formatReading(weather.min, 1, 0) }}°</span>
            <span>Máx {{ formatReading(weather.max, 1, 0) }}°</span>
          </div>
        </div>
      </div>

      <!-- Wind -->
      <div class="reveal card flex flex-col items-center" style="--i: 2">
        <svg viewBox="0 0 100 100" class="size-[5.25rem]" aria-hidden="true">
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="rgb(255 255 255 / 0.02)"
            stroke="rgb(255 255 255 / 0.1)"
          />
          <line
            v-for="angle in TICKS"
            :key="angle"
            x1="50"
            :y1="angle % 90 ? 5.5 : 4"
            x2="50"
            :y2="angle % 90 ? 9 : 10"
            :stroke="angle % 90 ? 'rgb(255 255 255 / 0.18)' : 'rgb(255 255 255 / 0.45)'"
            stroke-width="1.2"
            stroke-linecap="round"
            :transform="`rotate(${angle} 50 50)`"
          />
          <text
            v-for="{ label, x, y } in CARDINALS"
            :key="label"
            :x="x"
            :y="y"
            text-anchor="middle"
            dominant-baseline="central"
            font-size="9"
            font-weight="600"
            :fill="label === 'N' ? 'var(--color-brand-orange)' : 'rgb(255 255 255 / 0.45)'"
          >
            {{ label }}
          </text>
          <g
            v-if="weather.windDirection != null"
            class="needle"
            :style="{ rotate: `${weather.windDirection}deg` }"
          >
            <path d="M50 22 L54 50 L46 50 Z" fill="var(--color-brand-orange)" />
            <path d="M50 78 L54 50 L46 50 Z" fill="rgb(255 255 255 / 0.25)" />
          </g>
          <circle
            cx="50"
            cy="50"
            r="3.5"
            fill="var(--color-surface)"
            stroke="#fff"
            stroke-width="1.5"
          />
        </svg>
        <p class="mt-2 text-lg leading-none font-semibold text-brand-teal tabular-nums">
          {{ formatReading(weather.windSpeed)
          }}<span class="ml-1 text-[0.6875rem] font-normal text-muted">km/h</span>
        </p>
        <p class="type-label mt-1 text-subtle">
          {{ direction ?? '--'
          }}<template v-if="direction"> · {{ Math.round(weather.windDirection!) }}°</template>
        </p>
        <p class="mt-0.5 text-[0.6875rem] text-subtle">
          Rajada {{ formatReading(weather.windGust) }} km/h
        </p>
      </div>
    </div>

    <WeatherForecast
      v-if="!forecastFailed"
      :forecast="forecast"
      :current-index="currentIndex"
      class="reveal mx-5 mt-3"
      style="--i: 3"
    />

    <!-- Readings -->
    <dl
      class="reveal mx-5 mt-3 grid grid-cols-3 overflow-hidden rounded-xl border border-white/8"
      style="--i: 4"
    >
      <div
        v-for="(metric, index) in metrics"
        :key="metric.label"
        class="border-white/8 px-3 py-2.5"
        :class="{ 'border-l': index % 3, 'border-t': index >= 3 }"
      >
        <dt class="text-[0.6875rem] whitespace-nowrap text-subtle">{{ metric.label }}</dt>
        <dd class="mt-0.5 font-semibold tabular-nums">
          {{ metric.value
          }}<span class="ml-0.5 text-[0.6875rem] font-normal text-subtle">{{ metric.unit }}</span>
        </dd>
        <div v-if="metric.fill != null" class="mt-1.5 h-0.5 rounded-full bg-white/8">
          <div
            class="bar h-full rounded-full bg-brand-teal"
            :style="{ width: `${metric.fill}%` }"
          />
        </div>
      </div>
    </dl>

    <!-- Air quality and sun -->
    <div
      class="reveal mx-5 mt-3 divide-y divide-white/8 rounded-xl border border-white/8 px-3"
      style="--i: 5"
    >
      <WeatherScale
        title="Qualidade do ar"
        unit="IQA"
        :levels="AIR_QUALITY"
        :value="airQuality"
        class="py-3"
      />
      <WeatherScale
        v-if="!forecastFailed"
        title="Índice UV"
        unit="UV"
        :levels="ULTRAVIOLET"
        :value="ultraviolet"
        class="py-3"
      >
        <template v-if="forecast?.uvMax != null" #note>
          Máx hoje {{ Math.round(forecast.uvMax) }}
        </template>
      </WeatherScale>
    </div>

    <footer
      class="reveal mt-4 flex items-center justify-between border-t border-white/8 bg-white/[0.02] px-5 py-3.5"
      style="--i: 6"
    >
      <p class="text-xs text-subtle tabular-nums">{{ updatedText }}</p>
      <a
        :href="DASHBOARD_URL"
        target="_blank"
        rel="noopener"
        class="group type-ui flex items-center gap-1 text-accent transition-colors hover:text-brand-orange"
      >
        Painel completo
        <AppIcon
          name="external"
          class="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      </a>
    </footer>
  </div>
</template>

<style scoped>
.panel {
  --spring: cubic-bezier(0.16, 1, 0.3, 1);
}

.card {
  border-radius: 0.75rem;
  border: 1px solid rgb(255 255 255 / 0.08);
  background: rgb(255 255 255 / 0.025);
  padding: 0.875rem;
}

.range-fill {
  background: var(--color-brand-teal);
  opacity: 0.85;
}

/* The blocks come in one after the other. */
.reveal {
  animation: reveal 0.5s var(--spring) both;
  animation-delay: calc(0.06s + var(--i) * 0.045s);
}

@keyframes reveal {
  from {
    opacity: 0;
    translate: 0 0.5rem;
  }
}

/* The needle turns from the north to the wind; later readings turn it smoothly. */
.needle {
  transform-origin: 50px 50px;
  transition: rotate 1s var(--spring);
  animation: needle 1.1s cubic-bezier(0.34, 1.45, 0.64, 1) 0.25s both;
}

@keyframes needle {
  from {
    rotate: 0deg;
  }
}

.bar,
.range-fill {
  transform-origin: left;
  animation: grow 0.8s var(--spring) 0.3s both;
}

@keyframes grow {
  from {
    scale: 0 1;
  }
}

.marker {
  transition: left 0.6s var(--spring);
  animation: pop 0.5s var(--spring) 0.55s both;
}

@keyframes pop {
  from {
    opacity: 0;
    scale: 0.4;
  }
}

@media (prefers-reduced-motion: reduce) {
  .reveal,
  .needle,
  .bar,
  .range-fill,
  .marker {
    animation: none;
  }
}
</style>
