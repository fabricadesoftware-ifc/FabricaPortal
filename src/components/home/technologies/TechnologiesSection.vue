<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import BaseTabs from '@/components/global/BaseTabs.vue'
import SectionHeading from '@/components/global/SectionHeading.vue'
import { technologyGroups } from '@/constants/technologies'
import TechnologyBadge from './TechnologyBadge.vue'

const names = technologyGroups.map(({ name }) => name)

const active = ref(0)
const group = computed(() => technologyGroups[active.value]!)
const panelId = useId()

const ITEMS_PER_ROW = 4
</script>

<template>
  <section class="section">
    <header class="flex flex-col items-center text-center">
      <SectionHeading eyebrow="Tecnologias">
        <span class="text-brand-orange">Stack</span> que usamos nos projetos
      </SectionHeading>
      <p class="type-body mt-5 max-w-md text-muted xl:max-w-lg">
        As ferramentas do dia a dia de uma software house, aprendidas na prática.
      </p>
    </header>

    <BaseTabs
      v-model="active"
      :tabs="names"
      label="Áreas de tecnologia"
      :panel-id="panelId"
      variant="underline"
      class="mt-12 2xl:max-w-4xl"
    />

    <!-- The minimum height keeps the page still when a group has fewer rows. -->
    <div :id="panelId" role="tabpanel" :aria-label="group.name" class="mt-10 min-h-60 md:min-h-30">
      <Transition
        mode="out-in"
        enter-active-class="transition duration-250 ease-out motion-reduce:transition-none"
        enter-from-class="translate-y-2 opacity-0"
        leave-active-class="transition duration-150 ease-in motion-reduce:transition-none"
        leave-to-class="opacity-0"
      >
        <ul :key="group.name" class="flex flex-wrap justify-center gap-3 xl:gap-4">
          <template v-for="(technology, index) in group.technologies" :key="technology.name">
            <li
              v-if="index > 0 && index % ITEMS_PER_ROW === 0"
              class="-mt-3 hidden xl:-mt-4 basis-full md:block"
              aria-hidden="true"
            />
            <li>
              <TechnologyBadge :technology="technology" />
            </li>
          </template>
        </ul>
      </Transition>
    </div>
  </section>
</template>
