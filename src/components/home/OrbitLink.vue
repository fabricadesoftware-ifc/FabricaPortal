<script setup lang="ts">
import AppIcon, { type IconName } from '@/components/global/AppIcon.vue'

defineProps<{
  label: string
  href: string
  icon: IconName
  color: string
  /** Position on the orbit, in degrees, clockwise from the right. */
  angle: number
}>()
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener"
    class="orbit-link absolute flex flex-col items-center"
    :style="{ '--angle': `${angle}deg`, '--node-color': color }"
  >
    <span class="node grid place-items-center rounded-full text-white">
      <AppIcon :name="icon" class="size-1/2" />
    </span>
    <span
      class="absolute top-full mt-3 font-mono text-[11px] font-bold tracking-widest whitespace-nowrap uppercase"
    >
      {{ label }}
    </span>
  </a>
</template>

<style scoped>
.orbit-link {
  left: calc(50% + 50% * cos(var(--angle)));
  top: calc(50% + 50% * sin(var(--angle)));
  transform: translate(-50%, -50%);
}

.node {
  width: max(42px, calc(38 * var(--u)));
  aspect-ratio: 1;
  background: var(--node-color);
  /* The outer ring hides the orbit line between the node and its halo. */
  box-shadow: 0 0 0 5px var(--color-ink);
  outline: 1px solid color-mix(in srgb, var(--node-color) 45%, transparent);
  outline-offset: 5px;
  transition:
    scale 0.25s,
    outline-color 0.25s;
}

.orbit-link:hover .node,
.orbit-link:focus-visible .node {
  scale: 1.08;
  outline-color: var(--node-color);
}
</style>
