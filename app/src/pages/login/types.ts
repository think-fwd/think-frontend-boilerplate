import { CredentialsType } from '@type/creentials_type'

export type LoginContextType = {
  error: any
  loading: boolean
  navToSignup: () => void
  navToForgotPassword: () => void
  handleSubmit: (data: CredentialsType) => void
}
export type LoginControllerProps = { children: JSX.Element }
