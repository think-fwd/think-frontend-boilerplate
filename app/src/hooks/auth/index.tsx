/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import { useStorage } from '../storage'
import { useSnackbar } from 'notistack'
import { useNavigate } from 'react-router-dom'
import { UserEntity } from '@entities/UserEntity'
import React, { useState, useMemo, createContext, useContext } from 'react'

const Context = createContext(
  {} as {
    user: UserEntity | undefined
    disconnecting: boolean
    setUser: React.Dispatch<React.SetStateAction<UserEntity | undefined>>
    disconnect: () => void
    authenticate: (user: UserEntity) => void
  }
)

const AuthProvider = (props: {
  apiBaseURL?: string
  children: JSX.Element
}) => {
  const storage = useStorage()
  const navigate = useNavigate()
  const snackbar = useSnackbar()
  const [disconnecting, setDisconnecting] = useState<boolean>(false)
  const [user, setUser] = useState<UserEntity | undefined>(
    JSON.parse(storage.get('user') as unknown as string)
  )

  const authenticate = React.useCallback((user: UserEntity) => {
    if (user) storage.set('user', user)
    setUser(user)
    navigate('/loading', { replace: true })
  }, [])

  const disconnect = React.useCallback(() => {
    setDisconnecting(true)
    axios
      .create({ baseURL: props.apiBaseURL, withCredentials: true })
      .post('/logout')
      .then(() => {
        storage.remove('user')
        setUser(undefined)
        navigate('/', { replace: true })
      })
      .then(() => snackbar.enqueueSnackbar('Você foi desconectado...'))
      .catch(() =>
        snackbar.enqueueSnackbar('Falha ao desconectar...', {
          variant: 'error',
        })
      )
      .finally(() => setDisconnecting(false))
    // window.location.reload()
  }, [])

  const authProviderValues = useMemo(
    () => ({
      user,
      disconnecting,
      setUser,
      disconnect,
      authenticate,
      setDisconnecting,
    }),
    [user, disconnecting, setUser, authenticate, disconnect, setDisconnecting]
  )

  return (
    <Context.Provider value={authProviderValues}>
      {props.children}
    </Context.Provider>
  )
}

const useAuth = () => {
  const context = useContext(Context)
  return context
}

export { AuthProvider, useAuth }
