import { OrganizationMemberController } from './controller'
import { OrganizationMemberProps } from './types'
import { OrganizationMemberView } from './view'

export const OrganizationMember = (props: OrganizationMemberProps) => {
  return (
    <OrganizationMemberController {...props}>
      <OrganizationMemberView />
    </OrganizationMemberController>
  )
}
