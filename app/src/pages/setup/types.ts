import { OrganizationEntity } from '@entities/OrganizationEntity'

export type SetupPageForm = {
  name?: string
}

export type SetupPageContextType = {
  loading: boolean
  organization: OrganizationEntity | undefined
  setStep: (step: SetupPageStepsEnum) => void
  setOrganization: React.Dispatch<
    React.SetStateAction<OrganizationEntity | undefined>
  >
}

export type SetupPageControllerProps = {
  children: JSX.Element
}

export enum SetupPageStepsEnum {
  'about' = 'about',
  'scrum' = 'scrum',
  'repository' = 'repository',
  'members' = 'members',
}
