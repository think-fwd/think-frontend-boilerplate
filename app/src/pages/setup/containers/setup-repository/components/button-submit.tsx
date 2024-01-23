import { LoadingButton } from '@mui/lab'
import { useContextSelector } from 'use-context-selector'
import { SetupPageRepositoryContext } from '../context'
import { SetupPageContext } from '@pages/setup/context'
import { SetupPageStepsEnum } from '@pages/setup/types'

export const SetupPageRepositoryButtonSubmit = (): JSX.Element => {
  const organization = useContextSelector(
    SetupPageContext,
    (s) => s.organization
  )

  const setStep = useContextSelector(SetupPageContext, (s) => s.setStep)

  const oauth = useContextSelector(SetupPageRepositoryContext, (s) => s.oauth)

  const updating = useContextSelector(
    SetupPageRepositoryContext,
    (s) => s.updating
  )

  const handleOauth = useContextSelector(
    SetupPageRepositoryContext,
    (s) => s.handleOauth
  )

  if (!!organization?.repository) {
    return (
      <LoadingButton
        size="large"
        type="button"
        variant="contained"
        onClick={() => setStep(SetupPageStepsEnum.members)}
      >
        Próxima Etapa
      </LoadingButton>
    )
  }

  return (
    <LoadingButton
      size="large"
      type="button"
      variant="contained"
      disabled={!oauth}
      loading={updating}
      onClick={handleOauth}
    >
      {oauth ? 'Conectar com o provedor selecionado' : 'Selecione um provedor'}
    </LoadingButton>
  )
}
