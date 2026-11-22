<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { projectCategories } from '@/constants/portfolio'
import type { PortfolioProject } from '@/types/project'
import { getProjectSlug } from '@/utils/getProjectSlug'

defineProps<{ projects: PortfolioProject[] }>()
</script>

<template>
  <ul class="flex flex-wrap gap-2.5">
    <li v-for="project in projects" :key="project.name">
      <RouterLink
        :to="`/projects/${getProjectSlug(project)}`"
        class="type-ui flex items-center gap-3 rounded-lg border border-white/12 bg-surface px-4 py-2.5 transition-colors hover:border-white/25"
      >
        <span
          class="size-2 rounded-full"
          :style="{
            background: project.category
              ? projectCategories[project.category].color
              : 'var(--color-muted)',
          }"
          aria-hidden="true"
        />
        {{ project.name }}
      </RouterLink>
    </li>
  </ul>
</template>
