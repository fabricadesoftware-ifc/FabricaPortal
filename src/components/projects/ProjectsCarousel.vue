<script setup lang="ts">
import { ref, watch } from 'vue'
import { useSwipe } from '@/composables/useSwipe'
import type { PortfolioProject } from '@/types/project'
import PortfolioCard from './PortfolioCard.vue'
import ProjectsCarouselNav from './ProjectsCarouselNav.vue'

const props = defineProps<{
  projects: PortfolioProject[]
  /** Name of the project that opens in the center. */
  startsAt?: string
}>()

/** Cards seen at each side of the active one. */
const MAX_DISTANCE = 3

const active = ref(0)

watch(
  () => props.projects,
  (projects) => {
    const start = projects.findIndex(({ name }) => name === props.startsAt)
    // Otherwise opens in the middle, so both sides have cards.
    active.value = start >= 0 ? start : Math.floor((projects.length - 1) / 2)
  },
  { immediate: true },
)

function select(index: number) {
  active.value = Math.min(Math.max(index, 0), props.projects.length - 1)
}

const swipe = useSwipe((direction) => select(active.value + direction))

function cardStyle(index: number) {
  const offset = index - active.value
  const distance = Math.abs(offset)

  return {
    '--side': Math.sign(offset),
    '--distance': Math.min(distance, MAX_DISTANCE),
    zIndex: -distance,
  }
}
</script>

<template>
  <section
    aria-roledescription="carrossel"
    aria-label="Projetos"
    @keydown.left="select(active - 1)"
    @keydown.right="select(active + 1)"
  >
    <TransitionGroup tag="ul" name="cards" class="stage isolate" v-on="swipe">
      <li
        v-for="(project, index) in projects"
        :key="project.name"
        class="card"
        :class="{
          'is-side': index !== active,
          'is-hidden': Math.abs(index - active) > MAX_DISTANCE,
        }"
        :style="cardStyle(index)"
        @click="select(index)"
      >
        <PortfolioCard :project="project" :position="index + 1" :inert="index !== active" />
      </li>
    </TransitionGroup>

    <ProjectsCarouselNav
      :model-value="active"
      :names="projects.map(({ name }) => name)"
      class="mt-6 md:mt-10"
      @update:model-value="select"
    />
  </section>
</template>

<style scoped>
.stage {
  display: grid;
  justify-items: center;
  /* Full width of the page, cutting the cards that do not fit. */
  margin-inline: calc(var(--page-padding) * -1);
  padding: 1.5rem var(--page-padding);
  overflow: clip;
  perspective: 1200px;
  touch-action: pan-y;
}

.card {
  display: grid;
  grid-area: 1 / 1;
  width: min(25rem * var(--type-scale, 1), 100%);
  transition:
    transform 0.5s cubic-bezier(0.22, 1, 0.36, 1),
    filter 0.5s,
    opacity 0.3s,
    visibility 0.5s;
}

.is-side {
  cursor: pointer;
  filter: brightness(calc(0.8 - var(--distance) * 0.15));
  transform: translateX(calc(var(--side) * (30% + var(--distance) * 22%)))
    translateZ(calc(var(--distance) * -70px)) rotateY(calc(var(--side) * -22deg));
}

.is-hidden,
.cards-enter-from,
.cards-leave-to {
  opacity: 0;
}

.is-hidden {
  visibility: hidden;
}

.cards-leave-active {
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .card {
    transition: none;
  }
}
</style>
