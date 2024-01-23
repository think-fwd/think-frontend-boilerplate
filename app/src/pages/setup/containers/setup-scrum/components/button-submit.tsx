import { LoadingButton } from '@mui/lab'
import { useContextSelector } from 'use-context-selector'
import { SetupPageScrumContext } from '../context'
import { SetupPageContext } from '@pages/setup/context'
import { SetupPageStepsEnum } from '@pages/setup/types'

export const SetupScrumButtonSubmit = () => {
  const organization = useContextSelector(
    SetupPageContext,
    (s) => s.organization
  )

  const setStep = useContextSelector(SetupPageContext, (s) => s.setStep)

  const oauth = useContextSelector(SetupPageScrumContext, (s) => s.oauth)

  const updating = useContextSelector(SetupPageScrumContext, (s) => s.updating)

  const handleOauth = useContextSelector(
    SetupPageScrumContext,
    (s) => s.handleOauth
  )

  if (!!organization?.scrum) {
    return (
      <LoadingButton
        size="large"
        type="button"
        variant="contained"
        onClick={() => setStep(SetupPageStepsEnum.repository)}
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
