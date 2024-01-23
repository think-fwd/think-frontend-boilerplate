import { RoleEnum } from '@enums/role_enum'
import { useContextSelector } from 'use-context-selector'
import { InviteInterface } from '../../components/invite-interface'
import { InviteOrgMemberContext } from './context'

export const InviteOrgMemberView = (): JSX.Element => {
  const invite = useContextSelector(InviteOrgMemberContext, (s) => s.invite)

  const handleAcceptInvite = useContextSelector(
    InviteOrgMemberContext,
    (s) => s.handleAcceptInvite
  )

  const handleDeclineInvite = useContextSelector(
    InviteOrgMemberContext,
    (s) => s.handleDeclineInvite
  )

  return (
    <InviteInterface
      title={invite.organization?.name || 'unknown'}
      message={
        <>
          Está convidando você para participar da organização como{' '}
          <b>{RoleEnum[invite.role]}</b>
        </>
      }
      handleAcceptInvite={handleAcceptInvite}
      handleDeclineInvite={handleDeclineInvite}
    />
  )
}
