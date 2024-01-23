import { LoadingButton } from '@mui/lab'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { ResetPasswordContext } from '../context'
import { Stack, Alert, Typography } from '@mui/material'
import { useContextSelector } from 'use-context-selector'
import { FormInputText } from '@components/form-input-text'
import FormInputPinCode from '@components/form-input-pin-code'
import { ResetPasswordFormType } from '@type/reset_password_form_type'

export const ResetPasswordFormContainer = (): JSX.Element => {
  const error = useContextSelector(ResetPasswordContext, (s) => s.error)
  const loading = useContextSelector(ResetPasswordContext, (s) => s.loading)
  const handleSubmitForm = useContextSelector(
    ResetPasswordContext,
    (s) => s.handleSubmit
  )

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const email = queryParams.get('email')

  const { handleSubmit, control } = useForm<ResetPasswordFormType>({
    defaultValues: {
      email: email || '',
    },
  })

  return (
    <form onSubmit={handleSubmit((data) => handleSubmitForm(data))}>
      <Stack direction="column" spacing={1}>
        <Stack direction="column" spacing={1}>
          <Typography variant="h1" color="secondary.main">
            Nova senha
          </Typography>
          <Typography variant="subtitle1" color="muted.main">
            Falta pouco para você recuperar sua conta.
          </Typography>
        </Stack>
        <Stack direction="column" spacing={2}>
          {error?.message && <Alert severity="error">{error.message}</Alert>}
          <FormInputText
            name="email"
            type="email"
            label="Email"
            disabled
            control={control}
          />
          <Typography variant="subtitle1" color="muted.main">
            Informe o código que você recebeu no email <b>{email}</b>
          </Typography>
          <Stack direction="row" justifyContent="flex-start">
            <FormInputPinCode name="code" size="medium" control={control} />
          </Stack>
          <Typography variant="subtitle1" color="muted.main">
            Crie uma nova senha e volte a ter acesso ao think crm.
          </Typography>
          <FormInputText
            name="password"
            type="password"
            disabled={loading}
            label="Insira sua nova senha"
            error={error?.errors?.password}
            helper={
              'Deve possuir ao menos 8 caracteres, 1 letra, 1 número e 1 caractere especial'
            }
            control={control}
          />
          <FormInputText
            name="password_confirmation"
            type="password"
            disabled={loading}
            label="Confirme sua nova senha"
            error={error?.errors?.password_confirmation}
            control={control}
          />
          <LoadingButton type="submit" variant="contained" loading={loading}>
            Redefinir minha senha
          </LoadingButton>
        </Stack>
      </Stack>
    </form>
  )
}
