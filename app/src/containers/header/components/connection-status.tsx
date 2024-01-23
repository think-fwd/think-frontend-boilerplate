import { CircularProgress, IconButton } from '@mui/material'
import { useContextSelector } from 'use-context-selector'
import { Broadcast, WifiMedium, WifiSlash, WifiX } from '@phosphor-icons/react'

import { WebSocketStatus } from '@hooks/websocket/types'
import { WebsocketContext } from '@hooks/websocket/context'
import { theme } from '@theme/index'

export const HeaderConnectionStatus = (): JSX.Element => {
  const status = useContextSelector(WebsocketContext, (s) => s.status)
  const handleWssConnect = useContextSelector(
    WebsocketContext,
    (s) => s.handleWssConnect
  )

  if (status === WebSocketStatus.CONNECTING)
    return (
      <IconButton>
        <CircularProgress size={16} />
      </IconButton>
    )

  if (status === WebSocketStatus.OPEN)
    return (
      <IconButton>
        <WifiMedium
          size={21}
          weight="duotone"
          color={theme.palette.success.main}
        />
      </IconButton>
    )

  if (status === WebSocketStatus.CLOSED)
    return (
      <IconButton onClick={handleWssConnect}>
        <WifiSlash
          size={21}
          weight="duotone"
          color={theme.palette.warning.main}
        />
      </IconButton>
    )

  if (status === WebSocketStatus.ERROR)
    return (
      <IconButton onClick={handleWssConnect}>
        <WifiX size={21} weight="duotone" color={theme.palette.error.main} />
      </IconButton>
    )

  return (
    <IconButton onClick={handleWssConnect}>
      <Broadcast size={21} weight="duotone" color={theme.palette.info.main} />
    </IconButton>
  )
}
