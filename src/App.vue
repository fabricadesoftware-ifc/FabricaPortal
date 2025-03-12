<script setup>
import NavBar from './components/NavBar.vue';
import FooterComp from './components/FooterComp.vue';
import LoadingComp from "@/components/common/LoadingComp.vue";

</script>

<template>
  <LoadingComp />
  <NavBar />
  <RouterView />
  <FooterComp />
</template>