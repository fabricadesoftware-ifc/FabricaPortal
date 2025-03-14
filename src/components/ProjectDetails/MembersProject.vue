<script setup>
import MemberCard from '@/components/ProjectDetails/MemberCard.vue'
import {defineProps} from 'vue'
defineProps({
  members: {
    type: Array,
    default: () => []
  }
})


</script>

<template>
  <section v-if="members.length > 0">
    <h3>Membros</h3>
    <div class="members">
      <!-- {{ members }} -->
      <MemberCard 
        v-for="member in members" 
        :key="member.id" 
        :image="member.image.file" 
        :name="member.name"
        :description="member.biography" 
        :linkMember="member" 
        :occupation="`${member.type} - ${member.status}`" />
    </div>
  </section>
</template>

<style scoped>
section .members {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
