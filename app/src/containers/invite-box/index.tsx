import { InviteBoxView } from './view'
import { InviteBoxController } from './controller'

export const InviteBox = (): JSX.Element => {
  return (
    <InviteBoxController>
      <InviteBoxView />
    </InviteBoxController>
  )
}
