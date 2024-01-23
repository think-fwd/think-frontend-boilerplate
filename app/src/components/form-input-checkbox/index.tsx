/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { theme } from '../../theme'
import { Check } from '@phosphor-icons/react'
import { Controller } from 'react-hook-form'
import { FormInputCheckboxProps } from './types'
import { Box, Grid, Stack, Typography } from '@mui/material'
import { OptionCheckRadio, OptionContainer } from './styles'

export const FormInputCheckbox = ({
  name,
  control,
  ...props
}: FormInputCheckboxProps) => {
  const handleSwitchValue = React.useCallback(
    (changeValue: string, selectedValues: string[]) => {
      const values = new Set(selectedValues)
      if (props.mode === 'single') values.clear()
      if (values.has(changeValue)) values.delete(changeValue)
      else values.add(changeValue)
      return Array.from(values)
    },
    []
  )

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Box>
          <Grid container spacing={1}>
            {props.options.map((option) => (
              <Grid
                key={`option-${option.value}`}
                item
                xs={12 / (props.optionsPerLine || 1)}
              >
                <OptionContainer
                  onClick={() => {
                    if (option.enabled) {
                      const values = handleSwitchValue(option.value, value)
                      onChange(props.mode === 'single' ? values[0] : values)
                      if (props.mode === 'single' && values[0]) {
                        props.onChangeSingle?.(
                          values[0],
                          props.options.find((i) => i.value === values[0])
                            ?.metadata
                        )
                      }
                    }
                  }}
                  active={String(value?.includes?.(option.value) || 'false')}
                  enabled={String(option.enabled)}
                  theme={props.theme || 'dark'}
                >
                  <Stack direction="row" spacing={3} alignItems="center">
                    <OptionCheckRadio
                      enabled={String(option.enabled)}
                      rounded={String(props.mode === 'single')}
                      active={String(
                        value?.includes?.(option.value) || 'false'
                      )}
                    >
                      {value?.includes?.(option.value) && (
                        <Check
                          size={16}
                          weight="bold"
                          color={theme.palette.primary.main}
                        />
                      )}
                    </OptionCheckRadio>
                    <Stack direction="column" spacing={0.5}>
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Stack
                          direction="row"
                          alignItems="center"
                          spacing={0.5}
                        >
                          {option.icon?.()}
                          <Stack
                            direction="row"
                            alignItems="baseline"
                            spacing={1}
                          >
                            <Typography
                              variant="body2"
                              fontWeight="bold"
                              color="muted.dark"
                            >
                              {option.title}
                            </Typography>
                            {option.subtitle && (
                              <Typography variant="caption" color="muted.main">
                                {option.subtitle}
                              </Typography>
                            )}
                          </Stack>
                        </Stack>
                      </Stack>
                      {typeof option?.description === 'string' ? (
                        <Typography
                          variant="caption"
                          color="muted.main"
                          lineHeight={1.1}
                        >
                          {option.description}
                        </Typography>
                      ) : (
                        option.description || null
                      )}
                    </Stack>
                  </Stack>
                </OptionContainer>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    />
  )
}
