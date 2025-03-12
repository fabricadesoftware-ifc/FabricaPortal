<script setup>
import { onMounted } from 'vue'
import ButtonAll from '../common/ButtonAll.vue'
import NewsCard from '../common/NewsCard.vue'
import { useNewsStore } from '@/stores'

const newsStore = useNewsStore()

onMounted(() => {
  newsStore.getNews();
})

const formatDate = (date) => {
  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
  return new Date(date).toLocaleDateString('pt-BR', options);
}
</script>

<template>
  <section id="news">
    <h2>Notícias</h2>
    <!-- {{ formatDate(newsStore.state.news[0].post_date) }} -->
    <div class="container">
      <div class="news">
        <NewsCard v-for="newCard in newsStore.state.news.slice(0, 3)" :key="newCard.id" :title="newCard.title"
          :data="formatDate(newCard.post_date)" :user="newCard.user" :background="newCard.images[0].file" :linkProject="newCard.id" />
      </div>
      <ButtonAll link="/all-news" text="Ver todas as notícias" />
    </div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.news {
  display: flex;
  width: 100%;
  overflow-x: auto;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
}

@media only screen and (max-width: 600px) {
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
</style>
