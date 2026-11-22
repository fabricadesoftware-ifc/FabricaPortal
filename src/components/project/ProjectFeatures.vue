<script setup lang="ts">
import AppIcon from '@/components/global/AppIcon.vue'
import type { ProjectFeature } from '@/types/project'

defineProps<{ features: ProjectFeature[] }>()

const colors = ['var(--color-brand-orange)', 'var(--color-brand-teal)', '#8080ff']
</script>

<template>
  <ul class="grid gap-4 sm:grid-cols-3">
    <li
      v-for="(feature, index) in features"
      :key="feature.title"
      class="feature rounded-3xl border border-white/8 bg-surface p-6 sm:max-xl:p-5"
      :style="{ '--feature-color': colors[index % colors.length] }"
    >
      <span class="icon grid size-11 place-items-center rounded-lg">
        <AppIcon :name="feature.icon" class="size-5" />
      </span>
      <h3 class="type-h4 mt-5">{{ feature.title }}</h3>
      <p class="type-small mt-1.5 text-muted">{{ feature.description }}</p>
    </li>
  </ul>
</template>

<style scoped>
.icon {
  color: var(--feature-color);
  background: color-mix(in srgb, var(--feature-color) 15%, transparent);
  border: 1px solid color-mix(in srgb, var(--feature-color) 40%, transparent);
}
</style>
