/* eslint-disable react-hooks/exhaustive-deps */
import { useApi } from '@hooks/api'
import { useParams, useSearchParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react'
import { SetupPageContext } from './context'
import { useContextSelector } from 'use-context-selector'
import { SetupPageControllerProps, SetupPageStepsEnum } from './types'
import { SessionPageContext } from '@pages/session/context'
import { OrganizationApi } from '@services/api/organization_api'
import { OrganizationEntity } from '@entities/OrganizationEntity'
export const SetupPageController = (
  props: SetupPageControllerProps
): JSX.Element => {
  const api = useApi()
  const { id: organizationId } = useParams<{ id: string }>()
  const [searchParam, setSearchParams] = useSearchParams()

  const [loading, setLoading] = useState(true)
  const [organization, setOrganization] = useState<
    OrganizationEntity | undefined
  >(undefined)

  const selectedProfile = useContextSelector(
    SessionPageContext,
    (s) => s.selectedProfile
  )

  useEffect(() => {
    if (!!organizationId) {
      if (!selectedProfile?.value.organization_id) {
        setLoading(false)
      } else {
        setLoading(true)
        api
          .instanceOf<OrganizationApi>(OrganizationApi)
          .details(selectedProfile?.value.organization_id)
          .then(setOrganization)
          .finally(() => setLoading(false))
      }
    } else {
      setLoading(false)
    }
  }, [])

  const setStep = (path: SetupPageStepsEnum) => {
    setSearchParams({ step: path })
  }

  useEffect(() => {
    if (!!organizationId) {
      if (!!organization && !searchParam.get('step')) {
        if (organization.repository) {
          setStep(SetupPageStepsEnum.members)
        } else if (organization.scrum) {
          setStep(SetupPageStepsEnum.repository)
        }
      }
    }
  }, [organizationId, organization])

  const state = useMemo(
    () => ({
      loading,
      organization,
      setStep,
      setOrganization,
    }),
    [loading, organization, setStep, setOrganization]
  )

  return (
    <SetupPageContext.Provider value={state}>
      {props.children}
    </SetupPageContext.Provider>
  )
}
