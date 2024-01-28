import { news, type INews } from '@/data/mock/news'
export default class NewsApi {
  getNews(): INews[] {
    return news
  }
  getSixNews(): INews[] {
    return news.slice(-6).reverse()
  }
}
