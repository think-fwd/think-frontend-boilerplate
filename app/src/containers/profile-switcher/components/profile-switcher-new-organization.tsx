import { MenuItem, Stack, Typography } from '@mui/material'
import { useContextSelector } from 'use-context-selector'
import { ProfileSwitcherContext } from '../context'
import { theme } from '@theme/index'
import { useNavigate } from 'react-router-dom'
import { SessionPageContext } from '@pages/session/context'

export const ProfileSwitcherNewOrganization = (): JSX.Element => {
  const navigate = useNavigate()
  const handleClose = useContextSelector(
    ProfileSwitcherContext,
    (s) => s.handleClose
  )

  const handleSelectProfile = useContextSelector(
    SessionPageContext,
    (s) => s.handleSelectProfile
  )

  const handleNewOrganization = () => {
    handleSelectProfile(undefined)
    handleClose()
    navigate('/setup', { replace: true })
  }

  return (
    <MenuItem
      key={`new-organization`}
      sx={{ py: 2, px: 1.5, opacity: '1 !important' }}
      onClick={handleNewOrganization}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        width="100%"
        px={0.5}
        py={0.5}
        pr={1}
        borderRadius={1}
      >
        <Typography
          variant="caption"
          color="primary"
          fontSize={12}
          lineHeight={0}
          sx={{ color: theme.palette.muted.dark }}
        >
          Nova Organização
        </Typography>
      </Stack>
    </MenuItem>
  )
}
