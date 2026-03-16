<script setup lang="ts">
interface Props {
  description?: string
  logo?: string
  title?: string
  status?: string
  published?: string
  updated?: string
  version?: string
  tags?: string[]
}

defineProps<Props>()
</script>

<template>
  <section class="mb-10">
    <header class="relative flex items-center gap-2 mb-4 group cursor-pointer" @click="toggleModal">
      <div
        class="absolute -top-4 left-0 w-4 h-4 rounded-full bg-[var(--secondary-color)] transition-transform group-hover:scale-110"
      ></div>
      <div
        class="absolute top-0 left-80 w-3 h-3 rounded-full bg-[var(--tertiary-color)] hidden sm:block"
      ></div>
      <div class="absolute top-4 -left-4 w-2 h-2 rounded-full bg-[var(--quaternary-color)]"></div>

      <h3 class="text-xl font-bold text-gray-800">Sobre essa notícia</h3>
    </header>

    <h5 class="text-sm font-semibold text-gray-500 mb-2">Data de Publicação: {{ published }}</h5>
    <p class="text-justify text-gray-700 leading-relaxed">{{ description }}</p>
  </section>
</template>
