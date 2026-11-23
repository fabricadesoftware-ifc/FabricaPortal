<script setup lang="ts">
import type { Technology } from '@/types/technology'

defineProps<{ technology: Technology }>()
</script>

<template>
  <div
    class="flex items-center gap-3 rounded-lg border border-white/8 bg-surface p-2 pr-5 xl:gap-3.5 xl:pr-6 transition-colors hover:border-white/20"
  >
    <span class="grid shrink-0 place-items-center rounded-lg bg-white/6 p-2">
      <img
        v-if="technology.icon"
        :src="technology.icon"
        alt=""
        width="22"
        height="22"
        class="size-5.5 object-contain xl:size-6.5"
      />
      <!-- As large as an icon, so every badge has the same height. -->
      <span v-else class="grid size-5.5 place-items-center xl:size-6.5" aria-hidden="true">
        <span class="size-2 rounded-full bg-white/40" />
      </span>
    </span>
    <span class="type-ui">{{ technology.name }}</span>
  </div>
</template>
