import type { IconName } from '@/components/global/AppIcon.vue'

interface Project {
  label: string
  href: string
  icon: IconName
  color: string
  angle: number
}

/** Systems shown around the island on the home page. */
export const projects: Project[] = [
  {
    label: 'Painel',
    href: 'https://painel.fabricadesoftware.ifc.edu.br',
    icon: 'dashboard',
    color: 'var(--color-brand-orange)',
    angle: 212,
  },
  {
    label: 'Fabroku',
    href: 'https://fabroku.fabricadesoftware.ifc.edu.br',
    icon: 'cloud',
    color: 'var(--color-brand-teal)',
    angle: 328,
  },
  {
    label: 'Águas',
    href: 'https://aguas.fabricadesoftware.ifc.edu.br',
    icon: 'droplets',
    color: 'var(--color-brand-blue)',
    angle: 158,
  },
  {
    label: 'Door',
    href: 'https://door.fabricadesoftware.ifc.edu.br',
    icon: 'door',
    color: 'var(--color-brand-red)',
    angle: 22,
  },
]
