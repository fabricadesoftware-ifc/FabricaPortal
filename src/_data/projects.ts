interface IProjects {
  id: string
  image: string
  title: string
  status: string
  type: string
  description: string
}

const projects: Array<IProjects> = [
  {
    id: '1',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/logo-eventos.jpg',
    title: 'Gestão de Eventos',
    status: 'finalizado',
    type: 'extensão',
    description:
      'O projeto tem por objetivo desenvolver um sistema web para a gestão de eventos do Instituto Federal Catarinense. O sistema deve permitir a criação e gestão de eventos, a submissão de artigos científicos para um evento específico, a autenticação dos usuários por meio da rede CAFe...'
  },
  {
    id: '2',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/setting/%C3%ADndice_il3boLh.png',
    title: 'NODES',
    status: 'finalizado',
    type: 'extensão',
    description: 'Portal para Núcleo Operacionalização de Desenvolvimento de Sistemas'
  },
  {
    id: '3',
    image: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/index2.png',
    title: 'NR2',
    status: 'finalizado',
    type: 'extensão',
    description: 'Portal para o Núcleo de Redes Sem Fio e Redes Avançadas.'
  },
  {
    id: '4',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/WhatsApp_Image_2018-09-17_at_13.14.24.jpeg',
    title: 'Goofy Educa',
    status: 'finalizado',
    type: 'extensão',
    description: 'O projeto tem o foco de gerar auxílio à aprendizagem para o ensino fundamental.'
  },
  {
    id: '5',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/WhatsApp_Image_2018-09-17_at_13.14.21.jpeg',
    title: 'Readequação do Site Institucional',
    status: 'finalizado',
    type: 'extensão',
    description: 'O presente projeto tem por objetivo dar continuidade às adequações na página do Instituto Federal Catarinense (IFC), de acordo com as normas previstas, atendendo assim, as exigências da Controladoria Geral da União (CGU).'
  },
  {
    id: '6',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/issem.png',
    title: 'ISSEM',
    status: 'finalizado',
    type: 'extensão',
    description: 'O Instituto de Seguridade dos Servidores Municipais de Jaraguá do Sul (ISSEM)...'
  }
]


export {projects, type IProjects}