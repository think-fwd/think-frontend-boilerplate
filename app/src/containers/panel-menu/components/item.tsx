import colors from '@theme/colors'
import { Link } from 'react-router-dom'
import { ListItemStyled } from './item.style'
import { IconProps } from '@phosphor-icons/react'
import { Stack, Typography } from '@mui/material'

type Props = {
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
  label: string
  href: string
  disabled?: boolean
}

export const PanelMenuItem = (props: Props): JSX.Element => {
  return (
    <ListItemStyled disabled={props.disabled}>
      <Link
        to={props.disabled ? '#' : props.href}
        style={{ width: '100%', textDecoration: 'none' }}
      >
        <Stack
          spacing={1}
          direction="row"
          alignItems="center"
          justifyContent="flex-start"
        >
          <props.icon color={colors.primary.main} size={21} weight="light" />
          <Typography variant="body2" color="primary">
            {props.label}
          </Typography>
        </Stack>
      </Link>
    </ListItemStyled>
  )
}
