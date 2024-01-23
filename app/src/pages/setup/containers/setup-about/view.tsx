import Stack from '@mui/material/Stack'
import { useForm } from 'react-hook-form'
import Typography from '@mui/material/Typography'
import LoadingButton from '@mui/lab/LoadingButton'
import { SetupPageAboutContext } from './context'
import { useContextSelector } from 'use-context-selector'
import { FormInputText } from '@components/form-input-text'
import { FormInputFormat } from '@components/form-input-format'
import { SetupPageContext } from '@pages/setup/context'
import { SetupPageAboutForm } from './types'
import { SetupPageAboutAlert } from './containers/alert'

export const SetupPageAboutView = (): JSX.Element | null => {
  const error = useContextSelector(SetupPageAboutContext, (s) => s.error)
  const loading = useContextSelector(SetupPageAboutContext, (s) => s.loading)

  const handleSubmitForm = useContextSelector(
    SetupPageAboutContext,
    (s) => s.handleSubmit
  )

  const organization = useContextSelector(
    SetupPageContext,
    (s) => s.organization
  )

  const { handleSubmit, control } = useForm<SetupPageAboutForm>({
    defaultValues: {
      name: organization?.name,
      document: organization?.document,
    },
  })

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <Stack direction="column" spacing={3}>
        <Stack direction="column" spacing={1}>
          <Typography variant="h1" color="secondary.main">
            Organização
          </Typography>
          <Typography variant="subtitle1" color="muted.main" lineHeight={1.4}>
            Primeiro, vamos coletar algumas informações da sua empresa, elas
            irão servir para que possamos nos comunicar de forma adequada.
          </Typography>
        </Stack>
        <Stack direction="column" spacing={4}>
          <SetupPageAboutAlert />
          <Stack direction="column" spacing={3}>
            <FormInputText
              name="name"
              size="medium"
              label="Nome da sua organização"
              control={control}
              error={error?.errors?.name}
            />
            <FormInputFormat
              mask
              name="document"
              inputSize="medium"
              format="##.###.###/####-##"
              label="CNPJ"
              control={control}
              error={error?.errors?.document}
            />
          </Stack>
          <LoadingButton
            type="submit"
            size="large"
            variant="contained"
            loading={loading}
          >
            Continuar
          </LoadingButton>
        </Stack>
      </Stack>
    </form>
  )
}
