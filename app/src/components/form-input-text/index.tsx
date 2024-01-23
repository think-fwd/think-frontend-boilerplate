import _ from 'lodash'
import { theme } from '../../theme'
import { FormInputMapSizes } from './sizes'
import { Controller } from 'react-hook-form'
import { useInputDebounce } from '@hooks/useDebounce'
import { FormInputTextProps, OptionRenderType } from './types'
import { InputAdornment, MenuItem, TextField, Typography } from '@mui/material'

export function FormInputText({
  name,
  options,
  defaultValue,
  control,
  onChangeDebounce,
  ...props
}: FormInputTextProps): JSX.Element {
  const { callDebounce } = useInputDebounce(onChangeDebounce)

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <TextField
          select={Boolean(options)}
          inputRef={ref}
          id={name}
          name={name}
          fullWidth
          onBlur={onBlur}
          onChange={(e) => {
            onChange(e)
            callDebounce(e.target.value)
          }}
          size={props.size || 'small'}
          color="primary"
          type={props.type || 'text'}
          label={props.label}
          value={value || ''}
          defaultValue={defaultValue}
          error={Boolean(props.error)}
          helperText={props.error || props.helper}
          disabled={props.disabled}
          placeholder={props.placeholder}
          FormHelperTextProps={{
            sx: { display: 'block', mx: 0, fontSize: 10 },
          }}
          sx={{ pb: props.pb }}
          // InputLabelProps={{ shrink: value?.length > 0 }}
          SelectProps={{
            MenuProps: {
              PaperProps: {
                sx: {
                  '&:before': { display: 'none' },
                  ...FormInputMapSizes[props.size || 'small'].menu,
                },
              },
            },
          }}
          InputProps={{
            startAdornment: props.startAdorment,
            endAdornment:
              props.endAdorment ||
              (props.endIcon && (
                <InputAdornment position="end">{props.endIcon}</InputAdornment>
              )),
            sx: {
              ...props.inputStyle,
              backgroundColor:
                props.theme === 'light'
                  ? theme.palette.common.white
                  : theme.palette.gray.light,
            },
          }}
        >
          {options &&
            Object.keys(options).map((option) => {
              if (typeof _.get(options, option) !== 'string') {
                const p = _.get(options, option) as OptionRenderType
                return p()
              } else {
                return (
                  <MenuItem
                    key={`option-${option || 'default'}`}
                    sx={FormInputMapSizes[props.size || 'small'].item}
                    value={option || ''}
                    onClick={() => {
                      onChange(option)
                      if (onChangeDebounce) {
                        callDebounce(option)
                        onChangeDebounce(option)
                      }
                    }}
                  >
                    <Typography
                      color={theme.palette.muted.main}
                      sx={FormInputMapSizes[props.size || 'small'].label}
                    >
                      {_.get(options, option) as string}
                    </Typography>
                  </MenuItem>
                )
              }
            })}
        </TextField>
      )}
    />
  )
}
