/** "2026-04-13" -> April 13th, without the time zone shifting the day. */
function parseDate(date: string) {
  const [year, month, day] = date.split('-').map(Number)
  return new Date(year!, month! - 1, day)
}

const formatMonth = (date: string, month: 'long' | 'short') =>
  `${parseDate(date).toLocaleDateString('pt-BR', { month }).replace('.', '')} ${date.slice(0, 4)}`

/** "2026-04-13" -> "13 de abril de 2026" */
export const formatLongDate = (date: string) =>
  parseDate(date).toLocaleDateString('pt-BR', { dateStyle: 'long' })

/** "2026-04-13T22:12:54Z" -> "13/04/2026" */
export const formatDay = (date: string) => new Date(date).toLocaleDateString('pt-BR')

/** "2026-04-13" -> "abril 2026" */
export const formatLongMonth = (date: string) => formatMonth(date, 'long')

/** "2026-04-13" -> "abr 2026" */
export const formatShortMonth = (date: string) => formatMonth(date, 'short')
