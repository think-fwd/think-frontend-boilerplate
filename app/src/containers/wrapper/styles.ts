import { Container, styled } from '@mui/material'

const WrapperRoot = styled(Container)<{ fullwidth?: 'true' | 'false' }>`
  box-shadow: ${({ theme }) => `0px 0px 128px ${theme.palette.gray.main}`};
  padding-left: 0px !important;
  padding-right: 0px !important;
  background-color: white;
  min-width: ${({ fullwidth }) => (fullwidth === 'true' ? '90%' : 'auto')};
`

const WrapperContent = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100vh - 180px)',
  paddingBottom: '100px',
})

const WrapperFooter = styled('div')({
  marginTop: '-100px',
})

export const Wrapper = {
  Root: WrapperRoot,
  Content: WrapperContent,
  Footer: WrapperFooter,
}
