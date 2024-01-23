import { ForgotPasswordController } from './controller'
import { ForgotPasswordProps } from './types'
import { ForgotPasswordView } from './view'

export const ForgotPassword = (props: ForgotPasswordProps): JSX.Element => {
  return (
    <ForgotPasswordController {...props}>
      <ForgotPasswordView />
    </ForgotPasswordController>
  )
}
