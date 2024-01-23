import React from 'react'
import { useApi } from '@hooks/api'
import { SignupContext } from './context'
import { SignupType } from '@type/signup_type'
import { useNavigate } from 'react-router-dom'
import { SignupControllerProps } from './types'
import { AuthApi } from '@services/api/auth_api'

export const SignupController = (props: SignupControllerProps): JSX.Element => {
  const api = useApi()
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<any | undefined>(undefined)
  const navigate = useNavigate()

  const navToLogin = () => {
    navigate('/')
  }

  const handleSubmit = (formData: SignupType) => {
    setError(undefined)
    setLoading(true)
    api
      .instanceOf<AuthApi>(AuthApi)
      .signup(formData)
      .then(() =>
        navigate(`/active-account?email=${formData.email}`, { replace: true })
      )
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
    <SignupContext.Provider value={state}>
      {props.children}
    </SignupContext.Provider>
  )
}
