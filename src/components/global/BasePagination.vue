<script setup lang="ts">
defineProps<{ pageCount: number }>()

const page = defineModel<number>({ required: true })
</script>

<template>
  <nav aria-label="Páginas" class="flex flex-wrap justify-center gap-2">
    <button
      v-for="number in pageCount"
      :key="number"
      type="button"
      :aria-label="`Página ${number}`"
      :aria-current="number === page ? 'page' : undefined"
      class="type-ui min-w-11 cursor-pointer rounded-lg border px-3.5 py-2.5 transition-colors"
      :class="
        number === page
          ? 'border-transparent bg-brand-orange text-white'
          : 'border-white/15 hover:bg-white/8'
      "
      @click="page = number"
    >
      {{ number }}
    </button>
    <button
      v-if="page < pageCount"
      type="button"
      class="group type-ui inline-flex cursor-pointer gap-2.5 rounded-lg border border-white/15 px-5 py-2.5 transition-colors hover:bg-white/8"
      @click="page++"
    >
      Próxima
      <span
        class="transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
        aria-hidden="true"
        >→</span
      >
    </button>
  </nav>
</template>
