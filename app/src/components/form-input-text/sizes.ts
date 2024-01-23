import { FormInputTextSizes } from './types'

export const FormInputMapSizes: Record<
  FormInputTextSizes,
  Record<'menu' | 'item' | 'label', Record<string, unknown>>
> = {
  medium: {
    menu: { marginTop: '3px !important' },
    item: { py: 2 },
    label: { fontSize: '14px' },
  },
  small: {
    menu: { marginTop: '3px !important' },
    item: { py: 2 },
    label: { fontSize: '14px' },
  },
  tiny: {
    menu: { marginTop: '-45px !important' },
    item: { py: 1 },
    label: { fontSize: '12px' },
  },
}
