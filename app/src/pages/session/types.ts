import { MemberProfileType } from '@type/member_profile_type'

export type SessionPageProps = {}
export type SessionPageControllerProps = SessionPageProps & {
  children: JSX.Element
}
export type SessionPageContextProps = {
  loading: boolean
  selectedProfile: MemberProfileType | undefined
  handleSelectProfile: (profile: MemberProfileType | undefined) => void
}
