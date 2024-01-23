/* eslint-disable no-restricted-globals */
import { useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { useContextSelector } from 'use-context-selector'
import { SetupPageMembersContext } from '../context'
import { SetupPageContext } from '@pages/setup/context'

export const SetupOrganizationButtonFinish = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false)

  const handleFinishSetup = useContextSelector(
    SetupPageMembersContext,
    (s) => s.handleFinishSetup
  )

  const setOrganization = useContextSelector(
    SetupPageContext,
    (s) => s.setOrganization
  )

  const handleSubmit = () => {
    setLoading(true)
    handleFinishSetup()
      .then((organization) => {
        setOrganization(organization)
        location.href = `/organizations/${organization.id}`
      })
      .finally(() => setLoading(false))
  }

  return (
    <LoadingButton
      type="button"
      size="large"
      variant="contained"
      onClick={handleSubmit}
      loading={loading}
    >
      Concluir
    </LoadingButton>
  )
}
