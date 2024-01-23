import { createContext } from 'use-context-selector'
import { SetupPageRepositoryContextProps } from './types'

export const SetupPageRepositoryContext = createContext(
  {} as SetupPageRepositoryContextProps
)
