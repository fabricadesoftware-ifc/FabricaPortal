<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="overflow-hidden rounded-xl border border-white/10 bg-surface font-mono">
    <div class="flex items-center gap-2 border-b border-white/8 px-4 py-3" aria-hidden="true">
      <span class="size-2.5 shrink-0 rounded-full bg-[#e5534b]" />
      <span class="size-2.5 shrink-0 rounded-full bg-[#e0a32e]" />
      <span class="size-2.5 shrink-0 rounded-full bg-[#3fb950]" />
      <span class="ml-1.5 truncate text-[0.6875rem] text-subtle">{{ title }}</span>
    </div>
    <slot />
  </div>
</template>
