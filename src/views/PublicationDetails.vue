<script setup>
import { onMounted, ref } from "vue";
import MembersProject from "@/components/ProjectDetails/MembersProject.vue";
import PublicationHeader from "@/components/PublicationsDetails/PublicationHeader.vue";
import PublicationsApi from "@/api/publications";
import MembersApi from "@/api/members";

const publicationsApi = new PublicationsApi();
const membersApi = new MembersApi();

const publicationId = ref(null);
const publication = ref({
  id: String,
  title: String,
  members: String,
  data: String,
  membersIds: String,
  formatId: String
});
const members = ref([])
const format = ref([])

onMounted(async () => {
  await fetchPublication();
  members.value = membersApi.getMembersbyId(publication.value.membersIds)
  format.value = publicationsApi.getFormatById(publication.value.formatId)
  format.value.description = format.value.description.substring(0, format.value.description.length - 1);
  console.log(members.value)
});

async function fetchPublication() {
  const path = window.location.pathname
  const publicationIdFromUrl = path.substring(path.lastIndexOf('/') + 1)
  publicationId.value = publicationIdFromUrl
  publication.value = publicationsApi.getPublicationsById(publicationId.value)
}

</script>

<template>
  <main>
    <PublicationHeader :title="publication.title" :data="publication.data" :members="publication.members" :format="format"/>
    <MembersProject :members="members"/>
  </main>
</template>

<style scoped>
main {
  padding: var(--pn-main) 19em;
  display: flex;
  gap: 33px;
  flex-direction: column;
}
</style>