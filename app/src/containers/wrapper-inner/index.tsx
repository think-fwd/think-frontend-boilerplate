import { Box, Stack } from '@mui/material'
import footerPattern from '@assets/images/bg-pattern.svg'
import { WrapperInnerProps } from './types'

export const WrapperInnerComponent = (props: WrapperInnerProps) => {
  return (
    <Box
      sx={{
        minHeight: 'calc(100vh - 180px)',
        backgroundImage: [`url(${footerPattern})`].join(','),
        backgroundPosition: ['bottom center'].join(','),
        backgroundRepeat: 'repeat-x',
        backgroundSize: '60px',
      }}
    >
      <Stack justifyContent="center" alignItems="center">
        {props.children}
      </Stack>
    </Box>
  )
}
