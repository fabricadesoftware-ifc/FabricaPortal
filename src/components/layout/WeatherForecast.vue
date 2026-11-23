<script setup lang="ts">
import { nextTick, ref, useId, useTemplateRef, watch } from 'vue'
import AppIcon from '@/components/global/AppIcon.vue'
import WeatherIcon from '@/components/global/WeatherIcon.vue'
import type { Forecast, ForecastHour } from '@/types/weather'
import { formatReading } from '@/utils/formatReading'
import { conditionLabel } from '@/utils/weatherCondition'

/** From this chance on, the rain is worth noticing, in %. */
const LIKELY_RAIN = 20
/** Hours seen at once. */
const VISIBLE = 8
/** Past hours left in sight when the panel opens, before the current one. */
const PAST_IN_SIGHT = 2
/** Hours moved by each arrow. */
const STEP = 4

const props = defineProps<{
  /** Null while it loads. */
  forecast: Forecast | null
  /** Position of the current hour in the forecast, or -1. */
  currentIndex: number
}>()

const titleId = useId()
const strip = useTemplateRef('strip')

const canGoBack = ref(false)
const canGoForward = ref(false)

function updateArrows() {
  const element = strip.value
  if (!element) return
  canGoBack.value = element.scrollLeft > 1
  canGoForward.value = element.scrollLeft + element.clientWidth < element.scrollWidth - 1
}

const hourWidth = () => (strip.value?.clientWidth ?? 0) / VISIBLE

function move(direction: 1 | -1) {
  strip.value?.scrollBy({ left: direction * STEP * hourWidth(), behavior: 'smooth' })
}

// Opens on now, with a bit of the past at the left.
watch(
  () => props.forecast,
  async (forecast) => {
    if (!forecast) return
    await nextTick()
    if (strip.value)
      strip.value.scrollLeft = Math.max(0, props.currentIndex - PAST_IN_SIGHT) * hourWidth()
    updateArrows()
  },
  { immediate: true },
)

const weekday = (time: string) =>
  new Date(`${time}:00Z`)
    .toLocaleDateString('pt-BR', { weekday: 'short', timeZone: 'UTC' })
    .replace('.', '')

/** "Agora", the day when it changes, or the hour. */
function label(slot: ForecastHour, index: number) {
  if (index === props.currentIndex) return 'Agora'
  if (slot.hour === 0 && index > 0) return weekday(slot.time)
  return `${String(slot.hour).padStart(2, '0')}h`
}

const isNewDay = (slot: ForecastHour, index: number) => slot.hour === 0 && index > 0

/** Spoken name of each hour, since the columns are drawn for the eyes. */
function description(slot: ForecastHour) {
  const time = new Date(`${slot.time}:00Z`).toLocaleString('pt-BR', {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'UTC',
  })
  return `${time}: ${conditionLabel(slot.condition)}, ${formatReading(slot.temperature, 0, 0)} graus, ${slot.rainChance ?? '--'}% de chance de chuva`
}
</script>

<template>
  <section :aria-labelledby="titleId" class="rounded-xl border border-white/8 px-2 pt-3 pb-2">
    <div class="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 px-1">
      <h3 :id="titleId" class="type-label text-subtle">Previsão</h3>
      <p v-if="forecast" class="text-[0.6875rem] text-subtle tabular-nums">
        Hoje · Máx <span class="text-white/85">{{ formatReading(forecast.max, 0, 0) }}°</span> · Mín
        <span class="text-white/85">{{ formatReading(forecast.min, 0, 0) }}°</span> · Chuva
        <span :class="(forecast.rainChance ?? 0) >= LIKELY_RAIN ? 'text-sky-400' : 'text-white/85'"
          >{{ forecast.rainChance ?? '--' }}%</span
        >
      </p>
    </div>

    <div v-if="forecast" class="relative mt-2.5">
      <ol
        ref="strip"
        class="strip flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain"
        :class="{ 'fade-left': canGoBack, 'fade-right': canGoForward }"
        tabindex="0"
        aria-label="Previsão hora a hora. Role para os lados."
        @scroll.passive="updateArrows"
      >
        <li
          v-for="(slot, index) in forecast.hours"
          :key="slot.time"
          class="slot flex w-[12.5%] shrink-0 snap-start flex-col items-center gap-1 rounded-lg py-1.5"
          :class="{
            'bg-white/6': index === currentIndex,
            'opacity-45': index < currentIndex,
            'day-start': isNewDay(slot, index),
          }"
          :style="{ '--slot': Math.abs(index - currentIndex) }"
          :aria-current="index === currentIndex ? 'time' : undefined"
          :aria-label="description(slot)"
        >
          <span
            class="font-mono text-[0.625rem] whitespace-nowrap tabular-nums"
            :class="
              index === currentIndex
                ? 'font-bold text-accent'
                : isNewDay(slot, index)
                  ? 'font-bold text-white/85 capitalize'
                  : 'text-subtle'
            "
            aria-hidden="true"
            >{{ label(slot, index) }}</span
          >
          <WeatherIcon :condition="slot.condition" :is-day="slot.isDay" class="size-6" />
          <span class="text-sm leading-none font-semibold tabular-nums" aria-hidden="true"
            >{{ formatReading(slot.temperature, 0, 0) }}°</span
          >
          <span
            class="text-[0.625rem] tabular-nums"
            :class="(slot.rainChance ?? 0) >= LIKELY_RAIN ? 'text-sky-400' : 'text-subtle'"
            aria-hidden="true"
            >{{ slot.rainChance ?? '--' }}%</span
          >
        </li>
      </ol>

      <Transition name="arrow">
        <button
          v-if="canGoBack"
          type="button"
          aria-label="Horas anteriores"
          class="arrow left-0"
          @click="move(-1)"
        >
          <AppIcon name="previous" class="size-3.5" />
        </button>
      </Transition>
      <Transition name="arrow">
        <button
          v-if="canGoForward"
          type="button"
          aria-label="Próximas horas"
          class="arrow right-0"
          @click="move(1)"
        >
          <AppIcon name="next" class="size-3.5" />
        </button>
      </Transition>
    </div>

    <!-- Same height as the forecast, while it loads. -->
    <div v-else class="mt-2.5 grid grid-cols-8 gap-1" aria-hidden="true">
      <span
        v-for="index in VISIBLE"
        :key="index"
        class="h-[5.25rem] animate-pulse rounded-lg bg-white/4"
      />
    </div>
  </section>
</template>

<style scoped>
.strip {
  scrollbar-width: none;
  --fade: 2.25rem;
}

.strip::-webkit-scrollbar {
  display: none;
}

/* The edges fade where there are more hours to see. */
.strip.fade-left {
  mask-image: linear-gradient(to right, transparent, #000 var(--fade));
}

.strip.fade-right {
  mask-image: linear-gradient(to left, transparent, #000 var(--fade));
}

.strip.fade-left.fade-right {
  mask-image: linear-gradient(
    to right,
    transparent,
    #000 var(--fade),
    #000 calc(100% - var(--fade)),
    transparent
  );
}

/* A line marks the start of tomorrow. */
.day-start {
  position: relative;
}

.day-start::before {
  content: '';
  position: absolute;
  inset-block: 0.375rem;
  left: 0;
  width: 1px;
  background: rgb(255 255 255 / 0.12);
}

.arrow {
  position: absolute;
  top: 50%;
  translate: 0 -50%;
  display: grid;
  place-items: center;
  width: 1.75rem;
  height: 1.75rem;
  border: 1px solid rgb(255 255 255 / 0.12);
  border-radius: 9999px;
  background: var(--color-surface);
  color: rgb(255 255 255 / 0.8);
  cursor: pointer;
  box-shadow: 0 0.25rem 0.75rem rgb(0 0 0 / 0.5);
  transition:
    color 0.15s,
    border-color 0.15s,
    opacity 0.2s;
}

.arrow:hover {
  color: #fff;
  border-color: rgb(255 255 255 / 0.3);
}

.arrow-enter-from,
.arrow-leave-to {
  opacity: 0;
}

/* The hours come in from now outwards. */
.slot {
  animation: slot 0.45s cubic-bezier(0.16, 1, 0.3, 1) both;
  animation-delay: calc(var(--slot) * 0.03s);
}

@keyframes slot {
  from {
    opacity: 0;
    translate: 0 0.375rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .slot {
    animation: none;
  }
}
</style>
