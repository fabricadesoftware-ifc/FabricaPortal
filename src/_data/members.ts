interface IMembers {
  id: string
  name: string
  image: string
  description: string
  occupation: IOccupations
  projectIds?: string[]
  publicationIds?: string[]
  socialLinks?: ILink[]
}

interface IOccupations {
  id: string
  description: string
}

interface ILink {
  icon?: string
  href: string
  type?: string
}

const redesSociais: Array<ILink> = [
  {
    icon: 'github',
    href: '',
    type: 'logo'
  },
  {
    icon: 'linkedin',
    href: '',
    type: 'logo'
  },
  {
    icon: 'twitter',
    href: '',
    type: 'logo'
  },
  {
    icon: 'link',
    href: '',
    type: ''
  }
]
const occupations: Array<IOccupations> = [
  {
    id: '1',
    description: 'Professor'
  },
  {
    id: '2',
    description: 'Aluno'
  },
  {
    id: '3',
    description: 'Técnico'
  },
  {
    id: '4',
    description: 'Graduação'
  },
  {
    id: '5',
    description: 'Bolsista'
  }
]

const members: Array<IMembers> = [
  {
    id: '1',
    image: 'https://avatars.githubusercontent.com/u/849206?v=4',
    name: 'Fábio Longo de Moura',
    description:
      'Possui graduação em Sistemas de Informação pela Universidade da Região de Joinville (2005) e mestrado em Sistemas de Informação pela Universidade do Minho (2014). Atualmente é pesquisador e professor do ensino básico, técnico e tecnológico do Instituto Federal Catarinense e pesquisador do Departamento de Sistemas de Informação da Universidade do Minho (Campus Azurém), em Guimarães, Portugal. Tem experiência na área de Ciência da Computação, com ênfase em Sistemas de Informação, atuando principalmente nos seguintes temas: information system, information system management, competences, capability, management.',
    occupation: {
      id: '1',
      description: 'Professor'
    },
    projectIds: ['7'],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/ldmfabio',
        type: 'logo'
      },
      {
        icon: 'linkedin',
        href: 'https://br.linkedin.com/in/ldmfabio',
        type: 'logo'
      },
      {
        icon: 'twitter',
        href: 'https://twitter.com/ldmfabio',
        type: 'logo'
      },
      {
        icon: 'link',
        href: 'https://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=861850B8C5D3CDD40E48946E9E30EF06.buscatextual_0',
        type: ''
      }
    ]
  },

  {
    id: '2',
    image: 'https://avatars.githubusercontent.com/u/48130339?v=4',
    name: 'Eduardo da Silva',
    description:
      'Possui graduação em Bacharelado em Ciência da Computação pela Universidade do Estado de Santa Catarina (2003) e mestrado em Informática pela Universidade Federal do Paraná (2009) e doutorado em Ciência da Computação pela Universidade Federal do Paraná (2014). Foi administrador de rede e professor do IST/SOCIESC. Atualmente, é professor no Instituto Federal Catarinense (IFC). É membro do grupo de pesquisa em Computação Aplicada (IFC/Araquari). Em 2018, participou como docente convidado em um programa de pós-doutorado na Universidade de Aveiro, em Portugal. Tem experiência na área de Ciência da Computação, com ênfase em redes de computadores.',
    occupation: {
      id: '1',
      description: 'Professor'
    },
    publicationIds: ['1'],
    projectIds: ['7', '6', '1'],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/eduardo-da-silva',
        type: 'logo'
      },
      {
        icon: 'linkedin',
        href: 'https://br.linkedin.com/in/eduardosilva3?trk=public_profile_browsemap',
        type: 'logo'
      },
      {
        icon: 'twitter',
        href: 'https://twitter.com/edudasilva',
        type: 'logo'
      },
      {
        icon: 'link',
        href: 'https://buscatextual.cnpq.br/buscatextual/visualizacv.do',
        type: ''
      }
    ]
  },
  {
    id: '3',
    image: 'https://avatars.githubusercontent.com/u/107952878?v=4',
    name: 'Alann Perini',
    description:
      'Docente Universitário em diversas áreas da computação , disciplinas voltadas a Graduação e Cursos Tecnológicos. Mestrado em Ciências da Computação pela Faculdade Campo Limpo Paulista - UNIFACCAMP Pós-graduação em Segurança de Informação e Ambientes Operacionais pela Faculdade Associadas de São Paulo - FASP , Pós-graduação em Didática e Tecnologias do Ensino Superior - UNASP - SP - Graduado em Licenciatura em Computação pelo Centro Universitário Adventista - UNASP Graduado em Licenciatura em Matemática - FAEL - SC Orientação de monografias e trabalho de conclusão de curso - Graduação em Informática e Técnico em Informática. Orientações de trabalhos de iniciação científica nas seguintes áreas: Jogos Educacionais com Realidade Virtual e Aumentada, Segurança da Informação, Desenvolvimento de Sistemas com a Linguagem Java ,Ontologia , Web Semântica.',
    occupation: {
      id: '1',
      description: 'Professor'
    }
  },
  {
    id: '5',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Ivo Marcos Riegel',
    description: '',
    occupation: {
      id: '1',
      description: 'Professor'
    }
  },
  {
    id: '7',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Adamô Dal Berto',
    description: '',
    occupation: {
      id: '1',
      description: 'Professor'
    }
  },
  {
    id: '8',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Marco Antônio Rojas',
    description:
      'Em 2017 foi pesquisador de pós-doutorado na área de Cybersecurity no Canadian Institute for Cybersecurity (CIC) na ...',
    occupation: {
      id: '1',
      description: 'Professor'
    }
  },
  {
    id: '14',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Paulo Cesar Fernandes de Oliveira',
    description: 'É Bacharel em Ciência da Computação pela Universidade...',
    occupation: {
      id: '1',
      description: 'Professor'
    }
  },
  {
    id: '15',
    image: 'https://avatars.githubusercontent.com/u/99155494?v=4',
    name: 'Geovana Sophia Horodeski',
    description: 'Gosto de filmes, ABBA e FrontEnd',
    occupation: {
      id: '2',
      description: 'Aluno'
    }
  },
  {
    id: '17',
    image: 'https://avatars.githubusercontent.com/u/99155494?v=4',
    name: 'pessoa bacana',
    description: 'Gosto de filmes, ABBA e FrontEnd',
    occupation: {
      id: '4',
      description: 'Graduação'
    }
  }
]

export { type IMembers, members, type IOccupations, occupations, type ILink, redesSociais }
