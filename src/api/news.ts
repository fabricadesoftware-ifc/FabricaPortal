import { news, type INews } from '@/_data/news'
export default class NewsApi {
    getNews(): INews[] {
        return news
    }
}