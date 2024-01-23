import {
  FormInputTextSizes,
  FormInputTextTheme,
} from '@components/form-input-text/types'
import { Control, FieldValues } from 'react-hook-form'

type FormInputCurrencyRenderOptionsProps = {
  handleChange: (event: React.FocusEvent<HTMLInputElement, Element>) => void
  handleFocus: () => void
}

export type CurrencyValue = {
  maskedValue: string | undefined
  floatValue: number | undefined
}

export type FormInputCurrencyProps = {
  name: string
  label: string
  error?: string
  options?: Object
  size?: FormInputTextSizes
  theme?: FormInputTextTheme
  endIcon?: JSX.Element
  control: Control<FieldValues, any>
} & Pick<
  FormInputCurrencyControllerProps,
  'prefix' | 'suffix' | 'decimalSeparator' | 'thousandSeparator'
>

export type FormInputCurrencyControllerProps = {
  render: (
    value: string,
    options: FormInputCurrencyRenderOptionsProps
  ) => JSX.Element
  onChange: (value: CurrencyValue) => void
  defaultValue: number
  inputRef: React.MutableRefObject<any>
  decimalSeparator?: '.' | ','
  thousandSeparator?: '.' | ','
  precision?: number
  allowNegative?: boolean
  prefix?: string
  suffix?: string
  selectAllOnFocus?: boolean
  autoFocus?: boolean
}
