import { AcceptInvitePageController } from './controller'
import { AcceptInvitePageProps } from './types'
import { AcceptInvitePageView } from './view'

export const AcceptInvitePage = (props: AcceptInvitePageProps): JSX.Element => {
  return (
    <AcceptInvitePageController {...props}>
      <AcceptInvitePageView />
    </AcceptInvitePageController>
  )
}
