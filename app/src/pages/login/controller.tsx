import React from 'react'

import { useApi } from '@hooks/api'
import { useAuth } from '@hooks/auth'
import { AuthApi } from '@services/api/auth_api'
import { CredentialsType } from '@type/creentials_type'

import { LoginContext } from './context'
import { LoginControllerProps } from './types'
import { useNavigate } from 'react-router-dom'
import _ from 'lodash'

export const LoginController = (props: LoginControllerProps): JSX.Element => {
  const api = useApi()
  const auth = useAuth()
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<any | undefined>(undefined)
  const navigate = useNavigate()

  const navToForgotPassword = () => {
    navigate('/forgot-password')
  }

  const navToSignup = () => {
    navigate('/signup')
  }

  const handleSubmit = (formData: CredentialsType) => {
    setError(undefined)
    setLoading(true)
    api
      .instanceOf<AuthApi>(AuthApi)
      .login(formData)
      .then(auth.authenticate)
      .catch((error) => setError(_.get(error, 'response.data')))
      .finally(() => setLoading(false))
  }

  const state = {
    error,
    loading,
    navToSignup,
    handleSubmit,
    navToForgotPassword,
  }

  return (
    <LoginContext.Provider value={state}>
      {props.children}
    </LoginContext.Provider>
  )
}
