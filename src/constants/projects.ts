import type { IconName } from '@/components/global/AppIcon.vue'

interface Project {
  /** Name of the project, which also leads to its page. */
  label: string
  icon: IconName
  color: string
  /** Starting position on the orbit, in degrees, clockwise from the right. */
  angle: number
  /** The outer ring is only on larger screens, and turns the other way. */
  ring: 'inner' | 'outer'
}

/** Systems shown around the island on the home page. */
export const projects: Project[] = [
  {
    label: 'Painel',
    icon: 'dashboard',
    color: 'var(--color-brand-orange)',
    angle: 210,
    ring: 'inner',
  },
  {
    label: 'Door',
    icon: 'door',
    color: 'var(--color-brand-red)',
    angle: 330,
    ring: 'inner',
  },
  {
    label: 'Águas',
    icon: 'droplets',
    color: 'var(--color-brand-blue)',
    angle: 90,
    ring: 'inner',
  },
  {
    label: 'Fabroku',
    icon: 'cloud',
    color: 'var(--color-brand-teal)',
    angle: 0,
    ring: 'outer',
  },
  {
    label: 'Histologia',
    icon: 'microscope',
    color: '#8080ff',
    angle: 120,
    ring: 'outer',
  },
  {
    label: 'Catraca',
    icon: 'lock',
    color: '#10b981',
    angle: 240,
    ring: 'outer',
  },
]
