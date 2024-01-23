/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
import _ from 'lodash'
import produce from 'immer'
import { Stack } from '@mui/material'
import { InputPinField } from './styles'
import { useEffect, useRef } from 'react'
import { ErrorLabel } from '@components/error-label'
import { Control, Controller, FieldValues } from 'react-hook-form'
import {
  FormInputTextSizes,
  FormInputTextTheme,
} from '@components/form-input-text/types'

type FormInputPinCodeProps = {
  name: string
  length?: number
  error?: string
  onPressEnter?: () => void
  control: Control<FieldValues, any>
  theme?: FormInputTextTheme
  size?: FormInputTextSizes
}
export default function FormInputPinCode({
  name,
  error,
  length = 6,
  onPressEnter,
  control,
  theme,
  size = 'small',
}: FormInputPinCodeProps): JSX.Element {
  // Create an array of refs with the specified length
  const refs = Array.from({ length }, () =>
    useRef<HTMLInputElement | null>(null)
  )

  const handlePaste = (
    event: React.ClipboardEvent<HTMLInputElement>,
    onChange: (...event: any[]) => void
  ) => {
    event.preventDefault()
    const value = event.clipboardData
      .getData('text')
      .split('')
      .filter((key) => /^\d$/.test(key))
      .slice(0, length)
      .join('')
    onChange(value)
  }

  const handleKey = (
    index: number,
    event: React.KeyboardEvent<HTMLInputElement>,
    value: string,
    onChange: (...event: any[]) => void
  ) => {
    const { key } = event
    if (key === 'Backspace') {
      onChange(
        produce(value, (draft) => {
          refs?.[draft.length - 1]?.current?.focus()
          return [...(draft || '').slice(0, -1)].join('')
        })
      )
    } else if (key === 'Enter') {
      if (value.length === length) {
        onPressEnter?.()
      }
    } else if (!/^\d$/.test(key)) {
      event.stopPropagation()
    } else {
      onChange(
        produce(value, (draft) => {
          const arr = (draft || '').split('')
          if (arr.length > index) {
            arr[index] = key
            refs?.[index + 1]?.current?.focus()
          } else {
            arr.push(key)
            refs?.[arr.length]?.current?.focus()
          }
          return arr.join('')
        })
      )
    }
  }

  useEffect(() => {
    if (refs?.[0]?.current) {
      refs?.[0]?.current?.focus()
    }
  }, [])

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Stack direction="column" alignItems="center">
          <Stack direction="column" alignItems="flex-start">
            <Stack direction="row" spacing={1} justifyContent="space-between">
              {Array.from(Array(length)).map((_, i) => {
                return (
                  <InputPinField
                    ref={refs[i]}
                    key={`input-pin-${i}`}
                    autoFocus
                    type="tel"
                    inputsize={size}
                    themecolor={theme || 'dark'}
                    done={value?.length === length ? 'true' : 'false'}
                    value={value?.[i] || ''}
                    onKeyDown={(e) => handleKey(i, e, value, onChange)}
                    onPaste={(e) => handlePaste(e, onChange)}
                    id={`${name}-input-${i}`}
                    data-cy={`${name}-input-${i}`}
                  />
                )
              })}
            </Stack>
            <ErrorLabel value={error} />
          </Stack>
        </Stack>
      )}
    />
  )
}
