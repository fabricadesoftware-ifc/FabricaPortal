<template>
  <section>
    <h2>Notícias</h2>
    <div class="news-container">
      <div>
        <NewsCard
          v-for="newI of news"
          :key="newI.id"
          :title="newI.title"
          :data="newI.data"
          :user="newI.user"
          :background="newI.background"
        />
      </div>
      <ButtonAll link="/" text="Ver todas as notícias" />
    </div>
  </section>
</template>

<script setup>
import ButtonAll from '../common/ButtonAll.vue'
import NewsCard from '../common/NewsCard.vue'
const news = [
  {
    id: 1,
    title: "Equipe Bits and Bytes vence o INFO Hackathon",
    data: "5h",
    user: "fabrica",
    background: "https://araquari.ifc.edu.br/wp-content/blogs.dir/4/files/sites/4/2023/02/IMG_0632-667x500.jpeg"
  },
  {
    id: 1,
    title: "INFO Hackathon acontecerá durante os sábados letivos do mês de junho",
    data: "5h",
    user: "fabrica",
    background: "https://araquari.ifc.edu.br/wp-content/blogs.dir/4/files/sites/4/2023/02/infohackathon_PSOT-494x500.jpg"
  },
]
</script>

<style scoped>
section .news-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
section div {
  display: flex;
}
</style>
