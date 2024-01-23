import Stack from '@mui/material/Stack'
import { useForm } from 'react-hook-form'
import JiraIcon from '@assets/icons/jira.png'
import Typography from '@mui/material/Typography'
import { useSearchParams } from 'react-router-dom'
import { SetupPageScrumForm } from './types'
import { SetupPageScrumContext } from './context'
import { useContextSelector } from 'use-context-selector'
import { SetupScrumButtonSubmit } from './components/button-submit'
import { FormInputCheckbox } from '@components/form-input-checkbox'
import { SetupPageContext } from '@pages/setup/context'
import { ScrumLabelEnum, ScrumProviderEnum } from '@enums/scrum_provider_enum'
import { SetupScrumConfiguredCredentials } from './components/configured-credentials'

export const SetupPageScrumView = (): JSX.Element | null => {
  const [params] = useSearchParams()
  const organization = useContextSelector(
    SetupPageContext,
    (s) => s.organization
  )
  const setOauth = useContextSelector(SetupPageScrumContext, (s) => s.setOauth)

  const { handleSubmit, control } = useForm<SetupPageScrumForm>({
    defaultValues: {
      provider: (params.get('provider') ||
        organization?.scrum?.provider) as unknown as ScrumProviderEnum,
    },
  })

  return (
    <form onSubmit={handleSubmit((form) => console.log(form))}>
      <Stack direction="column" spacing={3}>
        <Stack direction="column" spacing={1}>
          <Typography variant="h1" color="secondary.main">
            Scrum
          </Typography>
          <Typography variant="subtitle1" color="muted.main" lineHeight={1.4}>
            Selecione sua ferramenta de scrum para dar permissão ao{' '}
            <b>think-crm</b>
            {` `}
            de analisar e gerencias as tarefas e projetos da sua organização.
          </Typography>
        </Stack>
        <Stack direction="column" spacing={4}>
          <FormInputCheckbox
            mode="single"
            control={control}
            name="provider"
            optionsPerLine={1}
            onChangeSingle={(_provider, metadata) => {
              setOauth(metadata?.oauth as string)
            }}
            options={[
              {
                value: ScrumProviderEnum.jira,
                title: ScrumLabelEnum[ScrumProviderEnum.jira],
                subtitle: 'https://www.atlassian.com/br/software/jira',
                description:
                  'Jira é um software comercial desenvolvido pela empresa Australiana Atlassian. É uma ferramenta que permite o monitoramento de tarefas e acompanhamento de projetos garantindo o gerenciamento de todas as suas atividades em único lugar.',
                icon: () => (
                  <img src={JiraIcon} alt="Jira" width={16} height={16} />
                ),
                enabled: !params.get('provider') && !organization?.scrum,
                metadata: {
                  oauth: `https://auth.atlassian.com/authorize?audience=api.atlassian.com&client_id=bbwHDZZsTnQimoR2OSmfO26kYzZmIQjX&scope=offline_access%20read%3Ame%20read%3Ajira-work%20manage%3Ajira-project%20manage%3Ajira-configuration%20read%3Ajira-user%20write%3Ajira-work%20manage%3Ajira-webhook%20manage%3Ajira-data-provider&redirect_uri=https%3A%2F%2Fcrm.staging.thinkforward.com.br%2Foauth_callback%2Fscrum%2Fjira?organization_id=${organization?.id}&state=${organization?.id}&response_type=code&prompt=consent`,
                },
              },
            ]}
          />
          <SetupScrumConfiguredCredentials />
          <SetupScrumButtonSubmit />
        </Stack>
      </Stack>
    </form>
  )
}
