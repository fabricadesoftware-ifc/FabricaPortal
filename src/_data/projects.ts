interface IProjects {
  id: string
  image: string
  title: string
  status: string
  type: string
  description: string
}

const projects: Array<IProjects> = [
  {
    id: '1',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/logo-eventos.jpg',
    title: 'Gestão de Eventos',
    status: 'finalizado',
    type: 'extensão',
    description:
      'O projeto tem por objetivo desenvolver um sistema web para a gestão de eventos do Instituto Federal Catarinense. O sistema deve permitir a criação e gestão de eventos, a submissão de artigos científicos para um evento específico, a autenticação dos usuários por meio da rede CAFe...'
  },
  {
    id: '2',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/setting/%C3%ADndice_il3boLh.png',
    title: 'NODES',
    status: 'finalizado',
    type: 'extensão',
    description: 'Portal para Núcleo Operacionalização de Desenvolvimento de Sistemas'
  },
  {
    id: '3',
    image: 'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/index2.png',
    title: 'NR2',
    status: 'finalizado',
    type: 'extensão',
    description: 'Portal para o Núcleo de Redes Sem Fio e Redes Avançadas.'
  },
  {
    id: '4',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/WhatsApp_Image_2018-09-17_at_13.14.24.jpeg',
    title: 'Goofy Educa',
    status: 'finalizado',
    type: 'extensão',
    description: 'O projeto tem o foco de gerar auxílio à aprendizagem para o ensino fundamental.'
  },
  {
    id: '5',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/WhatsApp_Image_2018-09-17_at_13.14.21.jpeg',
    title: 'Readequação do Site Institucional',
    status: 'finalizado',
    type: 'extensão',
    description: 'O presente projeto tem por objetivo dar continuidade às adequações na página do Instituto Federal Catarinense (IFC), de acordo com as normas previstas, atendendo assim, as exigências da Controladoria Geral da União (CGU).'
  },
  {
    id: '6',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/issem.png',
    title: 'ISSEM',
    status: 'finalizado',
    type: 'extensão',
    description: 'O Instituto de Seguridade dos Servidores Municipais de Jaraguá do Sul (ISSEM)...'
  },
  {
    id: '7',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/setting/%C3%ADndice.png',
    title: 'Hackathon de Informática como princípio de aprendizagem ativa',
    status: 'em andamento',
    type: 'extensão',
    description: 'O termo Hackathon é composto da união entre duas palavras da língua inglesa, hack (programar) e marathon (maratona), a sua ﬁnalidade é fomentar a criatividade e trabalho em equipe na busca de uma solução para um problema proposta (geralmente um problema real da comunidade), por meio da utilização de tecnologia, em nosso caso a tecnologia da informação. Assim, o projeto visa apresentar para os alunos um ou mais problemas a serem desenvolvidos em equipe, desta forma os discentes podem utilizar os conhecimentos adquiridos e em aquisição durante o curso para propor uma solução envolvendo a criação de um software e o desenvolvimento do respectivo protótipo (prova de conceito). Desta forma o Hackathon visa contribuir para a formação do discente tanto no aspecto pessoal como técnico, possibilitando que vivencie o trabalho em equipe, pratique a criatividade de forma sistematizada, controlada (métodos para condução da jornada) e acompanhada/suportada pelos docentes das disciplinas. O Hackathon contará com a mentoria dos professores do curso da área de informática, apresentando as principais ferramentas a serem utilizadas durante a competição, bem como efetuando o acompanhamento do desenvolvimento dos respectivos protótipos. As empresas parceiras serão responsáveis por auxiliar na avaliação ﬁnal das propostas apresentadas.'
  },
  {
    id: '8',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/project/WhatsApp_Image_2018-09-17_at_13.14.27.jpeg',
    title: 'Controle de Acesso',
    status: 'finalizado',
    type: 'extensão',
    description: 'Projeto coordenado por Eduardo da Silva, com os participantes Gueretz, Sebrão e João, tendo o intuito de fornecer controle de acesso utilizando a plataforma Arduino.'
  },
  {
    id: '9',
    image:
      'https://fabricadesoftware.ifc.edu.br/static/media/image_upload/setting/%C3%ADndice_il3boLh.png',
    title: 'NAIV',
    status: 'finalizado',
    type: 'ensino',
    description: 'Núcleo de Aprendizagem Interativo virtual, é um sistema onde usuários terão acesso a conteúdo disponibilizados por professores, com intuito de estudar para concurso público.'  
  }
]


export {projects, type IProjects}