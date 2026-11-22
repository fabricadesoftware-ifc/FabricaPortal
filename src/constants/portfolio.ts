import aguasCover from '@/assets/projects/aguas.webp'
import fabrokuCover from '@/assets/projects/fabroku.webp'
import piCover from '@/assets/projects/pi.webp'
import portalCover from '@/assets/projects/portal.webp'
import type {
  PortfolioProject,
  ProjectCategory,
  ProjectStatus,
  TechnologyFilter,
} from '@/types/project'

export const projectCategories: Record<ProjectCategory, { color: string }> = {
  Gestão: { color: 'var(--color-brand-orange)' },
  Educação: { color: 'var(--color-brand-teal)' },
  Saúde: { color: '#ff5a52' },
  Infraestrutura: { color: '#8080ff' },
}

export const projectStatuses: Record<ProjectStatus, { label: string; color: string }> = {
  active: { label: 'Ativo', color: '#3fb950' },
  completed: { label: 'Concluído', color: '#a9adb7' },
  planned: { label: 'Não iniciado', color: '#e0a32e' },
}

/**
 * In the order of the carousel. The API overrides the name, the status and the image, and adds
 * technologies. The whole list is shown when it is unavailable.
 * A cover set here replaces an image that shows names or photos of students (ECA).
 */
export const portfolioProjects: PortfolioProject[] = [
  {
    id: 31,
    name: 'Painel',
    category: 'Gestão',
    status: 'completed',
    description: 'Inscrições, avaliações e notas do Painel de Integração.',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'TypeScript', 'Python', 'Vuetify'],
    href: 'https://painel.fabricadesoftware.ifc.edu.br',
  },
  {
    id: 32,
    name: 'Histologia',
    category: 'Educação',
    status: 'completed',
    description: 'Atlas digital aberto para estudar histologia e patologia.',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'JavaScript', 'Python', 'Docker'],
    href: 'https://histologia.fabricadesoftware.ifc.edu.br',
  },
  {
    id: 41,
    name: 'Catraca',
    category: 'Gestão',
    status: 'active',
    description: 'Gestão dos acessos ao campus, com regras e registros.',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'TypeScript', 'Python', 'Vuetify', 'MinIO'],
    href: 'https://catraca.fabricadesoftware.ifc.edu.br',
  },
  {
    id: 38,
    name: 'GPTER',
    category: 'Saúde',
    status: 'active',
    description: 'Dinamômetro que mede a força da mão em tempo real.',
    technologies: ['Arduino', 'Vuetify', 'Django', 'Python', 'SQLite'],
    href: 'https://github.com/fabricadesoftware-ifc/fabricaGPTER_frontEnd',
  },
  {
    name: 'Fabroku',
    category: 'Infraestrutura',
    status: 'active',
    description: 'Plataforma que publica e hospeda os projetos da Fábrica.',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'TypeScript', 'Python', 'Vuetify', 'Redis'],
    href: 'https://fabroku.fabricadesoftware.ifc.edu.br',
    cover: fabrokuCover,
  },
  {
    id: 33,
    name: 'Door',
    category: 'Infraestrutura',
    status: 'completed',
    description: 'Controle de portas com cartões RFID e painel web.',
    technologies: ['ESP32', 'Vue.js', 'Node.js', 'Express', 'PostgreSQL', 'JavaScript', 'C++'],
    href: 'https://door.fabricadesoftware.ifc.edu.br',
  },
  {
    id: 40,
    name: 'Node',
    category: 'Educação',
    status: 'planned',
    description: 'Artigos dos servidores do IFC conectados em um grafo.',
    technologies: ['Vue.js', 'Django', 'SQLite', 'TypeScript', 'Python'],
    href: 'https://github.com/fabricadesoftware-ifc/fabricaNode_FrontEnd',
  },
  {
    id: 35,
    name: 'Águas',
    category: 'Infraestrutura',
    status: 'completed',
    description: 'Níveis dos rios de Joinville monitorados em tempo real.',
    technologies: ['Python', 'Streamlit', 'Docker', 'Pandas'],
    href: 'https://aguas.fabricadesoftware.ifc.edu.br',
    cover: aguasCover,
  },
  {
    id: 36,
    name: 'PI',
    category: 'Gestão',
    status: 'active',
    description: 'Dados da execução orçamentária do IFC abertos a todos.',
    technologies: ['Python', 'Streamlit', 'Pandas'],
    href: 'https://github.com/fabricadesoftware-ifc/fabricaPI',
    cover: piCover,
  },
  {
    id: 39,
    name: 'Portal',
    category: 'Gestão',
    status: 'completed',
    description: 'O site que apresenta a Fábrica, seus projetos e sua gente.',
    technologies: ['Vue.js', 'Django', 'PostgreSQL', 'TypeScript', 'Python', 'Redis'],
    href: 'https://github.com/fabricadesoftware-ifc/FabricaPortal',
    cover: portalCover,
  },
]

/** Opens in the center of the carousel. */
export const FEATURED_PROJECT = 'Fabroku'

/** Ids of the projects of the API that the site does not show: Manager. */
export const hiddenProjectIds = [42]

/** Technologies that can be filtered. Each one is used by some project. */
export const technologyFilters: TechnologyFilter[] = [
  { label: 'Linguagens', technologies: ['Python', 'TypeScript', 'JavaScript', 'C++'] },
  {
    label: 'Frameworks',
    technologies: ['Vue.js', 'Vuetify', 'Django', 'Node.js', 'Express', 'Streamlit'],
  },
  { label: 'Banco de dados', technologies: ['PostgreSQL', 'SQLite', 'Redis'] },
  { label: 'Ferramentas', technologies: ['Docker', 'MinIO', 'Arduino', 'ESP32'] },
]
