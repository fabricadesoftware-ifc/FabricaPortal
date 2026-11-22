<script setup lang="ts">
import { ref, watch } from 'vue'
import BrowserWindow from '@/components/global/BrowserWindow.vue'
import type { PortfolioProject } from '@/types/project'

const props = defineProps<{
  project: PortfolioProject
  /** The one on the page of the project. */
  isLarge?: boolean
}>()

const hasFailed = ref(false)
watch(
  () => props.project.cover,
  () => (hasFailed.value = false),
)
</script>

<template>
  <BrowserWindow>
    <img
      v-if="project.cover && !hasFailed"
      :src="project.cover"
      :alt="isLarge ? `Tela do projeto ${project.name}` : ''"
      draggable="false"
      class="w-full object-cover"
      :class="isLarge ? 'aspect-2/1' : 'aspect-5/2'"
      @error="hasFailed = true"
    />
    <div v-else class="flex aspect-5/2 flex-col justify-center gap-3 px-[14%]" aria-hidden="true">
      <span class="h-2 w-3/5 rounded-full bg-(--color)" />
      <span class="h-4 rounded bg-white/8" />
      <span class="h-4 rounded bg-white/8" />
    </div>
  </BrowserWindow>
</template>
