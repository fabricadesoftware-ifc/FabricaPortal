<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppIcon, { type IconName } from '@/components/global/AppIcon.vue'
import { slugify } from '@/utils/slugify'

defineProps<{
  label: string
  icon: IconName
  color: string
  /** Starting position on the orbit, in degrees, clockwise from the right. */
  angle: number
  ring: 'inner' | 'outer'
}>()
</script>

<template>
  <RouterLink
    :to="`/projects/${slugify(label)}`"
    class="orbit-link absolute flex-col items-center"
    :class="ring"
    :style="{ '--angle': `${angle}deg`, '--node-color': color }"
  >
    <span class="node grid place-items-center rounded-full text-white">
      <AppIcon :name="icon" class="size-1/2" />
    </span>
    <span class="absolute top-full type-label mt-3 whitespace-nowrap">
      {{ label }}
    </span>
  </RouterLink>
</template>

<style scoped>
/* --spin-inner and --spin-outer turn on the orbit, in HeroSection. */
.orbit-link {
  left: calc(50% + var(--radius) * cos(var(--at)));
  top: calc(50% + var(--radius) * sin(var(--at)));
  transform: translate(-50%, -50%);
}

.inner {
  --at: calc(var(--angle) + var(--spin-inner, 0deg));
  --radius: 50%;
  display: flex;
  /* Fades out at the top, under the title, and at the bottom, where the hero cuts it. */
  opacity: clamp(0, min(sin(var(--at)) + 0.75, 0.5 - sin(var(--at))) * 6, 1);
}

/* As large as the outer ring of the orbit. */
.outer {
  --at: calc(var(--angle) - var(--spin-outer, 0deg));
  --radius: 76.5%;
  display: none;
  /* Only on the sides: above is the title, and below is out of the screen. */
  opacity: clamp(0, (0.2 - sin(var(--at)) * sin(var(--at))) * 8, 1);
}

@media (width >= 48rem) {
  .outer {
    display: flex;
  }
}

/* Still reachable with the keyboard while hidden. */
.orbit-link:focus-visible {
  opacity: 1;
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
