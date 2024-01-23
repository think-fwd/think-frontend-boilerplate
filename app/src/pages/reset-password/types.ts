import { ResetPasswordFormType } from '@type/reset_password_form_type'

export type ResetPasswordProps = {}

export type ResetPasswordControllerProps = ResetPasswordProps & {
  children: JSX.Element
}

export type ResetPasswordContextProps = {
  error: any
  loading: boolean
  navToLogin: () => void
  handleSubmit: (formData: ResetPasswordFormType) => void
}
