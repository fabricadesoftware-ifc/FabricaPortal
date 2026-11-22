/** Asks the portal API only once. A failed request is tried again by the next call. */
export function createRequest<T>(path: string) {
  let request: Promise<T> | undefined

  async function send(): Promise<T> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${path}`)
    if (!response.ok) throw new Error(`Falha ao buscar ${path} (${response.status})`)
    return response.json()
  }

  return () => {
    request ??= send().catch((error) => {
      request = undefined
      throw error
    })
    return request
  }
}
