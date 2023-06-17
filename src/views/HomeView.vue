<script setup>
import HeroComp from "../components/HeroSection.vue"
import NewsComp from "../components/NewsSection.vue"
import ProjectsSection from "../components/ProjectsSection.vue"
import MemberSection from "../components/MemberSection.vue"
</script>

<template>
  <HeroComp />
  <main class="home-view">
    <NewsComp />
    <ProjectsSection />
    <MemberSection />
  </main>
</template>
