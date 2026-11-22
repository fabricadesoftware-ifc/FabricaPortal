<script setup lang="ts">
import { computed, useTemplateRef, watch } from 'vue'
import ArrowButton from '@/components/global/ArrowButton.vue'
import { useScrollRail } from '@/composables/useScrollRail'
import { memberRoles } from '@/constants/members'
import type { Member, MemberRole } from '@/types/member'
import { padNumber } from '@/utils/padNumber'
import MemberCard from './MemberCard.vue'

const props = defineProps<{
  members: Member[]
  /** Members found by the filters. The other ones stay on the rail, faded. */
  matches: Member[]
  /** People who are not on the list. */
  hiddenCount: number
}>()

const total = computed(() => props.members.length)

const rail = useTemplateRef('rail')
const { visible, isAtStart, isAtEnd, scroll, scrollTo } = useScrollRail(rail, '[data-member]')

const range = computed(() => {
  const { first, last } = visible.value

  // Only the people who are not shown may be on screen.
  if (first < 0) return `${padNumber(total.value)} de ${padNumber(total.value)}`
  if (first === last) return `${padNumber(first + 1)} de ${padNumber(total.value)}`
  return `${padNumber(first + 1)}–${padNumber(last + 1)} de ${padNumber(total.value)}`
})

const matchesText = computed(() => {
  const { length } = props.matches

  if (length === 0) return 'Nenhum membro encontrado'
  return length === 1 ? '1 membro encontrado' : `${length} membros encontrados`
})

/** "Docentes · 03", above the first member of each role. */
function groupLabel(index: number) {
  const { role } = props.members[index]!
  if (props.members[index - 1]?.role === role) return null

  const count = props.members.filter((member) => member.role === role).length
  return `${memberRoles[role].label} · ${padNumber(count)}`
}

const isVisible = (index: number) => index >= visible.value.first && index <= visible.value.last
const isMatch = (member: Member) => props.matches.includes(member)
const hasMatch = (role: MemberRole) => props.matches.some((member) => member.role === role)

// The filters may only find people who are off screen.
watch(
  () => props.matches,
  (matches) => {
    const indexes = matches.map((member) => props.members.indexOf(member))
    if (indexes.length && !indexes.some(isVisible)) scrollTo(indexes[0]!)
  },
)
</script>

<template>
  <section aria-labelledby="members-count">
    <header class="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
      <h2 id="members-count" class="type-h4">
        <span class="type-h2 mr-1 text-brand-orange">{{ total + hiddenCount }}</span> membros na
        Fábrica
      </h2>
      <p class="type-label text-muted">
        <span v-if="matches.length">{{ range }}</span>
        <span :class="{ 'sr-only': matches.length }" role="status">{{ matchesText }}</span>
      </p>
    </header>

    <!-- Focusable, so the arrow keys scroll it. -->
    <ul ref="rail" class="rail" tabindex="0" aria-label="Membros">
      <li
        v-for="(member, index) in members"
        :key="member.name"
        class="item"
        :class="{ 'is-faded': !isMatch(member) }"
        :style="{ '--color': memberRoles[member.role].color }"
        :inert="!isMatch(member)"
      >
        <p
          v-if="groupLabel(index)"
          class="type-label label"
          :class="{ 'is-faded': !hasMatch(member.role) }"
        >
          {{ groupLabel(index) }}
        </p>
        <div class="badge" data-member>
          <span class="rope" aria-hidden="true" />
          <MemberCard :member="member" :position="index + 1" class="flex-1" />
        </div>
      </li>
      <li
        v-if="hiddenCount"
        class="item"
        :class="{ 'is-faded': matches.length < total }"
        :aria-hidden="matches.length < total"
      >
        <div class="badge">
          <span class="rope" aria-hidden="true" />
          <p
            class="type-h4 grid min-h-60 flex-1 place-items-center rounded-2xl border border-dashed border-white/15 text-center text-subtle"
          >
            +{{ hiddenCount }} {{ hiddenCount === 1 ? 'pessoa' : 'pessoas' }}
          </p>
        </div>
      </li>
    </ul>

    <div
      class="mt-6 flex min-h-11 flex-wrap items-center justify-between gap-6 md:flex-nowrap"
      :class="{ invisible: isAtStart && isAtEnd }"
    >
      <div class="flex basis-full gap-1 md:gap-1.5" aria-hidden="true">
        <span
          v-for="(member, index) in members"
          :key="member.name"
          class="h-1 max-w-5 flex-1 rounded-full transition-opacity"
          :class="{ 'opacity-30': !isVisible(index) || !isMatch(member) }"
          :style="{ background: memberRoles[member.role].color }"
        />
      </div>
      <div class="ml-auto flex shrink-0 gap-2.5">
        <ArrowButton
          direction="previous"
          label="Membros anteriores"
          :is-disabled="isAtStart"
          @click="scroll(-1)"
        />
        <ArrowButton
          direction="next"
          label="Próximos membros"
          :is-disabled="isAtEnd"
          @click="scroll(1)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.rail {
  --gap: 2rem;
  /* Room for the labels above the line. */
  --line-top: calc(2.75rem * var(--type-scale, 1));

  position: relative;
  display: flex;
  /* Full width of the page: the line goes from side to side. */
  margin-inline: calc(var(--page-padding) * -1);
  padding: 0.5rem var(--page-padding) 2rem;
  overflow-x: auto;
  overflow-y: hidden;
  outline-offset: -2px;
}

/* As wide as the content of the page, and easy to drag. */
.rail::-webkit-scrollbar {
  height: 0.375rem;
}

.rail::-webkit-scrollbar-track {
  margin-inline: var(--page-padding);
  background: rgb(255 255 255 / 0.06);
  border-radius: 1rem;
}

.rail::-webkit-scrollbar-thumb {
  background: rgb(255 255 255 / 0.2);
  border-radius: 1rem;
}

.rail::-webkit-scrollbar-thumb:hover {
  background: rgb(255 255 255 / 0.35);
}

@supports not selector(::-webkit-scrollbar) {
  .rail {
    scrollbar-color: rgb(255 255 255 / 0.2) rgb(255 255 255 / 0.06);
    scrollbar-width: thin;
  }
}

.item {
  --color: rgb(255 255 255 / 0.3);

  position: relative;
  display: flex;
  flex: none;
  padding-top: var(--line-top);
  padding-right: var(--gap);
}

/* The line continues after a short list. */
.item:last-child {
  flex: 1 0 auto;
  padding-right: 0;
}

/* Line that holds the cards. */
.item::before {
  position: absolute;
  top: var(--line-top);
  right: 0;
  left: 0;
  height: 1px;
  background: var(--color);
  opacity: 0.55;
  transition: opacity 0.3s;
  content: '';
}

.item:first-child::before {
  left: calc(var(--page-padding) * -1);
}

.item:last-child::before {
  right: calc(var(--page-padding) * -1);
}

.label {
  position: absolute;
  top: 0.25rem;
  left: 0;
  color: var(--color);
  white-space: nowrap;
  transition: opacity 0.3s;
}

.badge {
  display: flex;
  flex-direction: column;
  width: calc(13.5rem * var(--type-scale, 1));
  /* Hangs from the line. */
  transform: rotate(var(--tilt, 0.8deg));
  transform-origin: top center;
  transition:
    transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1),
    opacity 0.3s;
}

.item:nth-child(even) .badge {
  --tilt: -0.8deg;
}

.badge:hover {
  --tilt: 0deg;
}

.rope {
  position: relative;
  align-self: center;
  width: 1px;
  height: 3.25rem;
  background: var(--color);
}

/* Where the rope is tied. */
.rope::before {
  position: absolute;
  top: 0;
  left: 50%;
  width: 0.625rem;
  height: 0.625rem;
  background: var(--color);
  border-radius: 50%;
  translate: -50% -50%;
  content: '';
}

/* Clip of the badge. */
.rope::after {
  position: absolute;
  bottom: -0.25rem;
  left: 50%;
  z-index: 1;
  width: 2.5rem;
  height: 0.5rem;
  background: var(--color);
  border-radius: 0.25rem;
  translate: -50% 0;
  content: '';
}

/* Not found by the filters. */
.label.is-faded,
.is-faded .badge {
  opacity: 0.25;
}

.is-faded::before {
  opacity: 0.2;
}

@media (prefers-reduced-motion: reduce) {
  .badge,
  .label,
  .item::before {
    transition: none;
  }
}
</style>
