import { ActiveAccountController } from './controller'
import { ActiveAccountProps } from './types'
import { ActiveAccountView } from './view'

export const ActiveAccount = (props: ActiveAccountProps): JSX.Element => {
  return (
    <ActiveAccountController {...props}>
      <ActiveAccountView />
    </ActiveAccountController>
  )
}
