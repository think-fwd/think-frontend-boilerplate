import { LoadingButton } from '@mui/lab'
import { Trash } from '@phosphor-icons/react'
import { useContextSelector } from 'use-context-selector'
import { SetupPageRepositoryContext } from '../context'
import { Alert, AlertTitle, Chip, Stack, Typography } from '@mui/material'
import { SetupPageContext } from '@pages/setup/context'

export const SetupRepositoryConfiguredCredentials = (): JSX.Element | null => {
  const organization = useContextSelector(
    SetupPageContext,
    (s) => s.organization
  )

  const removing = useContextSelector(
    SetupPageRepositoryContext,
    (s) => s.removing
  )

  const handleRemoveRepositoryAccount = useContextSelector(
    SetupPageRepositoryContext,
    (s) => s.handleRemoveRepositoryAccount
  )

  if (!organization?.repository) return null

  return (
    <Stack direction="column" spacing={2}>
      <Alert
        severity="info"
        action={
          <LoadingButton
            color="inherit"
            size="small"
            loading={removing}
            onClick={handleRemoveRepositoryAccount}
          >
            <Stack direction="row" spacing={0.5} alignItems="center" px={0.2}>
              <Trash size={16} weight="duotone" />
              <Typography variant="caption" lineHeight={1}>
                Remover
              </Typography>
            </Stack>
          </LoadingButton>
        }
      >
        <AlertTitle>
          <Typography variant="subtitle2" fontWeight="bold">
            Provedor configurado com sucesso
          </Typography>
        </AlertTitle>
        <Stack direction="column" spacing={1} alignItems="flex-start">
          <Typography>
            {organization.repository.provider} / {organization.repository.name}
          </Typography>
          <Chip
            label={organization.repository.status}
            color={
              organization.repository.status === 'connected'
                ? 'success'
                : 'warning'
            }
            size="small"
            style={{ borderRadius: 3 }}
          />
        </Stack>
      </Alert>
    </Stack>
  )
}
