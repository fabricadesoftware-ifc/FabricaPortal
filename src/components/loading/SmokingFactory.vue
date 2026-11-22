<script setup lang="ts">
defineProps<{
  /** From 0 to 1. The windows light up along the way. */
  progress: number
}>()

const windows = [68, 94, 120]

// Where each puff stops, drawing the arc of the institutional logo.
const puffs = [
  { x: 19, y: -20, radius: 10, color: 'var(--color-brand-orange)' },
  { x: 45, y: -31, radius: 7.5, color: 'var(--color-brand-teal)' },
  { x: 67, y: -31, radius: 5.5, color: 'var(--color-brand-red)' },
  { x: 84, y: -25, radius: 3.5, color: 'var(--color-brand-blue)' },
]
</script>

<template>
  <svg viewBox="20 0 160 132" class="scene" aria-hidden="true">
    <!-- The farthest puff leaves first. -->
    <circle
      v-for="(puff, index) in puffs"
      :key="puff.color"
      class="puff"
      cx="47"
      cy="46"
      :r="puff.radius"
      :fill="puff.color"
      :style="{ '--x': `${puff.x}px`, '--y': `${puff.y}px`, '--i': puffs.length - 1 - index }"
    />

    <g class="factory">
      <path class="metal" d="M41 50h12l2 78H39z" />
      <rect class="metal" x="38" y="44" width="18" height="7" rx="2.5" />
      <path class="band" d="M40.6 64h12.8l.3 9H40.3z" />
      <path class="metal" d="M58 128V70l28 18V70l28 18V70l28 18v40z" />

      <rect
        v-for="(x, index) in windows"
        :key="x"
        class="window"
        :class="{ lit: progress > (index + 0.5) / windows.length }"
        :x="x"
        y="100"
        width="14"
        height="12"
        rx="2"
      />
    </g>

    <line class="ground" x1="26" y1="128.5" x2="174" y2="128.5" />
  </svg>
</template>

<style scoped>
.scene {
  --cycle: 1.1s;
  overflow: visible;
}

.metal {
  fill: #141417;
  stroke: #2c2c32;
  stroke-linejoin: round;
}

.band {
  fill: var(--color-brand-orange);
}

.ground {
  stroke: #2c2c32;
  stroke-width: 1.5;
  stroke-linecap: round;
}

.window {
  fill: #222227;
  transition: fill 0.2s;
}

.window.lit {
  fill: var(--color-brand-orange);
}

.puff {
  transform-box: fill-box;
  transform-origin: center;
  animation: puff var(--cycle) calc(var(--cycle) * var(--i) * 0.08) infinite both;
}

.factory {
  transform-box: fill-box;
  transform-origin: 50% 100%;
  animation: breathe calc(var(--cycle) / 2) infinite alternate ease-in-out;
}

@keyframes puff {
  0% {
    transform: scale(0.3);
    opacity: 0;
    animation-timing-function: ease-out;
  }
  8% {
    opacity: 1;
  }
  45%,
  75% {
    transform: translate(var(--x), var(--y));
    opacity: 1;
    animation-timing-function: ease-in;
  }
  100% {
    transform: translate(calc(var(--x) + 8px), calc(var(--y) - 6px)) scale(0.7);
    opacity: 0;
  }
}

@keyframes breathe {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.015, 0.97);
  }
}
</style>
