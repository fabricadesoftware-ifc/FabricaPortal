<script setup>

defineProps({
  name: String,
  description: String,
  occupation: {
    type: Object
  },
})
</script>
<template>
  <div class="nameOccup">
    <h3>{{ occupation.description }}</h3>
    <div>
      <h2>{{ name }}</h2>
    </div>
  </div>
  <div v-if="description.length > 0" class="desc">
    <h3>Descrição</h3>
    <p>{{ description }}</p>
  </div>
</template>
<style scoped>
section .nameOccup {
  border-bottom: 5px solid var(--color-details-members);
  margin-bottom: 14px;
  width: 100%;
}
section .desc {
  margin-bottom: 14px;
}
section .nameOccup h3 {
  color: var(--color-details-members);
  text-transform: uppercase;
  font-weight: 600;
}
</style>
