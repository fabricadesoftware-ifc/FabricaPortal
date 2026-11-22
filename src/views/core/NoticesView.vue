<script setup lang="ts">
import { definePage } from 'vue-router/experimental'
import UnderDevelopment from '@/components/global/UnderDevelopment.vue'

definePage({ name: 'notices', path: '/notices' })
</script>

<template>
  <UnderDevelopment title="Notícias" />
</template>
