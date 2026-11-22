export interface ProcessStep {
  name: string
  /** What the step delivers, in one sentence. */
  summary: string
  tags: string[]
  /** Commands of the illustrative terminal, with their answers. */
  commands: { input: string; output: string }[]
}
