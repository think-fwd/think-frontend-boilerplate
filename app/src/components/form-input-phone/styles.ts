import styled from '@emotion/styled'
import { theme } from '../../theme'
import ReactPhoneNumberInput from 'react-phone-number-input/input'
import { FormInputTextSizes } from '@components/form-input-text/types'
import { FormInputPhoneSizes } from './sizes'

export const InputFieldset = styled.fieldset<{
  error: boolean
  size: FormInputTextSizes
}>`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.error ? theme.palette.error.main : theme.palette.grey[400]};
  padding: 0px !important;
  margin: 0px;
  margin-top: -8px;
  border-radius: 4px;
  height: ${({ size }) => `${FormInputPhoneSizes[size].height}px`};
  background-color: ${(props) =>
    props.theme === 'light'
      ? theme.palette.common.white
      : theme.palette.gray.light};
  :hover {
    border-color: ${(props) =>
      props.error ? theme.palette.error.main : theme.palette.grey[700]};
  }
  :has(input:focus) {
    border-width: 2px;
    margin-left: -1px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
    border-color: ${(props) =>
      props.error ? theme.palette.error.main : theme.palette.primary.main};
    & > legend > * {
      color: ${theme.palette.primary.main};
    }
  }
  * {
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  }
`

export const InputLegend = styled.legend<{ size: FormInputTextSizes }>`
  margin-left: 8px;
  margin-right: 8px;
  padding-left: 6px;
  padding-right: 6px;
  font-size: ${({ size }) => `${FormInputPhoneSizes[size].legendSize}px`};
  & > * {
    line-height: ${({ size }) =>
      `${FormInputPhoneSizes[size].legendSize + 6}px !important`};
    font-size: ${({ size }) => `${FormInputPhoneSizes[size].legendSize}px`};
  }
`

export const InputWrapper = styled.label<{ size: FormInputTextSizes }>`
  position: relative;
  width: 100%;
  height: ${({ size }) => `${FormInputPhoneSizes[size].height - 10}px`};
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ size }) => `${FormInputPhoneSizes[size].pt}px`};
  cursor: text !important;
`

export const CountryCodeLabel = styled.span<{ size: FormInputTextSizes }>`
  color: ${theme.palette.text.primary};
  display: flex;
  align-items: center;
  height: ${({ size }) => `${FormInputPhoneSizes[size].height - 10}px`};
  & > * {
    font-size: ${({ size }) =>
      `${FormInputPhoneSizes[size].fontSize}px !important`};
  }
`

export const InputText = styled(ReactPhoneNumberInput)<{
  size: FormInputTextSizes
}>`
  flex: 1;
  height: ${({ size }) => `${FormInputPhoneSizes[size].height - 12}px`};
  border-width: 0px;
  outline: none !important;
  background-color: transparent;
  padding-left: 4px;
  font-size: ${({ size }) => `${FormInputPhoneSizes[size].fontSize}px`};
  color: ${theme.palette.text.primary};
`
