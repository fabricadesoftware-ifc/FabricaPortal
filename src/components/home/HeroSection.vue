<script setup lang="ts">
import { ButtonMore } from '@/components'
</script>

<template>
  <section
    id="hero-section"
    class="group bg-[url(/fabrica-ambiente.jpg)] bg-no-repeat bg-cover bg-center h-screen bg-fixed max-[600px]:bg-local"
  >
    <div
      class="w-full h-screen flex flex-col justify-center items-start px-[145px] bg-[linear-gradient(268deg,rgb(0_0_0/31%)_0%,#000000d9_99.54%)] bg-blend-multiply max-[768px]:px-[50px] max-[600px]:px-[15px] max-[425px]:px-[10px]"
    >
      <h1 class="text-[var(--white)] font-bold leading-tight">
        Conectando
        <span
          class="relative transition-[var(--effect)] ease-in-out before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:h-[18px] before:w-0 before:bg-[var(--hero-section)] before:transition-[width] before:duration-[var(--effect)] group-hover:before:w-full"
        >
          <span class="relative z-10">ideias</span>
        </span>
        através
      </h1>

      <h1 class="text-[var(--white)] font-bold leading-tight">
        da linguagem do
        <span
          class="relative transition-[var(--effect)] ease-in-out before:content-[''] before:absolute before:left-0 before:bottom-[2px] before:h-[18px] before:w-0 before:bg-[var(--hero-section)] before:transition-[width] before:duration-[var(--effect)] group-hover:before:w-full"
        >
          <span class="relative z-10"> código</span>
        </span>
      </h1>

      <p class="text-[var(--white)] w-[500px] my-[7px] max-[600px]:w-auto">
        Um ambiente exclusivo projetado para os alunos da área da Informática (Superior e Técnico)
        que desejam mergulhar nas práticas de uma verdadeira softwarehouse.
      </p>

      <ButtonMore link="/about" text="CONHEÇA-NOS" />
    </div>
  </section>
</template>
