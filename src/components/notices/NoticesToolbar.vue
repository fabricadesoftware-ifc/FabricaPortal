<script setup lang="ts">
import { computed } from 'vue'
import FilterChip from '@/components/global/FilterChip.vue'
import SearchInput from '@/components/global/SearchInput.vue'
import { noticeCategories } from '@/constants/notices'
import type { Notice, NoticeCategory } from '@/types/notice'

const props = defineProps<{ notices: Notice[] }>()

const search = defineModel<string>('search', { required: true })
const category = defineModel<NoticeCategory | null>('category', { required: true })

/** Categories without notices are not offered. */
const categories = computed(() =>
  (Object.keys(noticeCategories) as NoticeCategory[]).filter((name) =>
    props.notices.some((notice) => notice.category === name),
  ),
)
</script>

<template>
  <div class="flex min-w-0 flex-col gap-3 lg:flex-row lg:items-center">
    <SearchInput v-model="search" label="Buscar notícia" class="lg:w-72" />

    <div
      role="group"
      aria-label="Categorias"
      class="flex flex-wrap gap-1 lg:shrink-0 lg:flex-nowrap"
    >
      <FilterChip
        label="Todas"
        color="#fff"
        variant="plain"
        :is-active="category === null"
        @click="category = null"
      />
      <FilterChip
        v-for="name in categories"
        :key="name"
        :label="name"
        :color="noticeCategories[name].color"
        variant="plain"
        :is-active="category === name"
        @click="category = name"
      />
    </div>
  </div>
</template>
