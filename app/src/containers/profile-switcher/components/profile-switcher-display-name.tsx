import { ProfileEnum } from '@enums/profile_enum'
import Typography from '@mui/material/Typography'
import { SessionPageContext } from '@pages/session/context'
import { useContextSelector } from 'use-context-selector'

export const ProfilerSwitcherDisplayName = (): JSX.Element | null => {
  const selectedProfile = useContextSelector(
    SessionPageContext,
    (s) => s.selectedProfile
  )

  if (!selectedProfile)
    return (
      <>
        <Typography
          variant="caption"
          color="muted.main"
          fontSize={9}
          lineHeight={1.2}
          textTransform="uppercase"
        >
          {ProfileEnum['organization']}
        </Typography>
        <Typography
          variant="body2"
          color="primary"
          fontWeight="bold"
          lineHeight={1}
        >
          Nova Organização
        </Typography>
      </>
    )

  return (
    <>
      <Typography
        variant="caption"
        color="muted.main"
        fontSize={9}
        lineHeight={1.2}
        textTransform="uppercase"
      >
        {ProfileEnum[selectedProfile.kind]}
      </Typography>
      <Typography
        variant="body2"
        color="primary"
        fontWeight="bold"
        lineHeight={1}
      >
        {selectedProfile.label}
      </Typography>
    </>
  )
}
