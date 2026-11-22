import type { IconName } from '@/components/global/AppIcon.vue'

interface Project {
  /** Name of the project, which also leads to its page. */
  label: string
  icon: IconName
  color: string
  angle: number
}

/** Systems shown around the island on the home page. */
export const projects: Project[] = [
  {
    label: 'Painel',
    icon: 'dashboard',
    color: 'var(--color-brand-orange)',
    angle: 212,
  },
  {
    label: 'Fabroku',
    icon: 'cloud',
    color: 'var(--color-brand-teal)',
    angle: 328,
  },
  {
    label: 'Águas',
    icon: 'droplets',
    color: 'var(--color-brand-blue)',
    angle: 158,
  },
  {
    label: 'Door',
    icon: 'door',
    color: 'var(--color-brand-red)',
    angle: 22,
  },
]
