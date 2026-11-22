<script setup lang="ts">
import { computed } from 'vue'
import { getInitials } from '@/utils/getInitials'

const props = defineProps<{
  name: string
  /** Changes where the balls are. */
  seed: number
}>()

// The four balls of the institutional logo.
const balls = [
  { radius: 11, color: 'var(--color-brand-orange)' },
  { radius: 9, color: 'var(--color-brand-teal)' },
  { radius: 7, color: 'var(--color-brand-red)' },
  { radius: 5, color: 'var(--color-brand-blue)' },
]

// Columns that the balls take turns on, so each portrait looks different.
const columns = [20, 48, 76, 102]
const rows = [24, 36, 20, 32, 28]

const placedBalls = computed(() =>
  balls.map((ball, index) => ({
    ...ball,
    x: columns[(index * 3 + props.seed) % columns.length],
    y: rows[(index * 2 + props.seed) % rows.length],
  })),
)
</script>

<template>
  <!-- Always an illustration: photos of underage students cannot be published (ECA). -->
  <div class="portrait relative overflow-hidden rounded-lg" aria-hidden="true">
    <svg viewBox="0 0 120 90" class="block w-full">
      <circle
        v-for="(ball, index) in placedBalls"
        :key="ball.color"
        class="ball"
        :cx="ball.x"
        :cy="ball.y"
        :r="ball.radius"
        :fill="ball.color"
        :style="{ animationDelay: `${(index + seed) * -0.7}s` }"
      />
      <path
        d="M0 90V66C10 54 24 52 38 60C48 48 66 42 82 56C94 50 108 52 120 62V90Z"
        fill="#fafaf5"
      />
    </svg>
    <span class="type-label absolute bottom-2.5 left-3 text-[#15151a]">{{
      getInitials(name)
    }}</span>
  </div>
</template>

<style scoped>
.portrait {
  background: color-mix(in srgb, var(--color) 20%, var(--color-ink));
}

.ball {
  animation: float 3.5s ease-in-out infinite alternate;
}

@keyframes float {
  to {
    transform: translateY(7px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ball {
    animation: none;
  }
}
</style>
