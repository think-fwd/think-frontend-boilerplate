import { createContext } from 'use-context-selector'
import { ForgotPasswordContextProps } from './types'

export const ForgotPasswordContext = createContext(
  {} as ForgotPasswordContextProps
)
