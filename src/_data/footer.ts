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
        link: 'Lorem ipsum'
      },
      {
        link: 'Lorem ipsum'
      },
      {
        link: 'Lorem ipsum'
      },
      {
        link: 'Lorem ipsum'
      },
    ]
  },
  {
    title: 'BLA',
    accessDetails: [
      {
        link: 'Lorem ipsum'
      },
      {
        link: 'Lorem ipsum'
      },
      {
        link: 'Lorem ipsum'
      },
      {
        link: 'Lorem ipsum'
      },
      {
        link: 'Lorem ipsum'
      }
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
