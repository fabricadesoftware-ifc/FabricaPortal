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
  projectNews?: string[]
  projectPublication?: string[]
  languagesUsed?: string[]
  projectMembers?: string[]
  coordMembers?: string[]
  version?: string
  tags?: string[]
  accessDetails?: IaccessDetails[]
  customFields?: IField[]
}
interface ILangs {
  icon?: string
  type?: string
  desc?: string
  id: string
}

interface IField {
  title?: string
  desc?: string
  markdown?: string
}

interface IaccessDetails {
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
  },
  {
    id: '17',
    desc: 'streamlit',
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
    projectNews: ['1', '2'],
    images: [
      'https://noticias.memoria.araquari.ifc.edu.br/wp-content/uploads/sites/11/2022/07/IMG_0638.jpeg',
      'https://araquari.ifc.edu.br/wp-content/blogs.dir/4/files/sites/4/2023/02/IMG_0624.jpeg',
    ],
    projectMembers: ['8', '6', '1', '2', '5', '9'],
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
    title: 'Fábrica News',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    status: 'Em desenvolvimento',
    type: 'Extensão',
    projectMembers: ['1', '2', '17', '15', '14', '13', '12', '18'],
    languagesUsed: ['12', '13'],
    description: 'Portal de Notícias da Fábrica de Software.'
  },
  {
    id: '11',
    logo: '/img/logos/projeto/fabrica needs icon.svg',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    title: 'Fábrica Needs',
    status: 'Em desenvolvimento',
    languagesUsed: ['13', '2', '11'],
    type: 'Extensão',
    description:
      'O projeto Fábrica Needs tem por objetivo gerenciar as necessidades de consumo da cozinha da Fábrica de Software. O projeto será desenvolvido em Python, Django REST e Vue3.'
  },
  {
    id: '12',
    logo: '/img/logos/projeto/fabrica faceID icon.svg',
    title: 'Fábrica FaceID',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    status: 'Em andamento',
    type: 'Extensão',
    description:
      'Visando elevar o nível de segurança para acesso na Fábrica de Software, este projeto tem por objetivo implementar um sistema de reconhecimento facial para controle de acesso na sala B6, que é a atual sala da Fábrica. O projeto será desenvolvido em Python, Django REST e Vue3.'
  },
  {
    id: '13',
    logo: '/img/logos/projeto/fabrica auth v3 icon.svg',
    title: 'Fábrica Auth',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    status: 'Em andamento',
    projectMembers: ['18'],
    type: 'Extensão',
    languagesUsed: ['9'],
    description:
      'O projeto Auth tem por objetivo unificar o acesso dos usuários no ecossistema da Fábrica de Software. Este projeto permitirá melhorar a eficiência no controle de acesso de usuários nas diversas soluções desenvolvidas pela Fábrica de Software.'
  },
  // {
  //   id: '14',
  //   logo: '/img/logos/projeto/fabrica build icon.svg',
  //   title: 'Fábrica Build',
  //   images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
  //   projectMembers: ['18'],
  //   status: 'Em andamento',
  //   type: 'Extensão',
  //   description:
  //     'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  // },
  {
    id: '15',
    logo: '/img/logos/projeto/fabrica locker v2 icon.svg',
    title: 'Fábrica Locker',
    projectMembers: ['18'],
    status: 'Em andamento',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    type: 'Extensão',
    description:
      'O Fábrica Locker é uma aplicação desenvolvida em C para gerenciar o acesso à sala da Fábrica de Software. O projeto tem por objetivo elevar o nível de segurança para acesso na Fábrica, não dependendo mais do uso da chave física.'
  },
  {
    id: '16',
    logo: '/img/logos/projeto/fabrica manager icon.svg',
    title: 'Fábrica Manager',
    status: 'Em andamento',
    type: 'Extensão',
    languagesUsed: ['13', '2'],
    projectMembers: ['12'],
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description:
      'Atualmente fazem parte da Fábrica de Software aproximadamente 30 alunos, entre bolsistas e voluntários dos cursos técnico e superior do IFC Campus Araquari. O projeto Fábrica Manager tem por objetivo gerenciar as atividades dos membros da Fábrica de Software, bem como a gestão dos projetos desenvolvidos. O projeto será desenvolvido em Python, Django REST e Vue3.'
  },
  {
    id: '17',
    logo: '/img/logos/projeto/fabrica notes icon.svg',
    title: 'Fábrica Notes',
    status: 'Em andamento',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    projectMembers: ['18'],
    type: 'Extensão',
    description:
      'Após autenticação no ecossistema de soluções desenvolvidas pela Fábrica de Software, o usuário terá acesso ao Notes, que são algumas notas deixadas pelos demais membros da Fábrica de Software, com o intuito de compartilhar informações relevantes para o dia a dia da Fábrica. O projeto será desenvolvido em Python, Django REST e Vue3.'
  },
  {
    id: '18',
    logo: '/img/logos/projeto/site fabrica icon.svg',
    images: [
      '/img/Projects/FabricaPortal/PortalFabrica.png',
      '/img/Projects/FabricaPortal/image2.png',
      '/img/Projects/FabricaPortal/image3.png',
      '/img/Projects/FabricaPortal/image4.png',
      '/img/Projects/FabricaPortal/image5.png'
    ],
    title: 'Fábrica Portal',
    status: 'Em andamento',
    projectMembers: ['1', '2', '16', '23', '46'],
    coordMembers: ['1', '2'],
    scholarshipMembers: ['16'],
    languagesUsed: ['12', '9', '16'],
    version: '1.0.0',
    tags: ['notícias', 'publicações', 'informações', 'projetos'],
    updated: '13 de ago. de 2023',
    published: '13 de set. de 2023',
    accessDetails: [
      {
        icon: 'github',
        type: 'logo',
        desc: 'Código',
        link: 'https://github.com/fabricadesoftware-ifc/FabricaPortal'
      }
    ],
    customFields: [
      {
        title: 'Novidades',
        desc: '🌟 Filtros Inovadores: Para tornar suas interações ainda mais envolventes e personalizadas, implementamos uma seleção de filtros impressionantes! Seja para fotos, vídeos ou qualquer tipo de conteúdo visual, esses filtros adicionam uma pitada de criatividade e estilo, permitindo que você expresse sua individualidade de maneira única'
      }
    ],
    type: 'Extensão',
    description:
      'O Portal da Fábrica de Software é uma aplicação web que tem por objetivo centralizar as informações sobre os projetos desenvolvidos pela Fábrica de Software, bem como as publicações realizadas pelos membros da Fábrica. Também tem o propósito de apresentar os membros que fazem parte da Fábrica de Software, assim como as notícias relacionadas ao dia-a-dia d Fábrica. O projeto foi desenvolvido em Python, Django REST e Vue3.'
  },
  {
    id: '19',
    logo: '/img/logos/projeto/site fabrica icon.svg',
    images: ['/img/Projects/FabricaPortal/PortalFabrica.png'],
    title: 'Fábrica Empenhos',
    status: 'Em andamento',
    projectMembers: ['1', '24'],
    coordMembers: ['1'],
    scholarshipMembers: ['24'],
    languagesUsed: ['2', '17'],
    version: '1.0.0',
    tags: ['informações', 'projetos'],
    updated: '20 de mai. de 2024',
    published: '20 de mai. de 2024',
    accessDetails: [
      {
        icon: 'github',
        type: 'logo',
        desc: 'Código',
        link: 'https://github.com/fabricadesoftware-ifc/'
      }
    ],
    customFields: [
      {
        title: 'Novidades',
        desc: ''
      }
    ],
    type: 'Extensão',
    description:
      'A transparência na Gestão Pública é um princípio fundamental. Embora tenhamos mecanismos de consulta disponibilizados pelo Governo Federal, este projeto visa demonstrar para a comunidade local de que forma o Campus está empenhando o recurso disponível e também acompanhar as despesas já liquidadas pela gestão do Campus. Este projeto foi desenvolvido com Python e streamlit.'
  },
  {
    id: '20',
    logo: '/img/logos/projeto/site fabrica icon.svg',
    images: ['/img/Projects/FabricaPortal/PortalFabrica.png'],
    title: 'Fábrica Class',
    status: 'Em andamento',
    projectMembers: ['1', '46', '21', '35', '24', '48', '34', '41' ],
    coordMembers: ['1'],
    scholarshipMembers: ['46', '21', '35', '24', '48', '34', '41'],
    languagesUsed: ['3', '11', '12', '13', '16'],
    version: '1.0.0',
    tags: ['informações', 'projetos'],
    updated: '20 de mai. de 2024',
    published: '20 de mai. de 2024',
    accessDetails: [
      {
        icon: 'github',
        type: 'logo',
        desc: 'Código',
        link: 'https://github.com/fabricadesoftware-ifc/'
      }
    ],
    customFields: [
      {
        title: 'Novidades',
        desc: ''
      }
    ],
    type: 'Extensão',
    description:
      'O processo de ensino-aprendizagem precisa constantemente ser aprimorado. Visando isso, a Fábrica de Software desenvolveu este projeto para auxiliar os docentes na obtenção de feedback sobre as suas aulas, no que respeita aos recursos utilizados, ao ambiente, cumprimento do tempo, didática, entre outros critérios que o docente deseja que os discentes avaliem. Também permitirá a visualização de gráficos que serão construídos baseando-se no feedback fornecido. Foi utilizado, para o desenvolvimento deste projeto, Python, Django REST e Vue3.'
  },
  {
    id: '21',
    logo: '/img/logos/projeto/site fabrica icon.svg',
    images: ['/img/Projects/FabricaPortal/PortalFabrica.png'],
    title: 'Fábrica PI',
    status: 'Em andamento',
    projectMembers: ['1', '24'],
    coordMembers: ['1'],
    scholarshipMembers: ['24'],
    languagesUsed: ['2', '17'],
    version: '1.0.0',
    tags: ['informações', 'projetos'],
    updated: '20 de mai. de 2024',
    published: '20 de mai. de 2024',
    accessDetails: [
      {
        icon: 'github',
        type: 'logo',
        desc: 'Código',
        link: 'https://github.com/fabricadesoftware-ifc/'
      }
    ],
    customFields: [
      {
        title: 'Novidades',
        desc: ''
      }
    ],
    type: 'Extensão',
    description:
      'A Pesquisa Institucional tem a função de alimentar indicadores da instituição. Alguns destes indicadores baseiam-se nos status das matrículas realizadas nos cursos dos campi do IFC. Porém este trabalho é um tanto demorado, pois demanda análise de diversos arquivos, tratamento de dados, construção de gráficos, demorando dias, sendo um funcionário responsável por cada campus. Esta solução desenvolvida pela Fábrica de Software unirá todos os arquivos e interpretará os dados, gerando os indicadores necessários para serem lançados na plataforma oficial do IFC. Esta aplicação foi desenvolvida usando Python e streamlit.'
  },
  {
    id: '22',
    logo: '/img/logos/projeto/site fabrica icon.svg',
    images: ['/img/Projects/FabricaPortal/PortalFabrica.png'],
    title: 'Fábrica NewJob',
    status: 'Em andamento',
    projectMembers: ['2', '32', '40'],
    coordMembers: ['2'],
    scholarshipMembers: ['32', '40'],
    languagesUsed: ['12', '9', '16'],
    version: '1.0.0',
    tags: ['informações', 'projetos'],
    updated: '20 de mai. de 2024',
    published: '20 de mai. de 2024',
    accessDetails: [
      {
        icon: 'github',
        type: 'logo',
        desc: 'Código',
        link: 'https://github.com/fabricadesoftware-ifc/'
      }
    ],
    customFields: [
      {
        title: 'Novidades',
        desc: ''
      }
    ],
    type: 'Extensão',
    description:
      'O projeto NewJob tem por objetivo auxiliar os discentes do IFC Campus Araquari a encontrarem vagas de emprego. A aplicação será desenvolvida em Python, Django REST e Vue3.'
  },
  {
    id: '23',
    logo: '/img/logos/projeto/site fabrica icon.svg',
    images: ['/img/Projects/FabricaPortal/PortalFabrica.png'],
    title: 'Fabroku',
    status: 'Em andamento',
    projectMembers: ['2', '49', '21'],
    coordMembers: ['2'],
    scholarshipMembers: ['49', '21'],
    languagesUsed: ['15'],
    version: '1.0.0',
    tags: ['informações', 'projetos'],
    updated: '20 de mai. de 2024',
    published: '20 de mai. de 2024',
    accessDetails: [
      {
        icon: 'github',
        type: 'logo',
        desc: 'Código',
        link: 'https://github.com/fabricadesoftware-ifc/'
      }
    ],
    customFields: [
      {
        title: 'Novidades',
        desc: ''
      }
    ],
    type: 'Extensão',
    description:
      'Este projeto foi desenvolvido em Python sob a plataforma doku. Será crucial para automatizar o processo de deploy das aplicações desenvolvidas na Fábrica de Software.'
  },
  {
    id: '24',
    logo: '/img/logos/projeto/site fabrica icon.svg',
    images: ['/img/Projects/FabricaPortal/PortalFabrica.png'],
    title: 'Fábrica Hackathon',
    status: 'Em andamento',
    projectMembers: ['1', '2', '50', '46', '24', '39', '8', '22', '21', '23'],
    coordMembers: ['1', '2', '50', '22', '8'],
    scholarshipMembers: [],
    languagesUsed: ['3', '11', '12', '13', '16'],
    version: '1.0.0',
    tags: ['informações', 'projetos'],
    updated: '20 de mai. de 2024',
    published: '20 de mai. de 2024',
    accessDetails: [
      {
        icon: 'github',
        type: 'logo',
        desc: 'Código',
        link: 'https://github.com/fabricadesoftware-ifc/'
      }
    ],
    customFields: [
      {
        title: 'Novidades',
        desc: ''
      }
    ],
    type: 'Extensão',
    description:
      'A aplicação para gerenciamento dos Hackathons realizados no campus do IFC Araquari, com o apoio da Fábrica de Software, permitirá que sejam mantidos históricos de todos os participantes, das equipes, dos temas e dos trabalhos finais apresentados. A própria avaliação dos trabalhos apresentados será realizada por meio desta aplicação, que também manterá histórico dos avaliadores presentes nos Hackathons e as empresas patrocinadoras das edições deste evento. Esta aplicação foi desenvolvida usando Python, Django REST e Vue3.'
  },
  {
    id: '25',
    logo: '/img/logos/projeto/site fabrica icon.svg',
    images: ['/img/Projects/FabricaPortal/PortalFabrica.png'],
    title: 'Fábrica Iron',
    status: 'Não iniciado',
    projectMembers: ['1', '46', '2', '8', '50', '47', '51', '42'],
    coordMembers: ['1', '2', '8', '50'],
    scholarshipMembers: ['46', '47', '51', '42'],
    languagesUsed: [],
    version: '1.0.0',
    tags: ['informações', 'projetos'],
    updated: '20 de mai. de 2024',
    published: '20 de mai. de 2024',
    accessDetails: [
      {
        icon: 'github',
        type: 'logo',
        desc: 'Código',
        link: 'https://github.com/fabricadesoftware-ifc/'
      }
    ],
    customFields: [
      {
        title: 'Novidades',
        desc: ''
      }
    ],
    type: 'Extensão',
    description:
      'Este projeto está sendo desenvolvido em parceria com a iniciativa privada, para que possa otimizar a utilização dos blocos de aço utilizados na construção de moldes no setor metal-mecânico. O projeto está sendo desenvolvido com Python, Django REST e Vue3.'
  },
  {
    id: '26',
    logo: '/img/logos/projeto/site fabrica icon.svg',
    images: ['/img/Projects/FabricaPortal/PortalFabrica.png'],
    title: 'Fábrica Node',
    status: 'Em andamento',
    projectMembers: ['1', '2', '35'],
    coordMembers: ['1', '2', '35'],
    scholarshipMembers: [],
    languagesUsed: ['3', '11', '12', '13', '16'],
    version: '1.0.0',
    tags: ['informações', 'projetos'],
    updated: '20 de mai. de 2024',
    published: '20 de mai. de 2024',
    accessDetails: [
      {
        icon: 'github',
        type: 'logo',
        desc: 'Código',
        link: 'https://github.com/fabricadesoftware-ifc/'
      }
    ],
    customFields: [
      {
        title: 'Novidades',
        desc: ''
      }
    ],
    type: 'Extensão',
    description:
      'Melhorar a transparência sobre as publicações realizadas pelos docentes, técnicos e discentes do IFC Campus Araquari é o objetivo desta aplicação. As representações construídas usando o conceito de grafos pretendem definir os nós como as keywords das publicações e as arestas dos nós, que são as relações entre os nós, são construídas baseando-se na publicação em que encontram-se os nós. Dessa forma é suposto facilitar a visualização das pesquisas relacionadas ao campus, assim como também identificar de que forma que as diferentes áreas do conhecimento se relacionam na nossa instituição. Esta aplicação será desenvolvida usando Python, Django REST e Vue3.'
  },
  {
    id: '27',
    logo: '/img/logos/projeto/site fabrica icon.svg',
    images: ['/img/Projects/FabricaPortal/PortalFabrica.png'],
    title: 'Fábrica Histologia',
    status: 'Em andamento',
    projectMembers: ['1', '2', '24', '42', '47'],
    coordMembers: ['1', '2'],
    scholarshipMembers: ['24', '42', '47'],
    languagesUsed: ['3', '11', '12', '13', '16'],
    version: '1.0.0',
    tags: ['informações', 'projetos'],
    updated: '20 de mai. de 2024',
    published: '20 de mai. de 2024',
    accessDetails: [
      {
        icon: 'github',
        type: 'logo',
        desc: 'Código',
        link: 'https://github.com/fabricadesoftware-ifc/'
      }
    ],
    customFields: [
      {
        title: 'Novidades',
        desc: ''
      }
    ],
    type: 'Extensão',
    description:
      'O Atlas de Histologia é uma aplicação desenvolvida em conjunto com a área de Medicina Veterinária do IFC. O objetivo deste projeto é manter histórico de análises microbiológicas realizadas pelos discentes e docentes do curso, servindo como material didático nas aulas dos cursos Técnico em Agropecuária e o Bacharelado em Medicina Veterinária. Também ficará disponível para a comunidade externa ao campus, servindo de referencia para acadêmicos que estejam realizando estudos na área.'
  },
  {
    id: '28',
    logo: '/img/logos/projeto/site fabrica icon.svg',
    images: ['/img/Projects/FabricaPortal/PortalFabrica.png'],
    title: 'Fábrica Painel',
    status: 'Em andamento',
    projectMembers: ['2', '24', '21'],
    coordMembers: [],
    scholarshipMembers: [],
    languagesUsed: ['3', '11', '12', '13', '16'],
    version: '1.0.0',
    tags: ['informações', 'projetos'],
    updated: '20 de mai. de 2024',
    published: '20 de mai. de 2024',
    accessDetails: [
      {
        icon: 'github',
        type: 'logo',
        desc: 'Código',
        link: 'https://github.com/fabricadesoftware-ifc/'
      }
    ],
    customFields: [
      {
        title: 'Novidades',
        desc: ''
      }
    ],
    type: 'Extensão',
    description:
      'Anualmente ocorre o evento chamado Painel de Integração no Campus de Araquari. Este evento, voltado para o ensino médio, busca fomentar a iniciação científica entre os discentes e também a integração entre as disciplinas dos cursos técnicos integrados. Esta aplicação gerenciará as equipes que apresentam os trabalhos, as submissões de resumo, avaliações dos resumos, notas dadas pelos avaliadores e também a disponibilização dos resumos anualmente submetidos para o Painel de Integração. Esta aplicação será desenvolvida usando Python, Django REST e Vue3.'
  },
  {
    id: '29',
    logo: '/img/logos/projeto/site fabrica icon.svg',
    images: ['/img/Projects/FabricaPortal/PortalFabrica.png'],
    title: 'Fábrica Markowitz',
    status: 'Em andamento',
    projectMembers: ['1', '24'],
    coordMembers: ['1'],
    scholarshipMembers: ['24'],
    languagesUsed: ['2', '17'],
    version: '1.0.0',
    tags: ['informações', 'projetos'],
    updated: '20 de mai. de 2024',
    published: '20 de mai. de 2024',
    accessDetails: [
      {
        icon: 'github',
        type: 'logo',
        desc: 'Código',
        link: 'https://github.com/fabricadesoftware-ifc/'
      }
    ],
    customFields: [
      {
        title: 'Novidades',
        desc: ''
      }
    ],
    type: 'Extensão',
    description:
      'A Teoria de Markowitz data de 1952 e até hoje influencia o mercado financeiro. Ela é utilizada para dar suporte na tomada de decisão sobre quais ativos a pessoa pretende adquirir para investimento na bolsa de valores. Por meio desta teoria é possível apresentar um nível de risco sobre o ativo baseado no seu histórico, sendo um fator de grande relevância para o investidor. A aplicação será desenvolvida usando Python e streamlit.'
  },

]

export { projects, type IProjects, langs, type ILangs }
