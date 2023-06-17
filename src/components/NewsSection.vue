<template>
  <section>
    <h2>Notícias</h2>
    <div class="news-container">
      <div class="scroll">
        <div>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />

        </div>
      </div>
      <ButtonAll text="Ver todas as notícias" />
    </div>
  </section>
</template>

<script setup>
import VueScrollSnap from 'vue-scroll-snap'
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
section .scroll {
  width: 100%;
  overflow-x: auto;
}
section div {
  display: flex;
}
</style>
