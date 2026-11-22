<script setup lang="ts">
import { definePage } from 'vue-router/experimental'
import UnderDevelopment from '@/components/global/UnderDevelopment.vue'

definePage({ name: 'projects', path: '/projects' })
</script>

<template>
  <UnderDevelopment title="Projetos" />
</template>
