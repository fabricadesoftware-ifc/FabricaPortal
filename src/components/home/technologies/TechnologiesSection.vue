<script setup lang="ts">
import { computed, ref, useId } from 'vue'
import BaseTabs from '@/components/global/BaseTabs.vue'
import SectionHeading from '@/components/global/SectionHeading.vue'
import TechnologyBadge from '@/components/global/TechnologyBadge.vue'
import { technologyGroups } from '@/constants/technologies'

const names = technologyGroups.map(({ name }) => name)

const active = ref(0)
const group = computed(() => technologyGroups[active.value]!)
const panelId = useId()

const MIN_ROW = 4

/** Two rows on large screens. Nine technologies make three rows of three on medium ones. */
const largeRow = computed(() => Math.max(MIN_ROW, Math.ceil(group.value.technologies.length / 2)))
const mediumRow = computed(() => (largeRow.value > MIN_ROW ? 3 : MIN_ROW))

const startsRow = (index: number, size: number) => index > 0 && index % size === 0
</script>

<template>
  <section class="section">
    <header class="flex flex-col items-center text-center">
      <SectionHeading eyebrow="Tecnologias">
        <span class="text-brand-orange">Stacks</span> que usamos nos projetos
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
    <div
      :id="panelId"
      role="tabpanel"
      :aria-label="group.name"
      class="mt-10 min-h-60 md:min-h-52.5 lg:min-h-33 xl:min-h-41"
    >
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
              v-if="startsRow(index, largeRow) || startsRow(index, mediumRow)"
              class="-mt-3 hidden basis-full xl:-mt-4"
              :class="{
                'md:max-lg:block': startsRow(index, mediumRow),
                'lg:block': startsRow(index, largeRow),
              }"
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
