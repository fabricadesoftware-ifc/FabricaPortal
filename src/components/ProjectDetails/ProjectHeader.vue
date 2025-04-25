<script setup>
defineProps({
  title: String,
  description: String,
  status: String,
  images: String,
  type: String,
  logo: String,
  langs: Array,
})
</script>
<template>
  <header>
      <h2>{{ title }}</h2>
  </header>
</template>
<style scoped>
h2 {
  margin: 0;
  text-align: center;
}
header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

.logo {
  max-width: 100px;
  height: fit-content;
}</style>
