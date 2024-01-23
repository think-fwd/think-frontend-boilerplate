import { useApi } from '@hooks/api'
import { useAuth } from '@hooks/auth'
import { InviteBoxContext } from '../../context'
import { InviteOrgMemberContext } from './context'
import { MemberEntity } from '@entities/MemberEntity'
import { MembersApi } from '@services/api/member_api'
import { useContextSelector } from 'use-context-selector'
import { InviteOrgMemberControllerProps } from './types'

export const InviteOrgMemberController = (
  props: InviteOrgMemberControllerProps
): JSX.Element => {
  const api = useApi()
  const { setUser } = useAuth()
  const setAccepting = useContextSelector(
    InviteBoxContext,
    (s) => s.setAccepting
  )
  const setDeclining = useContextSelector(
    InviteBoxContext,
    (s) => s.setDeclining
  )

  const handleUpdateStatus = (
    invite: MemberEntity,
    status: 'accept' | 'decline'
  ) => {
    api
      .instanceOf<MembersApi>(MembersApi)
      .handleInvite(invite.id, status)
      .then(setUser)
      .finally(() => {
        setDeclining(false)
        setAccepting(false)
      })
  }

  const handleAcceptInvite = () => {
    setDeclining(false)
    setAccepting(true)
    handleUpdateStatus(props.invite, 'accept')
  }

  const handleDeclineInvite = () => {
    setAccepting(false)
    setDeclining(true)
    handleUpdateStatus(props.invite, 'decline')
  }

  const state = {
    invite: props.invite,
    handleAcceptInvite,
    handleDeclineInvite,
  }
  return (
    <InviteOrgMemberContext.Provider value={state}>
      {props.children}
    </InviteOrgMemberContext.Provider>
  )
}
