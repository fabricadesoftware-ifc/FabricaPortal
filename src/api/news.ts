import { news, type INews } from '@/data/mock/news'
export default class NewsApi {
  getNews(): INews[] {
    return news
  }
  getNewsById(id: string): INews | undefined {
    return news.find((News) => News.id === id)
  }
  getSixNews(): INews[] {
    return news.slice(-6).reverse()
  }
}
