import { useForm } from 'react-hook-form'
import { LoadingButton } from '@mui/lab'
import { LoginContext } from '../context'
import { Stack, Alert } from '@mui/material'
import { useContextSelector } from 'use-context-selector'
import { FormInputText } from '@components/form-input-text'
import { CredentialsType } from '@type/creentials_type'

export const LoginFormContainer = (): JSX.Element => {
  const { handleSubmit, control } = useForm<CredentialsType>()
  const error = useContextSelector(LoginContext, (s) => s.error)
  const loading = useContextSelector(LoginContext, (s) => s.loading)

  const handleSubmitForm = useContextSelector(
    LoginContext,
    (s) => s.handleSubmit
  )

  return (
    <form onSubmit={handleSubmit((data) => handleSubmitForm(data as any))}>
      <Stack direction="column" spacing={2}>
        {error?.message && <Alert severity="error">{error.message}</Alert>}
        <FormInputText
          name="email"
          label="Seu melhor email"
          disabled={loading}
          error={error?.errors?.email}
          control={control}
        />
        <FormInputText
          name="password"
          type="password"
          disabled={loading}
          label="Senha super secreta"
          error={error?.errors?.password}
          helper={'Deve possuir ao menos 16 caracteres.'}
          control={control}
        />
        <LoadingButton type="submit" variant="contained" loading={loading}>
          Acessar a plataforma
        </LoadingButton>
      </Stack>
    </form>
  )
}
