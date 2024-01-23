import { FormInputTextTheme } from '@components/form-input-text/types'
import { Checkbox, Stack, Typography } from '@mui/material'
import { theme } from '@theme/index'
import { Check } from '@phosphor-icons/react'

type Props = {
  name: string
  checked?: boolean
  disabled?: boolean
  onChange?: (checked: boolean) => void
  size?: 'medium' | 'small'
  padding?: number
  theme?: FormInputTextTheme
  label?: string | JSX.Element
}

export const FormInputCheck = (props: Props): JSX.Element => {
  return (
    <Stack direction="row" alignItems="center">
      <Checkbox
        id={props.name}
        name={props.name}
        size={props.size || 'medium'}
        sx={{
          '&:hover': { bgcolor: 'transparent' },
          opacity: props.disabled ? 0.5 : 1,
          padding: props.padding,
        }}
        disabled={props.disabled}
        disableRipple
        color="default"
        checked={props.checked}
        onChange={(event) => props?.onChange?.(event.target.checked)}
        checkedIcon={
          <Check
            color={theme.palette.common.white}
            style={{
              borderWidth: 1,
              borderRadius: '4px',
              borderStyle: 'solid',
              borderColor: theme.palette.primary.main,
              backgroundColor: theme.palette.primary.main,
            }}
          />
        }
        icon={
          <Check
            color="transparent"
            style={{
              borderWidth: 1,
              borderRadius: '4px',
              borderStyle: 'solid',
              borderColor: theme.palette.muted.light,
              backgroundColor:
                (props.theme || 'dark') === 'light'
                  ? theme.palette.common.white
                  : theme.palette.gray.main,
            }}
          />
        }
      />
      {props.label && (
        <label htmlFor={props.name}>
          <Typography variant="body2">{props.label}</Typography>
        </label>
      )}
    </Stack>
  )
}
