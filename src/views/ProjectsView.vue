<script setup>
import { ref, computed, onMounted } from 'vue'
import ProjectsApi from '@/api/projects'
import ProjectsCard from "@/components/common/ProjectsCard.vue"
import PaginationButtons from '@/components/common/PaginationButtons.vue'
import MembersApi from '@/api/members'

const projectsApi = new ProjectsApi()
const membersApi = new MembersApi()
const projects = ref([])
const langs = ref([])
const members = ref([])
const itemsPerPage = 12;
const currentPage = ref(1);
const pages = computed(() => {
  return Math.ceil(projects.value.length / itemsPerPage)
});
const displayedItems = computed(() => {
  const startIndex = (currentPage.value -1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return projects.value.slice(startIndex, endIndex);
});

onMounted(() => {
  projects.value = projectsApi.getProjects()
  langs.value = projectsApi.getLangs()
  members.value = membersApi.getMembers()
})
function getProjectLangs(project) {
  if (project.languagesUsed) {
    return project.languagesUsed.map(langId => {
      const lang = langs.value.find(lang => lang.id === langId)
      return lang ? lang : null
    }).filter(lang => lang !== null)
  } else {
    return []
  }
}
function getProjectMembers(project) {
  if (project.projectMembers) {
    return project.projectMembers.map(memberId => {
      const member = members.value.find(member => member.id === memberId)
      return member ? member : null
    }).filter(member => member !== null)
  }
}

function changePage(page) {
  currentPage.value = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>
<template>
  <main>
    <section class="projects">
      <ProjectsCard
        v-for="project of displayedItems"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :logo="project.logo"
        :images="project.images"
        :type="project.type"
        :linkProject="project"
        :members="getProjectMembers(project)"
        :languagesUsed="getProjectLangs(project)"
        :status="project.status"
      />
    </section>
    <PaginationButtons :pages="pages" :currentPage="currentPage" @change-page="changePage"/>
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
