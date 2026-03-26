<script setup lang="ts">
import { ref } from 'vue'

interface IImage {
  file: string
  description?: string
}

const props = defineProps<{
  images: IImage[]
}>()

const imageIndex = ref(0)

const plusSlides = (n: number) => {
  showSlides(imageIndex.value + n)
}

const currentSlide = (n: number) => {
  imageIndex.value = n
}

const showSlides = (n: number) => {
  const total = props.images.length
  if (total === 0) return
  imageIndex.value = (n + total) % total
}
</script>

<template>
  <section class="flex flex-col items-center mb-4 w-full">
    <div
      class="relative flex items-center max-w-[70vw] w-auto min-w-80 mx-auto overflow-hidden rounded-lg group"
    >
      <div
        v-for="(image, currentIndex) in images"
        :key="currentIndex"
        v-show="imageIndex === currentIndex"
        class="w-full animate-fade"
      >
        <div
          class="absolute top-2 left-2 z-10 text-[12px] text-white bg-black/30 backdrop-blur-sm px-2 py-1 rounded-md"
        >
          {{ currentIndex + 1 }} / {{ images.length }}
        </div>

        <img
          :src="image?.file"
          :class="[
            'w-full object-cover shadow-lg aspect-video md:aspect-auto',
            props.images.length > 1 ? 'h-125 md:h-150' : '',
          ]"
          alt="Slide Image"
        />
      </div>

      <button
        class="absolute left-0 z-5 p-2 cursor-pointer bg-black/20 hover:bg-black/40 text-white transition-all duration-300 rounded-r-md outline-none"
        @click="plusSlides(-1)"
      >
        <span class="material-symbols-outlined">chevron_left</span>
      </button>

      <button
        class="absolute right-0 z-5 p-2 cursor-pointer bg-black/20 hover:bg-black/40 text-white transition-all duration-300 rounded-l-md outline-none"
        @click="plusSlides(1)"
      >
        <span class="material-symbols-outlined">chevron_right</span>
      </button>
    </div>

    <div class="flex gap-2 mt-4">
      <span
        v-for="(_, currentIndex) in images"
        :key="currentIndex"
        @click="currentSlide(currentIndex)"
        :class="[
          'h-2.5 cursor-pointer rounded-full transition-all duration-500',
          imageIndex === currentIndex
            ? 'w-5 bg-[var(--secondary-color)]'
            : 'w-2.5 bg-gray-400 hover:bg-[var(--primary-color)]',
        ]"
      ></span>
    </div>
  </section>
</template>

<style scoped>
.animate-fade {
  animation: fade 0.6s ease-in-out;
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
</style>
