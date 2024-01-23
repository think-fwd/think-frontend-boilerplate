export type ActiveAccountProps = {}

export type ActiveAccountControllerProps = ActiveAccountProps & {
  children: JSX.Element
}

export type ActiveAccountContextProps = {
  error: any
  loading: boolean
  activated: boolean
  handleSubmit: (form: ActiveAccountFormType) => void
}

export type ActiveAccountFormType = {
  email?: string
  code?: string
}
