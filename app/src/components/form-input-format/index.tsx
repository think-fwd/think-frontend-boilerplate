/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react'
import { theme } from '../../theme'
import { PatternFormat } from 'react-number-format'
import { FormInputFormatProps } from './types'

import {
  Box,
  CircularProgress,
  InputAdornment,
  TextField,
  circularProgressClasses,
} from '@mui/material'
import { Controller } from 'react-hook-form'

const parseValue = (
  prefix: string | undefined,
  defaultValue: string | undefined
) => {
  return prefix
    ? String(defaultValue).substring(
        prefix?.length || 0,
        defaultValue?.length || 0
      )
    : defaultValue
}

const applyMask = (
  charMask: string,
  pattern: string,
  value: string | undefined
): string | undefined => {
  if (!charMask || !pattern || !value) return undefined
  const mountValue: string[] = []
  const charsValue = value.split('')
  const chars = pattern.split('')
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== charMask) mountValue.push(chars[i])
    else mountValue.push(String(charsValue.shift()))
  }
  return mountValue.join('')
}

export function FormInputFormat({
  mask,
  name,
  format,
  appendPrefixOnValue,
  appendSuffixOnValue,
  control,
  ...props
}: FormInputFormatProps): JSX.Element {
  const [maskedValue, setMaskedValue] = useState<string | undefined>(undefined)

  const handleApplyMask = (value: string | undefined) => {
    const parsedValue = parseValue(appendPrefixOnValue, value)
    return applyMask('#', format, parsedValue)
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        return (
          <PatternFormat
            name={name}
            inputRef={ref}
            onBlur={onBlur}
            format={format}
            mask={!!mask ? '_' : ''}
            customInput={TextField}
            allowEmptyFormatting
            onValueChange={({ formattedValue, value }) => {
              onChange(String(value))
              setMaskedValue(formattedValue)
            }}
            type="tel"
            fullWidth
            size={props.inputSize || 'small'}
            color="primary"
            label={props.label}
            disabled={props.disabled}
            value={maskedValue || handleApplyMask(value)}
            error={Boolean(props.error)}
            helperText={props.error}
            FormHelperTextProps={{
              sx: { display: 'block', mx: 0, fontSize: 10 },
            }}
            InputProps={{
              type: 'tel',
              size: props.inputSize || 'small',
              sx: {
                backgroundColor:
                  props.theme === 'light'
                    ? theme.palette.common.white
                    : theme.palette.gray.light,
              },
              endAdornment: props.loading ? (
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <CircularProgress
                    size={14}
                    thickness={7}
                    disableShrink
                    variant="indeterminate"
                    sx={{
                      color: (theme) => theme.palette.primary.main,
                      animationDuration: '1000ms',
                      [`& .${circularProgressClasses.circle}`]: {
                        strokeLinecap: 'round',
                      },
                    }}
                  />
                </Box>
              ) : (
                props.endIcon && (
                  <InputAdornment position="end">
                    {props.endIcon}
                  </InputAdornment>
                )
              ),
            }}
          />
        )
      }}
    />
  )
}
