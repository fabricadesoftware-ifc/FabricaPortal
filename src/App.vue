<script setup>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';
</script>

<template>
  <NavBar />
  <RouterView />
  <FooterComp />
</template>