<template>
  <section>
    <h2>Notícias</h2>
    <div class="news-container">
      <NewsCard />
      <ButtonAll text="Ver todas as notícias" />
    </div>
  </section>
</template>

<script setup>
import ButtonAll from './common/ButtonAll.vue'
import NewsCard from './NewsCard.vue'
</script>

<style scoped>
section {
  width: 100%;
}
section .news-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
