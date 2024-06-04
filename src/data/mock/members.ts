interface IMembers {
  id: string
  name: string
  image: string
  description?: string
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

const occupations: Array<IOccupations> = [
  {
    id: '1',
    description: 'Professor'
  },
  {
    id: '2',
    description: 'Aluno - Técnico'
  },
  {
    id: '3',
    description: 'Aluno - Graduação'
  },
  {
    id: '4',
    description: 'Técnico Administrativo'
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
    projectIds: ['7', '16', '10', '11', '17', '18', '19', '22', '24', '25', '29', '26', '27'],
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
        icon: 'link',
        href: 'https://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=861850B8C5D3CDD40E48946E9E30EF06.buscatextual_0',
        type: ''
      },
      {
        icon: 'link',
        href: 'https://about.me/ldmfabio',
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
    projectIds: ['7', '6', '1', '16', '10', '11', '20', '21', '22', '24', '25', '27'],
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
    id: '8',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Marco Antônio Torrez Rojas',
    description:
      'Em 2017 foi pesquisador de pós-doutorado na área de Cybersecurity no Canadian Institute for Cybersecurity (CIC) na University of New Brunswick (Canadá). Doutor em Engenharia de Computação pela Escola Politécnica da USP (2016), Doutorado Sanduíche na École de Technologie Supérieure, Montreal - Canadá (2015), mestre em Ciência da Computação (área de Criptografia) pela Universidade Federal de Santa Catarina (2002) e graduação em Matemática (Bacharelado e Licenciatura) e Análise e Desenvolvimento de Sistemas. De 2011 a 2017, atuou como pesquisador nos projetos de pesquisa dos laboratórios LARC (Laboratório de Arquitetura e Redes de Computadores) e LASSU (Laboratório de Sustentabilidade) do Departamento de Engenharia de Computação da Escola Politécnica da USP (Universidade de São Paulo). Atualmente é Professor do Instituto Federal Catarinense (IFC) na área de Informática, lotado no Campus Araquari. Foi professor universitário nas instituições IFSC, UDESC, SOCIESC, SENAI, ACE e FCJ. Professor de pós-graduação do SENAC de SC e FASUL (PR) na área de Segurança da Informação. Sócio-fundador e diretor da LockNet Security Solutions (onde atuou até dezembro/2008), empresa especializada em segurança da informação, atuando em diversos projetos de segurança em empresas nacionais (privada e pública) e multinacionais.Tem experiência na área de Ciência da Computação, com ênfase em Sistemas de Computação, atuando principalmente nos seguintes temas: cybersecurity, segurança em computação em nuvem.',
    occupation: {
      id: '1',
      description: 'Professor'
    },
    projectIds: ['7', '22']
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
    projectIds: ['7']
  },
  {
    id: '16',
    image: 'https://avatars.githubusercontent.com/u/99155494?v=4',
    name: 'Geovana Sophia Horodeski',
    description: 'Gosto de filmes, ABBA e FrontEnd',
    projectIds: ['16'],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/horodeski',
        type: 'logo'
      }
    ],
    occupation: {
      id: '2',
      description: 'Aluna'
    }
  },
  {
    id: '10',
    image: 'https://avatars.githubusercontent.com/u/99221824?v=4',
    name: 'Eduardo Barbaro',
    description: '',
    occupation: {
      id: '2',
      description: 'Aluno - Técnico'
    },
    projectIds: ['10', '18'],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/dudubarbaro',
        type: 'logo'
      },
      {
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/eduardo-barbaro/',
        type: 'logo'
      }
    ]
  },
  {
    id: '18',
    image: 'https://avatars.githubusercontent.com/u/58995549?v=4',
    name: 'João Felipi Cardoso',
    description:
      'A simple guy doing simple things for simple projects. I like to have a simple life.',
    occupation: {
      id: '2',
      description: 'Aluno - Técnico'
    },
    projectIds: ['15', '13', '21'],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/snow-sr',
        type: 'logo'
      },
      {
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/jo%C3%A3o-felipi-cardoso-a1710522b/',
        type: 'logo'
      }
    ]
  },
  {
    id: '19',
    image: 'https://avatars.githubusercontent.com/u/102876502?v=4',
    name: 'Gabriela Andrade',
    description: 'Graduanda em Sistemas de Informação no Instituto Federal Catarinense.',
    occupation: {
      id: '3',
      description: 'Aluno - Graduação'
    },
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/andrade-gabriela',
        type: 'logo'
      }
    ]
  },
  {
    id: '15',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Vinícius Acordi Soethe',
    description: 'DevOps Developer.',
    projectIds: ['10', '7'],
    occupation: {
      id: '3',
      description: 'Aluno - Graduação'
    },
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/ViniciusAcordiSoethe',
        type: 'logo'
      },
      {
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/viniciusacordisoethe/',
        type: 'logo'
      }
    ]
  },
  {
    id: '20',
    image: 'https://avatars.githubusercontent.com/u/56761360?v=4',
    name: 'Gabriel Lopes Pereira',
    description: 'Student at IFC Campus Araquari.',
    projectIds: ['10'],
    occupation: {
      id: '3',
      description: 'Aluno - Graduação'
    },
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/ogabrielpereira',
        type: 'logo'
      },
      {
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/ogabrielpereiraa/',
        type: 'logo'
      }
    ]
  },
  {
    id: '21',
    image: 'https://avatars.githubusercontent.com/u/106831722?v=4',
    name: 'Lucas Gabriel Antonete',
    description: 'IFC - Araquari, Membro da Fábrica de Software.',
    projectIds: ['18', '22', '26'],
    occupation: {
      id: '2',
      description: 'Aluno - Técnico'
    },
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/LucasGabrielAntonete',
        type: 'logo'
      }
    ]
  },
  {
    id: '22',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Marco André Mendes',
    description: 'Professor no IFC, desenvolvedor Python e Django.',
    projectIds: ['7', '11', '22'],
    occupation: {
      id: '1',
      description: 'Professor'
    },
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/marrcandre',
        type: 'logo'
      },
      {
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/marrcandre/',
        type: 'logo'
      },
      {
        icon: 'link',
        href: 'https://marrcandre.blogspot.com/',
        type: ''
      },
      {
        icon: 'link',
        href: 'https://buscatextual.cnpq.br/buscatextual/visualizacv.do/',
        type: ''
      }
    ]
  },
  {
    id: '23',
    image: 'https://avatars.githubusercontent.com/u/106831397?v=4',
    name: 'Vinícius Nilo Hiansdt',
    description:
      'Estudante de TI e desenvolvedor Full-Stack, com experiência em Python, JavaScript, TypeScript, RabbitMQ, Django-Rest-Framework, VueJS e React. Apaixonado por calistenia, leitura, alguns jogos e sempre um pouco além da medida.',
    projectIds: ['16', '22', '11'],
    occupation: {
      id: '2',
      description: 'Aluno - Técnico'
    },
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/Hiansdt',
        type: 'logo'
      }
    ]
  },
  {
    id: '24',
    image: 'https://avatars.githubusercontent.com/u/50590861?v=4',
    name: 'Mateus Lopes Albano',
    description:
      'Possui ensino-medio-segundo-graupelo Instituto Federal Catarinense(2021). Tem experiência na área de Ciência da Computação, com ênfase em Sistemas de Computação.',
    projectIds: ['7', '17', '18', '19', '21', '29', '25', '26'],
    occupation: {
      id: '3',
      description: 'Aluno - Graduação'
    },
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/mateus-lopes',
        type: 'logo'
      }
    ]
  },
  {
    id: '25',
    image: 'https://avatars.githubusercontent.com/u/126203565?v=4',
    name: 'Anthony Gabriel Loche dos Reis',
    description:
      'Olá, eu sou o Anthony, um jovem dev nascido no Paraná de 17 anos que procura sempre se destacar e dar seu máximo em tudo que faz, posso até não ser o melhor, mais rápido, mais inteligente e etc, mas com certeza, vou ser sempre o mais determinado a fazer um desafio proposto. Falando mais de mim, sou um dev amante do Javascript tanto no node quando no vue, e diga se de passagem, a melhor linguagem que existe. Outros dois pontos importantes é o quanto eu gosto de duas coisas, o Paraná e Música, amo muito o Paraná e tudo que tem nele, e na música principalmente o rock/heavy metal, porém gosto de ouvir outros tipos, desde que a música seja boa',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: [],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/AnthonyLoche',
        type: 'logo'
      }
    ]
  },
  {
    id: '26',
    image: 'https://avatars.githubusercontent.com/u/106831604?v=4',
    name: 'Laíssa Mendes',
    description:
      'Me chamo Laíssa Mendes e estou no meu último ano no IFC. Tenho alguns hobbies, e gosto de passar o tempo livre praticando, sendo eles cantar e atuar, você pode pensar “mas não tem nada haver com informática”, sim é verdade, porém gosto muito do técnico, da maneira como me desenvolvi, não apenas em conhecimento, mas como pessoa, gosto de utilizar o figma, fazer os designs e logos para as minhas aplicações… Tenho interesse em seguir na área da tecnologia, mas meu desejo é me especializar no frontend, e se possível, me tornar professora, esse é o meu maior sonho. Com a fábrica de software tenho o desejo de aprimorar o meu desempenho nas operações assim como o melhor aproveito dos trabalhos realizados em grupo e por fim ter uma base para seguir minha carreira profissional.',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: [],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/laissamendes',
        type: 'logo'
      }
    ]
  },
  {
    id: '27',
    image: 'https://avatars.githubusercontent.com/u/105315347?v=4',
    name: 'Lucas Liebl',
    description:
      'Me chamo Lucas, tenho 17 anos e estou no terceiro ano do ensino médio, pretendo cursar uma faculdade de TI e trabalhar na área. Entrei na fábrica de software com o objetivo de ter mais experiência. Uma curiosidade sobre mim, é que no meu tempo vago eu sou fotógrafo',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: [],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/LucasLiebl',
        type: 'logo'
      }
    ]
  },
  {
    id: '28',
    image: 'https://avatars.githubusercontent.com/u/128939125?v=4',
    name: 'João Victor Silva de Souza',
    description:
      'Me interessei pela informática principalmente pela facilidade e familiaridade que eu tenho na área, quando comecei no curso não tinha muita perspectiva do que realmente era a área e acabei sendo seduzido pela programação, é algo que eu gosto e que eu faço bem, a partir daí foi quando comecei a entrar a fundo na a área e reconhecer como rumo profissional. Hoje tenho certeza de qual rumo vou seguir, e estudo pra trabalhar na área de desenvolvimento.',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: [],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/Jaotarzan',
        type: 'logo'
      }
    ]
  },
  {
    id: '29',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'João Vitor Gomes',
    description:
      'Meu nome é João Vitor Gomes, tenho 17 anos e estou no 3° ano do ensino médio. Eu entrei na fábrica pois é uma ótima oportunidade para seguir na área, aprendendo coisas e vendo em que área da TI seguir.',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: [],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/Gomesjv',
        type: 'logo'
      }
    ]
  },
  {
    id: '30',
    image: 'https://avatars.githubusercontent.com/u/106555009?v=4',
    name: 'Eduardo Montandon',
    description:
      'Possui conhecimento intermediário no uso de Vue.js para o desenvolvimento de telas frontend e conhecimento básico no uso de Django DRF para criação de backend. Durante seu período de estudos percebeu afinidade com a produção de telas e desenvolvimento de frontend no geral, se juntando a fabrica em 2024 visando melhorar suas habilidades existentes e treinar novas.',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: [],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/1montandon',
        type: 'logo'
      }
    ]
  },
  {
    id: '31',
    image: 'https://avatars.githubusercontent.com/u/126280066?v=4',
    name: 'Gabriel Lucas de Miranda',
    description:
      'Me chamo Gabriel Lucas, tenho 16 anos e atualmente estou no segundo ano do ensino médio. Ainda estou descobrindo que percurso seguir na minha área, mas por enquanto eu gosto de desenvolver aplicações web visando mais na parte do frontend, porém tenho interesse em expandir meu conhecimento para outros caminhos. No meu tempo livre, gosto de aproveitar para desenvolver projetos pessoais para praticar e estudar, além de claro, passar tempo com as pessoas que amo e assistir a séries.',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: [],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/Gabz047',
        type: 'logo'
      }
    ]
  },
  {
    id: '32',
    image: 'https://avatars.githubusercontent.com/u/106554495?v=4',
    name: 'Luiz Felipe Nunes',
    description:
      'Meu nome é Luiz, sou estudante do Instituto Federal - Campus Araquari, atualmente no terceiro ano do curso técnico de Informática para Internet. Minha especialização está voltada para o desenvolvimento front-end de aplicações web.',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: ['20'],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/LuizNunes06',
        type: 'logo'
      }
    ]
  },
  {
    id: '33',
    image: 'https://avatars.githubusercontent.com/u/106554467?v=4',
    name: 'Giulia Raphaela Nobre',
    description: '',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: [],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/GiuliaNobre',
        type: 'logo'
      }
    ]
  },
  {
    id: '34',
    image: 'https://avatars.githubusercontent.com/u/131298116?v=4',
    name: 'Vinicius Gabryel Pereira',
    description:
      'Meu nome é Vinicius, tenho 17 anos e moro em Joinville. Estudo no Instituto Federal Catarinense (IFC) - Campus Araquari e quero ser um bom programador. Acredito que estou no caminho certo para alcançar esse objetivo. Minha paixão por tecnologia e meu esforço nos estudos me motivam a seguir em frente e a aprender cada vez mais. Estou determinado a me tornar um programador competente e reconhecido no futuro.',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: ['18'],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/Vinyzada',
        type: 'logo'
      }
    ]
  },
  {
    id: '35',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Matheus Vidal Zenere',
    description: '',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: ['18', '24'],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/iTzMvz',
        type: 'logo'
      }
    ]
  },
  {
    id: '36',
    image: 'https://avatars.githubusercontent.com/u/131203214?v=4',
    name: 'Isabelli Luísa Rosa',
    description:
      'Eu sou a isabelli, mas normalmente me chamam de belli. No meu tempo livre amo assistir a filmes e ler livros. Resolvi participar da fábrica de software para desenvolver novas habilidades na criação de sites e me habituar a trabalhar em equipe, pois, acredito que futuramente isso trará muitos benefícios.',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: [],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/isabellirosa',
        type: 'logo'
      }
    ]
  },
  {
    id: '37',
    image: 'https://avatars.githubusercontent.com/u/106837331?v=4',
    name: 'Eduardo Roberto Wodtke',
    description: '',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: [],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/EduardoWodtke',
        type: 'logo'
      }
    ]
  },
  {
    id: '38',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Isadora Alcântara Xavier da Silva',
    description:
      'Estudo no Instituto Federal Catarinense. Estou no último ano do curso técnico de informática para internet. Costumo atuar no frontend.',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: [],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/IsadoraAlcantara',
        type: 'logo'
      }
    ]
  },
  {
    id: '39',
    image: 'https://avatars.githubusercontent.com/u/106544702?v=4',
    name: 'Rafael Bochi Barros',
    description:
      'Meu nome é Rafael, tenho 16 anos e atualmente moro em Barra Velha, SC. Estudo no IFC Campus Araquari, onde faço o curso técnico de Informática para Internet integrado ao ensino médio. Grande parte do meu tempo é dedicado ao aprofundamento na área de programação, mas meu passatempo mais prazeroso é treinar, especialmente futsal.',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: ['21', '27'],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/RafaelBochi',
        type: 'logo'
      }
    ]
  },
  {
    id: '40',
    image: 'https://avatars.githubusercontent.com/u/106837380?v=4',
    name: 'Gabriel Lima De Souza',
    description:
      'Olá, me chamo Gabriel Lima. Atualmente, estou no 3º ano do ensino médio no curso de informática para internet. Sou uma pessoa apaixonada por backends, com foco principalmente em JavaScript e TypeScript com Nestjs, porém me aventurando em outras linguagens, como Java. Meus principais hobbies são escutar música, jogar e ver futebol',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: ['20'],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/GabrielLima2803',
        type: 'logo'
      }
    ]
  },
  {
    id: '41',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: "Enzo Lazzarin Dal'osto",
    description:
      'Possui formação técnica em Informática integrada ao Ensino Médio pelo Instituto Federal Catarinense (IFC) - Campus Araquari, com término previsto para 2024. Durante seus estudos, adquiriu ampla experiência em Javascript e C#, visando criação de jogos. Como membro da Fábrica de Software, adquiriu considerável conhecimento sobre Django DRF, e vue.js. Também atuou como Estagiário na SoftExpert, aprendendo e desenvolvendo um projeto React.',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: ['18'],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/Wecreds',
        type: 'logo'
      }
    ]
  },
  {
    id: '42',
    image: 'https://avatars.githubusercontent.com/u/48135737?v=4',
    name: 'Marcus Vinicius da Costa Graciano',
    description:
      'Formado em Técnico em Informática integrado e atualmente cursando Bacharelado em Sistemas de Informação, com conclusão prevista para 2024. Fascinado desde sempre por programação, seja ela em C, Javascript ou Python. Sendo as duas últimas as que mais tenho experiência e uso. Determinado e proativo, gosto de ajudar os outros, me dedicar e dar o meu melhor, sempre querendo mais! Minha pretensão com a fábrica é sempre aprender mais e mais (e talvez ensinar alguma coisa ou outra), além de, claro, conhecer pessoas e histórias novas. Ansioso pelas oportunidades e desafios que vêm pela frente!',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: ['23', '24', '25'],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/marcuscostagraciano',
        type: 'logo'
      }
    ]
  },
  {
    id: '43',
    image: ' https://avatars.githubusercontent.com/u/131360938?v=4',
    name: ' Luan Tiola Monteiro da Silva',
    description:
      'Olá me chamo Luan, sou monitor de programação e trabalho na fábrica se software, com objetivo de adquirir experiência tanto de trabalho quanto de conhecimento, sou um desenvolvedor full-stack.',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: [],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/luansilva25',
        type: 'logo'
      }
    ]
  },
  {
    id: '44',
    image: 'https://avatars.githubusercontent.com/u/126109612?v=4',
    name: 'Júlia Fuck',
    description:
      'Me chamo Júlia, tenho 16 anos e no meu tempo livre gosto de ler livros e assistir minhas séries favoritas. Também gosto de escrever, desenhar e amo pintar paisagens. Me inscrevi para a fábrica porque tenho interesse na área e gosto de desenvolver sites. Acredito que a fábrica irá me proporcionar grandes avanços e experiências.',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: [],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/fujulia',
        type: 'logo'
      }
    ]
  },
  {
    id: '45',
    image: 'https://avatars.githubusercontent.com/u/131203140?v=4',
    name: 'André Richartz Farias',
    description:
      'Eu sou André Farias, tenho 16 anos e moro em Joinville. Estou no segundo ano do curso técnico de Informática para Internet. Gosto de esportes, jogos eletrônicos e programação. Nos meu tempo livre, normalmente estou jogando ou aprimorando algum conhecimento.',
    occupation: { id: '2', description: 'Aluno - Técnico' },
    projectIds: [],
    publicationIds: [],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/andrerichartz',
        type: 'logo'
      }
    ]
  },
  {
    id: '46',
    image: 'https://avatars.githubusercontent.com/u/77009854?v=4',
    name: 'Cauã Vinicius Silva',
    description:
      'Possui formação técnica em Informática integrada ao Ensino Médio pelo Instituto Federal Catarinense (IFC) - Campus Araquari, com conclusão prevista para 2024. Durante seu período de formação, acumulou vasta experiência em JavaScript e automação de processos, destacando-se no desenvolvimento de ChatBots. Tem habilidades avançadas em Node.js, Django DRF, React e Vue.js. Proativo e com forte capacidade de trabalho em equipe, atua como presidente do Grêmio Estudantil do IFC Araquari e é membro da Fábrica de Software há três anos. Tem demonstrado habilidades em liderança e gestão de projetos, contribuindo significativamente para o ambiente acadêmico e de desenvolvimento de software.',
    projectIds: ['11', '16', '7', '18', '23'],
    occupation: {
      id: '2',
      description: 'Aluno - Técnico'
    },
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/Caussz',
        type: 'logo'
      },
      {
        icon: 'linkedin',
        href: 'https://www.linkedin.com/in/caussz/',
        type: 'logo'
      },
      {
        icon: 'twitter',
        href: 'https://x.com/caussx',
        type: 'logo'
      }
    ]
  },
  {
    id: '47',
    image: 'https://avatars.githubusercontent.com/u/48135556?v=4',
    name: 'Pietro Flemming',
    description: '',
    projectIds: ['23', '25'],
    occupation: {
      id: '3',
      description: 'Aluno - Graduação'
    },
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/PietroFlemming-Glov3r',
        type: 'logo'
      }
    ]
  },
  {
    id: '48',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Rafella Ulbrich',
    description:
      'Meus hobbies preferidos são ouvir música e ler, gosto muito de ir pra academia e participar do grupo de jovens na igreja. Entrei para a fábrica com o intuito de aprender muitas coisas e me preparar para um futuro emprego nessa área.',
    projectIds: ['18'],
    occupation: {
      id: '2',
      description: 'Aluno - Técnico'
    },
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/rafaaulbrich',
        type: 'logo'
      }
    ]
  },
  {
    id: '49',
    image: 'https://avatars.githubusercontent.com/u/90521432?v=4',
    name: 'Santiago Schons de Oliveira',
    description:
      'Eu tenho uma paixão por tecnologia, especialmente em redes de computadores e DevOps. No meu tempo livre, gosto de explorar novas ferramentas e desenvolver habilidades práticas relacionadas à minha área. Minhas intenções na área incluem buscar oportunidades profissionais onde eu possa aplicar meus conhecimentos para garantir operações eficientes e seguras, enquanto continuo aprimorando minhas habilidades através de cursos e experiências práticas.',
    projectIds: ['21'],
    occupation: {
      id: '3',
      description: 'Aluno - Graduação'
    },
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/rafaaulbrich',
        type: 'logo'
      }
    ]
  },
  {
    id: '50',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Mehran Misaghi',
    description: '',
    occupation: {
      id: '1',
      description: 'Professor'
    },
    publicationIds: [],
    projectIds: ['22'],
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/mmisaghi',
        type: 'logo'
      }
    ]
  },
  {
    id: '51',
    image: 'https://avatars.githubusercontent.com/u/98765432?v=4',
    name: 'Gianluca Starke',
    description:
      'Técnico em informática integrado ao Ensino Médio formado e cursando Bacharelado em Sistemas de Informação, ambos pelo Instituto Federal Catarinense (IFC) - Campus Araquari. Possui experiência com PHP, Django, JavaScript e SQLServer. Adora trabalhar em equipe e busca sempre melhorar através de estudo. Proativo em ajudar seus colegas e não tem medo de pedir ajuda quando precisa.',
    projectIds: ['23'],
    occupation: {
      id: '3',
      description: 'Aluno - Graduação'
    },
    socialLinks: [
      {
        icon: 'github',
        href: 'https://github.com/gianlucastarke',
        type: 'logo'
      }
    ]
  }
]

export { type IMembers, members, type IOccupations, occupations, type ILink }
