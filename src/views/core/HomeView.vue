<script setup lang="ts">
import { definePage } from 'vue-router/experimental'
import SectionDivider from '@/components/global/SectionDivider.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import MembersSection from '@/components/home/members/MembersSection.vue'
import NoticesSection from '@/components/home/notices/NoticesSection.vue'
import ProcessSection from '@/components/home/process/ProcessSection.vue'
import ProjectsSection from '@/components/home/projects/ProjectsSection.vue'
import TechnologiesSection from '@/components/home/technologies/TechnologiesSection.vue'

definePage({ name: 'home', path: '/' })
</script>

<template>
  <main>
    <HeroSection />
    <ProjectsSection />
    <SectionDivider />
    <TechnologiesSection />
    <SectionDivider variant="right" />
    <ProcessSection />
    <MembersSection />
    <SectionDivider variant="left" />
    <NoticesSection />
  </main>
</template>
