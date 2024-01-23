import { styled, Box } from '@mui/material'

export const Background = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  backgroundSize: 'cover',
  backgroundPosition: 'bottom center',
  backgroundRepeat: 'no-repeat',
}))

export const Wrapper = styled(Box)(({ theme }) => ({
  paddingTop: 12,
  paddingBottom: 12,
  width: '100%',
  height: 'auto',
  backgroundColor: `${theme.palette.success.light}15`,
  boxShadow:
    'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px',
}))
