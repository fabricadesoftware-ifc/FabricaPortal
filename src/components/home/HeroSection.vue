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

      <div class="heading relative z-10 px-6 text-center">
        <p class="eyebrow font-mono tracking-[0.2em] text-white/60 uppercase">
          Projetos reais, alunos reais
        </p>
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

      <p class="description font-light text-white/75">
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
  --hero-height: max(100svh - var(--announcement-height), 680px);
  --u: calc(100vw / 390);
}

.frame {
  min-height: calc(100svh - var(--announcement-height));
  padding: 7rem 0 2rem;
}

.dots {
  background: radial-gradient(circle, rgb(255 255 255 / 0.08) 1px, transparent 1.5px) 0 0 / 36px
    36px;
}

.eyebrow {
  font-size: clamp(10px, calc(8 * var(--u)), 14px);
}

.title {
  margin-top: 1rem;
  font-size: clamp(20px, 6.2vw, 40px);
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
  line-height: 1.6;
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
    font-size: calc(35.5 * var(--u));
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
    bottom: 1.25rem;
    left: var(--page-padding);
    max-width: 25em;
    padding: 0;
    font-size: clamp(13px, calc(11 * var(--u)), 17px);
  }

  .last-commit {
    position: absolute;
    right: var(--page-padding);
    bottom: 1.25rem;
    margin: 0;
    padding: 0;
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
