<script setup>
import { ref, computed, onMounted, Ref } from 'vue'

import FilterComp from '@/components/MembersView/FilterComp.vue'
import MemberCard from '../components/common/MemberCard.vue'

// import { IMembers } from '@/_data/members'
import MembersApi from '@/api/members'
const membersApi = new MembersApi()
const members = ref([])
const occupations = ref([])
const filterName = ref('')

const filteredMembers = computed(() => members.value.filter(m => m.name.toLowerCase().includes(filterName.value.toLowerCase()) ))

onMounted(() => {
  members.value = membersApi.getMembers()
  occupations.value = membersApi.getoccupations()
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
