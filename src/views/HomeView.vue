<script setup>
import HeroComp from "../components/HomeView/HeroSection.vue"
import NewsComp from "../components/HomeView/NewsSection.vue"
import ProjectsSection from "../components/HomeView/ProjectsSection.vue"
import MemberSection from "../components/HomeView/MemberSection.vue"
import PublicationsSection from "../components/HomeView/PublicationsSection.vue"
import HardSkill from "../components/HomeView/HardSkill.vue"
</script>

<template>
  <HeroComp />
  <main class="home-view">
    <NewsComp />
    <ProjectsSection />
    <MemberSection />
    <PublicationsSection />
  </main>
  <HardSkill />
</template>
