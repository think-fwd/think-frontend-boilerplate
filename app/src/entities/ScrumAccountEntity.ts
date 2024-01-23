import { ScrumProviderEnum } from '@enums/scrum_provider_enum'

export type ScrumAccountEntity = {
  status: 'connected' | 'expired'
  provider: ScrumProviderEnum
  name: string
  access_token_exp: number | undefined
}
