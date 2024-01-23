import React from 'react'
import { ProfileSwitcherContext } from './context'
import { ProfileSwitcherControllerProps } from './types'

export const ProfileSwitcherController = (
  props: ProfileSwitcherControllerProps
): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const state = {
    open,
    anchorEl,
    handleClick,
    handleClose,
  }

  return (
    <ProfileSwitcherContext.Provider value={state}>
      {props.children}
    </ProfileSwitcherContext.Provider>
  )
}
