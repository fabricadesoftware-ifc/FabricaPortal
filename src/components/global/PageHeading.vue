<script setup lang="ts">
defineProps<{ description: string }>()
</script>

<template>
  <header>
    <h1 class="type-h2">
      <slot />
    </h1>
    <p class="type-small mt-3 text-muted">{{ description }}</p>
  </header>
</template>
