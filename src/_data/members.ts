interface IMembers {
  id: string
  name: string
  image: string
  description: string
  occupation: Ioccupations
}

interface Ioccupations {
  id: string
  description: string
}

const occupations: Array<Ioccupations> = [
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
  },
]

const members: Array<IMembers> = [
  {
    id: '1',
    image: 'https://avatars.githubusercontent.com/u/849206?v=4',
    name: 'Fábio Longo de Moura',
    description:
      'Possui graduação em Sistemas de Informação pela Universidade da Região de Joinville (2005) e mestrado em Sistemas...',
    occupation: {
      id: '1',
      description:'Professor'
    }
  },
  {
    id: '2',
    image: 'https://avatars.githubusercontent.com/u/48130339?v=4',
    name: 'Eduardo da Silva',
    description:
      'Hands-on with cloud computing, devops tools, full-stack, programming concepts and open source/leading frameworks.',
    occupation: {
      id: '1',
      description:'Professor'
    }
  },
  {
    id: '3',
    image: 'https://avatars.githubusercontent.com/u/107952878?v=4',
    name: 'Alann Perini',
    description:
      'Docente em cursos de tecnologia Licenciado em Computação Licenciado em Matemática Mestre em Ciências da Computação.',
    occupation: {
      id: '1',
      description:'Professor'
    }
  },
  {
    id: '4',
    image: 'https://avatars.githubusercontent.com/u/165224?v=4',
    name: 'Marco André Mendes',
    description: 'Professor no IFC, desenvolvedor Python e Django.',
    occupation: {
      id: '1',
      description:'Professor'
    }
  },
  {
    id: '5',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Ivo Marcos Riegel',
    description: '',
    occupation: {
      id: '1',
      description:'Professor'
    }
  },
  // Adicione mais membros aqui:
  {
    id: '7',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Adamô Dal Berto',
    description: '',
    occupation: {
      id: '1',
      description:'Professor'
    }
  },
  {
    id: '8',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Marco Antônio Rojas',
    description: 'Em 2017 foi pesquisador de pós-doutorado na área de Cybersecurity no Canadian Institute for Cybersecurity (CIC) na ...',
    occupation: {
      id: '1',
      description:'Professor'
    }
  },
  {
    id: '9',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'João Pereira',
    description: 'Desenvolvedor full-stack com experiência em JavaScript e frameworks modernos.',
    occupation: {
      id: '1',
      description:'Professor'
    }
  },
  {
    id: '10',
    image: 'https://avatars.githubusercontent.com/u/987654321?v=4',
    name: 'Maria Souza',
    description: 'Especialista em UX/UI com vasta experiência em design de interfaces para aplicativos móveis.',
    occupation: {
      id: '1',
      description:'Professor'
    }
  },
  {
    id: '11',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Carlos Ferreira',
    description: 'Engenheiro de software com foco em desenvolvimento de sistemas distribuídos.',
    occupation: {
      id: '1',
      description:'Professor'
    }
  },
  {
    id: '13',
    image: 'https://avatars.githubusercontent.com/u/9876543210?v=4',
    name: 'Rafaela Almeida',
    description: 'Desenvolvedora front-end com conhecimentos avançados em HTML, CSS e JavaScript.',
    occupation: {
      id: '1',
      description:'Professor'
    }
  },
  {
    id: '14',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Paulo Cesar Fernandes de Oliveira',
    description: 'É Bacharel em Ciência da Computação pela Universidade...',
    occupation: {
      id: '1',
      description:'Professor'
    }
  },
  {
    id: '15',
    image: 'https://avatars.githubusercontent.com/u/99155494?v=4',
    name: 'Geovana Sophia Horodeski',
    description: 'Gosto de filmes, ABBA e FrontEnd',
    occupation: {
      id: '2',
      description:'Aluno'
    }
  },
  {
    id: '17',
    image: 'https://avatars.githubusercontent.com/u/99155494?v=4',
    name: 'pessoa bacana',
    description: 'Gosto de filmes, ABBA e FrontEnd',
    occupation: {
      id: '4',
      description:'Graduação'
    }
  },
]

export { type IMembers, members, type Ioccupations, occupations }
