<script setup>
import { defineProps } from 'vue'
import NewsCard from '@/components/ProjectDetails/NewsCard.vue'
defineProps({
  news: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <section>
    <h3>Notícias</h3>
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
  </section>
</template>

<style scoped>
section .news {
  margin: 20px 0;
  gap: 1em;
  display: flex;
  gap: 20px;
}
@media only screen and (max-width: 425px) {
  .news {
    flex-direction: column
  }
}
</style>
