interface INews {
  id: string
  title: string
  data: string,
  user: string,
  logo: string,
  background: string,
  description: string,
  images?: string[],
  version?: string,
  tags?: string[],
  status: string,
  published?: string,
  updated?: string,
}

const news: Array<INews> = [
  {
    id: '1',
    title: 'Equipe Bits and Bytes vence o INFO Hackathon',
    data: '5h',
    user: 'fabrica',
    status: 'finalizado',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    version: '1.0.0',
    tags: ['notícias', 'publicações', 'informações', 'projetos'],
    updated: '13 de ago. de 2023',
    published: '13 de set. de 2023',
    background:
      'https://araquari.ifc.edu.br/wp-content/blogs.dir/4/files/sites/4/2023/02/IMG_0632-667x500.jpeg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/logo-eventos.jpg',
  },
  {
    id: '2',
    title: 'INFO Hackathon acontecerá durante os sábados letivos do mês de junho',
    data: '5h',
    user: 'fabrica',
    status: 'finalizado',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    version: '1.0.0',
    tags: ['notícias', 'publicações', 'informações', 'projetos'],
    updated: '13 de ago. de 2023',
    published: '13 de set. de 2023',
    background:
      'https://araquari.ifc.edu.br/wp-content/blogs.dir/4/files/sites/4/2023/02/infohackathon_PSOT-494x500.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/logo-eventos.jpg',
  },
  {
    id: '3',
    title: 'INFO Hackathon acontecerá durante os sábados letivos do mês de junho',
    data: '5h',
    user: 'fabrica',
    status: 'finalizado',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    version: '1.0.0',
    tags: ['notícias', 'publicações', 'informações', 'projetos'],
    updated: '13 de ago. de 2023',
    published: '13 de set. de 2023',
    background:
      'https://araquari.ifc.edu.br/wp-content/blogs.dir/4/files/sites/4/2023/02/infohackathon_PSOT-494x500.jpg',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      logo: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/logo-eventos.jpg',
  }
]

export { type INews, news }
