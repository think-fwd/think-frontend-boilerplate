import { ActiveAccountContext } from '../context'
import { ActiveAccountFeedback } from './feedback'
import { useContextSelector } from 'use-context-selector'
import { ActiveAccountFormContainer } from './form'

export const ActiveAccountSelector = (): JSX.Element => {
  const activated = useContextSelector(ActiveAccountContext, (s) => s.activated)
  if (activated) return <ActiveAccountFeedback />
  return <ActiveAccountFormContainer />
}
