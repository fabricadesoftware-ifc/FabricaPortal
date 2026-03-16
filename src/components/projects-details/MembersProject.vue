<script setup lang="ts">
import { MemberCard } from '@/components'

interface IMember {
  id: string | number
  name: string
  biography?: string
  type?: string
  status?: string
  image: {
    file: string
  }
}

defineProps<{
  members: IMember[]
}>()
</script>

<template>
  <section class="mt-8 flex flex-col items-center lg:items-start w-full">
    <h3
      class="text-xl font-bold text-[var(--text-color)] mb-6 uppercase tracking-wide border-b-2 border-[var(--primary-color)] w-fit"
    >
      Membros
    </h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      <MemberCard
        v-for="member in members"
        :key="member.id"
        :image="member.image?.file"
        :name="member.name"
        :linkMember="member"
        :occupation="{ description: `${member.type} - ${member.status}` }"
      />
    </div>
  </section>
</template>
