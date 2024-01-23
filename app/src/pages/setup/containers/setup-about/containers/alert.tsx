import { Alert, Typography } from '@mui/material'
import { SealWarning } from '@phosphor-icons/react'
import { useContextSelector } from 'use-context-selector'
import { SetupPageAboutContext } from '../context'

export const SetupPageAboutAlert = (): JSX.Element | null => {
  const error = useContextSelector(SetupPageAboutContext, (s) => s.error)

  if (!error?.message) return null

  return (
    <Alert
      title="Erro"
      severity="error"
      icon={<SealWarning weight="duotone" />}
    >
      <Typography variant="caption">{error.message}</Typography>
    </Alert>
  )
}
