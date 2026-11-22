<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { projects } from '@/constants/projects'
import LastCommit from './LastCommit.vue'
import OrbitLink from './OrbitLink.vue'

// Keeps Three.js out of the initial bundle.
const FactoryWorld = defineAsyncComponent(() => import('./FactoryWorld.vue'))
</script>

<template>
  <section class="hero">
    <div class="frame relative isolate overflow-hidden">
      <div class="dots absolute inset-0 -z-10" aria-hidden="true" />

      <div class="heading relative z-10 px-4 text-center">
        <p class="type-eyebrow text-muted">Projetos reais, alunos reais</p>
        <h1 class="title font-mono font-bold">
          Conectando ideias
          <span class="block text-brand-orange">
            através da linguagem <br />do código<span class="cursor" aria-hidden="true">_</span>
          </span>
        </h1>
      </div>

      <div class="orbit">
        <div class="orbit-ring inset-0" aria-hidden="true" />
        <div class="orbit-ring -inset-[26.5%]" aria-hidden="true" />
        <FactoryWorld class="absolute inset-0" />
        <OrbitLink v-for="project in projects" :key="project.label" v-bind="project" />
      </div>

      <p class="description type-body text-muted">
        Um ambiente exclusivo projetado para os alunos da área da Informática (Superior e Técnico)
        que desejam mergulhar nas práticas de uma verdadeira softwarehouse.
      </p>

      <LastCommit class="last-commit" />
    </div>
  </section>
</template>

<style scoped>
/* --u is one pixel of the 923x678 reference layout, scaled to fit the viewport. */
.hero {
  --hero-height: max(100svh, 680px);
  --u: calc(100vw / 390);
}

.frame {
  min-height: 100svh;
  padding: 7rem 0 2rem;
}

.dots {
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='36' height='36'%3E%3Ccircle cx='18' cy='18' r='1.2' fill='%23fff' fill-opacity='.08'/%3E%3C/svg%3E");
}

.title {
  margin-top: 1rem;
  font-size: calc(clamp(1.25rem, 6.7vw, 2.75rem) * var(--text-scale));
  line-height: 1.08;
}

.cursor {
  animation: blink 1.1s step-end infinite;
}

.orbit {
  position: relative;
  width: min(80vw, 480px);
  aspect-ratio: 1;
  margin: 1.5rem auto 3rem;
}

.orbit-ring {
  position: absolute;
  border: 1px solid rgb(255 255 255 / 0.07);
  border-radius: 50%;
}

.description {
  padding: 0 var(--page-padding);
}

.last-commit {
  margin-top: 1.5rem;
  padding: 0 var(--page-padding);
}

@media (width >= 48rem) {
  .hero {
    --u: min(100vw / 923, var(--hero-height) / 678);
  }

  .frame {
    height: var(--hero-height);
    padding: 0;
  }

  .heading {
    padding-top: max(6.75rem, var(--hero-height) * 0.133);
  }

  .title {
    margin-top: calc(18 * var(--u));
    /* Tall screens have room for more than the reference layout. */
    font-size: calc(max(35.5 * var(--u), min(5.4vw, 4.6svh)) * var(--text-scale));
  }

  .orbit {
    position: absolute;
    top: 62.3%;
    left: 50%;
    width: calc(482 * var(--u));
    margin: 0;
    transform: translate(-50%, -50%);
  }

  .description {
    position: absolute;
    bottom: 1rem;
    left: var(--page-padding);
    max-width: 25em;
    padding: 0;
    font-size: calc(clamp(0.875rem, 12.5 * var(--u), 1.125rem) * var(--text-scale));
    line-height: 1.6;
  }

  .last-commit {
    position: absolute;
    right: var(--page-padding);
    bottom: 1rem;
    margin: 0;
    padding: 0;
  }
}

@media (width >= 80rem) {
  .hero {
    --type-scale: 1.15;
  }
}

@media (prefers-reduced-motion: reduce) {
  .cursor {
    animation: none;
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}
</style>
