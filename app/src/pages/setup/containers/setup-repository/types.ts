import { RepositoryAccountSetupFormType } from '@type/repository_account_setup_form_type'

export type SetupPageRepositoryForm = Partial<RepositoryAccountSetupFormType>

export type SetupPageRepository = {}

export type SetupPageRepositoryContextProps = {
  oauth: string | undefined
  invalid: boolean | undefined
  updating: boolean
  removing: boolean
  setOauth: React.Dispatch<React.SetStateAction<string | undefined>>
  handleOauth: () => void
  handleRemoveRepositoryAccount: () => void
}

export type SetupPageRepositoryControllerProps = SetupPageRepository & {
  children: JSX.Element
}
