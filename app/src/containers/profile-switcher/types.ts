export type ProfileSwitcherProps = {}
export type ProfileSwitcherControllerProps = ProfileSwitcherProps & {
  children: JSX.Element
}
export type ProfileSwitcherContextProps = {
  open: boolean
  anchorEl: HTMLElement | null
  handleClose: () => void
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
}
