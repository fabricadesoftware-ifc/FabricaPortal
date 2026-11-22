import type { Technology, TechnologyGroup } from '@/types/technology'

// Logos from Devicon (https://devicon.dev, MIT) and Simple Icons (https://simpleicons.org, CC0).
// The dark ones were lightened to be seen on the dark background.
const icons = import.meta.glob<string>('@/assets/technologies/*.svg', {
  eager: true,
  import: 'default',
})

const technology = (name: string, icon: string) => ({
  name,
  icon: icons[`/src/assets/technologies/${icon}.svg`]!,
})

export const technologyGroups: TechnologyGroup[] = [
  {
    name: 'Front-End',
    technologies: [
      technology('Vue.js', 'vue'),
      technology('React', 'react'),
      technology('JavaScript', 'javascript'),
      technology('TypeScript', 'typescript'),
      technology('HTML', 'html'),
      technology('CSS', 'css'),
      technology('Vite', 'vite'),
      technology('Tailwind', 'tailwind'),
      technology('Vuetify', 'vuetify'),
    ],
  },
  {
    name: 'Back-End',
    technologies: [
      technology('Python', 'python'),
      technology('Django', 'django'),
      technology('Node.js', 'node'),
      technology('Express', 'express'),
      technology('C++', 'cpp'),
      technology('Arduino', 'arduino'),
    ],
  },
  {
    name: 'Dados',
    technologies: [
      technology('PostgreSQL', 'postgresql'),
      technology('Redis', 'redis'),
      technology('Prisma', 'prisma'),
      technology('Pandas', 'pandas'),
      technology('Streamlit', 'streamlit'),
      technology('MinIO', 'minio'),
      technology('Cloudinary', 'cloudinary'),
    ],
  },
  {
    name: 'DevOps & Ferramentas',
    technologies: [
      technology('Git', 'git'),
      technology('GitHub', 'github'),
      technology('GitHub Actions', 'github-actions'),
      technology('Docker', 'docker'),
      technology('Swagger', 'swagger'),
      technology('ESLint', 'eslint'),
      technology('Prettier', 'prettier'),
      technology('npm', 'npm'),
      technology('Figma', 'figma'),
    ],
  },
]

const technologies = technologyGroups.flatMap((group) => group.technologies)

export const findTechnology = (name: string): Technology =>
  technologies.find((technology) => technology.name === name) ?? { name }
