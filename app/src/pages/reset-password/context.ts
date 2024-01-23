import { createContext } from 'use-context-selector'
import { ResetPasswordContextProps } from './types'

export const ResetPasswordContext = createContext(
  {} as ResetPasswordContextProps
)
