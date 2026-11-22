/** "Fábio Longo de Moura" -> "FM" */
export function getInitials(name: string) {
  const words = name.split(' ')
  const last = words.length > 1 ? words.at(-1)! : ''

  return (words[0]!.charAt(0) + last.charAt(0)).toUpperCase()
}
