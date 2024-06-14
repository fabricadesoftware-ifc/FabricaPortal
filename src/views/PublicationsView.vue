<script setup>
import { ref, onMounted } from "vue";
import PublicationsApi from "@/api/publications";
import PublicationComp from "@/components/common/PublicationComp.vue";

const publicationsApi = new PublicationsApi;
const publications = ref([]);
onMounted(() => {
  publications.value = publicationsApi.getPublications();
});

</script>

<template>
  <main>
    <section class="publications"> 
      <h2>Projetos</h2>
      <ul>
        <li v-for="publication in publications" :key="publication.id">
          <PublicationComp :linkPublication="publication" :title="publication.title" :data="publication.data"
            :members="publication.members" />
        </li>
      </ul>
    </section>
  </main>
</template>

<style scoped>
main {
  padding: 0 20px;
  padding-top: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.publications {
  background-color: var(--bg-white);
  display: flex;
  flex-direction: column;
}

ul {
  list-style-type: disc;
  padding: 20px;
}

ul li {
  margin-bottom: 28px;
}

</style>