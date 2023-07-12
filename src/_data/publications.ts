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
    membersIds: ['2', '5', '14'],
    formatId: '2'
  }
]

export { publications, type IPublications, type IFormats, formats}