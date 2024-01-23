import React from 'react'
import { CountryCode } from 'libphonenumber-js/types'
import { getCountries } from 'react-phone-number-input'
import flags from 'react-phone-number-input/flags'
import ptBR from 'react-phone-number-input/locale/pt-BR.json'
import { InputSelect, SelectionPointer, Wrapper } from './styles'
import { CaretDown } from '@phosphor-icons/react'
import { theme } from '@theme/index'
import { FormInputTextSizes } from '@components/form-input-text/types'

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  fSize: FormInputTextSizes
  onValue: (country: CountryCode | undefined) => void
}

export const CountrySelect = ({
  fSize,
  value,
  onValue,
}: Props): JSX.Element => (
  <Wrapper>
    <InputSelect
      value={value}
      tabIndex={-1}
      onChange={(event) =>
        onValue((event.target.value || undefined) as CountryCode | undefined)
      }
    >
      {getCountries().map((country) => (
        <option key={country} value={country}>
          {ptBR[country]}
        </option>
      ))}
    </InputSelect>
    <SelectionPointer size={fSize}>
      {flags[(value as CountryCode) || 'BR']?.({
        title: (value as string) || 'BR',
      })}
      <CaretDown
        weight="duotone"
        size={12}
        color={theme.palette.primary.dark}
      />
    </SelectionPointer>
  </Wrapper>
)
