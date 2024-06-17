<script setup>
import { ref, onMounted } from 'vue'
import NewsCard from '@/components/common/NewsCard.vue'

import NewsApi from '@/api/news'
const newsApi = new NewsApi()
const news = ref([])

async function fetchNews() {
  news.value = newsApi.getSixNews()
}

onMounted(() => {
  fetchNews()
})
</script>

<template>
  <main id="news">
    <h2>Notícias</h2>
    <div class="container">
      <div class="news">
        <NewsCard
          v-for="newCard in news"
          :key="newCard.id"
          :title="newCard.title"
          :data="newCard.data"
          :user="newCard.user"
          :background="newCard.background"
          :linkProject="newCard.id"
        />
      </div>
    </div>
  </main>
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
  gap: 20px;
  flex-wrap: wrap;
  padding: 0 20px;
  justify-content: center;
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
@media only screen and (max-width: 1024px) {
  .news {
    width: 100%;
    flex-direction: column;
    gap: 10px;
  }
}

main {
  padding: 100px 0px;
  background-color: var(--bg-gray);
  display: flex;
  flex-direction: column;
  align-items: center;
}
.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

</style>
