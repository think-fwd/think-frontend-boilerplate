import colors from '@theme/colors'
import styled from '@emotion/styled'
import { FormControl, Stack } from '@mui/material'

export const Container = styled(FormControl)`
  width: 100%;
  background-color: ${colors['$color-background-secundary']};
`

export const Content = styled(Stack)`
  max-height: 200px;
  overflow: hidden;
`
