interface ILink {
  text?: string
  icon?: string
  to: string
  class?: string
}

const links: Array<ILink> = [
  {
    text: 'NOTÍCIAS',
    to: 'http://localhost:5173/#news',
    class: 'news active',
  },
  { 
    text: 'PROJETOS',
    to: 'http://localhost:5173/#projects',
    class: 'projects',
  },
  { 
    text: 'MEMBROS',
    to: 'http://localhost:5173/#members',
    class: 'members',
  },
  { 
    text: 'PUBLICAÇÕES',
    to: 'http://localhost:5173/#publications',
    class: 'publications',

  }
]

const socialNetworks: Array<ILink> = [
  { 
    icon: 'github',
    to: 'https://github.com/fabricadesoftware-ifc'
  },
  { 
    icon: 'linkedin-square',
    to: 'https://br.linkedin.com/company/nodes-fabrica-de-software'
  },
  {
    icon: 'twitter',
    to: 'https://twitter.com/f_softwareifc'
  },
  {
    icon: 'instagram',
    to: 'https://www.instagram.com/f_softwareifc/'
  },
]

export { type ILink, socialNetworks,  links }
