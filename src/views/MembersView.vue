<script setup>
import { onMounted, computed, ref } from 'vue'
import FilterComp from '@/components/MembersView/FilterComp.vue'
import MemberCard from '@/components/common/MemberCard.vue'
import PaginationButtons from '@/components/common/PaginationButtons.vue'
import { useMembersStore } from '@/stores'

const membersStore = useMembersStore()
const filters = [
  'Docente',
  'Discente',
  'TAE',
  'Externo'
]

const currentPage = ref(1)
const itemsPerPage = 8

onMounted(async () => {
  await membersStore.getMembers()
})

// Computed para calcular as páginas com base nos membros filtrados
const filteredMembers = computed(() => {
  // Aqui você pode adicionar mais lógica de filtragem se necessário
  return membersStore.state.members
})

// Número de páginas, dependendo do número total de membros e itens por página
const pages = computed(() => {
  return Math.ceil(filteredMembers.value.length / itemsPerPage)
})

// Membros a serem exibidos na página atual
const displayedMembers = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  return filteredMembers.value.slice(startIndex, endIndex)
})

function changePage(page) {
  currentPage.value = page
  // Pode ser interessante adicionar um scroll suave para o topo
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <main>
    <FilterComp :members="membersStore.state.members" :occupations="filters" @change="changeFilterName" @occupation="changeOccupation" />
    <section class="members" v-if="filteredMembers.length">
      
      <MemberCard 
        v-for="member in displayedMembers" 
        :key="member.id" 
        :image="member.image.file"
        :name="member.name" 
        :description="member?.biography" 
        :linkMember="member"
        :occupation="{ description: `${member.status + ' - ' + member.type}` }" 
      />
    </section>
    <section v-else class="notFound">
      <p>Nenhum membro encontrado</p>
    </section>
    <PaginationButtons :pages="pages" :currentPage="currentPage" @change-page="changePage" />
  </main>
</template>

<style scoped>
main {
  padding-top: var(--pn-main);
}

 .members {
  background-color: var(--bg-gray);
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1em;
  border-radius: 0;
  padding: 4em var(--pn-main);
  justify-content: space-between;
  min-height: 50vh;
}

.notFound {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

@media screen and (max-width: 1024px) {
  main {
    padding-top: 4em;
  }

   .members {
    padding: 1em;
    grid-template-columns: 1fr;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
