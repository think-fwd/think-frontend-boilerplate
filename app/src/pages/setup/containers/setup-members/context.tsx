import { createContext } from 'use-context-selector'
import { SetupPageMembersContextProps } from './types'

export const SetupPageMembersContext = createContext(
  {} as SetupPageMembersContextProps
)
