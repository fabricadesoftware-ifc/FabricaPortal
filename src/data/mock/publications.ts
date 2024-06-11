interface IPublications {
  id: string
  title: string
  members: string
  data: string
  membersIds?: string[]
  formatId: string
}
interface IFormats {
  id: string
  description: string
}
const formats: Array<IFormats> = [
  {
    id: '1',
    description: 'Livros e capítulos de livros'
  },
  {
    id: '2',
    description: 'Artigos'
  },
  {
    id: '3',
    description: 'Conferências'
  },
]
const publications: Array<IPublications> = [
  {
    id: '1',
    title:
      'A experiência do ambiente da Fábrica de Software nas atividades de ensino do curso de Sistemas de Informação do IFC - Campus Araquari',
    members: 'MOTA, Casemiro; DA SILVA, Eduardo; BRAZ, Fernando; RIEGEL, Ivo; MOTA, Joice; MENDES, Marco André; DE OLIVEIRA, Paulo Cesar.',
    data: '28/07/2014',
    membersIds: ['2', '9', '5', '14', '11'],
    formatId: '2'
  },
  {
    id: '2',
    title:
      'IT-CMF and BPM Critical Capability: Improving Software Development Lab on academic context',
    members: 'KUBIS, Heloisa M.; DE MOURA, Fábio L.; MOTA, Joice; DE SÁ-SOARES, Filipe; KAWASHITA, Ilka; TAKAGI; Nilton.',
    data: '15/01/2021',
    membersIds: ['1', '52'],
    formatId: '2'
  },
  {
    id: '3',
    title:
      'Devising Information Systems and Technology Evolutionary Paths with IT-CMF',
    members: 'DE MOURA, Fábio L; DE SÁ-SOARES, Filipe.',
    data: '16/01/2021',
    membersIds: ['1'],
    formatId: '2'
  },
]

export { publications, type IPublications, type IFormats, formats}