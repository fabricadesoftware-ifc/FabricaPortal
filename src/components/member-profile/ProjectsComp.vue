<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ProjectCard } from '@/components'
import { useProjectsStore } from '@/stores/projects'

const route = useRoute()
const projectsStore = useProjectsStore()

onMounted(async () => {
  const memberId = route.params.id as string
  if (memberId) {
    await projectsStore.filterProjectsByMemberId(memberId)
  }
})
</script>

<template>
  <section v-if="projectsStore.state.filteredProjects.length > 0" class="mb-5">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <ProjectCard
        v-for="project in projectsStore.state.filteredProjects"
        :key="project.id"
        :title="project.name"
        :description="project.about"
        :logo="project.logo"
        :linkProject="project"
        :type="project.type"
        :status="project.state"
      />
    </div>
  </section>

  <section v-else class="mb-5 flex flex-col gap-2">
    <h3 class="text-xl font-bold text-[var(--text-color)] mb-2 uppercase tracking-wide">
      Projetos
    </h3>
    <p class="text-gray-500 italic">Nenhum projeto vinculado a este membro.</p>
  </section>
</template>
