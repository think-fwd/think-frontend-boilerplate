import { MemberProfileType } from '@type/member_profile_type'

export type InviteBoxProps = {}
export type InviteBoxControllerProps = InviteBoxProps & {
  children: JSX.Element
}
export type InviteBoxContextProps = {
  invites: MemberProfileType[]
  accepting: boolean
  declining: boolean
  setAccepting: React.Dispatch<React.SetStateAction<boolean>>
  setDeclining: React.Dispatch<React.SetStateAction<boolean>>
}
