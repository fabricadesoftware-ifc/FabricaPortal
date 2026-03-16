<script setup lang="ts">
import { onMounted } from 'vue'
import { ButtonAll, ProjectsCard } from '@/components'
import { useProjectsStore } from '@/stores/projects'
import { useMembersStore } from '@/stores/members'

const projectsStore = useProjectsStore()
const membersStore = useMembersStore()

onMounted(async () => {
  await projectsStore.getProjects()
  await membersStore.getMembers()
})
</script>

<template>
  <section id="projects" class="p-10 md:px-50">
    <h2 class="text-3xl font-bold text-gray-800 mb-10">Projetos</h2>

    <div class="flex flex-col items-center gap-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full justify-items-center">
        <ProjectsCard
          v-for="project of projectsStore.state.projects.slice(0, 6)"
          :description="project.about"
          :key="project.id"
          :images="project?.images[0]"
          :title="project.name"
          :logo="project.logo"
          :type="project.type"
          :linkProject="project"
          :members="project.members"
          :status="project.state"
        />
      </div>

      <div class="mt-4">
        <ButtonAll link="/projects" text="Ver todos os projetos" />
      </div>
    </div>
  </section>
</template>
