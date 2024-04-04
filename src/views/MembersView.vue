<script setup>
import { ref, computed, onMounted } from 'vue'

import FilterComp from '@/components/MembersView/FilterComp.vue'
import MemberCard from '../components/common/MemberCard.vue'

import MembersApi from '@/api/members'
const membersApi = new MembersApi()
const members = ref([])
const occupations = ref([''])
const filterName = ref('')
const selectedOccupation = ref('')

function removeAccents(name) {
  return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const filteredMembers = computed(() =>
  members.value.filter((m) => {
    const memberName = removeAccents(m.name.toLowerCase())
    const filter = removeAccents(filterName.value.toLowerCase())
    const filteredMembersByName = memberName.includes(filter)
    
    if (selectedOccupation.value == 'Todos')
    return filteredMembersByName

    return filteredMembersByName && m.occupation.description == selectedOccupation.value
})

)

function changeFilterName(name) {
  filterName.value = name
}

function changeOccupation(occup) {
  selectedOccupation.value = occup
}

onMounted(() => {
  members.value = membersApi.getMembers()
  occupations.value = membersApi.getOccupations()
})
</script>

<template>
  <main>
    <FilterComp :members="members" :occupations="occupations" @change="changeFilterName" @occupation="changeOccupation"/>
    <section class="members">
      <MemberCard v-for="member of filteredMembers" :key="member.id" :image="member.image" :name="member.name"
        :description="member.description" :linkMember="member" :background="member.background"
        :occupation="member.occupation" />
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
