import { useFormContext } from 'react-hook-form'
import { FormContainer, MinutesCountdownInput, TaskInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../context/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        list="task-suggestion"
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="task-suggestion">
        <option value="Projeto 01" />
        <option value="Projeto 02" />
        <option value="Projeto 03" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesCountdownInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={1}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
