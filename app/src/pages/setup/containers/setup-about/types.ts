export type SetupPageAboutForm = {
  name?: string
  document?: string
}

export type SetupPageAbout = {}

export type SetupPageAboutContextProps = {
  error: any
  loading: boolean
  handleSubmit: (form: SetupPageAboutForm) => void
}

export type SetupPageAboutControllerProps = SetupPageAbout & {
  children: JSX.Element
}
