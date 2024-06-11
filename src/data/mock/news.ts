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
    data: '13/08/2023',
    user: 'fabrica',
    status: 'finalizado',
    images: ['https://araquari.ifc.edu.br/wp-content/blogs.dir/4/files/sites/4/2023/02/IMG_0632-667x500.jpeg'],
    version: '1.0.0',
    tags: ['notícias', 'publicações', 'informações', 'projetos'],
    updated: '13 de ago. de 2023',
    published: '13 de set. de 2023',
    background:
      'https://araquari.ifc.edu.br/wp-content/blogs.dir/4/files/sites/4/2023/02/IMG_0632-667x500.jpeg',
      description: 'O Hackathon é uma maratona de programação que tem como objetivo desenvolver soluções tecnológicas para problemas reais. O evento foi realizado no mês de Outubro de 2022, no Instituto Federal Catarinense – Campus Araquari, e contou com a participação de 6 equipes formadas por estudantes do curso técnico em Informática Integrado ao Ensino Médio. A equipe vencedora foi a Bits and Bytes, formada pelos estudantes Gabriel, Gustavo, João, Lucas, Yasmin e Mariana, que desenvolveram um aplicativo para auxiliar no controle dos pets comunitários, que residem no nosso campus. O aplicativo foi desenvolvido em React e utiliza o Mongo como banco de dados',
      logo: 'https://araquari.ifc.edu.br/wp-content/blogs.dir/4/files/sites/4/2023/02/IMG_0632-667x500.jpeg',
  },
  {
    id: '2',
    title: 'Novo portal da Fábrica de Software',
    data: '10/06/2024',
    user: 'fabrica',
    status: 'finalizado',
    images: ['/img/Projects/FabricaPortal/PortalFabrica.png'],
    version: '1.0.0',
    tags: ['notícias', 'publicações', 'informações', 'projetos'],
    updated: '10 de jun. de 2024',
    published: '10 de jun. de 2024',
    background:
      '/img/Projects/FabricaPortal/PortalFabrica.png',
      description: 'O Portal da Fábrica de Software foi atualizado e agora conta com novas funcionalidades e um novo layout. O portal foi desenvolvido pelos estudantes do curso técnico em Informática Integrado ao Ensino Médio, sob a orientação dos professores da Fábrica de Software. O novo portal conta com uma interface mais moderna e intuitiva, que facilita a navegação e o acesso às informações. Além disso, o portal foi desenvolvido utilizando tecnologias atuais, como VueJS, o que demonstra que a Fábrica segue atendendo às demandas e tecnologias utilizadas pelo mercado. A aluna Giovana iniciou o desenvolvimento do projeto, desde a concepção do layout até a implementação das funcionalidades. O projeto foi finalizado pelos alunos Cauã, Vinícius Nilo e Rafael Bochi.',
      logo: '/img/Projects/FabricaPortal/PortalFabrica.png',
  },
  {
    id: '3',
    title: 'Doação de Computadores',
    data: '10/05/2023',
    user: 'fabrica',
    status: 'finalizado',
    images: ['/img/Projects/FabricaPortal/doacao.png'],
    version: '1.0.0',
    tags: ['notícias', 'publicações', 'informações', 'projetos'],
    updated: '10 de jun. de 2024',
    published: '10 de jun. de 2024',
    background:
      '/img/Projects/FabricaPortal/doacao.png',
      description: 'A empresa SoftExpert, parceira da Fábrica de Sooftware, realizou doação de 10 computadores, teclados e mouses, para o Instituto Federal Catarinense – Campus Araquari. Os equipamentos foram destinados ao laboratório Fábrica de Software, que é utilizado pelos estudantes do curso técnico em Informática Integrado ao Ensino Médio, o Bacharelado em Sistemas de Informação e o Tecnólogo em Redes de Computadores. Os computadores doados serão utilizados no desenvolvimento dos projetos sob responsabilidade da Fábrica de Software, que tem por objetivo acelerar o aprendizado dos estudantes da área de tecnologia, possibilitando maior imersão no mundo Dev, preparando-os para o mercado de trabalho.',
      logo: '/img/Projects/FabricaPortal/doacao.png',
  }
]

export { type INews, news }
