<script setup lang="ts">
interface Props {
  title?: string
  data?: string
  user?: string
  background?: string
  linkProject: number
  isNews?: boolean
}

defineProps<Props>()

const urlProject = (id: number) => `/news/${id}`
</script>

<template>
  <RouterLink :to="urlProject(linkProject)" class="w-full min-w-[300px] mb-[15px] group">
    <div
      :class="[
        isNews ? 'border-b-[length:var(--border)] border-solid border-[var(--news)]' : '',
        'rounded-xl relative min-h-[300px] max-h-[500px] overflow-hidden bg-center bg-cover bg-[var(--bg-white)] border-b-[var(--border)] border-b-[var(--news)] transition-all w-full',
      ]"
      :style="{ backgroundImage: `url(${background})` }"
    >
      <div class="w-full h-[60vh] bg-[var(--light-shadow)]">
        <div class="p-4">
          <span class="text-[var(--white)]">{{ data }}</span>
        </div>

        <div
          class="absolute bottom-0 w-full p-4 z-10 transition-transform duration-300 translate-y-[calc(70px+1rem)] group-hover:translate-y-0 max-[1300px]:translate-y-0"
        >
          <h3 class="text-[var(--white)] mb-[10px] leading-tight font-bold">
            {{ title }}
          </h3>

          <p
            class="text-[var(--white)] h-[70px] overflow-hidden text-ellipsis line-clamp-3 max-[1300px]:hidden"
          >
            Clique aqui para ler a notícia na íntegra.
          </p>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
