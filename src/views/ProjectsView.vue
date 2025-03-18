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
const filter = ref({
  name: '',
  status: '',
  type: ''
})

onMounted(async () => {
  langs.value = projectsApi.getLangs()
  members.value = membersApi.getMembers()
  await projectsStore.getProjects()
})

function removeAccents(name) {
  return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const filteredProjects = computed(() => {
  const filterNameAccentless = removeAccents(filter.value.name.toLowerCase())
  
  return projectsStore.state.projects.filter((project) => {
    const projectTitle = removeAccents(project.name.toLowerCase())
    const filteredByName = projectTitle.includes(filterNameAccentless)
    const filteredByStatus = !filter.value.status || project.status === filter.value.status
    const filteredByType = !filter.value.type || project.type === filter.value.type
    
    if (!selectedLangs.value.length) {
      return filteredByName && filteredByStatus && filteredByType
    }
    
    const filteredByLanguage = selectedLangs.value.some((lang) =>
      project.languagesUsed?.includes(lang.id)
    )
    
    return filteredByName && filteredByStatus && filteredByType && filteredByLanguage
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

const itemsPerPage = 9
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
}

watch(filter, () => {
  currentPage.value = 1
})

watch(selectedLangs, () => {
  currentPage.value = 1
})
</script>

<template>
  <main>
    <ProjectFilterComp 
      :languages="langs" 
      @filter="changeFilter" 
      @languages="changeLangs" 
    />
    <section class="projects">
      <div v-if="displayedItems.length === 0" class="no-results">
        <h3>Nenhum projeto encontrado</h3>
        <p>Tente ajustar os filtros de busca</p>
      </div>
      <template v-else>
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
        />
      </template>
      <PaginationButtons 
        v-if="displayedItems.length > 0"
        :pages="pages" 
        :currentPage="currentPage" 
        @change-page="changePage"
      />
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
  align-items: stretch;
  min-height: 400px;
}

.no-results {
  width: 100%;
  text-align: center;
  padding: 2rem;
}

.no-results h3 {
  color: var(--text-color);
  margin-bottom: 0.5rem;
}

.no-results p {
  color: var(--text-color-light);
}

@media screen and (max-width: 1024px) {
  .projects {
    width: 100%;
    flex-direction: column;
    gap: 20px;
    padding: 2rem;
    align-items: center;
  }
}

@media screen and (max-width: 768px) {
  .projects {
    padding: 1rem;
  }
}
</style>