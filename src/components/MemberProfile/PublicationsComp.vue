<script setup>
import { ref, onMounted } from 'vue'
import ButtonMore from '../common/ButtonMore.vue'
import ButtonAll from '../common/ButtonAll.vue'
import PublicationComp from '../common/PublicationComp.vue'

import PublicationsApi from '@/api/publications'
import MembersApi from '@/api/members'

const publicationsApi = new PublicationsApi()
const publications = ref([])
const filteredBooks = ref([])
const filteredArticles = ref([])
const filteredConferences = ref([])
const memberId = ref(null)

async function fetchMember() {
  const path = window.location.pathname
  const memberIdFromUrl = path.substring(path.lastIndexOf('/') + 1)
  return (memberId.value = memberIdFromUrl)
}

onMounted(async () => {
  fetchMember()
  publications.value = publicationsApi.getPublicationsByMember(memberId.value)
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
  <section v-if="publications.length > 0">
    <h3>Publicações</h3>
    <div>
      <section v-if="filteredBooks.length > 0">
        <h4>Livros e capítulos de livros</h4>
        <ul>
          <li v-for="publication in filteredBooks" :key="publication.id">
            <PublicationComp
              :title="publication.title"
              :data="publication.data"
              :linkPublication="publication"
              :members="publication.members"
            />
          </li>
        </ul>
      </section>
      <section v-if="filteredArticles.length > 0">
        <h4>Artigos</h4>
        <ul>
          <li v-for="publication in filteredArticles" :key="publication.id">
            <PublicationComp
              :title="publication.title"
              :data="publication.data"
              :linkPublication="publication"
              :members="publication.members"
            />
          </li>
        </ul>
      </section>
      <section v-if="filteredConferences.length > 0">
        <h4>Conferências</h4>
        <ul>
          <li v-for="publication in filteredConferences" :key="publication.id">
            <PublicationComp
              :title="publication.title"
              :data="publication.data"
              :linkPublication="publication"
              :members="publication.members"
            />
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<style scoped>
h4 {
  color: var(--members);
}
section div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

div section {
  margin-top: 10px;
}

ul {
  list-style-type: disc;
  padding: 20px;
}

ul li {
  margin-bottom: 10px;
}
</style>
