import { links, type ILink, socialNetworks } from '@/data/mock/nav'

export default class NavApi {
  getLinks(): ILink [] {
    return links
  }
  getSocialNetworks(): ILink [] {
    return socialNetworks
  }
}
