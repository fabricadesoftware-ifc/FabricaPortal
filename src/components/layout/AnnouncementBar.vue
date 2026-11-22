<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { selectionProcessLink } from '@/constants/links'
</script>

<template>
  <aside
    aria-label="Aviso"
    class="flex min-h-(--announcement-height) flex-wrap items-center justify-center gap-x-3 border-b border-brand-orange/35 bg-brand-orange/12 px-4 py-2 text-center text-xs font-medium md:text-sm"
  >
    <p>
      Processo seletivo aberto<span class="max-md:hidden"
        >: venha construir software de verdade com a gente</span
      >
    </p>
    <RouterLink
      :to="selectionProcessLink.to"
      class="text-[#ff8533] underline-offset-4 hover:underline"
    >
      Saiba como participar <span aria-hidden="true">→</span>
    </RouterLink>
  </aside>
</template>
