/* eslint-disable react-hooks/exhaustive-deps */
import _ from 'lodash'
import { useApi } from '@hooks/api'
import { useForm } from 'react-hook-form'
import { MembersApi } from '@services/api/member_api'
import { useContextSelector } from 'use-context-selector'
import { FlatListRefType } from '@components/flatlist/types'
import { SetupPageMembersContext } from './context'
import { useCallback, useMemo, useRef, useState } from 'react'
import { SetupPageContext } from '@pages/setup/context'

import {
  SetupPageMembersFormProps,
  SetupPageMembersControllerProps,
} from './types'
import { OrganizationApi } from '@services/api/organization_api'
import { OrganizationEntity } from '@entities/OrganizationEntity'
import { useSnackbar } from 'notistack'

export const SetupPageMembersController = (
  props: SetupPageMembersControllerProps
): JSX.Element => {
  const api = useApi()
  const { enqueueSnackbar } = useSnackbar()
  const listingRef = useRef<FlatListRefType>(null)
  const { handleSubmit, control, reset } = useForm()
  const [inviting, setInviting] = useState<boolean>(false)
  const [error, setError] = useState<any | undefined>(undefined)

  const organization = useContextSelector(
    SetupPageContext,
    (s) => s.organization
  )

  const handleLoadInvites = useCallback((page: number, limit: number) => {
    return api
      .instanceOf<MembersApi>(MembersApi)
      .find(String(organization?.id), page, limit)
  }, [])

  const handleDeleteInvite = useCallback((inviteId: string) => {
    return api
      .instanceOf<MembersApi>(MembersApi)
      .delete(String(organization?.id), inviteId)
      .then((member) => {
        enqueueSnackbar(`O convite para ${member.email} foi excluído`)
        listingRef.current?.refresh()
      })
  }, [])

  const handleResendInvite = useCallback((inviteId: string) => {
    return api
      .instanceOf<MembersApi>(MembersApi)
      .reinvite(String(organization?.id), inviteId)
      .then((member) => {
        enqueueSnackbar(`Convite enviado para ${member.email}`)
      })
  }, [])

  const handleSubmitInvite = handleSubmit(
    useCallback((form: SetupPageMembersFormProps) => {
      setInviting(true)
      setError(undefined)
      api
        .instanceOf<MembersApi>(MembersApi)
        .create(String(organization?.id), form)
        .then((member) => {
          reset()
          listingRef.current?.refresh()
          enqueueSnackbar(`Convite enviado para ${member.email}`)
        })
        .catch((error) => setError(_.get(error, 'response.data')))
        .finally(() => setInviting(false))
    }, [])
  )

  const handleFinishSetup = useCallback((): Promise<OrganizationEntity> => {
    return api
      .instanceOf<OrganizationApi>(OrganizationApi)
      .setupFinish(String(organization?.id))
  }, [])

  const state = useMemo(
    () => ({
      error,
      inviting,
      control,
      listingRef,
      handleSubmitInvite,
      handleLoadInvites,
      handleDeleteInvite,
      handleFinishSetup,
      handleResendInvite,
    }),
    [
      error,
      inviting,
      control,
      listingRef,
      handleSubmitInvite,
      handleLoadInvites,
      handleDeleteInvite,
      handleResendInvite,
      handleFinishSetup,
    ]
  )

  return (
    <SetupPageMembersContext.Provider value={state}>
      {props.children}
    </SetupPageMembersContext.Provider>
  )
}
