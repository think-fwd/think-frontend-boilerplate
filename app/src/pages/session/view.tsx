import { Outlet } from 'react-router-dom'
import { SessionPageContext } from './context'
import { useContextSelector } from 'use-context-selector'
import { WrapperComponent } from '../../containers/wrapper'
import { LinearProgress } from '@mui/material'

export const SessionPageView = (): JSX.Element => {
  const loading = useContextSelector(SessionPageContext, (s) => s.loading)

  if (!!loading) {
    return (
      <WrapperComponent fullWidth>
        <LinearProgress />
      </WrapperComponent>
    )
  }

  return (
    <WrapperComponent fullWidth>
      <Outlet />
    </WrapperComponent>
  )
}
