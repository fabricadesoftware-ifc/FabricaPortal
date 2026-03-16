<script setup lang="ts">
interface Props {
  description?: string
  title?: string
  logo?: string
  status?: string
  type?: string
  linkProject: { id: string | number }
}

defineProps<Props>()

const statusColors: Record<string, string> = {
  'Em Desenvolvimento': '#2196F3',
  Concluído: '#4CAF50',
  Cancelado: '#F44336',
  'Em Andamento': '#FF9800',
  'Não Iniciado': '#9E9E9E',
}

const getStatusColor = (status: string) => {
  return statusColors[status] || statusColors['Em Desenvolvimento']
}

const getUrlProject = (id: string | number) => `/project/${id}`
</script>

<template>
  <RouterLink :to="getUrlProject(linkProject.id)" class="no-underline w-full block group">
    <div
      class="w-full my-2.5 h-auto gap-4 flex flex-row p-[15px] items-center transition-transform duration-300 ease-in-out group-hover:-translate-y-1"
    >
      <img
        src="/logos/fabrica.svg"
        alt="Logo do Projeto"
        class="w-20 h-20 flex-shrink-0 object-contain"
      />

      <div class="w-full min-w-0">
        <header class="flex justify-between items-start gap-2">
          <h4 class="font-medium text-lg text-[var(--text-color)] truncate">
            {{ title }}
          </h4>

          <div class="hidden min-[475px]:block flex-shrink-0">
            <span
              class="text-xs font-semibold px-2 py-1 rounded uppercase"
              :style="{ backgroundColor: getStatusColor(status) }"
            >
              {{ status }}
            </span>
          </div>
        </header>

        <p class="text-sm text-gray-500 mt-1 line-clamp-2 overflow-hidden text-ellipsis">
          {{ description }}
        </p>
      </div>
    </div>
  </RouterLink>
</template>
