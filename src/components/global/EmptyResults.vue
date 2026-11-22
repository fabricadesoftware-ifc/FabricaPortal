<script setup lang="ts">
defineProps<{ title: string }>()

defineEmits<{ clear: [] }>()
</script>

<template>
  <!-- The minimum height keeps the footer from jumping when nothing is found. -->
  <div class="flex min-h-120 flex-col items-center justify-center text-center" role="status">
    <p class="type-h3">{{ title }}</p>
    <p class="type-body mt-3 text-muted">Tente outra busca ou remova alguns filtros.</p>
    <button
      type="button"
      class="type-ui mt-6 cursor-pointer rounded-lg border border-white/15 px-5 py-2.5 transition-colors hover:bg-white/8"
      @click="$emit('clear')"
    >
      Limpar filtros
    </button>
  </div>
</template>
