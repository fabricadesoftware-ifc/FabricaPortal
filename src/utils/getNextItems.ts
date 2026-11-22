/** The items after that index, going back to the start of the list. */
export const getNextItems = <T>(items: T[], index: number, count: number) =>
  [...items.slice(index + 1), ...items.slice(0, Math.max(0, index))].slice(0, count)
