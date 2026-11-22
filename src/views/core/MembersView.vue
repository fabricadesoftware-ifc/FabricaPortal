<script setup lang="ts">
import { definePage } from 'vue-router/experimental'
import UnderDevelopment from '@/components/global/UnderDevelopment.vue'

definePage({ name: 'members', path: '/members' })
</script>

<template>
  <UnderDevelopment title="Membros" />
</template>
