<script setup>
import { ref, computed, onMounted } from 'vue'

import FilterComp from '@/components/MembersView/FilterComp.vue'
import MemberCard from '../components/common/MemberCard.vue'

// import { IMembers } from '@/_data/members'
import MembersApi from '@/api/members'
const membersApi = new MembersApi()
const members = ref([])
const occupations = ref([])
const filterName = ref('')

function removeAccents(name) {
  return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

const filteredMembers = computed(() =>
  members.value.filter((m) => {
    const memberName = removeAccents(m.name.toLowerCase());
    const filter = removeAccents(filterName.value.toLowerCase());
    return memberName.includes(filter);
  })
);
onMounted(() => {
  members.value = membersApi.getMembers()
  occupations.value = membersApi.getOccupations()
})

function changeFilterName(name) {
  filterName.value = name
}

</script>

<template>
  <main>
    <FilterComp :members="members" @change="changeFilterName"/>
    <section class="container">
      <MemberCard
        v-for="member of filteredMembers"
        :key="member.id"
        :image="member.image"
        :name="member.name"
        :description="member.description"
        :occupation="member.occupation"
      />
    </section>
  </main>
</template>

<style scoped>
main {
  padding-top: 80px;
}
main .container {
  background-color: var(--background-color);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
