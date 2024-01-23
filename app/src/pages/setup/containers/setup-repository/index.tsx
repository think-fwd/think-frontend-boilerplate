import { SetupPageRepository } from './types'
import { SetupPageRepositoryView } from './view'
import { SetupPageRepositoryController } from './controller'

export const SetupPageRepositoryForm = (
  props: SetupPageRepository
): JSX.Element => {
  return (
    <SetupPageRepositoryController {...props}>
      <SetupPageRepositoryView />
    </SetupPageRepositoryController>
  )
}
