/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useApi } from '@hooks/api'
import { AuthApi } from '@services/api/auth_api'
import { ActiveAccountContext } from './context'
import { HttpMessageType } from '@type/http_message_type'
import { ActiveAccountControllerProps, ActiveAccountFormType } from './types'

export const ActiveAccountController = (
  props: ActiveAccountControllerProps
): JSX.Element => {
  const api = useApi()
  const [loading, setLoading] = React.useState<boolean>(false)
  const [activated, setActivated] = React.useState<boolean>(false)
  const [error, setError] = React.useState<HttpMessageType | undefined>(
    undefined
  )

  const handleSubmit = React.useCallback((form: ActiveAccountFormType) => {
    setError(undefined)
    setLoading(true)
    api
      .instanceOf<AuthApi>(AuthApi)
      .activeAccount(form.code, form.email)
      .then(() => setActivated(true))
      .catch((error) => setError(error.response.data))
      .finally(() => setLoading(false))
  }, [])

  const state = {
    error,
    loading,
    activated,
    handleSubmit,
  }
  return (
    <ActiveAccountContext.Provider value={state}>
      {props.children}
    </ActiveAccountContext.Provider>
  )
}
