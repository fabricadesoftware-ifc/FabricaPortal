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
  <button>
    <RouterLink :to="link">
      {{ text }}
    </RouterLink>
  </button>
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
  transition: all ease-in-out var(--effect-btn);
  border-radius: 5px;
  font-weight: 600;
}
button:hover {
  background-color: var(--btn-hover);
}
a {
  color: var(--white);
  text-decoration: none;
}
</style>
