<script setup lang="ts">
interface IMember {
  id: string | number
  name: string
}
interface ILang {
  desc: string
}
interface IAccess {
  link: string
  type: string
  icon: string
  desc: string
}
interface IField {
  title: string
  desc: string
}

interface Props {
  description?: string
  logo?: string
  title?: string
  status?: string
  type?: string
  version?: string
  updated?: string
  published?: string
  partnerCompanies?: string[]
  languagesUsed?: ILang[]
  scholarshipMembers?: IMember[]
  coordMembers?: IMember[]
  customFields?: IField[]
  accessDetails?: IAccess[]
  tags?: string[]
}

withDefaults(defineProps<Props>(), {
  languagesUsed: () => [],
  scholarshipMembers: () => [],
  coordMembers: () => [],
  accessDetails: () => [],
  partnerCompanies: () => [],
})
</script>

<template>
  <section class="mb-6">
    <header class="relative flex items-center gap-2 mb-4 group cursor-pointer">
      <div
        class="absolute -top-4 left-0 w-4 h-4 rounded-full bg-[var(--secondary-color)] transition-transform group-hover:scale-110"
      ></div>
      <div
        class="absolute top-0 left-80 w-3 h-3 rounded-full bg-[var(--tertiary-color)] hidden sm:block"
      ></div>
      <div class="absolute top-4 -left-4 w-2 h-2 rounded-full bg-[var(--quaternary-color)]"></div>

      <h3 class="text-xl font-bold text-gray-800">Sobre esse projeto</h3>
    </header>
    <p class="text-justify text-gray-700 leading-relaxed mt-1">{{ description }}</p>
  </section>
</template>
