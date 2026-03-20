<script setup lang="ts">
import { NavBar, FooterComp, LoadingComp } from '@/components'
</script>

<template>
  <NavBar />
  <LoadingComp />
  <RouterView />
  <FooterComp />
</template>
