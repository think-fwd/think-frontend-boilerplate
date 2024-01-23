import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ForgotPasswordContext } from './context'
import { ForgotPasswordControllerProps } from './types'
import { useApi } from '@hooks/api'
import { ForgotPasswordFormType } from '@type/forgot_password_form_type'
import { AuthApi } from '@services/api/auth_api'

export const ForgotPasswordController = (
  props: ForgotPasswordControllerProps
): JSX.Element => {
  const navigate = useNavigate()

  const api = useApi()
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<any | undefined>(undefined)

  const navToLogin = () => {
    navigate('/')
  }

  const navToConfirmation = (email: string) => {
    navigate(`/reset-password?email=${email}`)
  }

  const handleSubmit = (formData: ForgotPasswordFormType) => {
    setError(undefined)
    setLoading(true)
    api
      .instanceOf<AuthApi>(AuthApi)
      .forgotPassword(formData)
      .then(() => navToConfirmation(formData.email as string))
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
    <ForgotPasswordContext.Provider value={state}>
      {props.children}
    </ForgotPasswordContext.Provider>
  )
}
