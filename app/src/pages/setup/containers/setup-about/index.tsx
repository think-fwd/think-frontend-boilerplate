import { SetupPageAbout } from './types'
import { SetupPageAboutView } from './view'
import { SetupPageAboutController } from './controller'

export const SetupPageAboutForm = (props: SetupPageAbout): JSX.Element => {
  return (
    <SetupPageAboutController {...props}>
      <SetupPageAboutView />
    </SetupPageAboutController>
  )
}
