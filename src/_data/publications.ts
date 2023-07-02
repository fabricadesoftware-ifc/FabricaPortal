interface IPublications {
  id: string
  title: string
  member: string
  data: string
}

const books: Array<IPublications> = [
  {
    id: '1',
    title:
      'Chapter: Analyzing the Effectiveness of Self-Organized Public Key Management on MANETs under Lack of Cooperation and Impersonation attacks.',
    member: 'Eduardo da Silva, Michele N. Lima, Aldri L. dos Santos, Luiz C. P. Albini.',
    data: 'Springer, November 2009'
  }
]
const articles: Array<IPublications> = [
  {
    id: '1',
    title:
      'Chapter: Analyzing the Effectiveness of Self-Organized Public Key Management on MANETs under Lack of Cooperation and Impersonation attacks.',
    member: 'Eduardo da Silva, Michele N. Lima, Aldri L. dos Santos, Luiz C. P. Albini.',
    data: 'Springer, November 2009'
  }
]
const conferences: Array<IPublications> = [
  {
    id: '1',
    title:
      'Chapter: Analyzing the Effectiveness of Self-Organized Public Key Management on MANETs under Lack of Cooperation and Impersonation attacks.',
    member: 'Eduardo da Silva, Michele N. Lima, Aldri L. dos Santos, Luiz C. P. Albini.',
    data: 'Springer, November 2009'
  }
]

export {conferences, articles, books, type IPublications}