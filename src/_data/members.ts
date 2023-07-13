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
    name: 'Alann Kelly Pirchiner Perini',
    description:
      'Docente Universitário em diversas áreas da computação , disciplinas voltadas a Graduação e Cursos Tecnológicos. Mestrado em Ciências da Computação pela Faculdade Campo Limpo Paulista - UNIFACCAMP Pós-graduação em Segurança de Informação e Ambientes Operacionais pela Faculdade Associadas de São Paulo - FASP , Pós-graduação em Didática e Tecnologias do Ensino Superior - UNASP - SP - Graduado em Licenciatura em Computação pelo Centro Universitário Adventista - UNASP Graduado em Licenciatura em Matemática - FAEL - SC Orientação de monografias e trabalho de conclusão de curso - Graduação em Informática e Técnico em Informática. Orientações de trabalhos de iniciação científica nas seguintes áreas: Jogos Educacionais com Realidade Virtual e Aumentada, Segurança da Informação, Desenvolvimento de Sistemas com a Linguagem Java ,Ontologia , Web Semântica.',
    occupation: {
      id: '1',
      description: 'Professor'
    },
    projectIds: ['7'],

  },
  {
    id: '5',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Ivo Marcos Riegel',
    description: '',
    projectIds: ['7'],
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
    name: 'Marco Antônio Torrez Rojas',
    description:
      'Em 2017 foi pesquisador de pós-doutorado na área de Cybersecurity no Canadian Institute for Cybersecurity (CIC) na University of New Brunswick (Canadá). Doutor em Engenharia de Computação pela Escola Politécnica da USP (2016), Doutorado Sanduíche na École de Technologie Supérieure, Montreal - Canadá (2015), mestre em Ciência da Computação (área de Criptografia) pela Universidade Federal de Santa Catarina (2002) e graduação em Matemática (Bacharelado e Licenciatura) e Análise e Desenvolvimento de Sistemas. De 2011 a 2017, atuou como pesquisador nos projetos de pesquisa dos laboratórios LARC (Laboratório de Arquitetura e Redes de Computadores) e LASSU (Laboratório de Sustentabilidade) do Departamento de Engenharia de Computação da Escola Politécnica da USP (Universidade de São Paulo). Atualmente é Professor do Instituto Federal Catarinense (IFC) na área de Informática, lotado no Campus Araquari. Foi professor universitário nas instituições IFSC, UDESC, SOCIESC, SENAI, ACE e FCJ. Professor de pós-graduação do SENAC de SC e FASUL (PR) na área de Segurança da Informação. Sócio-fundador e diretor da LockNet Security Solutions (onde atuou até dezembro/2008), empresa especializada em segurança da informação, atuando em diversos projetos de segurança em empresas nacionais (privada e pública) e multinacionais.Tem experiência na área de Ciência da Computação, com ênfase em Sistemas de Computação, atuando principalmente nos seguintes temas: cybersecurity, segurança em computação em nuvem.',
    occupation: {
      id: '1',
      description: 'Professor'
    },
    projectIds: ['7']
  },
  {
    id: '9',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Paulo Cesar Fernandes de Oliveira',
    description:
      'É Bacharel em Ciência da Computação pela Universidade Federal de Santa Catarina (1983) e possui doutorado (PhD) em Inteligência Artificial pela Universidade de Surrey Inglaterra (2005). Seu diploma foi revalidado pela Universidade Federal do Rio Grande do Sul em 19/10/2006. Tem experiência na área de Ciência da Computação, atuando em diversos segmentos como desenvolvimento (i.e. programação e análise). Na área acadêmica tem lecionado uma série de disciplinas (graduação e pós-graduação) tais como Introdução à Lógica de Programação (Algoritmos), Linguagem de Programação (C, C++, Java, e Pascal), Inteligência Artificial (presencial e à distância), Programação para a Internet (HTML, JavaScript, PHP & MySQL), Engenharia de Software, Administração de Sistemas de Informação e Interação Homem-Máquina, Desenvolvimento de Software Seguro e Sistemas Operacionais. Atua também como consultor em desenvolvimento e projeto de soluções tecnológicas para Web. Seus interesses em termos de pesquisa estão focados nos seguintes temas: 1) Engenharia da Linguagem (Processamento de Linguagem Natural - Natural Language Processing); 1.1) Sumarização Automática de Textos (Automatic Text Summarization); 1.2) Interface entre a língua/linguagem e o computador; 2) Sistemas de Recuperação de Informações (Information Retrieval); 3) Gestão do Conhecimento (Knowledge Management); 4) Aplicações da Inteligência Artificial na Engenharia de Produção; 5) Mineração de Dados (Data Mining/Web Mining).',
    occupation: {
      id: '1',
      description: 'Professor'
    },
    projectIds: ['7'],

  },
  {
    id: '10',
    image: 'https://avatars.githubusercontent.com/u/99155494?v=4',
    name: 'Geovana Sophia Horodeski',
    description: 'Gosto de filmes, ABBA e FrontEnd',
    occupation: {
      id: '2',
      description: 'Aluna'
    }
  },
  {
    id: '11',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Joice Seleme Mota',
    description: 'Possui graduação em Ciência da Computação pela Pontifícia Universidade Católica do Paraná (1994), mestrado em Ciências da Computação pela Universidade Federal do Rio Grande do Sul (2000), doutorado em Computação Aplicada no Instituto Nacional de Pesquisas Espaciais - INPE (2009) e Pós-Doutoramento no Laboratório MAREFOZ fo MARE, Polo da Universidade de Coimbra. Atualmente é professora efetiva do Instituto Federal de Educação Ciência e Tecnologia Catarinense - Campus Araquari. Tem experiência na área de Ciência da Computação, com ênfase em Engenharia de Software, Geoprocessamento e Computação Aplicada.',
    occupation: {
      id: '1',
      description: 'Professora'
    },
    publicationIds: ['1'],
    projectIds: ['6'],
  }
]

export { type IMembers, members, type IOccupations, occupations, type ILink, redesSociais }
