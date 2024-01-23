import { createContext } from 'use-context-selector'
import { ActiveAccountContextProps } from './types'

export const ActiveAccountContext = createContext(
  {} as ActiveAccountContextProps
)
