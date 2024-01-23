import { SetupPageMembers } from './types'
import { SetupPageMembersView } from './view'
import { SetupPageMembersController } from './controller'

export const SetupPageMembersForm = (props: SetupPageMembers): JSX.Element => {
  return (
    <SetupPageMembersController {...props}>
      <SetupPageMembersView />
    </SetupPageMembersController>
  )
}
