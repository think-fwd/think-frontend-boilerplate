import { Stack, Typography } from '@mui/material'
import { PageLoading } from '@components/page-loading'

export const AcceptInviteLoading = (): JSX.Element => {
  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="column" spacing={1}>
        <Typography variant="h1" color="secondary.main">
          Aceitar Convite
        </Typography>
        <Typography variant="subtitle1" color="muted.main">
          Estamos analisanvo a validade do seu convite.
        </Typography>
        <PageLoading label="Verificando..." />
      </Stack>
    </Stack>
  )
}
