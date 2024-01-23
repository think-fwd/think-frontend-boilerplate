import { SignupController } from './controller'
import { SignupProps } from './types'
import { SignupView } from './view'

export const Signup = (props: SignupProps): JSX.Element => {
  return (
    <SignupController {...props}>
      <SignupView />
    </SignupController>
  )
}
