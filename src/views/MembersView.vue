<script setup>
import { ref, computed, onMounted } from 'vue'

import FilterComp from '@/components/MembersView/FilterComp.vue'
import MemberCard from '../components/common/MemberCard.vue'

import MembersApi from '@/api/members'
const membersApi = new MembersApi()
const members = ref([])
const occupations = ref([''])
const filterName = ref('')

function removeAccents(name) {
  return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

const filteredMembers = computed(() =>
  members.value.filter((m) => {
    const memberName = removeAccents(m.name.toLowerCase())
    const filter = removeAccents(filterName.value.toLowerCase())
    return memberName.includes(filter)
  })
)

function changeFilterName(name) {
  filterName.value = name
}

onMounted(() => {
  members.value = membersApi.getMembers()
  occupations.value = membersApi.getOccupations()
})
</script>

<template>
  <main>
    <FilterComp :members="members" @change="changeFilterName" />
    <section class="members">
      <MemberCard
        v-for="member of filteredMembers"
        :key="member.id"
        :image="member.image"
        :name="member.name"
        :description="member.description"
        :linkMember="member"
        :background="member.background"
        :occupation="member.occupation"
      />
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
  padding: 4em var(--pn-main);
  justify-content: space-between;
}

@media only screen and (max-width: 600px) {
  main .members {
    flex-direction: column;
  }
}

@media only screen and (min-width: 600px) {
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 992px) {
}

@media only screen and (min-width: 1200px) {
}
</style>
