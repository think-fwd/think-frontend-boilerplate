import { SetupPageContext } from '../context'
import { useContextSelector } from 'use-context-selector'
import { Stack, Step, StepLabel, Stepper } from '@mui/material'
import { SetupPageStepsEnum } from '../types'
import { useSearchParams } from 'react-router-dom'

export const SetupPageStepper = (): JSX.Element => {
  const [searchParams] = useSearchParams()
  const loading = useContextSelector(SetupPageContext, (s) => s.loading)
  const step = searchParams.get('step') || SetupPageStepsEnum.about

  const steps = [
    { key: SetupPageStepsEnum.about, label: 'Organização' },
    { key: SetupPageStepsEnum.scrum, label: 'Scrum' },
    { key: SetupPageStepsEnum.repository, label: 'Repositório' },
    { key: SetupPageStepsEnum.members, label: 'Membros' },
  ]

  const stepIndex = steps.findIndex((i) => i.key === step)

  return (
    <Stack direction="column">
      <Stepper
        activeStep={stepIndex}
        alternativeLabel
        sx={{ opacity: loading ? 0.5 : 1 }}
      >
        {steps.map((i) => (
          <Step key={`step-${i.key}`}>
            <StepLabel>{i.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Stack>
  )
}
