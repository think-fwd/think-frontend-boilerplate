import { ResetPasswordController } from './controller'
import { ResetPasswordProps } from './types'
import { ResetPasswordView } from './view'

export const ResetPassword = (props: ResetPasswordProps): JSX.Element => {
  return (
    <ResetPasswordController {...props}>
      <ResetPasswordView />
    </ResetPasswordController>
  )
}
