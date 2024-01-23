import { useContextSelector } from 'use-context-selector'
import { Avatar, MenuItem, Stack, Typography } from '@mui/material'

import { MemberProfileType } from '@type/member_profile_type'
import { ProfileEnum, ProfileEnumKeys } from '@enums/profile_enum'

import { ProfileSwitcherContext } from '../context'
import { ProfileSwitcherHead } from './profile-switcher-head'
import { formatInitials } from '@utils/formatter'
import { theme } from '@theme/index'
import { SessionPageContext } from '@pages/session/context'
import { useNavigate } from 'react-router-dom'

type Props = {
  profile: ProfileEnumKeys
  members: MemberProfileType[]
}

export const ProfileSwitcherItemsInterface = (props: Props): JSX.Element => {
  const navigate = useNavigate()

  const selectedProfile = useContextSelector(
    SessionPageContext,
    (s) => s.selectedProfile
  )

  const handleSelectProfile = useContextSelector(
    SessionPageContext,
    (s) => s.handleSelectProfile
  )

  const handleClose = useContextSelector(
    ProfileSwitcherContext,
    (s) => s.handleClose
  )

  if (props.members.length === 0) return <></>

  return (
    <Stack direction="column">
      <ProfileSwitcherHead label={ProfileEnum[props.profile]} />
      {props.members.map((member) => {
        const selected = member.value?.id === selectedProfile?.value?.id
        return (
          <MenuItem
            key={`member-${member.value?.id}`}
            sx={{ py: 2, px: 1.5, opacity: '1 !important' }}
            disabled={selected}
            onClick={() => {
              handleClose()
              handleSelectProfile(member)
              navigate(`/organizations/${member.value.organization_id}`, {
                replace: true,
              })
            }}
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
              sx={{
                backgroundColor: selected
                  ? theme.palette.muted.light
                  : 'transparent',
              }}
            >
              <Avatar
                variant="rounded"
                sx={{ width: 21, height: 21, fontSize: 11 }}
                children={formatInitials(member?.label || 'unknown')}
              ></Avatar>
              <Typography
                variant="caption"
                color="primary"
                fontSize={12}
                lineHeight={0}
                sx={{ color: theme.palette.muted.dark }}
              >
                {member.label}
              </Typography>
            </Stack>
          </MenuItem>
        )
      })}
    </Stack>
  )
}
