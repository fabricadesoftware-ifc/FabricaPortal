<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  currentPage: number
  pages: number
}

const props = defineProps<Props>()

const emits = defineEmits<{
  (e: 'change-page', page: number): void
}>()

const pagesRef = ref<HTMLElement[] | null>(null)

function scrollToIndex(index: number) {
  if (pagesRef.value && pagesRef.value[index]) {
    pagesRef.value[index].scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    })
  }
}

function previousPage() {
  if (props.currentPage === 1) return
  scrollToIndex(props.currentPage - 2)
  emits('change-page', props.currentPage - 1)
}

function nextPage() {
  if (props.currentPage === props.pages) return
  scrollToIndex(props.currentPage)
  emits('change-page', props.currentPage + 1)
}

function changePage(page: number) {
  scrollToIndex(page - 1)
  emits('change-page', page)
}
</script>

<template>
  <section
    v-if="pages > 1"
    class="w-full flex items-center justify-center gap-5 bg-transparent my-5"
  >
    <button
      class="group cursor-pointer m-0 w-10 h-10 rounded-[var(--border)] border-2 border-[#aaa] transition-all duration-200 hover:border-[var(--dark-shadow)] flex items-center justify-center"
      @click="previousPage"
    >
      <span
        class="material-symbols-outlined text-[#aaa] transition-all duration-200 group-hover:text-[var(--dark-shadow)]"
      >
        arrow_left_alt
      </span>
    </button>

    <div
      class="flex gap-[10px] items-center overflow-x-auto overflow-y-hidden max-w-[220px] h-[50px] scrollbar-hide"
    >
      <div
        v-for="page in pages"
        :key="page"
        ref="pagesRef"
        @click="changePage(page)"
        :class="[
          'cursor-pointer w-10 h-10 min-w-[40px] min-h-[40px] flex items-center justify-center border-2 font-bold transition-all duration-500 rounded-[var(--border)] hover:-translate-y-[5px]',
          currentPage === page
            ? 'bg-[var(--primary-color)] text-[var(--white)] border-[var(--primary-color)]'
            : 'bg-transparent text-[var(--primary-color)] border-[var(--primary-color)]',
        ]"
      >
        {{ page }}
      </div>
    </div>

    <button
      class="group cursor-pointer m-0 w-10 h-10 rounded-[var(--border)] border-2 border-[#aaa] transition-all duration-200 hover:border-[var(--dark-shadow)] flex items-center justify-center"
      @click="nextPage"
    >
      <span
        class="material-symbols-outlined text-[#aaa] transition-all duration-200 group-hover:text-[var(--dark-shadow)]"
      >
        arrow_right_alt
      </span>
    </button>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
