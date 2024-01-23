import React from 'react'
import { theme } from '../../theme'
import { AutocompletePopup } from './styles'
import { Autocomplete, TextField, CircularProgress } from '@mui/material'
import { FormInputKeyValueType, FormInputMultiselectdProps } from './types'
import { Controller } from 'react-hook-form'

export const FormInputAutocomplete = ({
  name,
  control,
  size = 'medium',
  loadOptions,
  ...props
}: FormInputMultiselectdProps) => {
  const [open, setOpen] = React.useState(false)
  const [options, setOptions] = React.useState<
    readonly FormInputKeyValueType[]
  >([])
  const loading = open && options.length === 0

  React.useEffect(() => {
    let active = true

    if (!loading) {
      return undefined
    }

    ;(async () => {
      const options = (await loadOptions()) || []
      if (active) setOptions(options)
    })()

    return () => {
      active = false
    }
  }, [loading, loadOptions])

  React.useEffect(() => {
    if (!open) setOptions([])
  }, [open])

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <Autocomplete
          id={`form-input-autocomplete-${name}`}
          fullWidth
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
          isOptionEqualToValue={(option, value) => option.key === value.key}
          getOptionLabel={(option) => option.value}
          options={options}
          loading={loading}
          onBlur={onBlur}
          defaultValue={value}
          onChange={(_, value) => onChange(value?.key)}
          PaperComponent={(props) => (
            <AutocompletePopup elevation={5} {...props} />
          )}
          loadingText="buscando opções..."
          noOptionsText="nenhum resultado encontrado..."
          renderInput={(params) => (
            <TextField
              {...params}
              inputRef={ref}
              name={name}
              fullWidth
              size={size}
              color="primary"
              label={props.label}
              error={Boolean(props.error)}
              helperText={props.error}
              FormHelperTextProps={{
                sx: { display: 'block', mx: 0, fontSize: 10 },
              }}
              value={value?.key || ''}
              sx={{
                backgroundColor:
                  props.theme === 'light'
                    ? theme.palette.common.white
                    : theme.palette.gray.light,
                mb: props.error && 2,
              }}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? (
                      <CircularProgress color="inherit" size={20} />
                    ) : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
          )}
        />
      )}
    />
  )
}
