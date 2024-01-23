import { CircularProgress, Stack, Typography } from '@mui/material'

export const SetupPageLoading = () => {
  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row" spacing={3} alignItems="center">
        <Typography variant="h1" color="secondary.main">
          Carregando...
        </Typography>
        <CircularProgress size={32} />
      </Stack>
      <Typography variant="subtitle1" color="muted.main" lineHeight={1.4}>
        Estamos buscando os dados da sua organização para que você possa
        finalizar as configurações iniciais e começar utilizar a plataforma.
      </Typography>
    </Stack>
  )
}
