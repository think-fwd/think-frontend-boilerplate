/* eslint-disable no-nested-ternary */
import {
  FormInputTextSizes,
  FormInputTextTheme,
} from '@components/form-input-text/types'
import styled from '@emotion/styled'
import colors from '@theme/colors'
import { theme } from '@theme/index'
import { FormInputPinSizes } from './sizes'

export const InputPinField = styled.input<{
  done: 'true' | 'false'
  inputsize: FormInputTextSizes
  themecolor: FormInputTextTheme
}>`
  flex: 1;
  height: ${({ inputsize }) => `${FormInputPinSizes[inputsize].size}px`};
  width: 100%;
  min-height: ${({ inputsize }) => `${FormInputPinSizes[inputsize].size}px`};
  min-width: auto;
  max-height: ${({ inputsize }) => `${FormInputPinSizes[inputsize].size}px`};
  max-width: ${({ inputsize }) => `${FormInputPinSizes[inputsize].size}px`};
  outline: none;
  border-width: 1px;
  border-radius: 6px;
  border-style: solid;
  align-items: center;
  justify-content: center;
  background-color: ${({ themecolor }) =>
    (themecolor || 'light') === 'light'
      ? theme.palette.common.white
      : theme.palette.gray.light};
  border-color: ${({ done }) => {
    return done === 'true'
      ? colors['$color-border-tertiary']
      : colors['$color-border-secundary']
  }};
  font-size: ${({ inputsize }) => `${FormInputPinSizes[inputsize].fontSize}px`};
  text-align: center;
  color: ${colors['$color-text-primary']};
  &:focus {
    outline: 1px solid ${colors['$color-action-link']};
    border-color: ${colors['$color-action-link']} !important;
  }
`
