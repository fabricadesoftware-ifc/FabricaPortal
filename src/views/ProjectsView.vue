<script setup>
import { ref, onMounted } from 'vue'
import ProjectsApi from '@/api/projects'
import ProjectsCard from "@/components/common/ProjectsCard.vue"

const projectsApi = new ProjectsApi()
const projects = ref([])
const langs = ref([])


onMounted(() => {
  projects.value = projectsApi.getProjects()
  langs.value = projectsApi.getLangs()

})
function getProjectLangs(project) {
  if (project.langsProject) {
    return project.langsProject.map(langId => {
      const lang = langs.value.find(lang => lang.id === langId)
      return lang ? lang : null
    }).filter(lang => lang !== null)
  } else {
    return []
  }
}
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
        :images="project.images"
        :type="project.type"
        :linkProject="project"
        :langsProject="getProjectLangs(project)"
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
