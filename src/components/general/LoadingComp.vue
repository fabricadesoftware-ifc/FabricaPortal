<script setup lang="ts">
import { useLoadingStore } from '@/stores/loading'
import { computed } from 'vue'

const loadingStore = useLoadingStore()
const isLoading = computed(() => loadingStore.isLoading)
</script>

<template>
  <div
    v-if="isLoading"
    class="fixed inset-0 w-screen h-screen bg-black/95 flex items-center justify-center z-50"
  >
    <div
      class="w-12.5 h-12.5 border-4 border-white border-t-transparent rounded-full animate-spin"
    ></div>
  </div>
</template>
