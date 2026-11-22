<template>
  <div class="overflow-hidden rounded-xl border border-white/10 bg-ink">
    <div class="flex items-center gap-1.5 px-4 py-3" aria-hidden="true">
      <span v-for="dot in 3" :key="dot" class="size-2 rounded-full bg-white/15" />
      <span class="ml-2 h-4 w-2/5 rounded bg-white/8" />
    </div>
    <slot />
  </div>
</template>
