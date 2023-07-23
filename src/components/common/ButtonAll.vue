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
})
</script>

<template>
  <RouterLink :to="link">
    <button>
      {{ text }}
    </button>
  </RouterLink>
</template>

<style scoped>
button {
  background-color: var(--primary-color);
  border: 3px solid var(--primary-color);
  cursor: pointer;
  padding: 5px 7px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 0.2s;
  border-radius: 5px;
  color: var(--text-color-btn-all);
  font-weight: 600;
  font-size: 15px;
}
button:hover {
  background-color: #ff6600;
}
a {
  text-decoration: none;
}
</style>
