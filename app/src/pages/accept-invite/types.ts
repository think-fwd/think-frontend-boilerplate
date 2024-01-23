import { MemberEntity } from '@entities/MemberEntity'
import { HttpMessageType } from '@type/http_message_type'

export type AcceptInvitePageProps = {}

export type AcceptInvitePageControllerProps = AcceptInvitePageProps & {
  children: JSX.Element
}

export type AcceptInvitePageContextProps = {
  loading: boolean
  error: HttpMessageType | undefined
  acceptedMember: MemberEntity | undefined
}

export type AcceptInvitePageFormProps = {
  email?: string | null
  code?: string | null
}
