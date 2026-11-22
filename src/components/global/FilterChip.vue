<script setup lang="ts">
const { variant = 'outline' } = defineProps<{
  label: string
  isActive: boolean
  /** Color of the dot. Without it there is no dot. */
  color?: string
  /** The plain one only has a border while active. */
  variant?: 'outline' | 'plain'
}>()

const variants = {
  outline: {
    active: 'border-brand-orange bg-brand-orange/15 text-white',
    inactive: 'border-white/12 text-muted hover:border-white/25 hover:text-white',
  },
  plain: {
    active: 'border-white/45 bg-white/8 text-white',
    inactive: 'border-transparent text-muted hover:text-white',
  },
}
</script>

<template>
  <button
    type="button"
    :aria-pressed="isActive"
    class="type-ui flex shrink-0 cursor-pointer items-center gap-2 rounded-lg border px-3.5 py-1.5 -outline-offset-2 transition-colors"
    :class="variants[variant][isActive ? 'active' : 'inactive']"
  >
    <span
      v-if="color"
      class="size-2 shrink-0 rounded-full border-2"
      :style="{ borderColor: color, background: isActive ? color : undefined }"
      aria-hidden="true"
    />
    {{ label }}
  </button>
</template>
