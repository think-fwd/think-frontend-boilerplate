import { Typography } from '@mui/material'

type Props = {
  label: string
}

export const ProfileSwitcherHead = (props: Props): JSX.Element => {
  return (
    <Typography
      variant="caption"
      color="muted.main"
      textTransform="uppercase"
      fontWeight="bold"
      fontSize={11}
      px={2}
      pt={1}
    >
      {props.label}
    </Typography>
  )
}
