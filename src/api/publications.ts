import { publications, type IFormats, formats, type IPublications } from '@/_data/publications'

export default class PublicationsApi {
  getPublications(): IPublications[] {
    return publications
  }

  getFormats(): IFormats[] {
    return formats
  }

  getPublicationsById(id: string): IPublications | undefined {
    return publications.find((publication) => publication.id === id)
  }

  getFormatById(id: string): IFormats | undefined {
    return formats.find((format) => format.id === id)
  }

  getPublicationsByFormat(formatId: string): IPublications[] {
    const format = formats.find((format) => format.id === formatId)

    if (!format) {
      return []
    }

    const formatPublications = publications.filter(
      (publication) => publication.formatId === format.id
    )
    return formatPublications
  }

  getPublicationsByMember(memberId?: string): IPublications[] {
    if (!memberId) {
      return []
    }

    const memberPublications = publications.filter((publication) => {
      return publication.membersIds && publication.membersIds.includes(memberId)
    })

    return memberPublications
  }
}
