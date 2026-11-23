import type { ProjectDetails } from '@/types/project'

export const GITHUB_ORGANIZATION_URL = 'https://github.com/fabricadesoftware-ifc'

const pair = (backEnd: string, frontEnd: string) => [
  { name: backEnd, label: 'Back-end' },
  { name: frontEnd, label: 'Front-end' },
]

/** By the slug of the project. */
export const projectDetails: Record<string, ProjectDetails> = {
  painel: {
    repositories: pair('fabricaPainel_backEnd', 'fabricaPainel_frontEnd'),
    features: [
      { icon: 'users', title: 'Equipes', description: 'Quem apresenta cada trabalho do evento.' },
      {
        icon: 'list',
        title: 'Avaliações',
        description: 'Resumos avaliados, com as notas reunidas.',
      },
      { icon: 'file', title: 'Resumos', description: 'Os trabalhos de cada edição para consulta.' },
    ],
  },
  fabroku: {
    repositories: pair('Fabroku_BackEnd', 'Fabroku_FrontEnd'),
    links: [
      { label: 'Documentação', href: 'https://docs.fabroku.fabricadesoftware.ifc.edu.br/' },
      { label: 'Status', href: 'https://status.fabricadesoftware.ifc.edu.br/status/fabrica' },
    ],
    features: [
      { icon: 'cloud', title: 'Deploy', description: 'Publicação das aplicações dos projetos.' },
      {
        icon: 'dashboard',
        title: 'Serviços',
        description: 'Bancos de dados, como Postgres e Redis.',
      },
      { icon: 'list', title: 'Logs', description: 'O que acontece em cada aplicação.' },
    ],
  },
  catraca: {
    repositories: pair('fabriCatraca_backEnd', 'fabriCatraca_frontEnd'),
    features: [
      {
        icon: 'users',
        title: 'Pessoas',
        description: 'Cadastro de usuários, grupos e visitantes.',
      },
      {
        icon: 'lock',
        title: 'Regras de acesso',
        description: 'Quem pode entrar, e em quais áreas.',
      },
      { icon: 'list', title: 'Registros', description: 'Histórico dos acessos ao campus.' },
    ],
  },
  gpter: {
    repositories: pair('fabricaGPTER_backEnd', 'fabricaGPTER_frontEnd'),
    features: [
      { icon: 'chart', title: 'Medição', description: 'A força da mão exibida em tempo real.' },
      { icon: 'file', title: 'Histórico', description: 'Os exames de cada paciente guardados.' },
      { icon: 'lock', title: 'Acesso', description: 'Controle de acesso de médicos e técnicos.' },
    ],
  },
  histologia: {
    repositories: pair('fabricaHistologia_backend', 'fabricaHistologia_frontend'),
    features: [
      { icon: 'search', title: 'Análises', description: 'Histórico das análises microbiológicas.' },
      {
        icon: 'file',
        title: 'Material didático',
        description: 'Apoio às aulas técnicas e de graduação.',
      },
      {
        icon: 'users',
        title: 'Acervo aberto',
        description: 'Referência para a comunidade externa.',
      },
    ],
  },
  door: {
    repositories: pair('FabricaDoor_Backend', 'FabricaDoor_Frontend'),
    features: [
      { icon: 'door', title: 'Portas', description: 'Abertura com cartões RFID e ESP32.' },
      { icon: 'lock', title: 'Permissões', description: 'Usuários e horários de acesso.' },
      { icon: 'list', title: 'Registros', description: 'Histórico das entradas.' },
    ],
  },
  node: {
    repositories: pair('fabricaNode-BackEnd', 'fabricaNode_FrontEnd'),
    features: [
      { icon: 'branch', title: 'Grafo', description: 'Artigos ligados por suas relações.' },
      { icon: 'list', title: 'Categorias', description: 'Organização por temas e palavras-chave.' },
      {
        icon: 'search',
        title: 'Descoberta',
        description: 'Navegação visual entre as publicações.',
      },
    ],
  },
  aguas: {
    repositories: [{ name: 'AguasDeJoinville', label: 'Repositório' }],
    features: [
      { icon: 'droplets', title: 'Níveis dos rios', description: 'Acompanhamento em tempo real.' },
      { icon: 'chart', title: 'Histórico', description: 'Gráficos, médias e máximas.' },
      { icon: 'dashboard', title: 'ETAs', description: 'Operação das estações Piraí e Cubatão.' },
    ],
  },
  pi: {
    repositories: [{ name: 'fabricaPI', label: 'Repositório' }],
    features: [
      { icon: 'chart', title: 'Indicadores', description: 'Despesas empenhadas e liquidadas.' },
      { icon: 'search', title: 'Buscas', description: 'Por mês, por ano e por natureza.' },
      { icon: 'dashboard', title: 'Campi', description: 'A execução orçamentária de cada campus.' },
    ],
  },
  hackifc: {
    repositories: pair('fabricaHackathon_backEnd', 'fabricaHackathon_frontEnd'),
    features: [],
  },
  portal: {
    repositories: pair('FabricaPortal_BackEnd', 'FabricaPortal'),
    features: [
      { icon: 'dashboard', title: 'Projetos', description: 'O que a Fábrica constrói.' },
      { icon: 'users', title: 'Membros', description: 'Quem faz parte do laboratório.' },
      { icon: 'file', title: 'Notícias', description: 'Avisos e resultados.' },
    ],
  },
}
