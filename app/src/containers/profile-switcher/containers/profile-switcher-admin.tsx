import React from 'react'
import { useAuth } from '@hooks/auth'
import { MemberEntity } from '@entities/MemberEntity'
import { MemberProfileType } from '../../../types/member_profile_type'
import { ProfileSwitcherItemsInterface } from '../components/profile-switcher-items-interface'

export const ProfileSwitcherAdmin = (): JSX.Element => {
  const auth = useAuth()

  const members: MemberProfileType[] = React.useMemo(() => {
    if (auth.user?.admin)
      return [
        {
          kind: 'admin',
          key: `admin::${auth.user?.sub}`,
          label: auth.user?.name,
          value: {} as unknown as MemberEntity,
        },
      ]
    return []
  }, [auth.user])

  return <ProfileSwitcherItemsInterface profile="admin" members={members} />
}
