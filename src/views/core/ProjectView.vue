<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { definePage } from 'vue-router/experimental'
import ProjectPage from '@/components/project/ProjectPage.vue'
import { useMembers } from '@/composables/useMembers'
import { useNotFound } from '@/composables/useNotFound'
import { usePageTitle } from '@/composables/usePageTitle'
import { useProjects } from '@/composables/useProjects'
import { useProjectTeams } from '@/composables/useProjectTeams'
import { getNextItems } from '@/utils/getNextItems'
import { getProjectSlug } from '@/utils/getProjectSlug'

definePage({ name: 'project', path: '/projects/:slug' })

const MAX_OTHERS = 3

const route = useRoute('project')

const { projects, isLoading } = useProjects()
const teams = useProjectTeams()
const { members } = useMembers()

const index = computed(() =>
  projects.value.findIndex((project) => getProjectSlug(project) === route.params.slug),
)
const project = computed(() => projects.value[index.value])
const team = computed(() => (project.value?.id ? teams.value[project.value.id] : undefined))
const projectMembers = computed(() => {
  const ids = project.value?.memberIds ?? []
  return members.value.filter(({ id }) => id !== undefined && ids.includes(id))
})
const others = computed(() => getNextItems(projects.value, index.value, MAX_OTHERS))

usePageTitle(() => project.value?.name)
useNotFound(() => !isLoading.value && !project.value)
</script>

<template>
  <ProjectPage
    v-if="project"
    :key="project.name"
    :project="project"
    :others="others"
    :team="team"
    :members="projectMembers"
  />
  <!-- Keeps the footer from jumping while the project loads. -->
  <main v-else class="min-h-svh" />
</template>
