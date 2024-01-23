import { LoadingButton } from '@mui/lab'
import { ForgotPasswordContext } from '../context'
import { Stack, Alert, Typography } from '@mui/material'
import { useContextSelector } from 'use-context-selector'
import { FormInputText } from '@components/form-input-text'
import { useForm } from 'react-hook-form'
import { ForgotPasswordFormType } from '@type/forgot_password_form_type'

export const ForgotPasswordFormContainer = (): JSX.Element => {
  const error = useContextSelector(ForgotPasswordContext, (s) => s.error)
  const loading = useContextSelector(ForgotPasswordContext, (s) => s.loading)
  const handleSubmitForm = useContextSelector(
    ForgotPasswordContext,
    (s) => s.handleSubmit
  )

  const { handleSubmit, control } = useForm<ForgotPasswordFormType>()

  return (
    <form onSubmit={handleSubmit((data) => handleSubmitForm(data))}>
      <Stack direction="column" spacing={1}>
        <Stack direction="column" spacing={1}>
          <Typography variant="h1" color="secondary.main">
            Redefinir senha
          </Typography>
          <Typography variant="subtitle1" color="muted.main">
            Insira o endereço de email para o qual você gostaria que suas
            informações de redefinição de senha fossem enviadas.
          </Typography>
        </Stack>
        <Stack direction="column" spacing={2}>
          {error?.message && <Alert severity="error">{error.message}</Alert>}
          <FormInputText
            name="email"
            label="Seu melhor email"
            disabled={loading}
            error={error?.errors?.email}
            control={control}
          />
          <LoadingButton type="submit" variant="contained" loading={loading}>
            Enviar
          </LoadingButton>
        </Stack>
      </Stack>
    </form>
  )
}
