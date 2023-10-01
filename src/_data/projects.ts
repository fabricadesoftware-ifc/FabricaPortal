interface IProjects {
  id: string
  logo: string
  title: string
  status: string
  type: string
  published?: string
  updated?: string
  description: string
  schMember?: string[]
  partners?: string[]
  scholarshipMembers?: string[]
  partnerCompanies?: string[]
  images?: string[]
  projNews?: string[]
  projPublication?: string[]
  langsProject?: string[]
  projMembers?: string[]
  coordMembers?: string[]
  version?: string
  tags?: string[]
  access?: IAccess[]
  newField?: IField[]
  newDetail?: IDetails[]
}
interface ILangs {
  icon?: string
  type?: string
  desc?: string
  id: string
}

interface IDetails {
  title: string
  desc: string[]
}

interface IField {
  title?: string
  desc?: string
  markdown?: string
}

interface IAccess {
  icon?: string
  type?: string
  desc: string
  link: string
}

const langs: Array<ILangs> = [
  {
    id: '1',
    icon: 'java',
    desc: 'java',
    type: 'logo'
  },
  {
    id: '2',
    icon: 'python',
    desc: 'python',
    type: 'logo'
  },
  {
    id: '3',
    desc: 'javascript',
    icon: 'javascript',
    type: 'logo'
  },
  {
    id: '7',
    desc: 'c++',
    icon: 'c-plus-plus',
    type: 'logo'
  },
  {
    id: '8',
    desc: 'php',
    icon: 'php',
    type: 'logo'
  },
  {
    id: '9',
    desc: 'typescript',
    icon: 'typescript',
    type: 'logo'
  },
  {
    id: '11',
    desc: 'tailwind',
    icon: 'tailwind-css',
    type: 'logo'
  },
  {
    id: '12',
    desc: 'vue',
    icon: 'vuejs',
    type: 'logo'
  },
  {
    id: '13',
    desc: 'django',
    icon: 'django',
    type: 'logo'
  },
  {
    id: '14',
    desc: 'react',
    icon: 'react',
    type: 'logo'
  },
  {
    id: '15',
    icon: 'docker',
    desc: 'docker',
    type: 'logo'
  },
  {
    id: '16',
    desc: 'css',
    icon: 'css3',
    type: 'logo'
  }
]

const projects: Array<IProjects> = [
  {
    id: '1',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/logo-eventos.jpg',
    title: 'Gestão de Eventos',
    status: 'finalizado',
    type: 'Extensão',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description:
      'O projeto tem por objetivo desenvolver um sistema web para a gestão de eventos do Instituto Federal Catarinense. O sistema deve permitir a criação e gestão de eventos, a submissão de artigos científicos para um evento específico, a autenticação dos usuários por meio da rede CAFe...'
  },
  {
    id: '2',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/setting/%C3%ADndice_il3boLh.png',
    title: 'NODES',
    status: 'finalizado',
    type: 'Extensão',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description: 'Portal para Núcleo Operacionalização de Desenvolvimento de Sistemas'
  },
  {
    id: '3',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/index2.png',
    title: 'NR2',
    status: 'finalizado',
    type: 'Extensão',
    partnerCompanies: ['NR2'],
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description: 'Portal para o Núcleo de Redes Sem Fio e Redes Avançadas.'
  },
  {
    id: '4',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/WhatsApp_Image_2018-09-17_at_13.14.24.jpeg',
    title: 'Goofy Educa',
    status: 'finalizado',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    type: 'Extensão',
    description: 'O projeto tem o foco de gerar auxílio à aprendizagem para o ensino fundamental.'
  },
  {
    id: '5',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/WhatsApp_Image_2018-09-17_at_13.14.21.jpeg',
    title: 'Readequação do Site Institucional',
    status: 'finalizado',
    type: 'Extensão',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description:
      'O presente projeto tem por objetivo dar continuidade às adequações na página do Instituto Federal Catarinense (IFC), de acordo com as normas previstas, atendendo assim, as exigências da Controladoria Geral da União (CGU).'
  },
  {
    id: '6',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/issem.png',
    title: 'ISSEM',
    status: 'finalizado',
    type: 'Extensão',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description: 'O Instituto de Seguridade dos Servidores Municipais de Jaraguá do Sul (ISSEM)...'
  },
  {
    id: '7',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/setting/%C3%ADndice.png',
    title: 'Hackathon de Informática como princípio de aprendizagem ativa',
    status: 'em andamento',
    projNews: ['1', '2'],
    images: [
      'https://noticias.memoria.araquari.ifc.edu.br/wp-content/uploads/sites/11/2022/07/IMG_0638.jpeg',
      'https://araquari.ifc.edu.br/wp-content/blogs.dir/4/files/sites/4/2023/02/IMG_0624.jpeg',
      'data:image/jpeg;base64,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'
    ],
    projMembers: ['8', '6', '1', '2', '5', '9'],
    type: 'Extensão',
    description:
      'O termo Hackathon é composto da união entre duas palavras da língua inglesa, hack (programar) e marathon (maratona), a sua ﬁnalidade é fomentar a criatividade e trabalho em equipe na busca de uma solução para um problema proposta (geralmente um problema real da comunidade), por meio da utilização de tecnologia, em nosso caso a tecnologia da informação. Assim, o projeto visa apresentar para os alunos um ou mais problemas a serem desenvolvidos em equipe, desta forma os discentes podem utilizar os conhecimentos adquiridos e em aquisição durante o curso para propor uma solução envolvendo a criação de um software e o desenvolvimento do respectivo protótipo (prova de conceito). Desta forma o Hackathon visa contribuir para a formação do discente tanto no aspecto pessoal como técnico, possibilitando que vivencie o trabalho em equipe, pratique a criatividade de forma sistematizada, controlada (métodos para condução da jornada) e acompanhada/suportada pelos docentes das disciplinas. O Hackathon contará com a mentoria dos professores do curso da área de informática, apresentando as principais ferramentas a serem utilizadas durante a competição, bem como efetuando o acompanhamento do desenvolvimento dos respectivos protótipos. As empresas parceiras serão responsáveis por auxiliar na avaliação ﬁnal das propostas apresentadas.'
  },
  {
    id: '8',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/WhatsApp_Image_2018-09-17_at_13.14.27.jpeg',
    title: 'Controle de Acesso',
    status: 'finalizado',
    type: 'Extensão',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description:
      'Projeto coordenado por Eduardo da Silva, com os participantes Gueretz, Sebrão e João, tendo o intuito de fornecer controle de acesso utilizando a plataforma Arduino.'
  },
  {
    id: '9',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/setting/%C3%ADndice_il3boLh.png',
    title: 'NAIV',
    status: 'finalizado',
    type: 'ensino',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description:
      'Núcleo de Aprendizagem Interativo virtual, é um sistema onde usuários terão acesso a conteúdo disponibilizados por professores, com intuito de estudar para concurso público.'
  },
  {
    id: '10',
    logo: '/img/logos/projeto/fabrica news icon.svg',
    title: 'FabricaNews',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    status: 'Em desenvolvimento',
    type: 'Extensão',
    projMembers: ['1', '2', '17', '15', '14', '13', '12', '18'],
    langsProject: ['12', '13'],
    description: 'Portal de Notícias da Fábrica de Software.'
  },
  {
    id: '11',
    logo: '/img/logos/projeto/fabrica needs icon.svg',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    title: 'FabricaNeeds',
    status: 'Em desenvolvimento',
    langsProject: ['13', '2'],
    type: 'Extensão',
    description:
      'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  },
  {
    id: '12',
    logo: '/img/logos/projeto/fabrica faceID icon.svg',
    title: 'FabricaFaceID',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    status: 'Em andamento',
    type: 'Extensão',
    description:
      'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  },
  {
    id: '13',
    logo: '/img/logos/projeto/fabrica auth v3 icon.svg',
    title: 'FabricaAuth',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    status: 'Em andamento',
    projMembers: ['18'],
    type: 'Extensão',
    langsProject: ['9'],
    description:
      'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  },
  {
    id: '14',
    logo: '/img/logos/projeto/fabrica build icon.svg',
    title: 'FabricaBuild',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    projMembers: ['18'],
    status: 'Em andamento',
    type: 'Extensão',
    description:
      'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  },
  {
    id: '15',
    logo: '/img/logos/projeto/fabrica locker v2 icon.svg',
    title: 'FabricaLocker',
    projMembers: ['18'],
    status: 'Em andamento',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    type: 'Extensão',
    description:
      'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  },
  {
    id: '18',
    logo: '/img/logos/projeto/fabrica manager icon.svg',
    title: 'FabricaManager',
    status: 'Em andamento',
    type: 'Extensão',
    langsProject: ['13', '2'],
    projMembers: ['12'],
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description:
      'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  },
  {
    id: '17',
    logo: '/img/logos/projeto/fabrica notes icon.svg',
    title: 'FabricaNotes',
    status: 'Em andamento',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    projMembers: ['18'],
    type: 'Extensão',
    description:
      'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  },
  {
    id: '16',
    logo: '/img/logos/projeto/site fabrica icon.svg',
    images: [
      '/img/Projects/FabricaPortal/image1.png',
      '/img/Projects/FabricaPortal/image2.png',
      '/img/Projects/FabricaPortal/image3.png',
      '/img/Projects/FabricaPortal/image4.png',
      '/img/Projects/FabricaPortal/image5.png'
    ],
    title: 'Portal da Fábrica de Software ',
    status: 'Em andamento',
    projMembers: ['1', '2', '16'],
    coordMembers: ['1', '2'],
    scholarshipMembers: ['16'],
    langsProject: ['12', '9', '16'],
    version: '1.0.0',
    tags: ['notícias', 'publicações', 'informações', 'projetos'],
    updated: '13 de ago. de 2023',
    published: '13 de set. de 2023',
    access: [
      {
        icon: 'github',
        type: 'logo',
        desc: 'Código',
        link: 'https://github.com/fabricadesoftware-ifc/FabricaPortal'
      }
    ],
    newField: [
      {
        title: 'Novidades',
        desc: '🌟 Filtros Inovadores: Para tornar suas interações ainda mais envolventes e personalizadas, implementamos uma seleção de filtros impressionantes! Seja para fotos, vídeos ou qualquer tipo de conteúdo visual, esses filtros adicionam uma pitada de criatividade e estilo, permitindo que você expresse sua individualidade de maneira única'
      }
    ],
    type: 'Extensão',
    description:
      'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  }
]

export { projects, type IProjects, langs, type ILangs }
