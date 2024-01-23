import React from 'react'
import { useApi } from '@hooks/api'
import { useAuth } from '@hooks/auth'
import { useNavigate } from 'react-router-dom'
import { ResetPasswordContext } from './context'
import { AuthApi } from '@services/api/auth_api'
import { ResetPasswordControllerProps } from './types'
import { ResetPasswordFormType } from '@type/reset_password_form_type'

export const ResetPasswordController = (
  props: ResetPasswordControllerProps
): JSX.Element => {
  const navigate = useNavigate()

  const api = useApi()
  const auth = useAuth()
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<any | undefined>(undefined)

  const navToLogin = () => {
    navigate('/')
  }

  const handleSubmit = (formData: ResetPasswordFormType) => {
    setError(undefined)
    setLoading(true)
    api
      .instanceOf<AuthApi>(AuthApi)
      .resetPassword(formData)
      .then(auth.authenticate)
      .catch((error) => setError(error.response.data))
      .finally(() => setLoading(false))
  }

  const state = {
    error,
    loading,
    navToLogin,
    handleSubmit,
  }
  return (
    <ResetPasswordContext.Provider value={state}>
      {props.children}
    </ResetPasswordContext.Provider>
  )
}
