/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import Cookies from 'js-cookie'
import { createContext, useCallback, useContext, useMemo } from 'react'

type ContextType = {
  setCookies: (
    data: Record<string, string>,
    options?: Cookies.CookieAttributes | undefined
  ) => void
  getCookie: (cookieName: string) => string | undefined
  removeCookie: (cookieName: string) => void
}
type CookiesProviderProps = { children: React.ReactNode }

const Context = createContext<ContextType>({} as ContextType)

function CookiesProvider({ children }: CookiesProviderProps) {
  const setCookies = useCallback(
    (
      data: Record<string, string>,
      options?: Cookies.CookieAttributes | undefined
    ): void => {
      for (const item in data) {
        Cookies.set(item, data[item], options)
      }
    },
    []
  )
  const getCookie = useCallback((cookieName: string): string | undefined => {
    return Cookies.get(cookieName)
  }, [])

  const removeCookie = useCallback((cookieName: string): void => {
    Cookies.remove(cookieName)
  }, [])

  const state = useMemo(
    () => ({
      setCookies,
      getCookie,
      removeCookie,
    }),
    [setCookies, getCookie, removeCookie]
  )
  return <Context.Provider value={state}>{children}</Context.Provider>
}

const useCookies = () => {
  const context = useContext(Context)
  return context
}

export { CookiesProvider, useCookies }
