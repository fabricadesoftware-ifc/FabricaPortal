<script setup>
import ButtonMore from '@/components/common/ButtonMore.vue'
defineProps({
  title: String,
  data: String,
  members: String,
  linkPublication: {
    type: Object
  }
})
const UrlPublication = (id) => {
  return `/publication/${id}`
}
</script>

<template>
  <div>
    <span class="title">{{ title }} ({{ data }})</span>
    <span>{{ members }}</span>
    <ButtonMore :link="UrlPublication(linkPublication.id)" text="ver mais" />
  </div>
</template>

<style scoped>
div .title {
  font-weight: 500;
  display: block;
}
div button {
  margin-top: 10px;
}
</style>
