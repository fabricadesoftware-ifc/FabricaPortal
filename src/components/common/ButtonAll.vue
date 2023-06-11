<template>
  <button>
    <span>{{ text }}</span>
  </button>
</template>

<script setup>
defineProps({
  text: String
})
</script>

<style scoped>
@import '@/style/base.css';

button {
  background-color: var(--primary-color);
  color: var(--white);
  border: none;
  cursor: pointer;
  padding: 5px 7px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
}
button span {
    font-size: 17px;
    font-weight: 600;
}
</style>
