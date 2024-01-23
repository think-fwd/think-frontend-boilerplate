/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react'
import { v4 } from 'uuid'
import WebSocket from 'isomorphic-ws'
import { WebsocketContext } from './context'
import { useContext } from 'use-context-selector'
import { EventDataType } from '@type/event_data_type'
import { WebsocketProps, WebSocketStatus } from './types'
import { useApi } from '@hooks/api'
import { AuthApi } from '@services/api/auth_api'

export const WebsocketProvider = (props: WebsocketProps): JSX.Element => {
  const api = useApi()
  const subscriptions = React.useRef<
    Map<string, Map<string, (msg: Record<string, unknown>) => void>>
  >(new Map())
  const websocket = React.useRef<WebSocket | undefined>(undefined)

  const [connectionStatus, setConnectionStatus] =
    React.useState<WebSocketStatus>(WebSocketStatus.PENDING)

  const handleConnect = React.useCallback((jwt: string | null | undefined) => {
    if (!jwt) return
    websocket.current = new WebSocket(
      `${process.env.REACT_APP_WSS_URL}?Auth=${jwt}`
    )
    setConnectionStatus(WebSocketStatus.CONNECTING)
    websocket.current.onopen = () => setConnectionStatus(WebSocketStatus.OPEN)
    websocket.current.onclose = () => {
      setConnectionStatus(WebSocketStatus.CLOSED)
      // handleConnect(jwt)
    }
    websocket.current.onerror = () => setConnectionStatus(WebSocketStatus.ERROR)
    websocket.current.onmessage = async (event) => {
      const data = JSON.parse(String(event.data)) as unknown as EventDataType
      const subs = subscriptions.current.get(data.notificationId)
      if (!!subs) subs.forEach((cb) => cb(data.content))
    }
  }, [])

  React.useEffect(() => {
    return () => {
      if (!!websocket.current) {
        websocket.current.close()
      }
    }
  }, [])

  const subscribe = (
    key: string,
    cb: (msg: Record<string, unknown>) => void
  ) => {
    const uuid = v4()
    // create empty map of subscribers
    // for provided key subscription
    if (!subscriptions.current.has(key)) {
      subscriptions.current.set(key, new Map())
    }
    subscriptions.current.get(key)?.set(uuid, cb)
    return () => {
      subscriptions.current.get(key)?.delete(uuid)
      if (subscriptions.current.get(key)?.size === 0) {
        subscriptions.current.delete(key)
      }
    }
  }

  const handleWssConnect = useCallback(() => {
    setConnectionStatus(WebSocketStatus.CONNECTING)
    api
      .instanceOf<AuthApi>(AuthApi)
      .wsstoken()
      .then((token) => handleConnect(token.jwt))
      .catch((_) => setConnectionStatus(WebSocketStatus.ERROR))
      .finally()
  }, [])

  const state = {
    status: connectionStatus,
    subscribe,
    handleWssConnect,
  }
  return (
    <WebsocketContext.Provider value={state}>
      {props.children}
    </WebsocketContext.Provider>
  )
}

export function useWebsocket() {
  const context = useContext(WebsocketContext)
  if (!context)
    throw new Error(
      'useWebsocket must to be used inside WebsocketProvider element'
    )
  return context
}
