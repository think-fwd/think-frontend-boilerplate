import { HeaderLogo } from './logo'
import { UserCircle } from '@phosphor-icons/react'
import { DisconnectButton } from './disconnect-button'
import { Stack, Button, Box, Grid } from '@mui/material'
import { HeaderConnectionStatus } from './connection-status'
import { ProfileSwitcher } from '@containers/profile-switcher'

export const HeaderMenuAuthenticated = (): JSX.Element => {
  return (
    <Grid container sx={{ px: 3 }} alignItems="center">
      <Grid item xs={12}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
          flex={1}
        >
          <Stack direction="row" spacing={3} alignItems="center">
            <HeaderLogo />
            <ProfileSwitcher />
          </Stack>
          <Box />
          <Stack direction="row" spacing={2} alignItems="center">
            <HeaderConnectionStatus />
            <Button
              variant="text"
              color="secondary"
              endIcon={<UserCircle size={21} weight="duotone" />}
            >
              Minha conta
            </Button>
            <DisconnectButton />
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}
