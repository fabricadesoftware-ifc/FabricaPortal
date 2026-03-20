<script setup lang="ts">
import { useProjectsStore } from '@/stores/projects'

const projectsStore = useProjectsStore()

const getRandomColor = (): string => {
  const colors = ['#5058F2', '#26736B', '#F26A1B', '#D95252']
  return colors[Math.floor(Math.random() * colors.length)]
}
</script>

<template>
  <section class="w-full py-4 text-left">
    <div class="flex flex-col justify-start items-start gap-5 mx-auto">
      <div v-if="projectsStore.state.selectedProject?.technologies?.length" class="w-full">
        <h3 class="text-lg font-bold text-gray-800 mb-2">Tecnologias:</h3>
        <div class="flex flex-wrap gap-2.5 items-start justify-start">
          <div
            v-for="item in projectsStore.state.selectedProject?.technologies"
            :key="item.id"
            class="px-3 py-1.5 rounded-full text-white text-[10pt] font-bold shadow-sm transition-transform hover:scale-105"
            :style="{ backgroundColor: getRandomColor() }"
          >
            {{ item.name }}
          </div>
        </div>
      </div>

      <div v-if="projectsStore.state.selectedProject?.links" class="w-full">
        <h3 class="text-lg font-bold text-gray-800 mb-2">Links:</h3>
        <div class="flex flex-wrap gap-2 items-center">
          <span
            v-for="(value, key) in projectsStore.state.selectedProject?.links"
            :key="key"
            class="flex items-center"
          >
            <a
              :href="value"
              target="_blank"
              class="px-3 py-2 rounded-lg text-[10pt] text-white font-bold no-underline transition-all duration-300 hover:scale-105 hover:brightness-110 shadow-sm"
              :style="{ backgroundColor: getRandomColor() }"
            >
              {{ key }}
            </a>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
