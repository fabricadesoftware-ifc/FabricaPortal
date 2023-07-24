interface IProjects {
  id: string
  logo: string
  title: string
  status: string
  type: string
  description: string
  images?: string[]
  langsProject?: string[]
  membersProject?: string[]
}
interface ILangs {
  icon?: string
  type?: string
  id?: string
}

const langs: Array<ILangs> = [
  {
    id: '1',
    icon: 'java',
    type: 'logo'
  },
  {
    id: '2',
    icon: 'python',
    type: 'logo'
  },
  {
    id: '3',
    icon: 'javascript',
    type: 'logo'
  },
  {
    id: '7',
    icon: 'c-plus-plus',
    type: 'logo'
  },
  {
    id: '8',
    icon: 'php',
    type: 'logo'
  },
  {
    id: '9',
    icon: 'typescript',
    type: 'logo'
  },
  {
    id: '10',
    icon: 'java',
    type: 'logo'
  },
  {
    id: '11',
    icon: 'tailwind-css',
    type: 'logo'
  },
  {
    id: '12',
    icon: 'vuejs',
    type: 'logo'
  },
  {
    id: '13',
    icon: 'django',
    type: 'logo'
  },
  {
    id: '14',
    icon: 'react',
    type: 'logo'
  },
  {
    id: '15',
    icon: 'docker',
    type: 'logo'
  },
  {
    id: '16',
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
    type: 'extensão',
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description:
      'O projeto tem por objetivo desenvolver um sistema web para a gestão de eventos do Instituto Federal Catarinense. O sistema deve permitir a criação e gestão de eventos, a submissão de artigos científicos para um evento específico, a autenticação dos usuários por meio da rede CAFe...'
  },
  {
    id: '2',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/setting/%C3%ADndice_il3boLh.png',
    title: 'NODES',
    status: 'finalizado',
    type: 'extensão',
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description: 'Portal para Núcleo Operacionalização de Desenvolvimento de Sistemas'
  },
  {
    id: '3',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/index2.png',
    title: 'NR2',
    status: 'finalizado',
    type: 'extensão',
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description: 'Portal para o Núcleo de Redes Sem Fio e Redes Avançadas.'
  },
  {
    id: '4',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/WhatsApp_Image_2018-09-17_at_13.14.24.jpeg',
    title: 'Goofy Educa',
    status: 'finalizado',
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    type: 'extensão',
    description: 'O projeto tem o foco de gerar auxílio à aprendizagem para o ensino fundamental.'
  },
  {
    id: '5',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/WhatsApp_Image_2018-09-17_at_13.14.21.jpeg',
    title: 'Readequação do Site Institucional',
    status: 'finalizado',
    type: 'extensão',
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description:
      'O presente projeto tem por objetivo dar continuidade às adequações na página do Instituto Federal Catarinense (IFC), de acordo com as normas previstas, atendendo assim, as exigências da Controladoria Geral da União (CGU).'
  },
  {
    id: '6',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/issem.png',
    title: 'ISSEM',
    status: 'finalizado',
    type: 'extensão',
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description: 'O Instituto de Seguridade dos Servidores Municipais de Jaraguá do Sul (ISSEM)...'
  },
  {
    id: '7',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/setting/%C3%ADndice.png',
    title: 'Hackathon de Informática como princípio de aprendizagem ativa',
    status: 'em andamento',
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    type: 'extensão',
    description:
      'O termo Hackathon é composto da união entre duas palavras da língua inglesa, hack (programar) e marathon (maratona), a sua ﬁnalidade é fomentar a criatividade e trabalho em equipe na busca de uma solução para um problema proposta (geralmente um problema real da comunidade), por meio da utilização de tecnologia, em nosso caso a tecnologia da informação. Assim, o projeto visa apresentar para os alunos um ou mais problemas a serem desenvolvidos em equipe, desta forma os discentes podem utilizar os conhecimentos adquiridos e em aquisição durante o curso para propor uma solução envolvendo a criação de um software e o desenvolvimento do respectivo protótipo (prova de conceito). Desta forma o Hackathon visa contribuir para a formação do discente tanto no aspecto pessoal como técnico, possibilitando que vivencie o trabalho em equipe, pratique a criatividade de forma sistematizada, controlada (métodos para condução da jornada) e acompanhada/suportada pelos docentes das disciplinas. O Hackathon contará com a mentoria dos professores do curso da área de informática, apresentando as principais ferramentas a serem utilizadas durante a competição, bem como efetuando o acompanhamento do desenvolvimento dos respectivos protótipos. As empresas parceiras serão responsáveis por auxiliar na avaliação ﬁnal das propostas apresentadas.'
  },
  {
    id: '8',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/WhatsApp_Image_2018-09-17_at_13.14.27.jpeg',
    title: 'Controle de Acesso',
    status: 'finalizado',
    type: 'extensão',
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description:
      'Projeto coordenado por Eduardo da Silva, com os participantes Gueretz, Sebrão e João, tendo o intuito de fornecer controle de acesso utilizando a plataforma Arduino.'
  },
  {
    id: '9',
    logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/setting/%C3%ADndice_il3boLh.png',
    title: 'NAIV',
    status: 'finalizado',
    type: 'ensino',
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description:
      'Núcleo de Aprendizagem Interativo virtual, é um sistema onde usuários terão acesso a conteúdo disponibilizados por professores, com intuito de estudar para concurso público.'
  },
  {
    id: '10',
    logo: '/src/assets/images/logos/projeto/fabrica news icon.svg',
    title: 'FabricaNews',
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    status: 'Em desenvolvimento',
    type: 'extensão',
    langsProject: [ '12', '13' ],
    
    description: 'Portal de Notícias da Fábrica de Software.'
  },
  {
    id: '11',
    logo: 'src/assets/images/logos/projeto/fabrica needs icon.svg',
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    title: 'FabricaNeeds',
    status: 'Em desenvolvimento',
    langsProject: [ '13', '2' ],
    type: 'extensão',
    description:
      'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  },
  {
    id: '12',
    logo: 'src/assets/images/logos/projeto/fabrica faceID icon.svg',
    title: 'FabricaFaceID',
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    status: 'Em desenvolvimento',
    type: 'extensão',
    description:
      'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  },
  {
    id: '13',
    logo: 'src/assets/images/logos/projeto/fabrica auth v3 icon.svg',
    title: 'FabricaAuth',
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    status: 'Em desenvolvimento',
    type: 'extensão',
    langsProject: [ '9' ],
    description:
      'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  },
  {
    id: '14',
    logo: 'src/assets/images/logos/projeto/fabrica build icon.svg',
    title: 'FabricaBuild',
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    status: 'Em desenvolvimento',
    type: 'extensão',
    description:
      'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  },
  {
    id: '15',
    logo: 'src/assets/images/logos/projeto/fabrica locker v2 icon.svg',
    title: 'FabricaLocker',
    status: 'Em desenvolvimento',
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    type: 'extensão',
    description:
      'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  },
  {
    id: '18',
    logo: 'src/assets/images/logos/projeto/fabrica manager icon.svg',
    title: 'FabricaManager',
    status: 'Em desenvolvimento',
    type: 'extensão',
    langsProject: [ '13', '2' ],
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    description:
      'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  },
  {
    id: '17',
    logo: 'src/assets/images/logos/projeto/fabrica notes icon.svg',
    title: 'FabricaNotes',
    status: 'Em desenvolvimento',
    images: ['src/assets/images/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    type: 'extensão',
    description:
      'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  },
  {
    id: '16',
    logo: 'src/assets/images/logos/projeto/site fabrica icon.svg',
    images: [
      'src/assets/images/Projects/FabricaPortal/image1.png',
      'src/assets/images/Projects/FabricaPortal/image2.png',
      'src/assets/images/Projects/FabricaPortal/image3.png'
  
    ],
    title: 'Portal da Fábrica de Software ',
    status: 'Em desenvolvimento',
    membersProject: ['1', '2', '16'],
    langsProject: [ '12', '9' ],
    type: 'extensão',
    description:
      'Lorem ipsum dolor sit amet. Ut doloribus rerum vel aspernatur recusandae id officia beatae aut galisum eius et voluptas debitis ut itaque fugiat et quas porro. Aut modi suscipit qui expedita consectetur non perspiciatis illo At enim perferendis aut mollitia accusamus et corporis saepe id autem placeat.'
  }
]

export { projects, type IProjects, langs, type ILangs }
