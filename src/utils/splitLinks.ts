/** Splits a text in parts, separating its links: "Veja https://a.br" -> "Veja ", "https://a.br". */
export const splitLinks = (text: string) =>
  text
    .split(/(https?:\/\/[^\s]*[^\s.,;:!?)])/)
    .filter(Boolean)
    .map((part) => ({ text: part, isLink: /^https?:\/\//.test(part) }))
