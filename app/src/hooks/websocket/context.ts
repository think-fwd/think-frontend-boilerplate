import { createContext } from 'use-context-selector'
import { WebsocketStateProps } from './types'

export const WebsocketContext = createContext({} as WebsocketStateProps)
