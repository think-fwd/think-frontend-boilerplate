/* eslint-disable react-hooks/exhaustive-deps */
import { useApi } from '@hooks/api'
import { useSearchParams } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { SetupPageRepositoryContext } from './context'
import { OrganizationApi } from '@services/api/organization_api'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { SetupPageRepositoryControllerProps } from './types'
import { RepositoryProviderEnum } from '@enums/repository_provider_enum'
import { SetupPageStepsEnum } from '@pages/setup/types'
import { SetupPageContext } from '@pages/setup/context'

export const SetupPageRepositoryController = (
  props: SetupPageRepositoryControllerProps
): JSX.Element => {
  const organization = useContextSelector(
    SetupPageContext,
    (s) => s.organization
  )

  const api = useApi()
  const [params] = useSearchParams()
  const [removing, setRemoving] = useState<boolean>(false)
  const [updating, setUpdating] = useState<boolean>(false)
  const [oauth, setOauth] = useState<string | undefined>(undefined)
  const [invalid, setInvalid] = useState<boolean | undefined>(undefined)
  const setStep = useContextSelector(SetupPageContext, (s) => s.setStep)

  const setOrganization = useContextSelector(
    SetupPageContext,
    (s) => s.setOrganization
  )

  const handleOauth = useCallback(() => {
    if (oauth) window.location.href = oauth
  }, [setStep, oauth])

  const handleRemoveRepositoryAccount = useCallback(() => {
    setRemoving(true)
    setInvalid(false)
    api
      .instanceOf<OrganizationApi>(OrganizationApi)
      .removeRepositoryAccount(String(organization?.id))
      .then((organization) => {
        setOrganization(organization)
        setOauth(undefined)
      })
      .catch(() => setInvalid(true))
      .finally(() => setRemoving(false))
  }, [])

  useEffect(() => {
    const code = params.get('code')
    const provider = params.get('provider')
    if (code && provider) {
      setInvalid(false)
      setUpdating(true)
      api
        .instanceOf<OrganizationApi>(OrganizationApi)
        .setupRepositoryAccount(String(organization?.id), {
          provider: provider as RepositoryProviderEnum,
          code: code,
        })
        .then((organization) => {
          setOrganization(organization)
          setStep(SetupPageStepsEnum.members)
        })
        .catch(() => setInvalid(true))
        .finally(() => setUpdating(false))
    }
  }, [])

  const state = useMemo(
    () => ({
      oauth,
      invalid,
      updating,
      removing,
      setOauth,
      handleOauth,
      handleRemoveRepositoryAccount,
    }),
    [
      oauth,
      invalid,
      updating,
      removing,
      setOauth,
      handleOauth,
      handleRemoveRepositoryAccount,
    ]
  )

  return (
    <SetupPageRepositoryContext.Provider value={state}>
      {props.children}
    </SetupPageRepositoryContext.Provider>
  )
}
