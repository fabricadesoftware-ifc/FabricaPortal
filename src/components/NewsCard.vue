<template>
  <div class="card">
    <div class="image"><div>&nbsp;</div></div>

    <div>
      <h4>O QUE É A FÁBRICA?</h4>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id ipsum lectus. Integer
        placerat ligula sed varius rhoncus. Nulla vel nunc mi. tellus. Nam egestas bibendum ante at
        lobortis. Ut et dolor mi. Nulla in augue quis dui.Lorem ipsum dolor sit amet. Ut et dolor mi. Nulla in augue quis dui.Lorem ipsum dolor sit amet.
      </p>
      <ButtonMore text="VEJA MAIS" />
    </div>
  </div>
</template>

<script setup>
import {computed} from 'vue'
import ButtonMore from './common/ButtonMore.vue'
const back = 'src/assets/images/fabricaAmbiente.jpeg'

const background = computed(() => "url("+back+") no-repeat;")
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
  width: 1487px;
  max-height: 285px;
  border-radius: 5px;
  margin-right: 7px;
}
.card .image {
  width: 1487px;
    height: 285px;
    border-radius: 5px;
    margin-right: 10px;
    background: url(src/assets/images/fabricaAmbiente.jpeg) no-repeat;
    background-position: center;
    background-size: cover;
}
</style>
