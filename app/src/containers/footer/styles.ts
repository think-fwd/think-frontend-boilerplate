import { styled } from '@mui/material'

export const Wrapper = styled('div')({
  width: '100%',
})

export const FooterContent = styled('div')(({ theme }) => ({
  display: 'flex',
  height: '100px',
  justifyContent: 'center',
  flexDirection: 'column',
  backgroundColor: theme.palette.secondary.main,
}))
