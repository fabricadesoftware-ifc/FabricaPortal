interface INews {
  id: string
  title: string
  data: string
  user: string
  background: string,
  images?: string[]
}

const news: Array<INews> = [
  {
    id: '1',
    title: 'Equipe Bits and Bytes vence o INFO Hackathon',
    data: '5h',
    user: 'fabrica',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    background:
      'https://araquari.ifc.edu.br/wp-content/blogs.dir/4/files/sites/4/2023/02/IMG_0632-667x500.jpeg'
  },
  {
    id: '2',
    title: 'INFO Hackathon acontecerá durante os sábados letivos do mês de junho',
    data: '5h',
    user: 'fabrica',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    background:
      'https://araquari.ifc.edu.br/wp-content/blogs.dir/4/files/sites/4/2023/02/infohackathon_PSOT-494x500.jpg'
  },
  {
    id: '3',
    title: 'INFO Hackathon acontecerá durante os sábados letivos do mês de junho',
    data: '5h',
    user: 'fabrica',
    images: ['/img/Projects/FabricaPortal/FabricaDeSoftwarePortal.png'],
    background:
      'https://araquari.ifc.edu.br/wp-content/blogs.dir/4/files/sites/4/2023/02/infohackathon_PSOT-494x500.jpg'
  }
]

export { type INews, news }
