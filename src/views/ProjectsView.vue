<script setup>
import { ref, computed, onMounted } from 'vue'
import ProjectsApi from '@/api/projects'
import ProjectsCard from "@/components/common/ProjectsCard.vue"

const projectsApi = new ProjectsApi()
const projects = ref([])

onMounted(() => {
  projects.value = projectsApi.getProjects()
})
</script>
<template>
  <main>
    <section class="container">
      <ProjectsCard
        v-for="project of projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :logo="project.logo"
        :image="project.image"
        :type="project.type"
        :linkProject="project"
        :langsProject="project.langsProject"
        :status="project.status"
      />
    </section>
  </main>
</template>

<style scoped>
main {
  padding-top: 80px;
}
main .container {
  background-color: var(--light-gray);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
