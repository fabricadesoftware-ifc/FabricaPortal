<template>
  <button>
    <box-icon type="solid" color="#FF6700" name="right-arrow-square"></box-icon>
    <h3>{{ text }}</h3>
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
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
  border: none;
  cursor: pointer;
}
button h3 {
  margin-left: 9px;
}
</style>
