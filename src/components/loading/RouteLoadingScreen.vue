<script setup lang="ts">
import { computed } from 'vue'
import type { RouteRecordNameGeneric } from 'vue-router'
import type { RouteNamedMap } from 'vue-router/auto-routes'
import { useScrollLock } from '@/composables/useScrollLock'
import SmokingFactory from './SmokingFactory.vue'

const props = defineProps<{
  /** From 0 to 1. */
  progress: number
  destination: RouteRecordNameGeneric
}>()

interface Texts {
  title: string
  messages: [string, string]
}

const texts: Record<keyof RouteNamedMap, Texts> = {
  home: {
    title: 'Voltando ao início',
    messages: ['Reacendendo a chaminé…', 'Flutuando até a ilha…'],
  },
  projects: {
    title: 'Indo para Projetos',
    messages: ['Abrindo a oficina…', 'Separando os repositórios…'],
  },
  project: {
    title: 'Abrindo o projeto',
    messages: ['Destrancando a oficina…', 'Lendo a documentação…'],
  },
  members: {
    title: 'Indo para Membros',
    messages: ['Chamando a equipe…', 'Passando o café…'],
  },
  member: {
    title: 'Abrindo o perfil',
    messages: ['Procurando o crachá…', 'Reunindo os projetos…'],
  },
  notices: {
    title: 'Indo para Notícias',
    messages: ['Ligando a impressora…', 'Revisando as manchetes…'],
  },
  notice: {
    title: 'Abrindo a notícia',
    messages: ['Tirando do forno…', 'Revisando o texto…'],
  },
  'not-found': {
    title: 'Procurando a página',
    messages: ['Vasculhando o servidor…', 'Seguindo a bolinha…'],
  },
}

const current = computed(() => texts[props.destination as keyof RouteNamedMap] ?? texts.home)
const message = computed(() => current.value.messages[props.progress < 0.5 ? 0 : 1])

useScrollLock()
</script>

<template>
  <div
    role="status"
    class="fixed inset-0 z-100 grid place-items-center overflow-hidden bg-ink px-6"
  >
    <div class="flex flex-col items-center">
      <SmokingFactory :progress="progress" class="w-52 md:w-60" />
      <p class="mt-8 text-xs font-extrabold tracking-[0.2em] uppercase sm:text-sm">
        {{ current.title }}
      </p>
      <p class="mt-3 font-mono text-[11px] text-white/55" aria-hidden="true">{{ message }}</p>
    </div>
  </div>
</template>
