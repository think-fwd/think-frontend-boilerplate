import { SxProps, Theme } from '@mui/material'
import { Control, FieldValues } from 'react-hook-form'

export type OptionRenderType = () => JSX.Element

export type FormInputTextSizes = 'tiny' | 'medium' | 'small'
export type FormInputTextTheme = 'dark' | 'light'

export type FormInputTextProps = {
  name: string
  label?: string
  error?: string
  helper?: string
  options?: Record<string, string | OptionRenderType>
  endIcon?: JSX.Element
  disabled?: boolean
  pb?: number
  theme?: FormInputTextTheme
  size?: FormInputTextSizes
  type?: React.InputHTMLAttributes<unknown>['type']
  onChangeDebounce?: (value: string) => void
  inputStyle?: SxProps<Theme> | undefined
  defaultValue?: any
  fullWidth?: boolean
  placeholder?: string
  startAdorment?: React.ReactNode
  endAdorment?: React.ReactNode
  control: Control<FieldValues, any>
}
