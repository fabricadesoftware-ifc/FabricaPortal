<script setup>
import { ref, onMounted } from 'vue'
import ProjectsApi from '@/api/projects'
import ProjectsCard from "@/components/common/ProjectsCard.vue"
import MembersApi from '@/api/members'

const projectsApi = new ProjectsApi()
const membersApi = new MembersApi()
const projects = ref([])
const langs = ref([])
const members = ref([])


onMounted(() => {
  projects.value = projectsApi.getProjects()
  langs.value = projectsApi.getLangs()
  members.value = membersApi.getMembers()

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
function getProjectMembers(project) {
  if (project.projMembers) {
    return project.projMembers.map(memberId => {
      const member = members.value.find(member => member.id === memberId)
      return member ? member : null
    }).filter(member => member !== null)
  }
}
</script>
<template>
  <main>
    <section class="projects">
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
    </section>
  </main>
</template>

<style scoped>
main {
  padding: var(--pn-main);
  background-color: var(--bg-gray);

}
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
