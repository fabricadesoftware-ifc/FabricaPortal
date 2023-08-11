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
  <section id="members">
    <h2>Membros</h2>
    <div class="container">
      <div class="members">
        <MemberCard
          v-for="member of members"
          :key="member.id"
          :image="member.image"
          :name="member.name"
          :description="member.description"
          :linkMember="member"
          :occupation="member.occupation"
        />
      </div>
      <ButtonAll link="/members" text="Ver todos os membros" />
    </div>
  </section>
</template>

<style scoped>

.container {
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
@media only screen and (max-width: 600px) {
  .members {
  }
  .card {
    flex-direction: column;
  }
  .card .details {
    border-top: var(--border) solid var(--members);
    padding: 15px;
    gap: 9px;
    height: inherit;
    justify-content: center;
    align-items: flex-start;
  }
}
@media only screen and (max-width: 425px) {
.members {
  width: 100%;
  overflow-x: auto;
  flex-wrap: nowrap;
  flex-direction: row;
}
}
</style>
