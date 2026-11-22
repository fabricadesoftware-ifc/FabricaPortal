import type { Notice } from '@/types/notice'

/** Most recent first. */
export const latestNotices: Notice[] = [
  {
    date: '2026-04-13',
    category: 'Processo seletivo',
    title: 'Classificados no processo seletivo',
    summary:
      'Confira a lista de aprovados e os próximos passos para entrar na Fábrica de Software.',
    color: 'var(--color-brand-orange)',
  },
  {
    date: '2026-03-31',
    category: 'Processo seletivo',
    title: 'Lista de inscritos no processo seletivo',
    color: 'var(--color-brand-teal)',
  },
  {
    date: '2026-03-25',
    category: 'Inscrições',
    title: 'Abertas as inscrições do processo seletivo',
    color: '#ff5a52',
  },
]
