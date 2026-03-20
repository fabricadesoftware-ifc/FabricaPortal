<script setup lang="ts">
interface ILanguage {
  name: string
}

const langs: ILanguage[] = [
  { name: '/technologies/vue.svg' },
  { name: '/technologies/react.svg' },
  { name: '/technologies/django.svg' },
  { name: '/technologies/tailwind.svg' },
]
</script>

<template>
  <section class="hidden sm:flex w-full py-10 justify-center items-center gap-10">
    <img
      v-for="(lang, i) in langs"
      :key="i"
      class="transition-opacity hover:opacity-70 h-30 w-auto object-cover"
      :src="lang.name"
      alt="icon"
    />
  </section>
</template>
