<script setup lang="ts">
import { computed } from 'vue'
import type { WeatherCondition } from '@/utils/weatherCondition'

const props = defineProps<{ condition: WeatherCondition; isDay: boolean }>()

type Point = [x: number, y: number]

/** A cloud 48 wide and 28 tall, drawn from its top left corner. */
const CLOUD = 'M11 28a10 10 0 0 1-1-20 13 13 0 0 1 24-3 11.5 11.5 0 0 1 3 23z'
const RAYS = Array.from({ length: 8 }, (_, index) => index * 45)

const hasSun = computed(() => ['clear', 'partly', 'showers'].includes(props.condition))
const hasClouds = computed(() => props.condition !== 'clear')
/** Rain and snow fall from two clouds, the others have only one. */
const hasBackCloud = computed(() => !['clear', 'partly', 'showers'].includes(props.condition))
const hasDrops = computed(() => ['showers', 'rain', 'storm', 'sleet'].includes(props.condition))
const hasFlakes = computed(() => ['sleet', 'snow'].includes(props.condition))

/** Alone, the sun or the moon fill the icon; with a cloud, they peek from behind it. */
const sky = computed(() =>
  props.condition === 'clear' ? { x: 32, y: 32, scale: 1 } : { x: 22, y: 20, scale: 0.72 },
)

const drops = computed<Point[]>(() =>
  props.condition === 'storm'
    ? [
        [18, 50],
        [45, 50],
      ]
    : props.condition === 'showers'
      ? [
          [26, 50],
          [36, 52],
        ]
      : props.condition === 'sleet'
        ? [
            [22, 50],
            [40, 52],
          ]
        : [
            [20, 50],
            [30, 53],
            [40, 50],
          ],
)

const flakes = computed<Point[]>(() =>
  props.condition === 'sleet'
    ? [[31, 54]]
    : [
        [21, 51],
        [32, 55],
        [43, 51],
      ],
)
</script>

<template>
  <svg viewBox="0 0 64 64" aria-hidden="true">
    <!-- Sun or moon -->
    <g v-if="hasSun" :transform="`translate(${sky.x} ${sky.y}) scale(${sky.scale})`">
      <template v-if="isDay">
        <line
          v-for="angle in RAYS"
          :key="angle"
          x1="0"
          y1="-17"
          x2="0"
          y2="-22"
          stroke="#fbbf24"
          stroke-width="3.5"
          stroke-linecap="round"
          :transform="`rotate(${angle})`"
        />
        <circle r="12" fill="#fbbf24" />
      </template>
      <template v-else>
        <path d="M4-18a16 16 0 1 0 14 22A13 13 0 0 1 4-18z" fill="#f59e0b" />
        <path
          v-if="condition === 'clear'"
          d="M15-15l1 2.4 2.4 1-2.4 1-1 2.4-1-2.4-2.4-1 2.4-1z M21-3l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7z"
          fill="#fde68a"
        />
      </template>
    </g>

    <!-- Without rain below, the clouds go down to the middle. -->
    <g v-if="hasClouds" :transform="condition === 'cloudy' ? 'translate(0 8)' : undefined">
      <path
        v-if="hasBackCloud"
        :d="CLOUD"
        fill="#64748b"
        transform="translate(18 10) scale(0.85)"
      />
      <path
        :d="CLOUD"
        :fill="condition === 'storm' ? '#94a3b8' : '#cbd5e1'"
        :transform="hasBackCloud ? 'translate(6 18)' : 'translate(12 22)'"
      />
    </g>

    <line
      v-for="[x, y] in hasDrops ? drops : []"
      :key="`${x}-${y}`"
      :x1="x"
      :y1="y"
      :x2="x - 2"
      :y2="y + 6"
      stroke="#60a5fa"
      stroke-width="3"
      stroke-linecap="round"
    />

    <g
      v-for="[x, y] in hasFlakes ? flakes : []"
      :key="`${x}-${y}`"
      :transform="`translate(${x} ${y})`"
      stroke="#e0f2fe"
      stroke-width="1.8"
      stroke-linecap="round"
    >
      <line x1="0" y1="-3.5" x2="0" y2="3.5" />
      <line x1="-3" y1="-1.75" x2="3" y2="1.75" />
      <line x1="-3" y1="1.75" x2="3" y2="-1.75" />
    </g>

    <path
      v-if="condition === 'storm'"
      d="M33 44h-6l-3 9h5l-2 9 9-12h-5l2-6z"
      fill="#facc15"
      stroke="#facc15"
      stroke-width="1"
      stroke-linejoin="round"
    />
  </svg>
</template>
