<script setup lang="ts">
import { computed } from 'vue'
import { definePage } from 'vue-router/experimental'
import EmptyResults from '@/components/global/EmptyResults.vue'
import PageHeading from '@/components/global/PageHeading.vue'
import ProjectsCarousel from '@/components/projects/ProjectsCarousel.vue'
import ProjectsToolbar from '@/components/projects/ProjectsToolbar.vue'
import { usePageTitle } from '@/composables/usePageTitle'
import { useProjectFilters } from '@/composables/useProjectFilters'
import { useProjects } from '@/composables/useProjects'
import { FEATURED_PROJECT } from '@/constants/portfolio'

definePage({ name: 'projects', path: '/projects' })

usePageTitle('Projetos')

const { projects, isLoading } = useProjects()
const { search, category, status, technologies, matches, clear } = useProjectFilters(projects)

/** Filtered lists open in their middle. */
const startsAt = computed(() =>
  matches.value.length === projects.value.length ? FEATURED_PROJECT : undefined,
)
</script>

<template>
  <main class="section pt-32 md:pt-40">
    <PageHeading description="Feitos por alunos, com orientação de docentes.">
      Nossos <span class="text-brand-orange">projetos</span>
    </PageHeading>

    <ProjectsToolbar
      v-model:search="search"
      v-model:category="category"
      v-model:status="status"
      v-model:technologies="technologies"
      class="mt-8"
    />

    <!-- The minimum height keeps the footer from jumping while the projects load. -->
    <div class="mt-8 min-h-120">
      <ProjectsCarousel v-if="matches.length" :projects="matches" :starts-at="startsAt" />
      <EmptyResults v-else-if="!isLoading" title="Nenhum projeto encontrado" @clear="clear" />
    </div>
  </main>
</template>
