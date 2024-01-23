/* eslint-disable react-hooks/exhaustive-deps */
import { useApi } from '@hooks/api'
import { useLocation } from 'react-router-dom'
import { AcceptInvitePageContext } from './context'
import { MembersApi } from '@services/api/member_api'
import { AcceptInvitePageControllerProps } from './types'
import { HttpMessageType } from '@type/http_message_type'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { MemberEntity } from '@entities/MemberEntity'

export const AcceptInvitePageController = (
  props: AcceptInvitePageControllerProps
): JSX.Element => {
  const api = useApi()
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<HttpMessageType | undefined>(undefined)
  const [acceptedMember, setAcceptedMember] = useState<
    MemberEntity | undefined
  >(undefined)

  const handleLoadInvite = useCallback(() => {
    setError(undefined)
    setAcceptedMember(undefined)
    setLoading(true)
    api
      .instanceOf<MembersApi>(MembersApi)
      .handleAcceptInvite(
        String(queryParams.get('email')),
        String(queryParams.get('code'))
      )
      .then(setAcceptedMember)
      .catch((error) => setError(error?.response?.data))
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    handleLoadInvite()
  }, [])

  const state = useMemo(
    () => ({ acceptedMember, error, loading }),
    [acceptedMember, error, loading]
  )
  return (
    <AcceptInvitePageContext.Provider value={state}>
      {props.children}
    </AcceptInvitePageContext.Provider>
  )
}
