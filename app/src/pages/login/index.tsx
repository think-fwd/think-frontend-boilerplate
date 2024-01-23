import React from 'react'
import { LoginView } from './view'
import { LoginController } from './controller'
export const Login = (): JSX.Element => {
  return (
    <LoginController>
      <LoginView />
    </LoginController>
  )
}
