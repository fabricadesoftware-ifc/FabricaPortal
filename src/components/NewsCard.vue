<template>
  <div class="card">
    <img src="src/assets/images/fabricaAmbiente.jpeg" alt="" />

    <div>
      <h4>O QUE É A FÁBRICA?</h4>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ipsum lectus. Integer
        placerat ligula sed varius rhoncus. Nulla vel nunc mi. tellus. Nam egestas bibendum ante at
        lobortis. Ut et dolor mi. Nulla in augue quis dui.Lorem ipsum dolor sit amet.
      </p>
      <ButtonMore text="VEJA MAIS" />
    </div>
  </div>
</template>

<script setup>
import ButtonMore from './common/ButtonMore.vue'
</script>

<style scoped>
.card {
  width: 100%;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.card h4 {
  color: var(--secondary-color);
}
.card img {
  width: auto;
  max-height: 285px;
  border-radius: 5px;
  margin-right: 7px;
}
</style>
