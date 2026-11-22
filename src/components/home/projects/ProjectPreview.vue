<script setup lang="ts">
import BrowserWindow from '@/components/global/BrowserWindow.vue'
import type { FeaturedProject } from '@/types/project'

defineProps<{ project: FeaturedProject }>()
</script>

<template>
  <div
    class="grid place-items-center overflow-hidden rounded-3xl border border-white/8 bg-surface p-5 md:p-8"
  >
    <BrowserWindow class="w-full">
      <img
        :src="project.cover"
        :alt="`Capa do projeto ${project.name}`"
        loading="lazy"
        class="aspect-2/1 w-full object-cover"
      />
    </BrowserWindow>
  </div>
</template>
