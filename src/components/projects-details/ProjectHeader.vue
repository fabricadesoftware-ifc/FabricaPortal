<script setup lang="ts">
interface Props {
  title?: string
  description?: string
  status?: string
  images?: string
  type?: string
  logo?: string
  langs?: string[]
}

defineProps<Props>()
</script>

<template>
  <header class="flex w-full flex-col items-center gap-[15px]">
    <h2 class="m-0 text-center text-2xl font-bold text-[var(--text-color)]">
      {{ title }}
    </h2>
  </header>
</template>
