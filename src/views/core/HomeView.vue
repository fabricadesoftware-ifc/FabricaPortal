<script setup lang="ts">
import { definePage } from 'vue-router/experimental'
import HeroSection from '@/components/home/HeroSection.vue'

definePage({ name: 'home', path: '/' })
</script>

<template>
  <main>
    <HeroSection />
  </main>
</template>
