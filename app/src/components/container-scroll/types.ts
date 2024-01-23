export type ContainerScrollType = {
  pr?: number
  pb?: number
  pt?: number
  spacing?: number
  auto?: 'true' | 'false'
  disabled?: 'true' | 'false'
  ref?: React.RefObject<HTMLDivElement>
  children: JSX.Element | JSX.Element[] | null
  disableScrollIndicator?: boolean
  onScrollBottom?: () => void
}
