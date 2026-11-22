<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { definePage } from 'vue-router/experimental'
import NoticePage from '@/components/notices/NoticePage.vue'
import { useNotFound } from '@/composables/useNotFound'
import { useNotices } from '@/composables/useNotices'
import { usePageTitle } from '@/composables/usePageTitle'
import { getNextItems } from '@/utils/getNextItems'

definePage({ name: 'notice', path: '/notices/:id' })

const MAX_OTHERS = 3

const route = useRoute('notice')

const { notices, isLoading } = useNotices()

const index = computed(() => notices.value.findIndex(({ id }) => String(id) === route.params.id))
const notice = computed(() => notices.value[index.value])
const others = computed(() =>
  getNextItems(notices.value, index.value, Math.min(MAX_OTHERS, notices.value.length - 1)),
)

usePageTitle(() => notice.value?.title)
useNotFound(() => !isLoading.value && !notice.value)
</script>

<template>
  <NoticePage v-if="notice" :key="notice.id" :notice="notice" :others="others" />
  <!-- Keeps the footer from jumping while the notice loads. -->
  <main v-else class="min-h-svh" />
</template>
