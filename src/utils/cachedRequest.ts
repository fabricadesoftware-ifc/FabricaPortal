const PREFIX = 'fabrica:cache:'
const TIME_TO_LIVE = 15 * 60_000

interface Entry<T> {
  savedAt: number
  data: T
}

const pending = new Map<string, Promise<unknown>>()

function read<T>(key: string): T | undefined {
  try {
    const raw = localStorage.getItem(PREFIX + key)
    if (!raw) return

    const entry = JSON.parse(raw) as Entry<T>
    if (Date.now() - entry.savedAt < TIME_TO_LIVE) return entry.data

    localStorage.removeItem(PREFIX + key)
  } catch {
    // Storage blocked or corrupted: behave as if there were no cache.
  }
}

function write<T>(key: string, data: T) {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify({ savedAt: Date.now(), data }))
  } catch {
    // Storage full or blocked: the data is still returned, just not kept.
  }
}

/**
 * Runs `load` once per key: shares the request in progress and keeps the result in
 * localStorage for 15 minutes, because GitHub limits the requests per hour. Failures are not kept.
 */
export function cachedRequest<T>(key: string, load: () => Promise<T>): Promise<T> {
  const cached = read<T>(key)
  if (cached !== undefined) return Promise.resolve(cached)

  let request = pending.get(key) as Promise<T> | undefined

  if (!request) {
    request = load()
      .then((data) => {
        write(key, data)
        return data
      })
      .finally(() => pending.delete(key))
    pending.set(key, request)
  }
  return request
}
