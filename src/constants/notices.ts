import type { Notice, NoticeCategory } from '@/types/notice'

export const noticeCategories: Record<NoticeCategory, { color: string }> = {
  'Processo seletivo': { color: 'var(--color-brand-orange)' },
  Inscrições: { color: 'var(--color-brand-teal)' },
  Projetos: { color: '#8080ff' },
}

/** The color of each item of the home page, in turns. */
export const noticeColors = ['var(--color-brand-orange)', 'var(--color-brand-teal)', '#ff5a52']

/** What the list of the API does not have, by the id of the notice. Summaries of its text. */
export const noticeDetails: Record<number, Pick<Notice, 'category' | 'summary'>> = {
  11: {
    category: 'Processo seletivo',
    summary:
      'Seleção com 20 vagas para alunos do Técnico, do Bacharelado e do Tecnólogo, por histórico escolar e entrevista individual.',
  },
  12: {
    category: 'Inscrições',
    summary:
      'O Edital 001/2026 seleciona estudantes dos cursos de Informática do campus para participar de projetos reais de ensino, pesquisa e extensão.',
  },
  13: {
    category: 'Processo seletivo',
    summary:
      'Foram 28 inscrições, de estudantes do Técnico em Informática para Internet, de Sistemas de Informação e de Redes de Computadores.',
  },
  14: {
    category: 'Processo seletivo',
    summary:
      'Sai a classificação final do Edital 001/2026, por histórico escolar (40%) e teste técnico (60%). Ela vale durante todo o ano letivo de 2026.',
  },
}

/** Shown when the API is unavailable. Most recent first. */
export const latestNotices: Notice[] = [
  {
    id: 14,
    date: '2026-04-13',
    title: 'Divulgação da Lista de Classificados - Edital 001/2026',
    color: 'var(--color-brand-orange)',
    ...noticeDetails[14],
  },
  {
    id: 13,
    date: '2026-03-31',
    title: 'Divulgação da Lista de Inscritos – Edital 001/2026',
    color: 'var(--color-brand-teal)',
    ...noticeDetails[13],
  },
  {
    id: 12,
    date: '2026-03-25',
    title: 'Processo Seletivo – Fábrica de Software IFC Araquari 2026',
    color: '#ff5a52',
    ...noticeDetails[12],
  },
]
