<script setup>
import { ref, onMounted } from 'vue'
import ButtonAll from '../common/ButtonAll.vue'
import PublicationComp from '../common/PublicationComp.vue'

import PublicationsApi from '@/api/publications'

const publicationsApi = new PublicationsApi()
const publications = ref([])
const filteredBooks = ref([])
const filteredArticles = ref([])
const filteredConferences = ref([])

onMounted(async () => {
  publications.value = publicationsApi.getPublications()
  filterPublications()
})

async function filterPublications() {
  const formats = publicationsApi.getFormats()

  const booksFormat = formats.find((format) => format.id === '1')
  const articlesFormat = formats.find((format) => format.id === '2')
  const conferencesFormat = formats.find((format) => format.id === '3')

  if (booksFormat) {
    filteredBooks.value = publicationsApi.getPublicationsByFormat(booksFormat.id)
  }

  if (articlesFormat) {
    filteredArticles.value = publicationsApi.getPublicationsByFormat(articlesFormat.id)
  }

  if (conferencesFormat) {
    filteredConferences.value = publicationsApi.getPublicationsByFormat(conferencesFormat.id)
  }
}
</script>

<template>
  <section id="publications">
    <h2>Publicações</h2>
    <div class="container">
      <div class="publications">
        <section class="publication-format">
          <h3>Livros e capítulos de livros</h3>
          <ul>
            <li v-for="publication in filteredBooks" :key="publication.id">
              <PublicationComp
                :linkPublication="publication"
                :title="publication.title"
                :data="publication.data"
                :members="publication.members"
              />
            </li>
          </ul>
        </section>
        <section class="publication-format">
          <h3>Artigos</h3>
          <ul>
            <li v-for="publication in filteredArticles" :key="publication.id">
              <PublicationComp
                :linkPublication="publication"
                :title="publication.title"
                :data="publication.data"
                :members="publication.members"
              />
            </li>
          </ul>
        </section>
        <section class="publication-format">
          <h3>Conferências</h3>
          <ul>
            <li v-for="publication in filteredConferences" :key="publication.id">
              <PublicationComp
                :linkPublication="publication"
                :title="publication.title"
                :data="publication.data"
                :members="publication.members"
              />>
            </li>
          </ul>
        </section>
      </div>
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

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.publications {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.publication-format {
  width: 47%;
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
  margin-bottom: 10px;
}

</style>
