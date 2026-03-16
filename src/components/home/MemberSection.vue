<script setup lang="ts">
import { onMounted } from 'vue'
import { MemberCard, ButtonAll } from '@/components'
import { useMembersStore } from '@/stores/members'

const membersStore = useMembersStore()

onMounted(async () => {
  await membersStore.getMembers()
})
</script>

<template>
  <section id="members" class="p-10 md:px-50 bg-[#d3d3d3]/30">
    <h2 class="text-3xl font-bold mb-10">Membros</h2>

    <div class="flex flex-col items-center gap-12">
      <div
        class="overflow-x-auto pb-4 gap-4 w-full flex md:grid sm:flex-wrap sm:justify-center sm:gap-8"
      >
        <MemberCard
          v-for="member in membersStore.state.members.slice(0, 6)"
          :key="member.id"
          :image="member.image?.file"
          :name="member.name"
          :description="member.biography"
          :linkMember="member"
          :occupation="{ description: `${member.status} - ${member.type}` }"
          class="shrink-0 min-w-60 sm:min-w-0"
        />
      </div>

      <div class="mt-4">
        <ButtonAll link="/members" text="Ver todos os membros" />
      </div>
    </div>
  </section>
</template>
