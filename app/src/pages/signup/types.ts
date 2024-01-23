import { SignupType } from '@type/signup_type'

export type SignupProps = {}
export type SignupControllerProps = SignupProps & { children: JSX.Element }
export type SignupContextProps = {
  error: any
  loading: boolean
  navToLogin: () => void
  handleSubmit: (formData: SignupType) => void
}
