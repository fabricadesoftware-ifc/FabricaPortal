<script setup>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';
import {  RouterView } from 'vue-router'
</script>

<template>
  <NavBar />
  <RouterView />
  <FooterComp />
</template>

<style scoped></style>
