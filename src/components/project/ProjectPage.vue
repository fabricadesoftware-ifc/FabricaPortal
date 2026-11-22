<script setup lang="ts">
import { computed } from 'vue'
import LinkRows from '@/components/global/LinkRows.vue'
import NumberedSection from '@/components/global/NumberedSection.vue'
import SectionNav from '@/components/global/SectionNav.vue'
import TechnologyBadge from '@/components/global/TechnologyBadge.vue'
import ProjectCover from '@/components/projects/ProjectCover.vue'
import { useProjectProgress } from '@/composables/useProjectProgress'
import { projectCategories } from '@/constants/portfolio'
import { projectDetails } from '@/constants/projectDetails'
import { findTechnology } from '@/constants/technologies'
import type { PortfolioProject, Team } from '@/types/project'
import { getProjectSlug } from '@/utils/getProjectSlug'
import ProjectFacts from './ProjectFacts.vue'
import ProjectFeatures from './ProjectFeatures.vue'
import ProjectHeader from './ProjectHeader.vue'
import ProjectProgress from './ProjectProgress.vue'

const props = defineProps<{
  project: PortfolioProject
  others: PortfolioProject[]
  /** Undefined while loading or when the API is unavailable. */
  team?: Team
}>()

const { repositories, features } = projectDetails[getProjectSlug(props.project)] ?? {
  repositories: [],
  features: [],
}

const { status, progress, issueCount, closedCount, mergedCount, percentage, lastActivity } =
  useProjectProgress(repositories)

const color = computed(() =>
  props.project.category ? projectCategories[props.project.category].color : 'var(--color-muted)',
)

const otherRows = computed(() =>
  props.others.map((project) => ({
    label: project.name,
    to: `/projects/${getProjectSlug(project)}`,
    tag: project.category,
    color: project.category && projectCategories[project.category].color,
  })),
)

// Projects without repositories or features skip their sections.
const sections = [
  { id: 'visao-geral', title: 'Visão geral' },
  ...(repositories.length ? [{ id: 'progresso', title: 'Progresso' }] : []),
  ...(features.length ? [{ id: 'o-que-entrega', title: 'O que entrega' }] : []),
  { id: 'stack', title: 'Stack' },
]
</script>

<template>
  <main class="section pt-32 md:pt-40" :style="{ '--color': color }">
    <ProjectHeader :project="project" />
    <ProjectFacts :project="project" :team="team" :percentage="percentage" class="mt-10" />

    <div class="mt-10 rounded-3xl border border-white/8 bg-surface p-4 md:p-8 xl:p-10">
      <ProjectCover :project="project" is-large />
    </div>

    <div class="mt-16 grid gap-12 md:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-16">
      <SectionNav
        label="Seções do projeto"
        :sections="sections"
        class="self-start max-lg:hidden lg:sticky lg:top-32"
      />

      <div class="min-w-0 space-y-16 md:space-y-20">
        <NumberedSection
          v-for="(section, index) in sections"
          :id="section.id"
          :key="section.id"
          :title="section.title"
          :position="index + 1"
        >
          <p
            v-if="section.id === 'visao-geral'"
            class="type-body max-w-3xl break-words whitespace-pre-line text-muted"
          >
            {{ project.about?.trim() || project.description }}
          </p>
          <ProjectProgress
            v-else-if="section.id === 'progresso'"
            :project-status="project.status"
            :status="status"
            :repositories="repositories"
            :progress="progress"
            :issue-count="issueCount"
            :closed-count="closedCount"
            :merged-count="mergedCount"
            :percentage="percentage"
            :last-activity="lastActivity"
          />
          <ProjectFeatures v-else-if="section.id === 'o-que-entrega'" :features="features" />
          <ul v-else class="flex flex-wrap gap-3">
            <li v-for="technology in project.technologies" :key="technology">
              <TechnologyBadge :technology="findTechnology(technology)" />
            </li>
          </ul>
        </NumberedSection>
      </div>
    </div>

    <LinkRows
      v-if="others.length"
      title="Outros projetos"
      :rows="otherRows"
      class="mt-20 md:mt-28"
    />
  </main>
</template>
