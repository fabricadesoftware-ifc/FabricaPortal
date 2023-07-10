<script setup>
import ProjectCard from '@/components/MemberProfile/ProjectCard.vue'
import { ref, onMounted } from 'vue'

defineProps({
  image: String,
  name: String,
  description: String,
  background: String,
  occupation: {
    type: Object
  },
  projects: {
    type: Array
  },
  linkMember: {
    type: Object
  }
})

</script>
<template>
  <section class="projetos">
    <h3>Projetos</h3>
    <div class="container">
      <ProjectCard
        v-for="project of projects"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :image="project.image"
        :type="project.type"
        :status="project.status"
      />
    </div>
  </section>
</template>
<style scoped>
.projetos {
  padding: 0;
  display: flex;
  flex-direction: column;
}

section .container {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
section p {
  font-weight: 500;
  color: #252525;
  margin: 10px;
}
</style>