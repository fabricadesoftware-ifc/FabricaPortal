<script setup>
import { ref, onMounted } from 'vue'
import ButtonAll from '../common/ButtonAll.vue'
import PublicationComp from '../common/PublicationComp.vue'

import PublicationsApi from '@/api/publications'

const publicationsApi = new PublicationsApi()
const publications = ref([])

onMounted(async () => {
  publications.value = publicationsApi.getThreePublications()
})

</script>

<template>
  <section id="publications">
    <h2>Publicações</h2>
    <div class="container">
      <ul>
        <li v-for="publication in publications" :key="publication.id">
          <PublicationComp :linkPublication="publication" :title="publication.title" :data="publication.data"
            :members="publication.members" />
        </li>
      </ul>
      <ButtonAll text="Ver todas as publicações" link="/publications" />
    </div>
  </section>
</template>

<style scoped>
#publications {
  background-color: var(--bg-white);
  margin: 80px 0 0 0;
  padding: 80px 145px;
  border-top: var(--border) solid var(--publications);
}
button {
  margin: 0 auto
}
.container {
  display: flex;
  flex-direction: column;
}

.publications {
  display: flex;
  flex-direction: column;
}

.publication-format {
  width: 100%;
  margin-bottom: 10px;
}

h3 {
  color: var(--publications);
}

ul {
  list-style-type: disc;
  padding: 20px;
}

ul li {
  margin-bottom: 28px;
}

@media only screen and (max-width: 768px) {
  #publications {
    padding: 20px 50px;
  }
}

@media only screen and (max-width: 425px) {
  #publications {
    padding: 20px 10px;
  }
}
</style>
