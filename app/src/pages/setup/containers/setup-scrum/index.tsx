import { SetupPageScrum } from './types'
import { SetupPageScrumView } from './view'
import { SetupPageScrumController } from './controller'

export const SetupPageScrumForm = (props: SetupPageScrum): JSX.Element => {
  return (
    <SetupPageScrumController {...props}>
      <SetupPageScrumView />
    </SetupPageScrumController>
  )
}
