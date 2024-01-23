import { Panel } from '@containers/panel'
import { useContextSelector } from 'use-context-selector'
import { SessionPageContext } from '@pages/session/context'
import { SetupPage } from '@pages/setup'
import { OrganizationStatusEnum } from '@enums/organization_status_enum'

export const OrganizationPanel = (): JSX.Element => {
  const selectedProfile = useContextSelector(
    SessionPageContext,
    (s) => s.selectedProfile
  )

  if (
    selectedProfile?.value.organization.status === OrganizationStatusEnum.SETUP
  ) {
    return <SetupPage />
  }

  return <Panel />
}
