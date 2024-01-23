import { Box, Stack, Typography } from '@mui/material'
import { theme } from '@theme/index'
import { IconProps } from '@phosphor-icons/react'

type Props = {
  title?: string
  icon?: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >
  onClick?: () => void
  children?: JSX.Element | JSX.Element[]
  padding?: number
}
export const CardContainer = (props: Props) => {
  return (
    <Stack direction="column" spacing={1}>
      <Stack direction="row" spacing={1} alignItems="center">
        {props.icon && (
          <props.icon color={theme.palette.muted.main} size={12} />
        )}
        {props.title && (
          <Typography variant="caption" color="muted.main" lineHeight={0}>
            {props.title}
          </Typography>
        )}
      </Stack>
      <Box
        p={typeof props.padding !== 'undefined' ? props.padding : 3}
        borderRadius={2}
        onClick={props.onClick}
        sx={{
          cursor: !!props.onClick ? 'pointer' : 'default',
          backgroundColor: theme.palette.muted.light,
        }}
      >
        {props.children}
      </Box>
    </Stack>
  )
}
