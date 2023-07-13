<script setup lang="ts">
defineProps({
  link: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  }
});
</script>

<template>
  <button>
    <RouterLink :to="link" >{{ text }}</RouterLink>
  </button>
</template>

<style scoped>
button {
  background-color: var(--background-color-btn-all);
  border: none;
  cursor: pointer;
  padding: 5px 7px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

button a {
  font-size: 17px;
  color: var(--text-color-btn-all);
  text-decoration: none;
  font-weight: 600;
}
</style>