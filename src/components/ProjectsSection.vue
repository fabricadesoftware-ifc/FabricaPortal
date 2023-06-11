<template>
  <section>
    <h2>Projetos</h2>
    <div class="projects-container">
      <div class="projects">
        <ProjectsCard
          v-for="project of projects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :image="project.image"
        />
      </div>
      <ButtonAll text="Ver todos os projetos" />
    </div>
  </section>
</template>

<script setup>
import ButtonAll from './common/ButtonAll.vue'
import ProjectsCard from './common/ProjectsCard.vue'

const projects = [
  {
    id: '1',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/magna-aqua-logo.png',
    title: 'Parati',
    description:
      'O projeto condiz a análise de imagens para averiguar modificações e saúde da paisagem do rio Parati.'
  },
  {
    id: '2',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/magna-aqua-logo.png',
    title: 'Parati',
    description:
      'O projeto condiz a análise de imagens para averiguar modificações e saúde da paisagem do rio Parati.'
  },
  {
    id: '3',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/magna-aqua-logo.png',
    title: 'Parati',
    description:
      'O projeto condiz a análise de imagens para averiguar modificações e saúde da paisagem do rio Parati.'
  },
  {
    id: '4',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/magna-aqua-logo.png',
    title: 'Parati',
    description:
      'O projeto condiz a análise de imagens para averiguar modificações e saúde da paisagem do rio Parati.'
  },
  {
    id: '5',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/magna-aqua-logo.png',
    title: 'Parati',
    description:
      'O projeto condiz a análise de imagens para averiguar modificações e saúde da paisagem do rio Parati.'
  },
  {
    id: '6',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/magna-aqua-logo.png',
    title: 'Parati',
    description:
      'O projeto condiz a análise de imagens para averiguar modificações e saúde da paisagem do rio Parati.'
  }
]
</script>

<style scoped>
section .projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
section .projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
