import React from 'react'
import { theme } from '@theme/index'
import { LoadingButton } from '@mui/lab'
import { SignupContext } from '../context'
import { useForm } from 'react-hook-form'
import { SignupType } from '@type/signup_type'
import { ShieldPlus } from '@phosphor-icons/react'
import { Stack, Alert, Typography } from '@mui/material'
import { useContextSelector } from 'use-context-selector'
import { FormInputText } from '@components/form-input-text'
import { FormInputPhone } from '@components/form-input-phone'
import { FormInputCheck } from '@components/form-input-check/form-input-check'

export const SignupFormContainer = (): JSX.Element => {
  const { handleSubmit, control } = useForm<SignupType>()
  const [accepted, setAccepted] = React.useState<boolean>(false)
  const error = useContextSelector(SignupContext, (s) => s.error)
  const loading = useContextSelector(SignupContext, (s) => s.loading)
  const handleSubmitForm = useContextSelector(
    SignupContext,
    (s) => s.handleSubmit
  )

  return (
    <form onSubmit={handleSubmit((data) => handleSubmitForm(data as any))}>
      <Stack direction="column" spacing={2}>
        {error?.message && <Alert severity="error">{error.message}</Alert>}
        <FormInputText
          name="name"
          label="Como você se chama?"
          disabled={loading}
          error={error?.errors?.name}
          control={control}
        />
        <FormInputText
          name="email"
          label="Seu email de trabalho"
          disabled={loading}
          error={error?.errors?.email}
          control={control}
        />
        <FormInputText
          name="password"
          type="password"
          disabled={loading}
          label="Crie sua senha de acesso"
          error={error?.errors?.password}
          helper={'Deve possuir ao menos 16 caracteres.'}
          control={control}
        />

        <Stack direction="column" spacing={2} py={1}>
          <Alert
            color="warning"
            icon={
              <ShieldPlus
                color={theme.palette.success.main}
                weight="duotone"
                size={21}
              />
            }
            sx={{
              borderWidth: 1,
              borderRadius: 0,
              borderStyle: 'solid',
              py: 0,
            }}
          >
            <Typography variant="caption">
              O seu telefone será utilizado para autenticação <b>2FA</b>
            </Typography>
          </Alert>
          <FormInputPhone
            name="phone"
            label="Qual o seu número de telefone?"
            disabled={loading}
            error={error?.errors?.phone}
            control={control}
          />
        </Stack>

        <Stack direction="row" alignItems="center" spacing={1}>
          <FormInputCheck
            name="confirm-account-creation"
            disabled={loading}
            checked={accepted}
            onChange={setAccepted}
          />
          <Typography variant="caption" color="muted.main" lineHeight={1.1}>
            Ao criar minha conta estou de acordo com os Termos de uso do
            software e Política de privacidade
          </Typography>
        </Stack>

        <LoadingButton
          type="submit"
          variant="contained"
          disabled={!accepted}
          loading={loading}
        >
          Criar minha conta
        </LoadingButton>
      </Stack>
    </form>
  )
}
