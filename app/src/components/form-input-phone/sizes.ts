import { FormInputTextSizes } from '@components/form-input-text/types'

export const FormInputPhoneSizes: Record<
  FormInputTextSizes,
  {
    pt: number
    height: number
    fontSize: number
    legendSize: number
    flagSize: number
    flagPL: number
  }
> = {
  medium: {
    pt: -8,
    height: 62,
    fontSize: 16,
    legendSize: 12,
    flagSize: 36,
    flagPL: 14,
  },
  small: {
    pt: -6,
    height: 42,
    fontSize: 14,
    legendSize: 10,
    flagSize: 32,
    flagPL: 14,
  },
  tiny: {
    pt: -5,
    height: 31,
    fontSize: 11,
    legendSize: 10,
    flagSize: 24,
    flagPL: 14,
  },
}
