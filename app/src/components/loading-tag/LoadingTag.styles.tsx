import { Container, Stack, styled } from '@mui/material'

export const TagWrapper = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TagContainer = styled(Stack)`
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 32px;
  padding-right: 32px;
  border-width: 1px;
  border-radius: 4px;
  border-style: solid;
  background-color: ${(ctx) => ctx.theme.palette.primary.light};
  border-color: ${(ctx) => ctx.theme.palette.muted.light};
`
