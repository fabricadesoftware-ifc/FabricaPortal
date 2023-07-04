<script setup>
import { ref, onMounted } from 'vue'

import MemberCard from '../common/MemberCard.vue'
import ButtonAll from '../common/ButtonAll.vue'

import MembersApi from '@/api/members'
const membersApi = new MembersApi()
const members = ref([])

onMounted(() => {
  members.value = membersApi.getSixMembers()
})
</script>

<template>
  <section id="membros">
    <h2>Membros</h2>
    <div class="container-members">
      <div class="members">
        <MemberCard
          v-for="member of members"
          :key="member.id"
          :image="member.image"
          :name="member.name"
          :description="member.description"
          :occupation="member.occupation"
        />
      </div>
      <ButtonAll link="/members" text="Ver todos os membros" />
    </div>
  </section>
</template>

<style scoped>
.container-members {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.members {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: space-between;
}
</style>
