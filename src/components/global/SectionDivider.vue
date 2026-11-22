<script setup lang="ts">
const { variant = 'balls' } = defineProps<{
  /** The balls of the logo in the center, or a line with one ball at that side. */
  variant?: 'balls' | 'left' | 'right'
}>()

// The four balls of the institutional logo.
const logoBalls = [
  { size: 9, color: 'var(--color-brand-orange)' },
  { size: 7, color: 'var(--color-brand-teal)' },
  { size: 5, color: 'var(--color-brand-red)' },
  { size: 4, color: 'var(--color-brand-blue)' },
]

const balls = {
  balls: logoBalls,
  left: [{ size: 9, color: 'var(--color-brand-orange)' }],
  right: [{ size: 9, color: 'var(--color-brand-blue)' }],
}
</script>

<template>
  <div class="flex items-center gap-[7px] px-(--page-padding)" aria-hidden="true">
    <span v-if="variant !== 'left'" class="mr-2.5 h-px flex-1 bg-white/8" />
    <span
      v-for="ball in balls[variant]"
      :key="ball.color"
      class="rounded-full"
      :style="{ width: `${ball.size}px`, height: `${ball.size}px`, background: ball.color }"
    />
    <span v-if="variant !== 'right'" class="ml-2.5 h-px flex-1 bg-white/8" />
  </div>
</template>
