<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'
import { createFactoryWorld, type FactoryWorld } from '@/three/factoryWorld'

const canvas = useTemplateRef('canvas')
const label = useTemplateRef('label')
const isReady = ref(false)
let world: FactoryWorld | undefined

onMounted(() => {
  if (!canvas.value || !label.value) return

  try {
    world = createFactoryWorld(canvas.value, label.value)
    isReady.value = true
  } catch (error) {
    // WebGL unavailable: the rest of the page stays usable.
    console.warn('Não foi possível iniciar a cena 3D.', error)
  }
})

onBeforeUnmount(() => world?.dispose())
</script>

<template>
  <div>
    <canvas
      ref="canvas"
      class="size-full cursor-grab touch-pan-y active:cursor-grabbing"
      role="img"
      aria-label="Ilha flutuante em 3D com uma fábrica, uma árvore e fumaça colorida"
    />
    <p
      v-show="isReady"
      ref="label"
      class="label pointer-events-none absolute font-mono text-[length:calc(0.6875rem*var(--text-scale))] leading-tight text-muted"
    >
      Fábrica <br class="hidden lg:block" />de Software
    </p>
  </div>
</template>

<style scoped>
/* Small screens have no room beside the pin: the label becomes the island's nameplate. */
.label {
  top: 76%;
  left: 50%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
}

@media (width >= 64rem) {
  .label {
    top: 0;
    left: 0;
    transform: translate(calc(var(--pin-x) + 13 * var(--u)), calc(var(--pin-y) - 50%));
  }
}
</style>
