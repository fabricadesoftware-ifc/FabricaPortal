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
    <box-icon type="solid" color="#FF6700" name="right-arrow-square"></box-icon>
    <RouterLink :to="link" >{{ text }}</RouterLink>
  </button>
</template>

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
button a {
  font-size: 16px;
  font-weight: 700;
  color: var(--primary-color);
  text-decoration: none;
  text-transform: uppercase ;
  margin-left: 9px;
}
</style>
