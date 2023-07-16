import { links, type ILink, socialNetworks } from '@/_data/nav'

export default class NavApi {
  getLinks(): ILink [] {
    return links
  }
  getSocialNetworks(): ILink [] {
    return socialNetworks
  }
}
