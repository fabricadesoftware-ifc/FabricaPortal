import { toValue, watchEffect, type MaybeRefOrGetter } from 'vue'

const SITE_NAME = 'Fábrica de Software'

/** "Fábrica de Software - Projetos" on the tab. The home page has only the name of the site. */
export function usePageTitle(title?: MaybeRefOrGetter<string | undefined>) {
  watchEffect(() => {
    const page = toValue(title)
    document.title = page ? `${SITE_NAME} - ${page}` : SITE_NAME
  })
}
