<script setup>
import { onMounted } from 'vue'

import FilterComp from '@/components/MembersView/FilterComp.vue'
import MemberCard from '../components/common/MemberCard.vue'
import PaginationButtons from '@/components/common/PaginationButtons.vue'

import { useMembersStore } from '@/stores'

const membersStore = useMembersStore()
const filters = [
  'Docente',
  'Discente',
  'TAE',
  'Externo'
]

onMounted(async () => {
  await membersStore.getMembers()
})
</script>

<template>
  <main>
    <FilterComp :members="members" :occupations="filters" @change="changeFilterName"
      @occupation="changeOccupation" />
    <section class="members" v-if="membersStore.state.members.length">
      <MemberCard v-for="member of membersStore.state.members" :key="member.id" :image="member.image.file"
        :name="member.name" :description="'lorem sit amet'" :linkMember="member"
        :occupation="{ description: `${member.status + ' - ' + member.type}` }" />
      <PaginationButtons :pages="pages" :currentPage="currentPage" @change-page="changePage" />
    </section>
    <section v-else class="notFound">
      <p>Nenhum membro encontrado</p>
    </section>
  </main>
</template>

<style scoped>
main {
  padding-top: var(--pn-main);
}

main .members {
  background-color: var(--bg-gray);
  display: flex;
  flex-wrap: wrap;
  border-radius: 0;
  padding: 4em var(--pn-main);
  justify-content: space-between;
  min-height: 50vh;
}

.notFound{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

@media only screen and (max-width: 768px) {
  main {
    padding-top: 4em;
  }

  main .members {
    padding: 1em;
  }
}

@media only screen and (max-width: 555px) {
  a {
    width: 49%;
  }

  img {
    width: 11em;
    min-height: 11em;
  }

  .card {
    height: 11em;
  }
}

/* @media only screen and (max-width: 500px) {
  a {
    width: 100%
  }
  .card {
    flex-direction: row;
    margin-right: 0;
    height: 10em;
    padding: 10px;
    width: 100%;
  }
  .image {
    width: 9em;
    min-height: 9em; 
  }
}
 */
@media only screen and (min-width: 1200px) {}
</style>
