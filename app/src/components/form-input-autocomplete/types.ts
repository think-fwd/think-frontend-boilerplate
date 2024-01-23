import {
  FormInputTextSizes,
  FormInputTextTheme,
} from '@components/form-input-text/types'
import { Control, FieldValues } from 'react-hook-form'

export type FormInputKeyValueType = {
  key: string | number
  value: string
}

export type FormInputMultiselectdProps = {
  name: string
  label: string
  error?: string
  theme?: FormInputTextTheme
  size?: FormInputTextSizes
  loadOptions: () => Promise<FormInputKeyValueType[]>
  control: Control<FieldValues, any>
}
