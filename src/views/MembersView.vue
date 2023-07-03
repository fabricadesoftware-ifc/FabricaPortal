<script setup>
import { ref, onMounted } from 'vue'
import FilterComp from '@/components/MembersView/FilterComp.vue'
import MemberCard from '../components/common/MemberCard.vue'

import MembersApi from '@/api/members'
const membersApi = new MembersApi()
const members = ref([])
const types = ref([])

onMounted(() => {
  members.value = membersApi.getMembers()
  types.value = membersApi.getTypes()
})
</script>

<template>
  <main>
    <FilterComp />
    <section class="container">
      <MemberCard
        v-for="member of members"
        :key="member.id"
        :image="member.image"
        :name="member.name"
        :description="member.description"
        :type="member.type"
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
