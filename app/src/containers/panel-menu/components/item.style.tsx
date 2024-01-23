import { ListItemButton, styled } from '@mui/material'
import colors from '@theme/colors'

export const ListItemStyled = styled(ListItemButton)`
  border-radius: 6px;
  border-width: 1px;
  border-style: solid;
  border-color: transparent;
  padding: 0px;
  &:hover {
    background-color: ${colors.primary.light};
    border-color: ${colors.primary.main};
  }
  & > a {
    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 12px;
    padding-right: 12px;
  }
`
