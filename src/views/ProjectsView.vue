<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue'
import { ProjectsCard, PaginationButtons, ProjectFilterComp } from '@/components'
import { useProjectsStore } from '@/stores/projects'
import { useMembersStore } from '@/stores/members'
import { useLoadingStore } from '@/stores/loading'
import type { IMember } from '@/types/member'

interface IFilter {
  name: string
  status: string
}

const projectsStore = useProjectsStore()
const membersStore = useMembersStore()
const loadingStore = useLoadingStore()

const members = ref<IMember[]>([])
const filter = ref<IFilter>({ name: '', status: '' })
const error = ref<string | null>(null)
const currentPage = ref<number>(1)
const itemsPerPage = 9

const loadData = async () => {
  try {
    error.value = null
    loadingStore.startLoading()
    await Promise.all([membersStore.getMembers(), projectsStore.getProjects()])
    members.value = membersStore.state.members
  } catch (err) {
    error.value = 'Ocorreu um erro ao carregar os projetos. Por favor, tente novamente.'
    console.error(err)
  } finally {
    loadingStore.stopLoading()
  }
}

onMounted(loadData)

const removeAccents = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

const filteredProjects = computed(() => {
  const nameSearch = removeAccents(filter.value.name.toLowerCase())

  return projectsStore.state.projects.filter((project) => {
    const projectTitle = removeAccents(project.name.toLowerCase())
    const matchesName = projectTitle.includes(nameSearch)
    const matchesStatus = !filter.value.status || project.state === filter.value.status

    return matchesName && matchesStatus
  })
})

const pages = computed(() => Math.ceil(filteredProjects.value.length / itemsPerPage))

const displayedItems = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredProjects.value.slice(start, start + itemsPerPage)
})

watch(filter, () => (currentPage.value = 1), { deep: true })

const changePage = (page: number) => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const changeFilter = (newFilter: IFilter) => (filter.value = newFilter)
</script>

<template>
  <main class="pt-40">
    <ProjectFilterComp @filter="changeFilter" />

    <section
      :class="[
        'px-4 md:px-8 lg:px-[var(--pn-main)] py-8 min-h-[400px]',
        { 'opacity-50 pointer-events-none': loadingStore.isLoading },
      ]"
    >
      <div v-if="error" class="flex flex-col items-center justify-center text-center py-16 gap-4">
        <span class="material-symbols-outlined">error</span>
        <p class="text-gray-700 max-w-md">{{ error }}</p>
        <button
          @click="loadData"
          class="px-6 py-2 bg-[var(--primary-color)] text-white rounded-lg font-medium hover:brightness-110 transition-all"
        >
          Tentar Novamente
        </button>
      </div>

      <div
        v-else-if="displayedItems.length === 0 && !loadingStore.isLoading"
        class="flex flex-col items-center justify-center text-center py-16"
      >
        <span class="material-symbols-outlined">search</span>
        <h3 class="text-xl font-bold mt-4 text-gray-800">Nenhum projeto encontrado</h3>
        <p class="text-gray-500">Tente ajustar os filtros ou pesquisar por outro termo.</p>
      </div>

      <template v-else>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
          <ProjectsCard
            v-for="project in displayedItems"
            :key="project.id"
            :title="project.name"
            :description="project.about"
            :logo="project.logo"
            :images="project.images[0]"
            :type="project.type"
            :linkProject="project"
            :members="project.members"
            :status="project.state"
          />
        </div>

        <div v-if="pages > 1" class="flex justify-center pb-8">
          <PaginationButtons :pages="pages" :currentPage="currentPage" @change-page="changePage" />
        </div>
      </template>
    </section>
  </main>
</template>
