<script setup lang="ts">
import AppIcon from './AppIcon.vue'

defineProps<{
  direction: 'previous' | 'next'
  label: string
  isDisabled: boolean
}>()
</script>

<template>
  <!-- Not "disabled": that would drop the keyboard focus at the ends. -->
  <button type="button" :aria-label="label" :aria-disabled="isDisabled" class="arrow">
    <AppIcon :name="direction" class="size-5" />
  </button>
</template>

<style scoped>
.arrow {
  display: grid;
  width: 2.75rem;
  height: 2.75rem;
  place-items: center;
  background: var(--color-surface);
  border: 1px solid rgb(255 255 255 / 0.12);
  border-radius: 50%;
  cursor: pointer;
  transition:
    border-color 0.15s,
    color 0.15s;
}

.arrow:hover:not([aria-disabled='true']) {
  color: var(--color-brand-orange);
  border-color: var(--color-brand-orange);
}

.arrow[aria-disabled='true'] {
  color: rgb(255 255 255 / 0.25);
  cursor: default;
}
</style>
