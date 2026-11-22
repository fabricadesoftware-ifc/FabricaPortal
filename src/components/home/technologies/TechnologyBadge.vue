<script setup lang="ts">
import type { Technology } from '@/types/technology'

defineProps<{ technology: Technology }>()
</script>

<template>
  <div
    class="flex items-center gap-3 rounded-full border border-white/8 bg-surface py-2 pr-5 pl-2.5 xl:gap-3.5 xl:py-2.5 xl:pr-6 xl:pl-3 transition-colors hover:border-white/20"
  >
    <span class="grid size-9 shrink-0 place-items-center rounded-lg bg-white/6 xl:size-11">
      <img
        :src="technology.icon"
        alt=""
        width="22"
        height="22"
        class="size-5.5 object-contain xl:size-6.5"
      />
    </span>
    <span class="type-ui">{{ technology.name }}</span>
  </div>
</template>
