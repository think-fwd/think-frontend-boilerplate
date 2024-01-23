import { MemberEntity } from '@entities/MemberEntity'

export type InviteOrgMemberProps = { invite: MemberEntity }
export type InviteOrgMemberControllerProps = InviteOrgMemberProps & {
  children: JSX.Element
}
export type InviteOrgMemberContextProps = {
  invite: MemberEntity
  handleAcceptInvite: () => void
  handleDeclineInvite: () => void
}
