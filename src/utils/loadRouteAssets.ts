import type { RouteRecordNameGeneric } from 'vue-router'
import { loadMembers } from './loadMembers'
import { loadNotices } from './loadNotices'
import { loadProjects } from './loadProjects'

/** Loads what a page shows besides its own component. */
export async function loadRouteAssets(route: RouteRecordNameGeneric) {
  if (route === 'home') {
    // The sections have what to show when the API is unavailable.
    await Promise.allSettled([
      import('@/components/home/FactoryWorld.vue'),
      loadMembers(),
      loadNotices(),
    ])
  }
  if (route === 'members') await loadMembers()
  if (route === 'member') await Promise.all([loadMembers(), loadProjects()])
  if (route === 'projects' || route === 'project') await loadProjects()
  if (route === 'notices' || route === 'notice') await loadNotices()
}
