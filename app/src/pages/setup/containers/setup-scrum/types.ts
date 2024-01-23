import { ScrumAccountSetupFormType } from '@type/scrum_account_setup_form_type'

export type SetupPageScrumForm = Partial<ScrumAccountSetupFormType>

export type SetupPageScrum = {}

export type SetupPageScrumContextProps = {
  oauth: string | undefined
  invalid: boolean | undefined
  removing: boolean | undefined
  updating: boolean | undefined
  handleOauth: () => void
  handleRemoveScrumAccount: () => void
  setOauth: React.Dispatch<React.SetStateAction<string | undefined>>
}

export type SetupPageScrumControllerProps = SetupPageScrum & {
  children: JSX.Element
}
