<script setup>
import ButtonAll from '../common/ButtonAll.vue'
import ProjectsCard from '../common/ProjectsCard.vue'

const projects = [
  {
    id: '1',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/logo-eventos.jpg',
    title: 'Gestão de Eventos',
    status: 'finalizado',
    type: 'extensão',
    description:
      'O projeto tem por objetivo desenvolver um sistema web para a gestão de eventos do Instituto Federal Catarinense. O sistema deve permitir a criação e gestão de eventos, a submissão de artigos científicos para um evento específico, a autenticação dos usuários por meio da rede CAFe...'
  },
  {
    id: '2',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/setting/%C3%ADndice_il3boLh.png',
    title: 'NODES',
    status: 'finalizado',
    type: 'extensão',
    description: 'Portal para Núcleo Operacionalização de Desenvolvimento de Sistemas'
  },
  {
    id: '3',
    image: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/index2.png',
    title: 'NR2',
    status: 'finalizado',
    type: 'extensão',
    description: 'Portal para o Núcleo de Redes Sem Fio e Redes Avançadas.'
  },
  {
    id: '4',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/WhatsApp_Image_2018-09-17_at_13.14.24.jpeg',
    title: 'Goofy Educa',
    status: 'finalizado',
    type: 'extensão',
    description: 'O projeto tem o foco de gerar auxílio à aprendizagem para o ensino fundamental.'
  },
  {
    id: '5',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/WhatsApp_Image_2018-09-17_at_13.14.24.jpeg',
    title: 'Goofy Educa',
    status: 'finalizado',
    type: 'extensão',
    description: 'O projeto tem o foco de gerar auxílio à aprendizagem para o ensino fundamental.'
  },
  {
    id: '6',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/WhatsApp_Image_2018-09-17_at_13.14.24.jpeg',
    title: 'Goofy Educa',
    status: 'finalizado',
    type: 'extensão',
    description: 'O projeto tem o foco de gerar auxílio à aprendizagem para o ensino fundamental.'
  },
]
</script>

<template>
  <section class="section-projects" id="projetos">
    <h2>Projetos</h2>
    <div class="projects-container">
      <div class="projects">
        <ProjectsCard
          v-for="project of projects"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :image="project.image"
          :type="project.type"
          :status="project.status"
          />
      </div>
      <ButtonAll link="/" text="Ver todos os projetos" />
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: var(--background-color);
}
.section-projects {
  margin: 80px 0;
  padding: 80px 145px;
}
section .projects-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
section .projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
</style>
