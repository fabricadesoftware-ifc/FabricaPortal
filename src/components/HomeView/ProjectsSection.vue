<script setup>
import { ref, onMounted } from 'vue'
import ButtonAll from '../common/ButtonAll.vue'
import ProjectsCard from '../common/ProjectsCard.vue'
import ProjectsApi from '@/api/projects'
import MembersApi from '@/api/members'
import {useProjectsStore} from '@/stores'

const projectsStore = useProjectsStore()

const projectsApi = new ProjectsApi()
const membersApi = new MembersApi()
const projects = ref([])
const langs = ref([])
const members = ref([])

onMounted(async () => {
  projects.value = projectsApi.getSixProjects()
  langs.value = projectsApi.getLangs()
  members.value = membersApi.getMembers()

  await projectsStore.getProjects()
})
function getProjectLangs(project) {
  if (project.languagesUsed) {
    return project.languagesUsed
      .map((langId) => {
        const lang = langs.value.find((lang) => lang.id === langId)
        return lang ? lang : null
      })
      .filter((lang) => lang !== null)
  }
}
</script>

<template>
  <section id="projects">
    <h2>Projetos</h2>
    <div class="container">
      <div class="projects">
        <ProjectsCard
          v-for="project of projectsStore.state.projects"
          :key="project.id"
          :title="project.name"
          :description="project.about"
          :logo="project.logo"
          :images="project.images"
          :type="project.type"
          :linkProject="project"
          :members="project.members"
          :languagesUsed="getProjectLangs(project)"
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
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-content: space-between;
  align-items: center;
  gap: 20px;
}

@media only screen and (max-width: 600px) {
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .projects {
    flex-direction: column;
  }
}

@media only screen and (max-width: 425px) {
  .projects {
    width: 100%;
    overflow-x: auto;
    flex-wrap: nowrap;
    flex-direction: row;
    gap: 20px;
    justify-content: space-between
  }
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 992px) {
}

@media only screen and (min-width: 1200px) {
}
</style>
