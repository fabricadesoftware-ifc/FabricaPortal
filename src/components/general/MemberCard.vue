<script setup lang="ts">
interface Props {
  image?: string
  name: string
  description?: string
  occupation: {
    description: string
  }
  linkMember: {
    id: string | number
  }
}

defineProps<Props>()

const shortenName = (name: string): string => {
  if (name) {
    if (name.length > 25) {
      const nameParts: Array<string> = name.trim().split(' ')
      if (!nameParts) {
        return name
      }

      const firstName = nameParts[0]!
      let shortenedName = firstName

      if (nameParts.length > 2) {
        for (let i = 1; i < nameParts.length - 1; i++) {
          const middleName = nameParts[i]
          if (middleName) {
            if (middleName.length > 2) {
              shortenedName += ` ${middleName[0]}.`
            }
            shortenedName += ` ${nameParts[nameParts.length - 1]!}`
            return shortenedName
          }
        }
      }
    }
  }
  return name
}

const urlMember = (id: string | number) => `/member/${id}`
</script>

<template>
  <RouterLink :to="urlMember(linkMember.id)" class="w-full group">
    <div
      class="bg-[var(--bg-white)] sm:max-h-50 p-[10px] mb-[30px] grid grid-cols-[1fr_5fr] items-center overflow-hidden rounded-[10px] scale-[97%] transition-[transform,var(--effect)] hover:scale-100 hover:cursor-pointer lg:max-w-full max-lg:h-auto max-lg:flex max-lg:flex-col"
    >
      <div class="w-full h-full overflow-hidden flex justify-center items-center rounded-[10px]">
        <img
          :src="image"
          alt="Member Image"
          class="w-full h-full object-cover object-center rounded-[10px] brightness-[0.6] transition-[filter,var(--effect)] group-hover:brightness-100"
        />
      </div>

      <div
        class="p-[10px] w-full h-full flex flex-col justify-center items-start overflow-hidden max-lg:items-center max-lg:text-center"
      >
        <h5 class="text-[var(--members)] uppercase m-0 leading-tight">
          {{ occupation.description }}
        </h5>

        <h3 class="text-ellipsis overflow-hidden whitespace-nowrap w-full">
          {{ shortenName(name) }}
        </h3>

        <p class="mt-2 overflow-hidden text-ellipsis line-clamp-3 box-orient-vertical">
          {{ description }}
        </p>
      </div>
    </div>
  </RouterLink>
</template>
