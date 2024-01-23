import { RepositoryProviderEnum } from '@enums/repository_provider_enum'

export type RepositoryAccountEntity = {
  status: 'connected' | 'expired'
  provider: RepositoryProviderEnum
  name: string
  access_token_exp: number | undefined
}
