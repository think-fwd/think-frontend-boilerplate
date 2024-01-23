import { FormHelperText } from '@mui/material'
import colors from '@theme/colors'

export type ErrorLabelProps = {
  value?: string
}
export function ErrorLabel({ value }: ErrorLabelProps): JSX.Element | null {
  if (!value || value.length === 0) return null
  return (
    <FormHelperText sx={{ ml: 0, color: colors['$color-semantic-error'] }}>
      {value}
    </FormHelperText>
  )
}
