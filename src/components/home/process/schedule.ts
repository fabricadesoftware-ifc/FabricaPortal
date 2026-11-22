import type { ProcessStep } from '@/types/process'

const FIRST_DELAY = 0.3
const SECONDS_PER_CHARACTER = 0.028
const ANSWER_DELAY = 0.2
const PAUSE = 0.3

/** When each command of a step is typed and answered, in seconds. */
export function scheduleCommands(commands: ProcessStep['commands']) {
  let time = FIRST_DELAY

  const scheduled = commands.map((command) => {
    const start = time
    const duration = command.input.length * SECONDS_PER_CHARACTER
    const answer = start + duration + ANSWER_DELAY
    time = answer + PAUSE

    return { ...command, start, duration, answer }
  })

  return { commands: scheduled, end: time }
}
