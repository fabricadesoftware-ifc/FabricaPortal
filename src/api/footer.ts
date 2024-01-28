import { footer, type IFooter } from '@/data/mock/footer'

export default class FooterApi {
  getFooter(): IFooter [] {
    return footer
  }
}
