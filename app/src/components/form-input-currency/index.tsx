import React from 'react'
import { theme } from '../../theme'
import { FormInputCurrencyProps } from './type'
import { InputAdornment, TextField } from '@mui/material'
import { FormInputCurrencyController } from './controller'
import { Controller } from 'react-hook-form'
export const FormInputCurrency = ({
  size = 'medium',
  name,
  control,
  ...props
}: FormInputCurrencyProps): JSX.Element => {
  const inputRef = React.useRef<any>()

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <FormInputCurrencyController
          inputRef={inputRef}
          defaultValue={value}
          prefix={props.prefix}
          suffix={props.suffix}
          decimalSeparator={props.decimalSeparator}
          thousandSeparator={props.thousandSeparator}
          onChange={({ floatValue }) => onChange(floatValue || 0)}
          render={(value: string, { handleChange, handleFocus }) => (
            <TextField
              inputRef={ref}
              name={name}
              fullWidth
              type="phone"
              size={size}
              color="primary"
              label={props.label}
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
              onMouseUp={handleFocus}
              onBlur={onBlur}
              error={Boolean(props.error)}
              helperText={props.error}
              FormHelperTextProps={{
                sx: { display: 'block', mx: 0, fontSize: 10 },
              }}
              sx={{
                backgroundColor:
                  props.theme === 'light'
                    ? theme.palette.common.white
                    : theme.palette.gray.light,
                mb: props.error && 2,
              }}
              InputProps={{
                endAdornment: props.endIcon && (
                  <InputAdornment position="end">
                    {props.endIcon}
                  </InputAdornment>
                ),
              }}
            />
          )}
        />
      )}
    />
  )
}
