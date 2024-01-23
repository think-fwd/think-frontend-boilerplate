/* eslint-disable react-hooks/exhaustive-deps */
import { useApi } from '@hooks/api'
import { useAuth } from '@hooks/auth'
import { useStorage } from '@hooks/storage'
import { SessionPageContext } from './context'
import { AuthApi } from '@services/api/auth_api'
import { SessionPageControllerProps } from './types'
import { MemberProfileType } from '@type/member_profile_type'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { UserEntity } from '@entities/UserEntity'

export const SessionPageController = (
  props: SessionPageControllerProps
): JSX.Element => {
  const api = useApi()
  const auth = useAuth()
  const storage = useStorage()
  const [loading, setLoading] = useState<boolean>(true)
  const [selectedProfile, setSelectedProfile] = useState<
    undefined | MemberProfileType
  >(undefined)

  const handleSelectProfile = (profile: MemberProfileType | undefined) => {
    if (!profile) storage.remove('profile')
    else storage.set('profile', profile.key)
    setSelectedProfile(profile)
  }

  const handleLoadProfile = useCallback((): string | null => {
    try {
      return storage.get('profile')
    } catch (error) {
      return null
    }
  }, [])

  const handleDefaultProfile = (user: UserEntity) => {
    auth.setUser(user)
    const selectedProfileKey = handleLoadProfile()
    const foundedProfileMember = user.members.find(
      (m) => `organization::${m.organization_id}` === selectedProfileKey
    )
    if (foundedProfileMember) {
      handleSelectProfile({
        kind: 'organization',
        key: `organization::${foundedProfileMember.organization_id}`,
        label: foundedProfileMember.organization.name,
        value: foundedProfileMember,
      })
    } else if (user.members.length > 0) {
      const [member] = user.members
      handleSelectProfile({
        kind: 'organization',
        key: `organization::${member.organization_id}`,
        label: member.organization.name,
        value: member,
      })
    }
  }

  const handleLoadSession = useCallback(() => {
    setLoading(true)
    api
      .instanceOf<AuthApi>(AuthApi)
      .session()
      .then(handleDefaultProfile)
      .finally(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (!auth.user) auth.disconnect()
    else handleLoadSession()
  }, [])

  const state = useMemo(
    () => ({
      loading,
      selectedProfile,
      handleSelectProfile,
    }),
    [loading, selectedProfile, handleSelectProfile]
  )

  return (
    <SessionPageContext.Provider value={state}>
      {props.children}
    </SessionPageContext.Provider>
  )
}
