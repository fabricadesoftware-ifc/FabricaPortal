import { watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

/** Shows the 404 page when nothing has that address, which stays the same. */
export function useNotFound(isUnknown: () => boolean) {
  const route = useRoute()
  const router = useRouter()
  const { name } = route

  watch(isUnknown, (value) => {
    // Unknown while leaving to another page does not count.
    if (!value || route.name !== name) return
    router.replace({ name: 'not-found', params: { path: route.path.slice(1).split('/') } })
  })
}
