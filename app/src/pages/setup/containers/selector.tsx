import { useContextSelector } from 'use-context-selector'
import { SetupPageContext } from '../context'
import { SetupPageAboutForm } from './setup-about'
import { SetupPageScrumForm } from './setup-scrum'
import { SetupPageMembersForm } from './setup-members'
import { SetupPageRepositoryForm } from './setup-repository'
import { SetupPageLoading } from './setup-loading'
import { SetupPageStepsEnum } from '../types'
import { useSearchParams } from 'react-router-dom'

export const SetupPageSelector = (): JSX.Element | null => {
  const [searchParams] = useSearchParams()
  const loading = useContextSelector(SetupPageContext, (s) => s.loading)
  const step = searchParams.get('step') || SetupPageStepsEnum.about

  if (loading) return <SetupPageLoading />

  if (step === SetupPageStepsEnum.about) return <SetupPageAboutForm />

  if (step === SetupPageStepsEnum.scrum) return <SetupPageScrumForm />

  if (step === SetupPageStepsEnum.repository) return <SetupPageRepositoryForm />

  if (step === SetupPageStepsEnum.members) return <SetupPageMembersForm />

  return null
}
