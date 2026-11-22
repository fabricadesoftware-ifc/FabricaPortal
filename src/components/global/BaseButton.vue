<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const {
  to,
  href,
  variant = 'light',
  arrow = true,
} = defineProps<{
  /** Internal route. */
  to?: string
  /** External address, opened in a new tab. */
  href?: string
  variant?: 'primary' | 'light' | 'outline'
  arrow?: boolean
}>()

const variants = {
  primary: 'border-transparent bg-brand-orange text-white hover:bg-[#e65c00]',
  light: 'border-transparent bg-[#fafaf5] text-[#15151a] hover:bg-white/85',
  outline: 'border-white/15 hover:bg-white/8',
}

const tag = computed(() => (to ? RouterLink : 'a'))
const attributes = computed(() => (to ? { to } : { href, target: '_blank', rel: 'noopener' }))
</script>

<template>
  <component
    :is="tag"
    v-bind="attributes"
    class="group inline-flex items-center justify-center gap-2.5 rounded-lg border type-ui px-[calc(1.25rem*var(--type-scale,1))] py-[calc(0.625rem*var(--type-scale,1))] transition-colors"
    :class="variants[variant]"
  >
    <slot />
    <span
      v-if="arrow"
      class="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
      aria-hidden="true"
      >→</span
    >
  </component>
</template>
