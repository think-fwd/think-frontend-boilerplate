/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { theme } from '@theme/index'
import 'react-phone-number-input/style.css'
import { Controller } from 'react-hook-form'
import { FormInputPhoneProps } from './types'
import { Stack, Typography } from '@mui/material'
import { CountrySelect } from './components/select'
import { CountryCode } from 'libphonenumber-js/types'
import { getCountryCallingCode } from 'react-phone-number-input/input'
import {
  CountryCodeLabel,
  InputLegend,
  InputText,
  InputFieldset,
  InputWrapper,
} from './styles'

export const FormInputPhone = ({
  name,
  control,
  size = 'small',
  ...props
}: FormInputPhoneProps): JSX.Element => {
  const inputRef = React.useRef<any>()
  const [country, setCountry] = React.useState<CountryCode | undefined>('BR')

  return (
    <Stack direction="column" style={{ width: '100%' }}>
      <InputFieldset
        size={size}
        theme={props.theme}
        disabled={props.disabled}
        error={Boolean(props.error)}
      >
        <InputLegend size={size}>
          <Typography
            variant="caption"
            color={Boolean(props.error) ? theme.palette.error.main : 'grey.800'}
          >
            {props.label}
          </Typography>
        </InputLegend>
        <InputWrapper htmlFor="input-phone" size={size}>
          <CountrySelect fSize={size} value={country} onValue={setCountry} />
          <CountryCodeLabel size={size}>
            <Typography variant="caption">
              +{getCountryCallingCode(country || 'BR')}
            </Typography>
          </CountryCodeLabel>
          <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <InputText
                id={name}
                name={name}
                size={size}
                ref={ref || inputRef}
                placeholder={props.placeholder}
                type="tel"
                disabled={props.disabled}
                country={country}
                value={value}
                international={false}
                withCountryCallingCode={false}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
        </InputWrapper>
      </InputFieldset>
      {props.error && (
        <Typography variant="caption" color="error.main" fontSize={10}>
          {props.error}
        </Typography>
      )}
    </Stack>
  )
}
