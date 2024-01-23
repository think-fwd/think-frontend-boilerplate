import { createContext } from 'use-context-selector'
import { ProfileSwitcherContextProps } from './types'

export const ProfileSwitcherContext = createContext(
  {} as ProfileSwitcherContextProps
)
