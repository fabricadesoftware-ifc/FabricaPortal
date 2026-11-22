import { normalizeText } from './normalizeText'

/** "Fábio L. Moura" -> "fabio-l-moura" */
export const slugify = (text: string) =>
  normalizeText(text)
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
