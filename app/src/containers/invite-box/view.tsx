import { InviteBoxContext } from './context'
import { useContextSelector } from 'use-context-selector'
import { InviteOrgMember } from './containers/invite-member'

export const InviteBoxView = (): JSX.Element => {
  const invites = useContextSelector(InviteBoxContext, (s) => s.invites)

  if (invites.length === 0) return <></>

  const [invite] = invites
  if (invite.kind === 'organization') {
    return <InviteOrgMember invite={invite.value} />
  }
  return <></>
}
