<script setup lang="ts">
interface Props {
  name?: string
  description?: string
  occupation?: string
}

defineProps<Props>()
</script>

<template>
  <header class="border-b-[5px] border-[var(--members)]">
    <h3 class="text-[var(--members)] uppercase font-semibold text-sm">
      {{ occupation }}
    </h3>
    <h2 class="text-[var(--text-color)] font-bold">
      {{ name }}
    </h2>
  </header>

  <section v-if="description && description.length > 0" class="mb-3.5">
    <h3 class="text-lg font-bold text-[var(--text-color)] mb-2">Descrição</h3>
    <p class="text-justify leading-relaxed text-[var(--text-color)]">
      {{ description }}
    </p>
  </section>
</template>
