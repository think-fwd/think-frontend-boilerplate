import React from 'react'
import { useAuth } from '@hooks/auth'
import { MemberProfileType } from '../../../types/member_profile_type'
import { ProfileSwitcherItemsInterface } from '../components/profile-switcher-items-interface'

export const ProfileSwitcherOrganizations = (): JSX.Element => {
  const auth = useAuth()
  const members: MemberProfileType[] = React.useMemo(() => {
    return (auth.user?.members || [])
      .filter((member) => member.status === 'ACCEPTED')
      .map((member) => ({
        kind: 'organization',
        key: `organization::${member.organization.id}`,
        label: member.organization.name,
        value: member,
      }))
  }, [auth.user])

  return (
    <ProfileSwitcherItemsInterface profile="organization" members={members} />
  )
}
