<script setup>
defineProps({
  name: String,
  description: String,
  occupation: String
})
</script>
<template>
  <header>
    <h3>{{ occupation }}</h3>
    <div>
      <h2>{{ name }}</h2>
    </div>
  </header>
  <section v-if="description?.length > 0">
    <h3>Descrição</h3>
    <p>{{ description }}</p>
  </section>
</template>

<style scoped>
h2 {
  color: var(--text-color);
  margin: 0;
}

header h3 {
  color: var(--members);
  text-transform: uppercase;
  font-weight: 600;
}

header {
  border-bottom: 5px solid var(--members);
  margin-bottom: 14px;
  width: 100%;
}

p {
  text-align: justify;
}


section {
  margin-bottom: 14px;
}
</style>
