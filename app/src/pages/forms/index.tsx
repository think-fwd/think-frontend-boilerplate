import { FormInputAutocomplete } from '@components/form-input-autocomplete'
import { FormInputCheck } from '@components/form-input-check/form-input-check'
import { FormInputCheckbox } from '@components/form-input-checkbox'
import { FormInputCurrency } from '@components/form-input-currency'
import FormInputDatePicker from '@components/form-input-date-picker'
import FormInputDateRangePicker from '@components/form-input-date-range-picker'
import FormInputFilterDropdown from '@components/form-input-filter-dropdown'
import { FormInputFormat } from '@components/form-input-format'
import { FormInputPhone } from '@components/form-input-phone'
import { FormInputPickPeriod } from '@components/form-input-pick-period'
import FormInputPinCode from '@components/form-input-pin-code'
import { FormInputText } from '@components/form-input-text'
import { WrapperComponent } from '@containers/wrapper'
import { Button, Container, Divider, Stack, Typography } from '@mui/material'
import { useState } from 'react'

import { useForm } from 'react-hook-form'

export const FormsExamples = () => {
  const { handleSubmit, control } = useForm<any>({
    defaultValues: {
      'form-input-text': 'Hello World',
      'form-input-format': '01234567',
      'form-input-phone': '+5511955501234',
      'form-input-pick-period': 'MTD',
      'form-input-currency': 150.5,
      'form-input-pin-code': '123456',
      'form-input-date-picker': '2024-01-08',
      'form-input-date-range-picker': ['2024-01-01', '2024-01-15'],
      'form-input-autocomplete': {
        key: 'johndoe',
        value: 'Jhon Doe',
      },
      'form-input-checkbox': ['one'],
      'form-input-filter-dropdown': ['option_a', 'option_b'],
    },
  })
  const [payload, setPayload] = useState<Record<string, string> | undefined>(
    undefined
  )

  return (
    <WrapperComponent>
      <Stack direction="column" spacing={4} sx={{ pb: 4 }}>
        <Container>
          <Typography variant="body1">{JSON.stringify(payload)}</Typography>
        </Container>
        <form onSubmit={handleSubmit((data) => setPayload(data))}>
          <Container>
            <Stack direction="column" spacing={2}>
              <Divider textAlign="center">
                <Typography variant="body1">FormInputText</Typography>
              </Divider>
              <FormInputText
                control={control}
                size="medium"
                theme="dark"
                name="form-input-text"
                label="form-input-text"
              />
              <Divider textAlign="center">
                <Typography variant="body1">FormInputFormat</Typography>
              </Divider>
              <FormInputFormat
                control={control}
                theme="dark"
                inputSize="medium"
                name="form-input-format"
                label="form-input-format"
                format="#####-###"
                mask
              />
              <Divider textAlign="center">
                <Typography variant="body1">FormInputPhone</Typography>
              </Divider>
              <FormInputPhone
                control={control}
                size="medium"
                theme="dark"
                name="form-input-phone"
                label="form-input-phone"
              />
              <Divider textAlign="center">
                <Typography variant="body1">FormInputPinCode</Typography>
              </Divider>
              <Stack direction="row" justifyContent="flex-start">
                <FormInputPinCode
                  control={control}
                  name="form-input-pin-code"
                  theme="dark"
                  size="medium"
                />
              </Stack>
              <Divider textAlign="center">
                <Typography variant="body1">FormInputPickPeriod</Typography>
              </Divider>
              <FormInputPickPeriod
                control={control}
                size="medium"
                theme="dark"
                label="form-input-pick-period"
                name="form-input-pick-period"
              />
              <Divider textAlign="center">
                <Typography variant="body1">FormInputCurrency</Typography>
              </Divider>
              <FormInputCurrency
                control={control}
                size="medium"
                theme="dark"
                label="form-input-currency"
                name="form-input-currency"
              />
              <Divider textAlign="center">
                <Typography variant="body1">FormInputDatePicker</Typography>
              </Divider>
              <FormInputDatePicker
                control={control}
                size="medium"
                theme="dark"
                label="form-input-date-picker"
                name="form-input-date-picker"
              />
              <Divider textAlign="center">
                <Typography variant="body1">
                  FormInputDateRangePicker
                </Typography>
              </Divider>
              <FormInputDateRangePicker
                control={control}
                size="medium"
                theme="dark"
                label="form-input-date-range-picker"
                name="form-input-date-range-picker"
              />
              <Divider textAlign="center">
                <Typography variant="body1">FormInputAutocomplete</Typography>
              </Divider>
              <FormInputAutocomplete
                control={control}
                size="medium"
                theme="dark"
                label="form-input-autocomplete"
                name="form-input-autocomplete"
                loadOptions={() =>
                  new Promise((resolve) =>
                    resolve([
                      { key: 'johndoe', value: 'John Doe' },
                      { key: 'janedoe', value: 'Jane Doe' },
                    ])
                  )
                }
              />
              <Divider textAlign="center">
                <Typography variant="body1">FormInputFilterDropdown</Typography>
              </Divider>
              <FormInputFilterDropdown
                control={control}
                size="medium"
                name="form-input-filter-dropdown"
                label="form-input-filter-dropdown"
                onFilter={(value) => {
                  return new Promise((resolve) => {
                    resolve(
                      [
                        { label: 'Option A', value: 'option_a' },
                        { label: 'Option B', value: 'option_b' },
                        { label: 'Option C', value: 'option_c' },
                      ].filter((i) => !!i.label.match(value))
                    )
                  })
                }}
                options={[
                  { label: 'Option A', value: 'option_a' },
                  { label: 'Option B', value: 'option_b' },
                  { label: 'Option C', value: 'option_c' },
                ]}
              />
              <Divider textAlign="center">
                <Typography variant="body1">FormInputCheckbox</Typography>
              </Divider>
              <FormInputCheckbox
                control={control}
                name="form-input-checkbox"
                mode="multiple"
                theme="dark"
                options={[
                  {
                    value: 'one',
                    title: 'Title 1',
                    enabled: true,
                    description: 'Description 1',
                  },
                  {
                    value: 'two',
                    title: 'Title 2',
                    enabled: true,
                    description: 'Description 2',
                  },
                ]}
              />
              <Divider textAlign="center">
                <Typography variant="body1">FormInputCheck</Typography>
              </Divider>
              <Stack
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <FormInputCheck
                  name="form-input-check"
                  theme="dark"
                  label="Checkbox selection label"
                />
              </Stack>
              <Divider textAlign="center">
                <Typography variant="body1">Button</Typography>
              </Divider>
              <Button type="submit" variant="contained" size="large">
                Enviar
              </Button>
            </Stack>
          </Container>
        </form>
      </Stack>
    </WrapperComponent>
  )
}
