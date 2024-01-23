import { ScrumProviderEnum } from '@enums/scrum_provider_enum'

export type ScrumAccountSetupFormType = {
  provider: ScrumProviderEnum
  code: string
}
