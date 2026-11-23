/** 21.07 -> "21,1". Missing readings become "--". */
export function formatReading(
  value: number | null | undefined,
  maxDigits = 1,
  minDigits = maxDigits,
) {
  if (value == null) return '--'
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits,
    useGrouping: false,
  })
}
