export interface WebsocketProps {
  url?: string
  children: JSX.Element
}

export enum WebSocketStatus {
  OPEN,
  ERROR,
  CLOSED,
  PENDING,
  CONNECTING,
}

export type WebsocketStateProps = {
  status: WebSocketStatus
  handleWssConnect: () => void
  subscribe: (
    key: string,
    cb: (msg: Record<string, unknown>) => void
  ) => () => void
}
