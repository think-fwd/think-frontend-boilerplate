import { styled, autocompleteClasses, Paper } from '@mui/material'
import { PaperDropdownStyle } from '@theme/styles'

export const AutocompletePopup = styled(Paper)(({ theme }) => ({
  marginBottom: '3px',
  backgroundColor: theme.palette.common.white,
  borderRadius: '3px',
  [`& .${autocompleteClasses.option}`]: {
    fontSize: 12,
    color: theme.palette.secondary.main,
  },
  ...PaperDropdownStyle.style,
}))
