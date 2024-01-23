import React from 'react'
import { useAuth } from '@hooks/auth'
import { InviteBoxContext } from './context'
import { InviteBoxControllerProps } from './types'
import { MemberProfileType } from '../../types/member_profile_type'

export const InviteBoxController = (
  props: InviteBoxControllerProps
): JSX.Element => {
  const auth = useAuth()
  const [accepting, setAccepting] = React.useState<boolean>(false)
  const [declining, setDeclining] = React.useState<boolean>(false)

  const invites = React.useMemo(() => {
    const draft: Array<MemberProfileType> = []
    // push pending organization invites
    for (const member of auth.user?.members || []) {
      if (member.status === 'PENDING') {
        draft.push({
          kind: 'organization',
          key: `organization::${member.organization.id}`,
          label: member?.organization?.name || 'unknown',
          value: member,
        })
      }
    }
    // return draft invites
    return draft
  }, [auth.user])

  const state = {
    invites,
    accepting,
    declining,
    setAccepting,
    setDeclining,
  }

  return (
    <InviteBoxContext.Provider value={state}>
      {props.children}
    </InviteBoxContext.Provider>
  )
}
