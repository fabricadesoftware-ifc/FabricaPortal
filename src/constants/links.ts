import type { IconName } from '@/components/global/AppIcon.vue'

export const GITHUB_URL = 'https://github.com/fabricadesoftware-ifc'

export const navLinks = [
  { label: 'Início', to: '/' },
  { label: 'Projetos', to: '/projects' },
  { label: 'Membros', to: '/members' },
  { label: 'Notícias', to: '/notices' },
]

export const socials: { label: string; href: string; icon: IconName }[] = [
  { label: 'GitHub', href: GITHUB_URL, icon: 'github' },
  {
    label: 'LinkedIn',
    href: 'https://br.linkedin.com/company/nodes-fabrica-de-software',
    icon: 'linkedin',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/fabricadesoftware.ifc/',
    icon: 'instagram',
  },
]
