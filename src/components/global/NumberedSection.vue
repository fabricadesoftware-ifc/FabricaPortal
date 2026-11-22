<script setup lang="ts">
import { padNumber } from '@/utils/padNumber'

defineProps<{
  id: string
  title: string
  /** Position among the sections, starting at 1. */
  position: number
}>()
</script>

<template>
  <section :id="id" :aria-labelledby="`${id}-title`" class="scroll-mt-28">
    <h2 :id="`${id}-title`" class="type-h3 flex items-baseline gap-4">
      <span class="type-label text-brand-orange" aria-hidden="true">{{ padNumber(position) }}</span>
      {{ title }}
    </h2>
    <div class="mt-6">
      <slot />
    </div>
  </section>
</template>
