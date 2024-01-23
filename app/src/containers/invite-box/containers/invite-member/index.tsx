import { InviteOrgMemberController } from './controller'
import { InviteOrgMemberProps } from './types'
import { InviteOrgMemberView } from './view'

export const InviteOrgMember = (props: InviteOrgMemberProps): JSX.Element => {
  return (
    <InviteOrgMemberController {...props}>
      <InviteOrgMemberView />
    </InviteOrgMemberController>
  )
}
