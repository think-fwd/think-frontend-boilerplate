/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react'
// import NoDataSVG from '@assets/icons/nodata.svg'
import InputLabel from '@mui/material/InputLabel'
import { Container, Content } from './styles'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { FilterSelectDropdownLoading } from './loading'
import ContainerScroll from '@components/container-scroll'
import { FormInputText } from '@components/form-input-text'
import { MenuItem, Select, Stack, Typography } from '@mui/material'
import { Control, Controller, FieldValues, useForm } from 'react-hook-form'
import { FormInputCheck } from '@components/form-input-check/form-input-check'

export interface FilterSelectDropdownOption {
  label: string
  value: string
}

type FilterSelectDropdownProps = {
  name: string
  label: string
  options: FilterSelectDropdownOption[]
  loading?: boolean
  onOpen?: () => void
  onFilter?: (value: string) => Promise<FilterSelectDropdownOption[]>
  hasNextPage?: boolean
  fetchNextPage?: () => Promise<void>
  size?: 'medium' | 'small'
  control: Control<FieldValues, any>
}

export default function FormInputFilterDropdown({
  name,
  options,
  hasNextPage,
  label,
  loading,
  fetchNextPage,
  onFilter,
  onOpen,
  size,
  control,
  ...rest
}: FilterSelectDropdownProps) {
  const { control: inputControl } = useForm()
  const [controlOptions, setControlOptions] =
    useState<FilterSelectDropdownOption[]>(options)

  const handleScroll = useCallback(() => {
    if (fetchNextPage && !loading && hasNextPage) {
      fetchNextPage()
    }
  }, [fetchNextPage, hasNextPage, loading])

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value = [], ref } }) => (
        <Container {...rest} variant="outlined" size={size}>
          <InputLabel>{label}</InputLabel>
          <Select
            ref={ref}
            id={label}
            size={size}
            value={value}
            multiple
            label={label}
            onBlur={onBlur}
            onOpen={() => onOpen?.()}
            renderValue={(selected) =>
              controlOptions
                .filter((option: FilterSelectDropdownOption) =>
                  selected.includes(option.value)
                )
                .map((option: FilterSelectDropdownOption) => option.label)
                .join(',')
            }
            MenuProps={{
              PaperProps: {
                sx: {
                  '&::before': {
                    borderColor: 'rgba(0, 0, 0, 0.1)',
                    marginTop: '-1px !important',
                    marginLeft: '12px !important',
                  },
                },
              },
            }}
          >
            {onFilter && (
              <Stack px={1} pb={1}>
                <FormInputText
                  size="small"
                  placeholder="Busque por uma opção..."
                  name="input-search"
                  onChangeDebounce={(value) =>
                    onFilter?.(value).then(setControlOptions)
                  }
                  control={inputControl}
                  endIcon={<MagnifyingGlass />}
                />
              </Stack>
            )}

            {!!loading && controlOptions.length === 0 && (
              <FilterSelectDropdownLoading visible size="regular" />
            )}

            {!loading && controlOptions.length === 0 && (
              <Stack p={3} spacing={2} direction="column" alignItems="center">
                {/* <img src={NoDataSVG} alt="Sem dados" /> */}
                <Typography variant="body2" color="$color-text-tertiary">
                  Não há opções disponíveis
                </Typography>
              </Stack>
            )}

            {controlOptions.length > 0 && (
              <Content>
                <ContainerScroll
                  onScrollBottom={handleScroll}
                  spacing={0}
                  pr={0}
                >
                  <>
                    {controlOptions.length > 0 && (
                      <MenuItem
                        disableRipple
                        disableTouchRipple
                        onClick={() => {
                          onChange(
                            value.length === options.length
                              ? []
                              : options.map((option) => option.value)
                          )
                        }}
                      >
                        <Stack spacing={1} direction="row" alignItems="center">
                          <FormInputCheck
                            padding={0}
                            name="checked"
                            checked={
                              value.length > 0 &&
                              value.length === options.length
                            }
                          />
                          <Typography
                            variant="body2"
                            color="$color-text-secundary"
                          >
                            Selecionar Tudo
                          </Typography>
                        </Stack>
                      </MenuItem>
                    )}
                    {controlOptions?.map(
                      (option: FilterSelectDropdownOption) => (
                        <MenuItem
                          disableRipple
                          disableTouchRipple
                          key={option.value}
                          value={option.value}
                          sx={{ py: 2 }}
                          onClick={() => {
                            onChange(
                              value.includes(option.value)
                                ? value.filter(
                                    (v: string) => v !== option.value
                                  )
                                : [...value, option.value]
                            )
                          }}
                        >
                          <Stack
                            spacing={1}
                            direction="row"
                            alignItems="center"
                          >
                            <FormInputCheck
                              padding={0}
                              name={`checked-${option.value}`}
                              checked={
                                value.length > 0 && value.includes(option.value)
                              }
                            />
                            <Typography
                              variant="body2"
                              color="$color-text-secundary"
                            >
                              {option.label}
                            </Typography>
                          </Stack>
                        </MenuItem>
                      )
                    )}
                    <FilterSelectDropdownLoading
                      visible={loading || false}
                      size="small"
                    />
                  </>
                </ContainerScroll>
              </Content>
            )}
          </Select>
        </Container>
      )}
    />
  )
}

FormInputFilterDropdown.defaultProps = {
  hasNextPage: false,
  fetchNextPage: undefined,
}
