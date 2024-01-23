import { ForgotPasswordFormType } from '@type/forgot_password_form_type'

export type ForgotPasswordProps = {}

export type ForgotPasswordControllerProps = ForgotPasswordProps & {
  children: JSX.Element
}

export type ForgotPasswordContextProps = {
  error: any
  loading: boolean
  navToLogin: () => void
  handleSubmit: (formData: ForgotPasswordFormType) => void
}
