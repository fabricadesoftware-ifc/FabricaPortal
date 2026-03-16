<script setup lang="ts">
import { onMounted, computed, ref } from 'vue'
import { MemberCard, PaginationButtons, FilterComp } from '@/components'
import { useMembersStore } from '@/stores/members'
import { useLoadingStore } from '@/stores/loading'

const membersStore = useMembersStore()
const loadingStore = useLoadingStore()
const filters: string[] = ['Docente', 'Discente', 'TAE', 'Externo']

const currentPage = ref<number>(1)
const itemsPerPage = 8

onMounted(async () => {
  loadingStore.startLoading()
  await membersStore.getMembers()
  loadingStore.stopLoading()
})

const filteredMembers = computed(() => membersStore.state.members)

const pages = computed<number>(() => {
  return Math.ceil(filteredMembers.value.length / itemsPerPage)
})

const displayedMembers = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return filteredMembers.value.slice(startIndex, endIndex)
})

const changePage = (page: number): void => {
  currentPage.value = page
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <main class="pt-40">
    <FilterComp :members="membersStore.state.members" :occupations="filters" />

    <section
      v-if="filteredMembers.length > 0"
      class="bg-[var(--bg-gray)] grid grid-cols-1 md:grid-cols-2 gap-4 px-4 py-8 md:px-[var(--pn-main)] md:py-16 min-h-[50vh]"
    >
      <MemberCard
        v-for="member in displayedMembers"
        :key="member.id"
        :image="member.image?.file"
        :name="member.name"
        :description="member?.biography"
        :linkMember="member"
        :occupation="{ description: `${member.status} - ${member.type}` }"
      />
    </section>

    <section v-else class="flex justify-center items-center h-[50vh]">
      <p class="text-gray-500 italic text-lg">Nenhum membro encontrado</p>
    </section>

    <div class="py-8">
      <PaginationButtons :pages="pages" :currentPage="currentPage" @change-page="changePage" />
    </div>
  </main>
</template>
