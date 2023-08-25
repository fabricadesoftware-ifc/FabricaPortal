import { footer, type IFooter } from '@/_data/footer'

export default class FooterApi {
  getFooter(): IFooter [] {
    return footer
  }
}
