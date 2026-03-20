<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import {
  CarouselComp,
  ProjectHeader,
  DescriptionProject,
  AreasComp,
  MembersProject,
} from '@/components'
import { useProjectsStore } from '@/stores/projects'
import { useLoadingStore } from '@/stores/loading'
import { sortMembersByStatus } from '@/utils/member'

const route = useRoute()
const projectsStore = useProjectsStore()
const loadingStore = useLoadingStore()

const projectId = route.params.id as string

onMounted(async () => {
  loadingStore.startLoading()
  await projectsStore.getProjectById(projectId)
  loadingStore.stopLoading()
})
</script>

<template>
  <main
    v-if="projectsStore.state.selectedProject"
    class="flex flex-col gap-8 w-full pt-[var(--pn-main)] px-4 sm:px-8 md:px-24 lg:px-40 xl:px-[19em]"
  >
    <ProjectHeader :title="projectsStore.state.selectedProject?.name" />

    <CarouselComp :images="projectsStore.state.selectedProject?.images" />

    <DescriptionProject
      :logo="projectsStore.state.selectedProject?.logo"
      :title="projectsStore.state.selectedProject?.name"
      :description="projectsStore.state.selectedProject?.about"
      :status="projectsStore.state.selectedProject?.state"
      :technologies="projectsStore.state.selectedProject?.technologies"
    />

    <AreasComp />

    <MembersProject :members="sortMembersByStatus(projectsStore.state.selectedProject?.members ?? [])" />
  </main>

  <div v-else class="flex justify-center items-center h-[60vh]">
    <p class="text-gray-500 animate-pulse">Carregando detalhes do projeto...</p>
  </div>
</template>
