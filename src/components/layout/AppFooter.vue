<script setup lang="ts">
import { RouterLink } from 'vue-router'
import AppIcon from '@/components/global/AppIcon.vue'
import logo from '@/assets/logo.svg'
import { footerLinks, socials } from '@/constants/links'

const year = new Date().getFullYear()

function scrollToTop() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
}
</script>

<template>
  <footer class="overflow-hidden px-(--page-padding) pt-16 text-[15px]">
    <div
      class="grid gap-12 border-t border-white/8 pt-16 pb-14 md:grid-cols-[1fr_1fr_minmax(max-content,1fr)] md:gap-4"
    >
      <div>
        <RouterLink to="/" aria-label="Fábrica de Software" class="inline-block">
          <img :src="logo" alt="" class="h-11 w-auto" />
        </RouterLink>
        <p class="mt-6 max-w-72 leading-[1.75] text-white/55">
          Um ambiente exclusivo onde alunos constroem software de verdade.
        </p>
        <ul class="mt-5 flex gap-2.5">
          <li v-for="social in socials" :key="social.label">
            <a
              :href="social.href"
              :aria-label="social.label"
              target="_blank"
              rel="noopener"
              class="grid size-11 place-items-center rounded-full border border-white/8 bg-surface transition-colors hover:border-brand-orange hover:text-brand-orange"
            >
              <AppIcon :name="social.icon" class="size-4.5" />
            </a>
          </li>
        </ul>
      </div>

      <nav aria-labelledby="footer-navigation">
        <h2 id="footer-navigation" class="footer-title">Navegação</h2>
        <ul class="mt-6 space-y-4">
          <li v-for="link in footerLinks" :key="link.to">
            <RouterLink
              :to="link.to"
              class="text-white/85 transition-colors hover:text-brand-orange"
            >
              {{ link.label }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <div>
        <h2 class="footer-title">Contato</h2>
        <address class="mt-6 space-y-4 text-white/65 not-italic">
          <p>
            BR-280 - Colégio Agrícola<br />
            Araquari - SC, 89245-000
          </p>
          <p>
            <a
              href="mailto:fabricadesoftware.araquari@ifc.edu.br"
              class="break-words text-white/85 transition-colors hover:text-brand-orange"
            >
              fabricadesoftware.araquari@ifc.edu.br
            </a>
          </p>
          <p>
            <a href="tel:+554738037200" class="transition-colors hover:text-brand-orange">
              (47) 3803-7200
            </a>
          </p>
        </address>
      </div>
    </div>

    <div
      class="flex flex-wrap items-center justify-between gap-4 border-t border-white/8 py-6 text-sm"
    >
      <p class="text-white/60">{{ year }} © Fábrica de Software · IFC Campus Araquari</p>
      <button
        type="button"
        class="cursor-pointer text-white/85 transition-colors hover:text-brand-orange"
        @click="scrollToTop"
      >
        Voltar ao topo ↑
      </button>
    </div>

    <div class="wordmark mt-8 select-none" aria-hidden="true">
      <p class="font-extrabold">fábrica</p>
    </div>
  </footer>
</template>

<style scoped>
.footer-title {
  font-family: var(--font-mono);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.14em;
  line-height: 1.5;
  text-transform: uppercase;
  color: var(--color-brand-orange);
}

/* Sized from its own width, so the word always spans the footer and bleeds off the bottom. */
.wordmark {
  container-type: inline-size;
}

.wordmark p {
  height: 20.7cqw;
  overflow: hidden;
  font-size: 28.6cqw;
  letter-spacing: -0.037em;
  line-height: 0.83;
  color: rgb(255 255 255 / 0.04);
  white-space: nowrap;
}
</style>
