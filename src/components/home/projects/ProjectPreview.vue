<script setup lang="ts">
import type { FeaturedProject } from '@/types/project'

defineProps<{ project: FeaturedProject }>()
</script>

<template>
  <div
    class="grid place-items-center overflow-hidden rounded-3xl border border-white/8 bg-surface p-5 md:p-8"
  >
    <!-- Browser window -->
    <div class="w-full overflow-hidden rounded-xl border border-white/10 bg-ink">
      <div class="flex items-center gap-1.5 px-4 py-3" aria-hidden="true">
        <span v-for="dot in 3" :key="dot" class="size-2 rounded-full bg-white/15" />
        <span class="ml-2 h-4 w-2/5 rounded bg-white/8" />
      </div>
      <img
        :src="project.cover"
        :alt="`Capa do projeto ${project.name}`"
        loading="lazy"
        class="aspect-2/1 w-full object-cover"
      />
    </div>
  </div>
</template>
