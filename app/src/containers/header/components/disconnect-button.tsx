import { useAuth } from '@hooks/auth'
import { LoadingButton } from '@mui/lab'
import { SignOut } from '@phosphor-icons/react'

export const DisconnectButton = (): JSX.Element => {
  const auth = useAuth()
  return (
    <LoadingButton
      variant={auth.disconnecting ? 'contained' : 'text'}
      color="secondary"
      onClick={() => auth.disconnect()}
      endIcon={<SignOut size={18} weight="duotone" />}
      loading={auth.disconnecting}
    >
      Desconectar
    </LoadingButton>
  )
}
