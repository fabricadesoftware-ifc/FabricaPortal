<script setup>
import { ref, onMounted } from 'vue'
import ButtonAll from '../common/ButtonAll.vue'
import ProjectsCard from '../common/ProjectsCard.vue'
import ProjectsApi from '@/api/projects'

const projectsApi = new ProjectsApi()
const projects = ref([])

onMounted(async () => {
  projects.value = projectsApi.getSixProjects()

})
</script>

<template>
  <section class="section-projects" id="projects">
    <h2>Projetos</h2>
    <div class="projects-container">
      <div class="projects">
        <ProjectsCard
          v-for="project of projects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :logo="project.logo"
          :image="project.image"
          :type="project.type"
          :langsProject="project.langsProject"
          :status="project.status"
        />
      </div>
      <ButtonAll link="/" text="Ver todos os projetos" />
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--white);
}

.section-projects {
  margin: 80px 0;
  padding: 80px 145px;
}

section .projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

section .projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
</style>
