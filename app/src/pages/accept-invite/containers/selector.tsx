import { AcceptInvitePageContext } from '../context'
import { AcceptInviteFeedback } from './feedback'
import { useContextSelector } from 'use-context-selector'
import { AcceptInviteLoading } from './loading'
import { AcceptInviteSuccess } from './success'

export const AcceptInviteSelector = (): JSX.Element => {
  const error = useContextSelector(AcceptInvitePageContext, (s) => s.error)
  const acceptedMember = useContextSelector(
    AcceptInvitePageContext,
    (s) => s.acceptedMember
  )
  if (acceptedMember) return <AcceptInviteSuccess />
  if (error) return <AcceptInviteFeedback />
  return <AcceptInviteLoading />
}
