<script setup lang="ts">
interface Props {
  link: string
  text: string
}

defineProps<Props>()
</script>

<template>
  <RouterLink :to="link" class="inline-block no-underline">
    <button
      class="bg-[var(--btn)] border-[3px] border-[var(--btn)] cursor-pointer py-[5px] px-[7px] flex justify-center items-center rounded-[5px] font-semibold text-[var(--white)] transition-all ease-in-out duration-[var(--effect-btn)] hover:bg-[var(--btn-hover)] hover:border-[var(--btn-hover)]"
    >
      {{ text }}
    </button>
  </RouterLink>
</template>
