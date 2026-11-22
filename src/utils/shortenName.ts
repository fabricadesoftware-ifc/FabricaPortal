const PARTICLES = ['da', 'das', 'de', 'do', 'dos', 'e']

export const isParticle = (word: string) => PARTICLES.includes(word.toLowerCase())

/** "Ana Clara Souza de Lima" -> "Ana C. Lima". Names of up to three words stay the same. */
export function shortenName(name: string) {
  const words = name.trim().split(/\s+/)
  const mainWords = words.filter((word) => !isParticle(word))
  if (mainWords.length <= 3) return words.join(' ')

  return `${mainWords[0]} ${mainWords[1]!.charAt(0)}. ${mainWords.at(-1)}`
}
