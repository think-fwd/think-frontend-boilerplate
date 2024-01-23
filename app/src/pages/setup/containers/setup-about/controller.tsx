/* eslint-disable react-hooks/exhaustive-deps */
import { useApi } from '@hooks/api'
import { useStorage } from '@hooks/storage'
import { useCallback, useMemo, useState } from 'react'
import { SetupPageAboutContext } from './context'
import { useContextSelector } from 'use-context-selector'
import { OrganizationApi } from '@services/api/organization_api'
import { SetupPageStepsEnum } from '@pages/setup/types'
import { SetupPageContext } from '@pages/setup/context'

import { SetupPageAboutForm, SetupPageAboutControllerProps } from './types'
import _ from 'lodash'

export const SetupPageAboutController = (
  props: SetupPageAboutControllerProps
): JSX.Element => {
  const api = useApi()
  const storage = useStorage()

  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<any | undefined>(undefined)
  const setStep = useContextSelector(SetupPageContext, (s) => s.setStep)

  const organization = useContextSelector(
    SetupPageContext,
    (s) => s.organization
  )

  const setOrganization = useContextSelector(
    SetupPageContext,
    (s) => s.setOrganization
  )

  const handleSubmit = useCallback(
    (form: SetupPageAboutForm) => {
      setLoading(true)
      setError(undefined)
      if (organization) {
        api
          .instanceOf<OrganizationApi>(OrganizationApi)
          .update(organization.id, { name: form.name, document: form.document })
          .then((organization) => {
            setOrganization(organization)
            setStep(SetupPageStepsEnum.scrum)
          })
          .catch((error) => setError(_.get(error, 'response.data')))
          .finally(() => setLoading(false))
      } else {
        api
          .instanceOf<OrganizationApi>(OrganizationApi)
          .create(form)
          .then((organization) => {
            storage.set('profile', `organization::${organization.id}`)
            window.location.href = `/organizations/${organization.id}?step=${SetupPageStepsEnum.scrum}`
          })
          .catch((error) => setError(_.get(error, 'response.data')))
          .finally(() => setLoading(false))
      }
    },
    [organization, setStep]
  )

  const state = useMemo(
    () => ({ error, loading, handleSubmit }),
    [error, loading, handleSubmit]
  )

  return (
    <SetupPageAboutContext.Provider value={state}>
      {props.children}
    </SetupPageAboutContext.Provider>
  )
}
