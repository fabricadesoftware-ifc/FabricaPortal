<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{ title: string }>()
</script>

<template>
  <main
    class="grid min-h-[calc(100svh-var(--announcement-height))] place-items-center px-(--page-padding) py-32 text-center"
  >
    <div>
      <p class="font-mono text-xs tracking-[0.2em] text-white/60 uppercase">Em desenvolvimento</p>
      <h1 class="mt-4 font-mono text-4xl font-bold md:text-6xl">
        {{ title }}<span class="text-brand-orange" aria-hidden="true">_</span>
      </h1>
      <p class="mx-auto mt-6 max-w-md leading-relaxed font-light text-white/70">
        Esta página ainda está sendo construída. Em breve você poderá acessá-la por aqui.
      </p>
      <RouterLink
        to="/"
        class="mt-10 inline-block rounded-lg bg-[#fafaf5] px-5 py-2.5 text-sm font-medium text-[#15151a] transition-colors hover:bg-white/85"
      >
        Voltar ao início
      </RouterLink>
    </div>
  </main>
</template>
