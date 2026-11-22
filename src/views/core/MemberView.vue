<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { definePage } from 'vue-router/experimental'
import MemberPage from '@/components/member/MemberPage.vue'
import { useMembers } from '@/composables/useMembers'
import { useNotFound } from '@/composables/useNotFound'
import { usePageTitle } from '@/composables/usePageTitle'
import { useProjects } from '@/composables/useProjects'
import { getNextItems } from '@/utils/getNextItems'
import { slugify } from '@/utils/slugify'

definePage({ name: 'member', path: '/members/:slug' })

const MAX_OTHERS = 3

const route = useRoute('member')

const { members, isLoading } = useMembers()
const { projects, isLoading: areProjectsLoading } = useProjects()

const index = computed(() =>
  members.value.findIndex(({ name }) => slugify(name) === route.params.slug),
)
const member = computed(() => members.value[index.value])
const memberProjects = computed(() => {
  const id = member.value?.id
  return id === undefined ? [] : projects.value.filter(({ memberIds }) => memberIds?.includes(id))
})
const others = computed(() => getNextItems(members.value, index.value, MAX_OTHERS))

usePageTitle(() => member.value?.name)
useNotFound(() => !isLoading.value && !member.value)
</script>

<template>
  <MemberPage
    v-if="member && !areProjectsLoading"
    :key="member.name"
    :member="member"
    :members="members"
    :projects="memberProjects"
    :others="others"
  />
  <!-- Keeps the footer from jumping while the member loads. -->
  <main v-else class="min-h-svh" />
</template>
