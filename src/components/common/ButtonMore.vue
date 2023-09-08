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
    <box-icon type="solid" color="var(--btn)" name="right-arrow-square"></box-icon>
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
  color: var(--btn);
  border: none;
  cursor: pointer;
}

button box-icon {
  margin-right: 15px;
  transition: var(--effect-btn);
}

button a {
  font-weight: 700;
  color: var(--btn);
  text-decoration: none;
  text-transform: uppercase ;
}

button:hover box-icon {
  transform: translateX(10px);
}
</style>
