<template>
  <section>
    <div>
      <h1>Conheça a Fábrica de Software</h1>
      <p>
        Um ambiente exclusivo projetado para os alunos da área da Informática (Superior e Técnico)
        que desejam mergulhar nas práticas de uma verdadeira softwarehouse.
      </p>
      <ButtonMore link="/" text="VEJA MAIS SOBRE A FÁBRICA" />
    </div>
  </section>
</template>

<script setup>
import ButtonMore from '../common/ButtonMore.vue'
</script>

<style scoped>
@import '@/style/base.css';

section {
  margin: 0;
  background: url(../../assets/images/fabricaAmbiente.jpeg) no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}

section div {
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
  color: var(--white);
  width: 949px;
  text-align: center;
  margin-bottom: 7px;
  font-weight: 500;
}

</style>
