<template>
  <section id="hero-section">
    <div>
      <h1>illum dignissimos</h1>
      <h1>
        laudantium eos
        <span class="effect"><span class="text">et debitis</span></span>
      </h1>
      <p>
        Um ambiente exclusivo projetado para os alunos da área da Informática (Superior e Técnico)
        que desejam mergulhar nas práticas de uma verdadeira softwarehouse.
      </p>
      <ButtonMore link="/about-us" text="CONHEÇA-NOS" />
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
  background-attachment: fixed;
  background-position: center;
  height: 100vh;
}

section div {
  width: 100%;
  background-color: #000000b5;
  color: var(--white);
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 145px;
  align-items: flex-start;
}
section .effect {
  position: relative;
  transition: var(--effect) ease;
}
section .text {
  position: relative;
  z-index: 1;
}
section .effect::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 2px;
  height: 18px;
  width: 0;
  background-color: var(--hero-section);
  transition: var(--effect) ease;
}

section:hover .effect::before {
  width: 100%;
}
p {
  color: var(--white);
  width: 500px;
  margin: 7px 0;
}
@media only screen and (max-width: 768px) {
  section div {
    padding: 0 50px;
  }
}

@media only screen and (max-width: 600px) {
  section {
  background-attachment: local;

  }
  section .effect {
    position: relative;
    transition: var(--effect) ease;
  }
  section .text {
    position: relative;
    z-index: 1;
  }
  section .effect::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    height: 18px;
    width: 0;
    background-color: var(--hero-section);
    transition: var(--effect) ease;
  }

  section:hover .effect::before {
    width: 100%;
  }
  p {
    color: var(--white);
    margin: 7px 0;
  }
}

@media only screen and (max-width: 600px) {
  p {
    width: auto;
  }
  section div {
  padding: 0 15px;
}
}
@media only screen and (max-width: 425px) {
  section div {
    padding: 0 10px;
  }
}
@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 992px) {
}

@media only screen and (min-width: 1200px) {
}
</style>
