<script setup lang="ts">
import { RouterLink } from 'vue-router'

defineProps<{
  links: { label: string; to: string }[]
  current: string
}>()
</script>

<template>
  <nav aria-label="Você está em">
    <ol class="type-label flex flex-wrap gap-x-2 text-subtle">
      <li v-for="link in links" :key="link.to" class="flex gap-2">
        <RouterLink :to="link.to" class="-my-2 py-2 transition-colors hover:text-white">
          {{ link.label }}
        </RouterLink>
        <span aria-hidden="true">/</span>
      </li>
      <li class="text-brand-orange" aria-current="page">{{ current }}</li>
    </ol>
  </nav>
</template>
