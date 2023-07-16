interface ILink {
  text?: string
  icon?: string
  to: string
  active?: string
}

const links: Array<ILink> = [
  {
    text: 'NOTÍCIAS',
    to: 'http://localhost:5173/#news',
    active: 'noticias-effect'
  },
  { 
    text: 'PROJETOS',
    to: 'http://localhost:5173/#projects',
    active: 'projetos-effect'
  },
  { 
    text: 'MEMBROS',
    to: 'http://localhost:5173/#members',
    active: 'membros-effect'
  },
  { 
    text: 'PUBLICAÇÕES',
    to: 'http://localhost:5173/#publications',
    active: 'publicacoes-effect'
  }
]

const socialNetworks: Array<ILink> = [
  { 
    icon: 'github',
    to: '/'
  },
  { 
    icon: 'linkedin-square',
    to: '/'
  },
  {
    icon: 'instagram',
    to: '/'
  }
]

export { type ILink, socialNetworks,  links }
