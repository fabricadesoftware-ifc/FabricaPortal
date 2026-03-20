<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { DetailsProfile, ProjectsComp } from '@/components'
import { useMembersStore } from '@/stores/members'
import { useProjectsStore } from '@/stores/projects'
import { useLoadingStore } from '@/stores/loading'

const route = useRoute()
const membersStore = useMembersStore()
const projectsStore = useProjectsStore()
const loadingStore = useLoadingStore()

const memberId = route.params.id as string

onMounted(async () => {
  loadingStore.startLoading()
  await membersStore.getMemberById(memberId)
  await projectsStore.filterProjectsByMemberId(memberId)
  loadingStore.stopLoading()
})
</script>

<template>
  <main
    class="w-full flex flex-col items-center py-[var(--pn-main)] px-4 sm:px-8 md:px-24 lg:px-48 xl:px-[19em]"
  >
    <header class="mb-4 h-fit rounded-xl">
      <img
        class="w-43.75 h-43.75 md:w-50 md:h-50 xl:w-58.75 xl:h-56.25 block mx-auto object-cover rounded-lg shadow-md"
        :src="membersStore.state.selectedMember?.image?.file"
        :alt="membersStore.state.selectedMember?.name"
      />

      <div class="flex justify-center gap-5 mt-5">
        <a
          v-if="membersStore.state.selectedMember?.linkedin"
          :href="membersStore.state.selectedMember?.linkedin"
          class="transition-all duration-300 hover:scale-110 flex cursor-pointer"
        >
          <img src="/technologies/linkedin.svg" alt="LinkedIn" class="w-10 object-cover h-auto" />
        </a>
        <a
          v-if="membersStore.state.selectedMember?.github"
          :href="membersStore.state.selectedMember?.github"
          class="transition-all duration-300 hover:scale-110 flex cursor-pointer"
        >
          <img src="/technologies/github.svg" alt="" class="w-10 object-cover h-auto" />
        </a>
      </div>
    </header>

    <section class="w-full flex flex-col gap-8">
      <DetailsProfile
        :name="membersStore.state.selectedMember?.name"
        :key="membersStore.state.selectedMember?.id"
        :occupation="`${membersStore.state.selectedMember?.status} - ${membersStore.state.selectedMember?.type}`"
        :description="membersStore.state.selectedMember?.biography"
      />

      <div v-if="projectsStore.state.filteredProjects.length > 0" class="flex flex-col gap-4">
        <h3 class="text-xl font-bold border-b-2 border-[var(--primary-color)] w-fit pb-1">
          Projetos Vinculados
        </h3>
        <ProjectsComp />
      </div>
    </section>
  </main>
</template>
