import { Wrapper } from './styles'
import { MenuSelector } from './components/menu-selector'

export const Header = (): JSX.Element => {
  return (
    <Wrapper>
      <MenuSelector />
    </Wrapper>
  )
}
