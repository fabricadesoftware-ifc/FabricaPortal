<script setup lang="ts">
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AppFooter from '@/components/layout/AppFooter.vue'
import NavBar from '@/components/layout/NavBar.vue'
import LoadingScreen from '@/components/loading/LoadingScreen.vue'
import RouteLoadingScreen from '@/components/loading/RouteLoadingScreen.vue'
import { useAppLoading } from '@/composables/useAppLoading'
import { useRouteLoading } from '@/composables/useRouteLoading'

const route = useRoute()
const isErrorPage = computed(() => route.name === 'not-found')

const { progress: appProgress, isLoading: isAppLoading } = useAppLoading()
const { progress: routeProgress, isLoading: isRouteLoading, destination } = useRouteLoading()
</script>

<template>
  <div :inert="isAppLoading || isRouteLoading">
    <div class="relative">
      <NavBar v-if="!isErrorPage" :is-covered="isRouteLoading" />
      <!-- Reserva a altura da tela enquanto a página carrega, para o rodapé não pular (CLS). -->
      <div class="min-h-svh">
        <RouterView />
      </div>
      <AppFooter />
    </div>
  </div>

  <Transition leave-active-class="transition-opacity duration-500" leave-to-class="opacity-0">
    <LoadingScreen v-if="isAppLoading" :progress="appProgress" />
  </Transition>

  <Transition
    enter-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    leave-active-class="transition-opacity duration-300"
    leave-to-class="opacity-0"
  >
    <RouteLoadingScreen
      v-if="isRouteLoading"
      :progress="routeProgress"
      :destination="destination"
    />
  </Transition>
</template>
