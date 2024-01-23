import { FormInputText } from '@components/form-input-text'
import {
  FormInputTextSizes,
  FormInputTextTheme,
} from '@components/form-input-text/types'
import { Stack } from '@mui/material'
import React from 'react'
import { Control, FieldValues } from 'react-hook-form'

type Props = {
  label?: string
  name: string
  size?: FormInputTextSizes
  theme?: FormInputTextTheme
  control: Control<FieldValues, any>
}

export const FormInputPickPeriod = ({
  name,
  label = '',
  control,
  theme = 'dark',
  size = 'medium',
}: Props): JSX.Element => {
  const [period, setPeriod] = React.useState('D7')
  const [loading] = React.useState<false>()

  return (
    <Stack justifyContent="flex-end" alignItems="flex-end">
      <FormInputText
        name={name}
        size={size}
        theme={theme}
        disabled={loading}
        fullWidth={false}
        defaultValue={period}
        onChangeDebounce={setPeriod}
        control={control}
        label={label}
        options={{
          D7: '7 dias',
          D15: '15 dias',
          D30: '30 dias',
          MTD: 'mês atual',
          M2: '2 meses',
          M3: '3 meses',
          M6: '6 meses',
          M12: '12 meses',
          YTD: 'ano atual',
        }}
      />
    </Stack>
  )
}
