interface IFooter {
  title: string
  access?: ILink[]
}
interface ILink {
  link?: string
  desc?: string
  to?: string
}

const footer: Array<IFooter> = [
  {
    title: 'LINKS RÁPIDOS',
    access: [
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
    access: [
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
    access: [
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
