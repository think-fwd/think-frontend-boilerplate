import {
  FormInputTextSizes,
  FormInputTextTheme,
} from '@components/form-input-text/types'
import { TextFieldProps } from '@mui/material'
import { Control, FieldValues } from 'react-hook-form'
export type FormInputPhoneProps = TextFieldProps & {
  name: string
  label: string
  error?: string
  defaultValue?: string
  size?: FormInputTextSizes
  theme?: FormInputTextTheme
  control: Control<FieldValues, any>
}
