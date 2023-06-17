<template>
  <div class="card">
    <div class="image"><div>&nbsp;</div></div>
    <div>
      <div class="tags">
        <h5 class="button-tag">Tecnologia</h5>
        <h5 class="button-tag">Inovação</h5>
        <h5 class="button-tag">Projeto</h5>
      </div>
      <h3>A proposta da Fábrica de Software</h3>
      <h5>16/06/2023 ● @fabrica</h5>
      <!--       <p>
        Dentro de um ambiente controlado, os alunos poderão participar de todo o processo de
        desenvolvimento de soluções na área de Sistemas de Informação.
      </p> -->
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ButtonMore from './common/ButtonMore.vue'
const back = 'src/assets/images/fabricaAmbiente.jpeg'

const background = computed(() => 'url(' + back + ') no-repeat;')
</script>

<style scoped>
.card {
  width: 300px;
  height: auto;
  padding: 10px;
  border-radius: 5px;
  margin-right: 20px;
  background-color: var(--background-color);
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  flex-direction: column;
}
.card .button-tag {
  background-color: #2e2e2e;
  border-radius: 5px;
  padding: 3px;
  margin-right: 5px;

  text-transform: uppercase;
  margin-top: 10px;
}
.card p {
  text-align: justify;
}
.card .tags {
  width: 100%;
  display: flex;
}
.card .image {
  width: 100%;
  height: 190px;
  border-radius: 5px;
  background: url(src/assets/images/fabricaAmbiente.jpeg) no-repeat;
  background-position: center;
  background-size: cover;
}
</style>
