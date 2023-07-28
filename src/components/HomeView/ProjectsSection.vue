<script setup>
import { ref, onMounted } from 'vue'
import ButtonAll from '../common/ButtonAll.vue'
import ProjectsCard from '../common/ProjectsCard.vue'
import ProjectsApi from '@/api/projects'
import MembersApi from '@/api/members'

const projectsApi = new ProjectsApi()
const membersApi = new MembersApi()
const projects = ref([])
const langs = ref([])
const members = ref([])

onMounted(async () => {
  projects.value = projectsApi.getSixProjects()
  langs.value = projectsApi.getLangs()
  members.value = membersApi.getMembers()
})
function getProjectLangs(project) {
  if (project.langsProject) {
    return project.langsProject
      .map((langId) => {
        const lang = langs.value.find((lang) => lang.id === langId)
        return lang ? lang : null
      })
      .filter((lang) => lang !== null)
  }
}
function getProjectMembers(project) {
  if (project.membersProject) {
    return project.membersProject
      .map((memberId) => {
        const member = members.value.find((member) => member.id === memberId)
        return member ? member : null
      })
      .filter((member) => member !== null)
  }
}
</script>

<template>
  <section id="projects">
    <h2>Projetos</h2>
    <div class="container">
      <div class="projects">
        <ProjectsCard
          v-for="project of projects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :logo="project.logo"
          :images="project.images"
          :type="project.type"
          :linkProject="project"
          :members="getProjectMembers(project)"
          :langsProject="getProjectLangs(project)"
          :status="project.status"
        />
      </div>
      <ButtonAll link="/projects" text="Ver todos os projetos" />
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--bg-white);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.projects {
  display: flex;
  width: -webkit-fill-available;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
</style>
