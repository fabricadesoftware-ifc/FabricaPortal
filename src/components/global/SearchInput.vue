<script setup lang="ts">
import AppIcon from './AppIcon.vue'

defineProps<{
  /** What is searched, such as "Buscar projeto". */
  label: string
}>()

const search = defineModel<string>({ required: true })
</script>

<template>
  <label
    class="type-ui flex min-w-0 items-center gap-3 rounded-lg border border-white/12 bg-surface px-4 py-2.5 transition-colors focus-within:border-white/45 hover:border-white/25"
  >
    <AppIcon name="search" class="size-4 shrink-0 text-muted" />
    <span class="sr-only">{{ label }}</span>
    <input
      v-model="search"
      type="search"
      :placeholder="`${label}…`"
      class="w-full min-w-0 outline-none placeholder:text-subtle"
    />
  </label>
</template>

<style scoped>
/* Blue by default on Chromium. */
input::-webkit-search-cancel-button {
  filter: grayscale(1) brightness(1.8);
  cursor: pointer;
}
</style>
