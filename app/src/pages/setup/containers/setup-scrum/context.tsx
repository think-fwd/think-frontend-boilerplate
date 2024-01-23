import { createContext } from 'use-context-selector'
import { SetupPageScrumContextProps } from './types'

export const SetupPageScrumContext = createContext(
  {} as SetupPageScrumContextProps
)
