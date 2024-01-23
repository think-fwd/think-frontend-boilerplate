import React from 'react'
const APPKEY = '@thinkcrm'

type StateProps = {
  get: (field: string) => string | null
  set: (field: string, value: any) => void
  remove: (field: string) => void
}

const StorageContext = React.createContext({} as StateProps)

type Props = {
  children: JSX.Element
}

export const StorageProvider = (props: Props): JSX.Element => {
  const get = (field: string) => {
    return localStorage.getItem(`${APPKEY}/${field}`)
  }
  const set = (field: string, value: any) => {
    const storageValue =
      typeof value !== 'string' ? JSON.stringify(value) : value
    return localStorage.setItem(`${APPKEY}/${field}`, storageValue)
  }
  const remove = (field: string) => {
    return localStorage.removeItem(`${APPKEY}/${field}`)
  }

  const state = { get, set, remove }

  return (
    <StorageContext.Provider value={state}>
      {props.children}
    </StorageContext.Provider>
  )
}

export function useStorage() {
  const context = React.useContext(StorageContext)
  if (!context)
    throw new Error('useStorage must to be used inside StorageProvider element')
  return context
}
