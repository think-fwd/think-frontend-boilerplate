import { Control, FieldValues } from 'react-hook-form'
import { FormInputTextTheme } from '@components/form-input-text/types'

export type FormInputCheckboxOption = {
  value: string
  icon?: () => JSX.Element
  type?: string
  title: string
  enabled: boolean
  subtitle?: string
  description?: string | JSX.Element
  metadata?: Record<string, unknown>
}

export type FormInputCheckboxProps = {
  name: string
  mode: 'single' | 'multiple'
  theme?: FormInputTextTheme
  optionsPerLine?: 1 | 2 | 3
  options: FormInputCheckboxOption[]
  control: Control<FieldValues, any>
  onChangeSingle?: (value: string, metadata?: Record<string, unknown>) => void
}
