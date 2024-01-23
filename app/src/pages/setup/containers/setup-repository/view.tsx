/* eslint-disable jsx-a11y/anchor-is-valid */
import Stack from '@mui/material/Stack'
import { useForm } from 'react-hook-form'
import Typography from '@mui/material/Typography'
import { useContextSelector } from 'use-context-selector'
import { SetupPageRepositoryContext } from './context'
import { FormInputCheckbox } from '@components/form-input-checkbox'
import {
  RepositoryLabelEnum,
  RepositoryProviderEnum,
} from '@enums/repository_provider_enum'
import { SetupPageRepositoryButtonSubmit } from './components/button-submit'
import { SetupPageContext } from '@pages/setup/context'
import GithubIcon from '@assets/icons/github.png'
import GitlabIcon from '@assets/icons/gitlab.png'
import BitbucketIcon from '@assets/icons/bitbucket.png'
import { useSearchParams } from 'react-router-dom'
import { SetupPageRepositoryForm } from './types'
import { SetupRepositoryConfiguredCredentials } from './components/configured-credentials'

export const SetupPageRepositoryView = (): JSX.Element | null => {
  const [params] = useSearchParams()
  const organization = useContextSelector(
    SetupPageContext,
    (s) => s.organization
  )
  const setOauth = useContextSelector(
    SetupPageRepositoryContext,
    (s) => s.setOauth
  )

  const { handleSubmit, control } = useForm<SetupPageRepositoryForm>({
    defaultValues: {
      provider: (params.get('provider') ||
        organization?.repository
          ?.provider) as unknown as RepositoryProviderEnum,
    },
  })

  return (
    <form onSubmit={handleSubmit((form) => console.log(form))}>
      <Stack direction="column" spacing={3}>
        <Stack direction="column" spacing={1}>
          <Typography variant="h1" color="secondary.main">
            Repositório
          </Typography>
          <Typography variant="subtitle1" color="muted.main" lineHeight={1.4}>
            Selecione sua ferramenta de armazenamento de código para dar
            permissão ao <b>think-crm</b> de analisar e acompanhar o
            desenvolvimento dos seus projetos.
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
                value: RepositoryProviderEnum.bitbucket,
                title: RepositoryLabelEnum[RepositoryProviderEnum.bitbucket],
                subtitle: 'https://bitbucket.org/',
                description:
                  'Bitbucket é um serviço de hospedagem de projetos controlados através do Mercurial, um sistema de controle de versões distribuído.',
                icon: () => (
                  <img
                    src={BitbucketIcon}
                    alt="Bitbucket"
                    width={16}
                    height={16}
                  />
                ),
                enabled: !params.get('provider') && !organization?.repository,
                metadata: {
                  oauth: `https://bitbucket.org/site/oauth2/authorize?client_id=3LP2xx5VMeTBRNBqSL&response_type=code&redirect_uri=https://crm.staging.thinkforward.com.br/oauth_callback/repository/bitbucket?organization_id=${organization?.id}`,
                },
              },
              {
                value: RepositoryProviderEnum.gitlab,
                title: RepositoryLabelEnum[RepositoryProviderEnum.gitlab],
                subtitle: 'https://about.gitlab.com/',
                description:
                  'O GitLab é um gerenciador de repositório de software baseado em git, com suporte a Wiki, gerenciamento de tarefas e CI/CD.',
                icon: () => (
                  <img src={GitlabIcon} alt="GitLab" width={16} height={16} />
                ),
                enabled: !params.get('provider') && !organization?.repository,
                metadata: {
                  oauth: `https://gitlab.com/oauth/authorize?client_id=ce48f46b01ad65300f2d925bee4f645ff31a985bf5b0e3f3ab4ba5adf004fd0b&redirect_uri=https://crm.staging.thinkforward.com.br/oauth_callback/repository/gitlab?organization_id=${organization?.id}&response_type=code`,
                },
              },
              {
                value: RepositoryProviderEnum.github,
                title: RepositoryLabelEnum[RepositoryProviderEnum.github],
                subtitle: 'https://github.com/',
                description:
                  'GitHub é uma plataforma de hospedagem de código-fonte e arquivos com controle de versão usando o Git. Ele permite que programadores, utilitários ou qualquer usuário cadastrado na plataforma contribuam em projetos privados e/ou Open Source de qualquer lugar do mundo.',
                icon: () => (
                  <img src={GithubIcon} alt="Github" width={16} height={16} />
                ),
                enabled: !params.get('provider') && !organization?.repository,
                metadata: {
                  oauth: `https://github.com/login/oauth/authorize?client_id=71fab7f273375e54c9ba&redirect_uri=https://crm.staging.thinkforward.com.br/oauth_callback/repository/github?organization_id=${organization?.id}&scope=repo,repo_deployment,public_repo,invite,security_events,admin:repo_hook,admin:org,admin:org_hook,delete_repo`,
                },
              },
            ]}
          />
          <SetupRepositoryConfiguredCredentials />
          <SetupPageRepositoryButtonSubmit />
        </Stack>
      </Stack>
    </form>
  )
}
