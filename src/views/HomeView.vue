<script setup>
import HeroComp from '../components/HomeView/HeroSection.vue'
import NewsComp from '../components/HomeView/NewsSection.vue'
import ProjectsSection from '../components/HomeView/ProjectsSection.vue'
import MemberSection from '../components/HomeView/MemberSection.vue'
import PublicationsSection from '../components/HomeView/PublicationsSection.vue'
import HardSkill from '../components/HomeView/HardSkill.vue'
</script>

<template>
  <HeroComp />
  <main>
    <NewsComp />
    <ProjectsSection />
    <MemberSection />
    <PublicationsSection />
  </main>
  <HardSkill />
</template>

<style scoped>
main {
  background-color: var(--bg-gray);
}
main section {
  padding: 80px var(--pn-main);
}
@media only screen and (max-width: 768px) {
  main section {
    padding: 20px 50px;
  }
}

@media only screen and (max-width: 425px) {
  main section {
    padding: 20px 10px;
  }
}

@media only screen and (min-width: 768px) {
}

@media only screen and (min-width: 992px) {
}

@media only screen and (min-width: 1200px) {
}
</style>
