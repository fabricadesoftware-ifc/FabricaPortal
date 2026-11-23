<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { STATION } from '@/constants/station'

const now = ref(new Date())
let timer: ReturnType<typeof setTimeout> | undefined

// Ticks on the turn of each minute, so the time never lags behind.
function tick() {
  now.value = new Date()
  timer = setTimeout(tick, 60_000 - (now.value.getTime() % 60_000))
}

onMounted(tick)
onBeforeUnmount(() => clearTimeout(timer))

const format = (options: Intl.DateTimeFormatOptions) =>
  now.value.toLocaleString('pt-BR', { ...options, timeZone: STATION.timeZone })

/** "DOM 22 NOV" */
const date = computed(() =>
  [format({ weekday: 'short' }), format({ day: '2-digit' }), format({ month: 'short' })]
    .map((part) => part.replace('.', ''))
    .join(' '),
)
const time = computed(() => format({ hour: '2-digit', minute: '2-digit' }))
const iso = computed(() => now.value.toISOString())
</script>

<template>
  <p class="clock">
    <span class="type-label block text-muted">Araquari, SC · {{ date }}</span>
    <time :datetime="iso" class="time block font-mono font-bold text-white">{{ time }}</time>
  </p>
</template>

<style scoped>
.time {
  margin-top: 0.25rem;
  font-size: calc(clamp(1.5rem, 6vw, 2rem) * var(--type-scale, 1) * var(--text-scale));
  line-height: 1.1;
  font-variant-numeric: tabular-nums;
}
</style>
