interface IFooter {
  title: string
  accessDetails?: ILink[]
}
interface ILink {
  link?: string
  desc?: string
  to?: string
}

const footer: Array<IFooter> = [
  {
    title: 'LINKS RÁPIDOS',
    accessDetails: [
      {
        link: 'Notícias',
        to: '/#news',
      },
      {
        link: 'Projetos',
        to: '/#projects',
      },
      {
        link: 'Membros',
        to: '/#members',
      },
      {
        link: 'Publicações',
        to: '/#publications',
      },
    ]
  },
  {
    title: 'Redes Sociais',
    accessDetails: [
      {
        link: 'github',
        to: 'https://github.com/fabricadesoftware-ifc',
        desc: ''
      },
      {
        link: 'instagram',
        to: 'https://www.instagram.com/f_softwareifc/',
        desc: ''
      },
      {
        link: 'twitter',
        to: 'https://x.com/FabSoftwareIFC',
        desc: ''
      },
      {
        link: 'linkedin-square',
        to: 'https://br.linkedin.com/company/nodes-fabrica-de-software',
        desc: ''
      },
    ]
  },
  {
    title: 'CONTATO',
    accessDetails: [
      {
        desc: 'BR-280 - Colégio Agrícola, Araquari - SC, 89245-000'
      },
      {
        desc: 'fabrica@ifc.edu.br'
      },
      {
        desc: '(47) 3803-7200'
      },
    ]
  }
]

export { type ILink,type IFooter, footer }
