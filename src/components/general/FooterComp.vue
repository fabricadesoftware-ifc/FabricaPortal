<script setup lang="ts">
interface ILink {
  link?: string
  desc?: string
  to?: string
}

interface IFooter {
  title: string
  accessDetails: ILink[]
}

const footer: IFooter[] = [
  {
    title: 'LINKS RÁPIDOS',
    accessDetails: [
      { link: 'Notícias', to: '/all-news' },
      { link: 'Projetos', to: '/projects' },
      { link: 'Membros', to: '/members' },
    ],
  },
  {
    title: 'Redes Sociais',
    accessDetails: [
      { link: 'fa-github', to: 'https://github.com/fabricadesoftware-ifc', desc: '' },
      { link: 'fa-instagram', to: 'https://instagram.com/fabricadesoftware.ifc/', desc: '' },
      { link: 'fa-twitter', to: 'https://x.com/FabSoftwareIFC', desc: '' },
      {
        link: 'fa-linkedin',
        to: 'https://br.linkedin.com/company/nodes-fabrica-de-software',
        desc: '',
      },
    ],
  },
  {
    title: 'CONTATO',
    accessDetails: [
      { desc: 'BR-280 - Colégio Agrícola, Araquari - SC, 89245-000' },
      { desc: 'fabricadesoftware.araquari@ifc.edu.br' },
      { desc: '(47) 3803-7200' },
    ],
  },
]
</script>

<template>
  <footer class="w-full bg-[var(--bg-black)] py-8 px-6 lg:px-36 flex flex-col gap-8 items-center">
    <div class="w-full lg:flex grid gap-10 lg:justify-between text-center lg:text-left">
      <div v-for="item in footer" :key="item.title" class="flex flex-col gap-4">
        <h4 class="uppercase font-bold text-[var(--primary-color)] tracking-wider">
          {{ item.title }}
        </h4>

        <ul
          :class="[
            'list-none flex flex-col gap-2',
            item.title === 'Redes Sociais' ? 'flex-row justify-center lg:justify-start gap-4' : '',
          ]"
        >
          <li v-for="(detail, idx) in item.accessDetails" :key="idx">
            <template v-if="detail.link && detail.desc !== ''">
              <a :href="detail.to" class="text-white hover:underline transition-all">
                {{ detail.link }}
              </a>
            </template>

            <template v-else-if="detail.link && detail.desc === ''">
              <a :href="detail.to" target="_blank" class="hover:opacity-80 transition-opacity">
                <i :class="['fa-brands text-2xl text-white', detail.link]"></i>
              </a>
            </template>

            <span v-if="detail.desc" class="text-white block max-w-62.5 mx-auto lg:mx-0">
              {{ detail.desc }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="w-full pt-6 flex justify-center items-center">
      <span class="text-white text-sm opacity-70">
        © {{ new Date().getFullYear() }} Todos os direitos reservados
      </span>
    </div>
  </footer>
</template>
