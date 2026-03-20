import { type Iimage } from './member'

export interface INew {
  id: number | string
  title: string
  post_date: string | Date
  user: string
  about?: string
  description?: string
  content?: string
  images: Iimage[]
}

export interface INewsState {
  news: INew[]
  selectedNew: INew | null
  error: boolean
  isLoading: boolean
}
