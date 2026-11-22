import doorCover from '@/assets/projects/door.webp'
import gpterCover from '@/assets/projects/gpter.webp'
import histologiaCover from '@/assets/projects/histologia.webp'
import painelCover from '@/assets/projects/painel.webp'
import type { FeaturedProject } from '@/types/project'

/** One project per category, shown on the home page. */
export const featuredProjects: FeaturedProject[] = [
  {
    id: 31,
    category: 'Gestão',
    name: 'Painel',
    title: 'O Painel de Integração, da inscrição à nota final',
    description:
      'Equipes, resumos, avaliações e notas reunidos para organizar o evento anual de iniciação científica do ensino médio, com os trabalhos de cada edição disponíveis para consulta.',
    technologies: ['Vue', 'Django REST', 'Python'],
    cover: painelCover,
  },
  {
    id: 32,
    category: 'Educação',
    name: 'Histologia',
    title: 'Um atlas de histologia aberto para estudar',
    description:
      'Criado com a Medicina Veterinária do IFC, reúne análises microbiológicas feitas por alunos e docentes: material didático para as aulas e referência aberta à comunidade.',
    technologies: ['Vue', 'Django', 'Python'],
    cover: histologiaCover,
  },
  {
    id: 38,
    category: 'Saúde',
    name: 'GPTER',
    title: 'A força da mão medida em tempo real',
    description:
      'Um dinamômetro com Arduino envia os dados por Bluetooth para um aplicativo, que guarda o histórico de exames de cada paciente para médicos e técnicos.',
    technologies: ['Arduino', 'Vuetify', 'Django'],
    cover: gpterCover,
  },
  {
    id: 33,
    category: 'Infraestrutura',
    name: 'Door',
    title: 'Portas que abrem só para quem pode entrar',
    description:
      'Cartões RFID, ESP32 e um painel web se unem no controle de ambientes restritos, com gestão de usuários, permissões, horários e registros de entrada.',
    technologies: ['ESP32', 'Vue', 'Node'],
    cover: doorCover,
  },
]
