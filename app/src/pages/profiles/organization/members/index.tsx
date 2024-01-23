import { OrganizationMembersPageView } from './view'
import { OrganizationMembersPageProps } from './types'
import { OrganizatioinMembersPageController } from './controller'

export const OrganizationMembersPage = (
  props: OrganizationMembersPageProps
): JSX.Element => {
  return (
    <OrganizatioinMembersPageController {...props}>
      <OrganizationMembersPageView />
    </OrganizatioinMembersPageController>
  )
}
