<template>
  <section>
    <div class="hero">
      <h1>Conheça a Fábrica de Software</h1>
      <p>
        Um ambiente exclusivo projetado para os alunos da área da Informática (Superior e Técnico)
        que desejam mergulhar nas práticas de uma verdadeira softwarehouse.
      </p>
      <ButtonVejaMais text="VEJA MAIS SOBRE A FÁBRICA" />
    </div>
  </section>
</template>

<script setup>
import ButtonVejaMais from './common/ButtonVejaMais.vue'
</script>

<style setup>
@import '@/style/base.css';

.hero {
  width: 100%;
  background-color: #0000008c;
  color: var(--white);
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
p {
  width: 949px;
  text-align: center;
  margin-bottom: 7px;
  font-weight: 500;
}
section {
  background: url(../assets/images/fabricaAmbiente.jpeg) no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}
</style>
