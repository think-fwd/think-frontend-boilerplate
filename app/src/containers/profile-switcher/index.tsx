import { ProfileSwitcherController } from './controller'
import { ProfileSwitcherProps } from './types'
import { ProfileSwitcherView } from './view'

export const ProfileSwitcher = (props: ProfileSwitcherProps): JSX.Element => {
  return (
    <ProfileSwitcherController {...props}>
      <ProfileSwitcherView />
    </ProfileSwitcherController>
  )
}
