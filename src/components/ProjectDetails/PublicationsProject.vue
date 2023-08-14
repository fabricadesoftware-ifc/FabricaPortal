<script setup>
import { ref, onMounted } from 'vue'

import PublicationsApi from '@/api/publications'

const publicationsApi = new PublicationsApi()
const publications = ref([])

onMounted(async () => {
  publications.value = publicationsApi.getThreePublications()
})

</script>

<template>
  <section id="publications">
    <h3>Publicações</h3>
    <div class="container">
      <ul>
        <li v-for="publication in publications" :key="publication.id">
          <RouterLink to="/">{{ publication.title }}</RouterLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>

ul {
    padding-left: 20px;
}
ul li{
    margin: 10px 0;
}
a {
    text-decoration: none;
    color: var(--text-color)
}
a:hover {
    text-decoration: underline;
}
.publications {
  display: flex;
  flex-direction: column;
}

</style>
