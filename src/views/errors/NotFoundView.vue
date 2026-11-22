<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { definePage } from 'vue-router/experimental'
import ErrorTerminal from '@/components/errors/ErrorTerminal.vue'
import LostBall from '@/components/errors/LostBall.vue'
import BaseButton from '@/components/global/BaseButton.vue'
import { usePageTitle } from '@/composables/usePageTitle'

definePage({ name: 'not-found', path: '/:path(.*)*' })

usePageTitle('Página não encontrada')

const route = useRoute()

const path = computed(() => {
  try {
    return decodeURI(route.path)
  } catch {
    return route.path
  }
})
</script>

<template>
  <main
    class="grid min-h-svh grid-cols-1 items-center gap-16 px-(--page-padding) py-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20"
  >
    <div class="max-w-xl">
      <p class="font-mono text-xs font-bold tracking-[0.2em] text-brand-orange uppercase">
        // Erro 404
      </p>
      <h1 class="title mt-4 leading-[1.08] font-extrabold tracking-tight">
        <span class="glitch">Essa bolinha rolou</span>
        <span class="block text-brand-orange">
          pra longe<span class="cursor" aria-hidden="true">_</span>
        </span>
      </h1>
      <p class="mt-5 max-w-md leading-relaxed text-white/65">
        A página que você procurou não existe, mudou de lugar ou ainda está no primeiro deploy.
      </p>

      <div class="mt-7 flex flex-wrap gap-3">
        <BaseButton to="/" variant="primary" :arrow="false">Voltar pro morro</BaseButton>
        <BaseButton to="/projects" variant="outline" :arrow="false">Ver projetos</BaseButton>
      </div>

      <ErrorTerminal :path="path" class="mt-9" />
    </div>

    <LostBall class="mx-auto w-full max-w-xl lg:max-w-none" />
  </main>
</template>

<style scoped>
.title {
  font-size: clamp(1.5rem, 8vw, 3.25rem);
}

@media (width >= 64rem) {
  .title {
    font-size: min(3.2vw, 3.8rem);
  }
}

.cursor {
  animation: blink 1.1s step-end infinite;
}

.glitch {
  animation: glitch 4s infinite steps(1);
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@keyframes glitch {
  0%,
  100% {
    text-shadow: none;
  }
  90% {
    text-shadow:
      2px 0 var(--color-brand-red),
      -2px 0 var(--color-brand-teal);
  }
  93% {
    text-shadow:
      -3px 0 var(--color-brand-red),
      2px 0 var(--color-brand-teal);
  }
  96% {
    text-shadow: 2px 0 var(--color-brand-red);
  }
}

@media (prefers-reduced-motion: reduce) {
  .cursor,
  .glitch {
    animation: none;
  }
}
</style>
