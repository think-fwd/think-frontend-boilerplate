import { useAuth } from '../../../hooks/auth'
import { HeaderMenuDefault } from './menu-default'
import { HeaderMenuAuthenticated } from './menu-authenticated'

export const MenuSelector = () => {
  const auth = useAuth()
  if (auth.user) return <HeaderMenuAuthenticated />
  return <HeaderMenuDefault />
}
