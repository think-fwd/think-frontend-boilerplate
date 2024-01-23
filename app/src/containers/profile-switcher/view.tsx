import { theme } from '@theme/index'
import { formatInitials } from '@utils/formatter'
import { ProfileSwitcherContext } from './context'
import { CaretDoubleDown } from '@phosphor-icons/react'
import { useContextSelector } from 'use-context-selector'
import { SessionPageContext } from '@pages/session/context'
import { ProfileSwitcherAdmin } from './containers/profile-switcher-admin'
import { Avatar, Button, Divider, Menu, Stack, Typography } from '@mui/material'
import { ProfilerSwitcherDisplayName } from './components/profile-switcher-display-name'
import { ProfileSwitcherOrganizations } from './containers/profile-switcher-organizations'
import { ProfileSwitcherNewOrganization } from './components/profile-switcher-new-organization'

export const ProfileSwitcherView = (): JSX.Element | null => {
  const selectedProfile = useContextSelector(
    SessionPageContext,
    (s) => s.selectedProfile
  )

  const open = useContextSelector(ProfileSwitcherContext, (s) => s.open)

  const anchorEl = useContextSelector(ProfileSwitcherContext, (s) => s.anchorEl)

  const handleClick = useContextSelector(
    ProfileSwitcherContext,
    (s) => s.handleClick
  )
  const handleClose = useContextSelector(
    ProfileSwitcherContext,
    (s) => s.handleClose
  )

  // if (!selectedProfile) return null

  return (
    <>
      <Button
        variant="outlined"
        sx={{
          borderColor: theme.palette.grey[300],
          pl: 1,
          minWidth: 200,
          justifyContent: 'flex-start',
        }}
        startIcon={
          <Avatar
            variant="rounded"
            sx={{ width: 26, height: 26, margin: '3px', marginRight: 0 }}
          >
            <Typography variant="caption" lineHeight={0}>
              {formatInitials(selectedProfile?.label || 'unknown')}
            </Typography>
          </Avatar>
        }
        onClick={handleClick}
      >
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          style={{ width: '100%' }}
        >
          <Stack direction="column" alignItems="start" style={{ flex: 1 }}>
            <ProfilerSwitcherDisplayName />
          </Stack>
          <CaretDoubleDown size={12} />
        </Stack>
      </Button>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        PaperProps={{
          sx: { '&:before': { left: '16px !important' }, minWidth: 200 },
        }}
      >
        <ProfileSwitcherAdmin />
        <ProfileSwitcherOrganizations />
        <Divider sx={{ my: 1 }} />
        <ProfileSwitcherNewOrganization />
      </Menu>
    </>
  )
}
