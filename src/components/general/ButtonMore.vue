<script setup lang="ts">
interface Props {
  link: string
  text: string
}

defineProps<Props>()
</script>

<template>
  <RouterLink
    :to="link"
    class="group inline-flex items-center text-[var(--btn)] no-underline cursor-pointer"
  >
    <span
      class="material-symbols-outlined mr-3.75 transition-all duration-300 group-hover:translate-x-2.5"
    >
      arrow_right_alt
    </span>

    <span class="font-bold uppercase">
      {{ text }}
    </span>
  </RouterLink>
</template>
