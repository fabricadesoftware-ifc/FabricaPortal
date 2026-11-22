<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import BaseTag from '@/components/global/BaseTag.vue'
import { projectCategories, projectStatuses } from '@/constants/portfolio'
import type { PortfolioProject } from '@/types/project'
import { getProjectSlug } from '@/utils/getProjectSlug'
import { padNumber } from '@/utils/padNumber'
import ProjectCover from './ProjectCover.vue'

const props = defineProps<{
  project: PortfolioProject
  /** Position among the projects on screen, starting at 1. */
  position: number
}>()

const MAX_TECHNOLOGIES = 3

const color = computed(() =>
  props.project.category ? projectCategories[props.project.category].color : 'var(--color-muted)',
)
const status = computed(() => projectStatuses[props.project.status])
const technologies = computed(() => props.project.technologies.slice(0, MAX_TECHNOLOGIES))
</script>

<template>
  <article
    class="flex flex-col rounded-3xl border border-white/12 bg-surface p-4 md:p-5"
    :style="{ '--color': color }"
  >
    <ProjectCover :project="project" />

    <div class="flex flex-1 flex-col px-1 pt-5">
      <p class="type-label flex justify-between gap-4">
        <span class="text-(--color)">{{ project.category }}</span>
        <span class="text-subtle" aria-hidden="true">{{ padNumber(position) }}</span>
      </p>
      <h2 class="type-h3 mt-2">{{ project.name }}</h2>
      <p class="type-body mt-3 line-clamp-3 text-muted">{{ project.description }}</p>

      <ul class="mt-4 mb-6 flex flex-wrap gap-1.5" aria-label="Tecnologias">
        <li v-for="technology in technologies" :key="technology">
          <BaseTag>{{ technology }}</BaseTag>
        </li>
      </ul>

      <div class="mt-auto flex items-center justify-between gap-4">
        <p class="type-label flex items-center gap-2 text-muted">
          <span
            class="size-2 rounded-full"
            :style="{ background: status.color }"
            aria-hidden="true"
          />
          {{ status.label }}
        </p>
        <RouterLink
          :to="`/projects/${getProjectSlug(project)}`"
          class="group type-ui -my-3 inline-flex gap-2.5 py-3 text-(--color)"
        >
          <span class="underline-offset-4 group-hover:underline"
            >Ver projeto<span class="sr-only"> {{ project.name }}</span></span
          >
          <span
            class="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
            aria-hidden="true"
            >→</span
          >
        </RouterLink>
      </div>
    </div>
  </article>
</template>
