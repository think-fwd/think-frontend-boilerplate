import { LoadingButton } from '@mui/lab'
import { useLocation } from 'react-router-dom'
import { ActiveAccountContext } from '../context'
import { Stack, Alert, Typography, Container, Grid } from '@mui/material'
import { useContextSelector } from 'use-context-selector'
import { FormInputText } from '@components/form-input-text'
import FormInputPinCode from '@components/form-input-pin-code'
import { useForm } from 'react-hook-form'
import { ActiveAccountFormType } from '../types'

export const ActiveAccountFormContainer = (): JSX.Element => {
  const error = useContextSelector(ActiveAccountContext, (s) => s.error)
  const loading = useContextSelector(ActiveAccountContext, (s) => s.loading)
  const handleSubmitForm = useContextSelector(
    ActiveAccountContext,
    (s) => s.handleSubmit
  )

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const email = queryParams.get('email')

  const { handleSubmit, control } = useForm<ActiveAccountFormType>({
    defaultValues: {
      email: email || '',
    },
  })

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sm={3} sx={{ display: { xs: 'none', sm: 'block' } }}></Grid>
        <form onSubmit={handleSubmit((data) => handleSubmitForm(data))}>
          <Stack direction="column" spacing={1}>
            <Stack direction="column" spacing={1}>
              <Typography variant="h1" color="secondary.main">
                Ativar Conta
              </Typography>
              <Typography variant="subtitle1" color="muted.main">
                Falta pouco para você ter acesso ao nosso crm
              </Typography>
            </Stack>
            <Stack direction="column" spacing={4}>
              <Stack direction="column" spacing={2}>
                {error?.message && (
                  <Alert severity="error">{error.message}</Alert>
                )}
                <FormInputText
                  name="email"
                  type="email"
                  label="Email"
                  disabled
                  error={error?.errors?.email}
                  control={control}
                />
                <Typography variant="subtitle1" color="muted.main">
                  Informe o código que você recebeu no email <b>{email}</b>
                </Typography>
                <Stack direction="row" justifyContent="flex-start">
                  <FormInputPinCode
                    name="code"
                    error={error?.errors?.code}
                    control={control}
                  />
                </Stack>
              </Stack>
              <LoadingButton
                size="large"
                type="submit"
                variant="contained"
                loading={loading}
              >
                {loading
                  ? 'Verificando código de ativação'
                  : 'Ativar minha conta'}
              </LoadingButton>
            </Stack>
          </Stack>
        </form>
      </Grid>
    </Container>
  )
}
