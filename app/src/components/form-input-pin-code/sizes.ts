import { FormInputTextSizes } from '@components/form-input-text/types'

export const FormInputPinSizes: Record<
  FormInputTextSizes,
  { size: number; fontSize: number }
> = {
  medium: { size: 52, fontSize: 21 },
  small: { size: 32, fontSize: 18 },
  tiny: { size: 21, fontSize: 12 },
}
