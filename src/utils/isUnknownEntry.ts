import type { Router } from 'vue-router'

/** Whether the visit starts at an address that does not exist. */
export function isUnknownEntry(router: Router) {
  return router.resolve(router.options.history.location).name === 'not-found'
}
