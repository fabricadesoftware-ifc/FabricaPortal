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
  background-color: var(--btn);
  border: 3px solid var(--btn);
  cursor: pointer;
  padding: 5px 7px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ease-in-out 0.2s;
  border-radius: 5px;
  color: var(--white);
  font-weight: 600;
  font-size: 15px;
}
button:hover {
  background-color: var(--btn-hover);
}
a {
  text-decoration: none;
}
</style>
