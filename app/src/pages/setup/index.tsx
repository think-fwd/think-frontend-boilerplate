import { SetupPageController } from './controller'
import { SetupPageView } from './view'
export const SetupPage = (): JSX.Element => {
  return (
    <SetupPageController>
      <SetupPageView />
    </SetupPageController>
  )
}
