<script setup>
import { onMounted } from 'vue'

import MemberCard from '../common/MemberCard.vue'
import ButtonAll from '../common/ButtonAll.vue'

import { useMembersStore } from '@/stores'

const membersStore = useMembersStore()


onMounted(async () => {
  membersStore.getMembers()
})
</script>

<template>
  <section id="members">
    <h2>Membros</h2>
    <div class="container">
      <div class="members">
        <MemberCard v-for="member of membersStore.state.members.slice(0, 6)" 
        :key="member.id" 
        :image="member.image.file"
        :name="member.name" 
        :description="member.biography" 
        :linkMember="member"
        :occupation="{ description: `${member.status} - ${member.type}` }" />
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

@media only screen and (max-width: 555px) {
  .members {
    width: 100%;
    overflow-x: auto;
    flex-wrap: nowrap;
    flex-direction: row;
    gap: 10px;
  }

  .image {
    min-width: 12em;
    height: 12em;
  }
}
</style>
