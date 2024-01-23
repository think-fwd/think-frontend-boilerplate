import { FormInputTextSizes } from '@components/form-input-text/types'
import styled from '@emotion/styled'
import { FormInputPhoneSizes } from '../sizes'

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  align-self: stretch;
  align-items: center;
`

export const InputSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border: 0;
  opacity: 0 !important;
  cursor: pointer;
  font-size: 12px;
`

export const SelectionPointer = styled.div<{ size: FormInputTextSizes }>`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  justify-content: center;
  min-width: ${({ size }) => `${FormInputPhoneSizes[size].flagSize}px`};
  width: auto;
  padding-left: ${({ size }) => `${FormInputPhoneSizes[size].flagPL}px`};
  padding-right: 4px;
  padding-top: 8px;
  padding-bottom: 8px;
`
