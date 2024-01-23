import { RepositoryProviderEnum } from '@enums/repository_provider_enum'

export type RepositoryAccountSetupFormType = {
  provider: RepositoryProviderEnum
  code: string
}
