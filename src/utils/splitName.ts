import { isParticle } from './shortenName'

/** "Fábio Longo de Moura" -> ["Fábio Longo", "de Moura"] */
export function splitName(name: string): [string, string] {
  const words = name.split(' ')
  let start = words.length - 1
  while (start > 1 && isParticle(words[start - 1]!)) start--

  return start > 0 ? [words.slice(0, start).join(' '), words.slice(start).join(' ')] : [name, '']
}
