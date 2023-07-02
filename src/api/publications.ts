import { conferences, articles, books, type IPublications } from '@/_data/publications'
export default class PublicationsApi {
  getConferences(): IPublications[] {
    return conferences
  }
  getArticles(): IPublications[] {
    return articles
  }
  getBooks(): IPublications[] {
    return books
  }
}
