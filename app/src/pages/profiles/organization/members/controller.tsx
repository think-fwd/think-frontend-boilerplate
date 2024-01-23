/* eslint-disable react-hooks/exhaustive-deps */
import { useApi } from '@hooks/api'
import { useCallback, useMemo, useRef } from 'react'
import { MembersApi } from '@services/api/member_api'
import { useContextSelector } from 'use-context-selector'
import { OrganizationMembersPageContext } from './context'
import { SessionPageContext } from '@pages/session/context'
import { OrganizationMemberPageControllerProps } from './types'
import { useSnackbar } from 'notistack'
import { FlatListRefType } from '@components/flatlist/types'
import { useModal } from '@hooks/modal'
import { OrganizationMember } from '../member'
import { MemberEntity } from '@entities/MemberEntity'
import { ModalConfirmation } from '@components/modal-confirmation'

export const OrganizatioinMembersPageController = (
  props: OrganizationMemberPageControllerProps
): JSX.Element => {
  const api = useApi()
  const { openModal, closeModal } = useModal()
  const { enqueueSnackbar } = useSnackbar()
  const flatListRef = useRef<FlatListRefType>(null)

  const profile = useContextSelector(
    SessionPageContext,
    (s) => s.selectedProfile
  )

  const handleLoadInvites = useCallback((page: number, limit: number) => {
    return api
      .instanceOf<MembersApi>(MembersApi)
      .find(String(profile?.value.organization_id), page, limit)
  }, [])

  const handleDeleteInvite = useCallback((member: MemberEntity) => {
    openModal(
      <ModalConfirmation
        title="Excluir"
        message={`Realmente deseja excluir o usuário ${member.email} da sua organização?`}
        onSuccess={(member) => {
          enqueueSnackbar(`O convite para ${member.email} foi excluído`)
          flatListRef.current?.refresh()
        }}
        onConfirm={() => {
          return api
            .instanceOf<MembersApi>(MembersApi)
            .delete(String(profile?.value.organization_id), member.id)
        }}
      />
    )
  }, [])

  const handleResendInvite = useCallback((inviteId: string) => {
    return api
      .instanceOf<MembersApi>(MembersApi)
      .reinvite(String(profile?.value.organization_id), inviteId)
      .then((member) => {
        enqueueSnackbar(`Convite enviado para ${member.email}`)
      })
  }, [])

  const handleEditMember = (member?: MemberEntity) => {
    openModal(
      <OrganizationMember
        member={member}
        onSave={() => {
          closeModal()
          flatListRef.current?.refresh()
        }}
        organizationId={String(profile?.value.organization_id)}
      />
    )
  }

  const state = useMemo(
    () => ({
      flatListRef,
      handleLoadInvites,
      handleResendInvite,
      handleDeleteInvite,
      handleEditMember,
    }),
    [
      flatListRef,
      handleLoadInvites,
      handleResendInvite,
      handleDeleteInvite,
      handleEditMember,
    ]
  )
  return (
    <OrganizationMembersPageContext.Provider value={state}>
      {props.children}
    </OrganizationMembersPageContext.Provider>
  )
}
