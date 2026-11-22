import type { ProcessStep } from '@/types/process'

export const processSteps: ProcessStep[] = [
  {
    name: 'Proposta',
    summary: 'O problema vira um escopo claro.',
    tags: ['Requisitos', 'Gestão de produto'],
    commands: [
      { input: 'fabrica novo-projeto "agendamento"', output: 'problema registrado' },
      { input: 'fabrica entrevistar --cliente', output: 'necessidades documentadas' },
      { input: 'fabrica escopo --revisar', output: 'requisitos levantados · 8 histórias' },
      { input: 'fabrica backlog --priorizar', output: 'histórias ordenadas por valor' },
      { input: 'fabrica equipe --montar', output: 'docente orientador + 5 discentes' },
    ],
  },
  {
    name: 'Design',
    summary: 'O escopo vira telas que fazem sentido.',
    tags: ['UX/UI', 'Prototipação'],
    commands: [
      { input: 'fabrica fluxo --desenhar', output: 'jornada do usuário mapeada' },
      { input: 'fabrica wireframe --criar', output: 'telas rascunhadas' },
      { input: 'fabrica prototipo --navegar', output: 'protótipo clicável pronto' },
      { input: 'fabrica acessibilidade --checar', output: 'contraste e teclado conferidos' },
      { input: 'fabrica validar --cliente', output: 'ajustes incorporados' },
    ],
  },
  {
    name: 'Desenvolvimento',
    summary: 'As telas viram código revisado.',
    tags: ['Front-End', 'Back-End', 'Code review'],
    commands: [
      { input: 'fabrica repositorio --criar', output: 'branch main protegida' },
      { input: 'fabrica api --modelar', output: 'banco de dados e rotas definidos' },
      { input: 'fabrica dev --front --back', output: 'telas conectadas à API' },
      { input: 'fabrica testes --rodar', output: 'todos os testes passaram' },
      { input: 'fabrica pr --revisar', output: 'código aprovado pelo docente' },
    ],
  },
  {
    name: 'Entrega',
    summary: 'O código chega a quem precisa dele.',
    tags: ['Deploy', 'Suporte'],
    commands: [
      { input: 'fabrica build --producao', output: 'pacote gerado' },
      { input: 'fabrica deploy', output: 'publicado no Fabroku' },
      { input: 'fabrica treinar --usuarios', output: 'cliente pronto para usar' },
      { input: 'fabrica monitorar', output: 'sistema no ar' },
      { input: 'fabrica retrospectiva', output: 'aprendizados para o próximo projeto' },
    ],
  },
]
