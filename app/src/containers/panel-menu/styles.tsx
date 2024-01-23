import { styled, List, Box } from '@mui/material'
import colors from '@theme/colors'
import { theme } from '@theme/index'

export const Wrapper = styled(Box)`
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: ${colors['$color-background-primary']};
  border-right: 1px solid ${theme.palette.gray.main};
`

export const Container = styled(List)`
  flex: 1;
  padding: 12px;
  max-width: 100%;
`
