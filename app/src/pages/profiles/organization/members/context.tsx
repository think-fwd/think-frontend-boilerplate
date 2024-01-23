import { createContext } from 'use-context-selector'
import { OrganizationMembersPageContextProps } from './types'

export const OrganizationMembersPageContext = createContext(
  {} as OrganizationMembersPageContextProps
)
