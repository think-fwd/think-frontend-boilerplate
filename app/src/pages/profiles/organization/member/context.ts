import { createContext } from 'use-context-selector'
import { OrganizationMemberContextProps } from './types'

export const OrganizationMemberContext = createContext(
  {} as OrganizationMemberContextProps
)
