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
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/logo-eventos.jpg',
    title: 'Gestão de Eventos',
    description:
      'O projeto tem por objetivo desenvolver um sistema web para a gestão de eventos do Instituto Federal Catarinense. O sistema deve permitir a criação...'
  },
  {
    id: '2',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/setting/%C3%ADndice_il3boLh.png',
    title: 'NODES',
    description:
      'Desenvolvimento de um portal para Núcleo Operacionalização de Desenvolvimento de Sistemas'
  },
  {
    id: '3',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/index2.png',
    title: 'NR2',
    description:
      'Desenvolvimento de um portal para o Núcleo de Redes Sem Fio e Redes Avançadas.'
  },
  {
    id: '4',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/WhatsApp_Image_2018-09-17_at_13.14.24.jpeg',
    title: 'Goofy Educa',
    description:
      'O projeto tem o foco de gerar auxílio à aprendizagem para o ensino fundamental, atualmente em desenvolvimento pelos alunos Lucas...'
  },
  {
    id: '5',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/issem.png',
    title: 'ISSEM',
    description:
      'O Instituto de Seguridade dos Servidores Municipais de Jaraguá do Sul (ISSEM), é uma autarquia com autonomia...'
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
