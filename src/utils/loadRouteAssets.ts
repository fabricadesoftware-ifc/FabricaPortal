import type { RouteRecordNameGeneric } from 'vue-router'

/** Loads what a page shows besides its own component. */
export async function loadRouteAssets(route: RouteRecordNameGeneric) {
  if (route === 'home') await import('@/components/home/FactoryWorld.vue')
}
