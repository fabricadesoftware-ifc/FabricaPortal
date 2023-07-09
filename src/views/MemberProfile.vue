<script setup>
import DescComp from '@/components/MemberProfile/DescComp.vue'
import ProfileComp from '@/components/MemberProfile/ProfileComp.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

import MembersApi from '@/api/members'
const membersApi = new MembersApi()

const id = ref(null)
const member = ref(null)

onMounted(fetchMember)

async function fetchMember() {
  const path = window.location.pathname
  const idFromUrl = path.substring(path.lastIndexOf('/') + 1)
  id.value = idFromUrl

  try {
    const response = membersApi.getMemberById(id.value)
    member.value = response
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <main v-if="member">
    <ProfileComp
      :key="member.id"
      :name="member.name"
      :occupation="member.occupation"
      :description="member.description"
      :background="member.image"
    />
    <DescComp :key="member.id" :description="member.description" />
  </main>
</template>

<style scoped>
main {
  padding-top: 90px;
  display: flex;
}
</style>
