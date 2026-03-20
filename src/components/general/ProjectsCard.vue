<script setup lang="ts">
interface Member {
  id: number | string
  name: string
  image: { file: string }
}

interface Props {
  description?: string
  title?: string
  logo?: string
  type?: string
  linkProject: { id: number | string }
  images?: { file: string }
  members?: Member[]
  status?: string
}

withDefaults(defineProps<Props>(), {
  members: () => [],
  status: 'Em Desenvolvimento',
})

const statusColors: Record<string, string> = {
  Concluído: '#4CAF50',
  'Em Desenvolvimento': '#2196F3',
  'Não Iniciado': '#9E9E9E',
}

const getStatusColor = (status: string) => {
  return statusColors[status] || statusColors['Em Desenvolvimento']
}

const urlProject = (id: number | string) => `/project/${id}`
</script>

<template>
  <div
    class="group relative w-full min-w-87.5 h-[450px] mb-8 bg-[var(--bg-white)] rounded-[var(--border-rd)] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] max-[768px]:mb-6 max-[768px]:h-auto max-[480px]:mb-4"
  >
    <RouterLink :to="urlProject(linkProject.id)">
      <div
        class="relative w-full h-[200px] overflow-hidden max-[768px]:h-[180px] max-[480px]:h-[160px]"
      >
        <div
          class="absolute top-4 right-4 px-4 py-2 rounded-[20px] text-white text-[0.9rem] font-medium z-10 shadow-[0_2px_4px_rgba(0,0,0,0.2)] max-[480px]:text-[0.8rem] max-[480px]:px-3 max-[480px]:py-1.5"
          :style="{ backgroundColor: getStatusColor(status) }"
        >
          {{ status }}
        </div>

        <img
          :src="logo || '/logos/fabrica.svg'"
          class="absolute top-4 left-4 w-[60px] h-[60px] z-10 rounded-xl bg-white p-2 shadow-[0_2px_4px_rgba(0,0,0,0.2)] transition-transform duration-300 group-hover:scale-110 max-[480px]:w-[50px] max-[480px]:h-[50px]"
          alt="Logo do projeto"
        />

        <div class="w-full h-full relative">
          <img
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            :src="images?.file"
            :alt="title"
          />
          <div
            class="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          ></div>
        </div>
      </div>

      <div
        class="p-6 flex flex-col gap-4 h-[calc(450px-200px)] max-[768px]:p-[1.2rem] max-[768px]:h-auto max-[480px]:p-4"
      >
        <h3
          class="text-[var(--text-color)] text-[1.4rem] leading-[1.4] overflow-hidden line-clamp-2 max-[768px]:text-[1.2rem]"
        >
          {{ title }}
        </h3>

        <p
          class="text-[var(--text-color-light)] text-base leading-[1.6] overflow-hidden line-clamp-2"
        >
          {{ description }}
        </p>

        <footer
          class="flex justify-between items-end mt-auto pt-4 max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-4"
        >
          <div class="flex flex-col" v-if="members.length > 0">
            <span class="text-[0.9rem] text-[var(--text-color-light)] mb-2">Equipe do Projeto</span>
            <div class="flex items-center">
              <div
                v-for="member in members.slice(0, 3)"
                :key="member.id"
                class="w-8 h-8 rounded-full overflow-hidden -mr-2 border-2 border-white transition-transform duration-300 hover:-translate-y-0.5 hover:z-10"
                :title="member.name"
              >
                <img
                  :src="member.image.file"
                  :alt="member.name"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                v-if="members.length > 3"
                class="w-8 h-8 rounded-full bg-[var(--bg-gray)] text-[var(--text-color)] flex items-center justify-center text-[0.8rem] font-medium border-2 border-white"
                :title="`+${members.length - 3} membros`"
              >
                +{{ members.length - 3 }}
              </div>
            </div>
          </div>

          <div
            class="px-4 py-2 bg-[var(--bg-gray)] rounded-[20px] text-[0.9rem] text-[var(--text-color)] font-medium max-[480px]:w-full max-[480px]:text-center"
            v-if="type"
          >
            {{ type }}
          </div>
        </footer>
      </div>
    </RouterLink>
  </div>
</template>
