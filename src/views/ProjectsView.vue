<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import ProjectsCard from '@/components/common/ProjectsCard.vue'
import ProjectFilterComp from '@/components/ProjectsView/ProjectFilterComp.vue'
import PaginationButtons from '@/components/common/PaginationButtons.vue'
import ProjectsApi from '@/api/projects'
import MembersApi from '@/api/members'
import { useProjectsStore } from '@/stores'

const projectsStore = useProjectsStore()
const projectsApi = new ProjectsApi()
const membersApi = new MembersApi()
const langs = ref([])
const selectedLangs = ref([])
const members = ref([])
const filter = ref('')

onMounted(async () => {
  langs.value = projectsApi.getLangs()
  members.value = membersApi.getMembers()
  
  // Use the store to get projects
  await projectsStore.getProjects()
})

function removeAccents(name) {
  return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const filteredProjects = computed(() => {
  const filterAccentless = removeAccents(filter.value.toLowerCase())
  
  return projectsStore.state.projects.filter((project) => {
    const projectTitle = removeAccents(project.name.toLowerCase())
    const filteredByName = projectTitle.includes(filterAccentless)
    
    if (!selectedLangs.value.length) {
      return filteredByName
    }
    
    const filteredByLanguage = selectedLangs.value.some((lang) =>
      project.languagesUsed?.includes(lang.id)
    )
    
    return filteredByName && filteredByLanguage
  })
})

function getProjectLangs(project) {
  if (project.languagesUsed) {
    return project.languagesUsed
      .map((langId) => {
        const lang = langs.value.find((lang) => lang.id === langId)
        return lang ? lang : null
      })
      .filter((lang) => lang !== null)
  } else {
    return []
  }
}

function getProjectMembers(project) {
  if (project.projectMembers) {
    return project.projectMembers
      .map((memberId) => {
        const member = members.value.find((member) => member.id === memberId)
        return member ? member : null
      })
      .filter((member) => member !== null)
  } else {
    return project.members || []
  }
}

function changeLangs(l) {
  selectedLangs.value = l
}

function changeFilter(f) {
  filter.value = f
}

const itemsPerPage = 12
const currentPage = ref(1)
const pages = computed(() => {
  return Math.ceil(filteredProjects.value.length / itemsPerPage)
})

const displayedItems = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return filteredProjects.value.slice(startIndex, endIndex)
})

function changePage(page) {
  currentPage.value = page
  // window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <main>
    <ProjectFilterComp :languages="langs" @filter="changeFilter" @languages="changeLangs" />
    <section class="projects">
      <ProjectsCard
        v-for="project of displayedItems"
        :key="project.id"
        :title="project.name"
        :description="project.about"
        :logo="project.logo"
        :image="project.images && project.images.length > 0 ? project.images[0] : ''"
        :type="project.type"
        :linkProject="project"
        :members="getProjectMembers(project)"
        :languagesUsed="getProjectLangs(project)"
        :status="project.status"
      >
      </ProjectsCard>
      <PaginationButtons :pages="pages" :currentPage="currentPage" @change-page="changePage"/>
    </section>
  </main>
</template>

<style scoped>
main {
  padding-top: var(--pn-main);
}

.projects {
  background-color: var(--bg-gray);
  display: flex;
  flex-wrap: wrap;
  border-radius: 0;
  padding: 4em var(--pn-main);
  justify-content: space-between;
  gap: 20px;
  align-items: stretch; /* Ensure equal height cards */
}

@media only screen and (max-width: 600px) {
  .projects {
    align-items: center;
    justify-content: center;
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
    justify-content: space-between;
  }
}
</style>