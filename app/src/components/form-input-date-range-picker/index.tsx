import React from 'react'
import _ from 'lodash'
import moment from 'moment'
import { theme } from '../../theme'
import { lightFormat } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Controller } from 'react-hook-form'
import { CalendarBlank, X } from '@phosphor-icons/react'
import { FormInputDatePickerProps } from './types'
import { FormInputDateRangePickerStyles } from './styles'
import { InputAdornment, Popover, TextField, IconButton } from '@mui/material'
function FormInputDateRangePicker({
  name,
  size = 'small',
  control,
  ...props
}: FormInputDatePickerProps) {
  // <!-- define popopver controller -->
  const [anchorEl, setAnchorEl] = React.useState(null)
  const handleClose = () => setAnchorEl(null)
  const handleOpen = (event: any) => setAnchorEl(event.currentTarget)

  const open = Boolean(anchorEl)
  const id = open ? 'daterange-popover' : undefined

  const formatDisplay = (
    selection: Array<{ startDate?: Date; endDate?: Date }>
  ) => {
    const [period] = selection || []
    if (!period?.startDate) return ''
    if (!period?.endDate) return ''
    return `${lightFormat(period.startDate, 'dd/MM/yyyy')} - ${lightFormat(
      period.endDate,
      'dd/MM/yyyy'
    )}`
  }

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, onBlur, value, ref } }) => {
        if (
          value instanceof Array &&
          value.length === 2 &&
          typeof value[0] === 'string' &&
          typeof value[1] === 'string'
        ) {
          value = [
            {
              startDate: moment(value[0]).toDate(),
              endDate: moment(value[1]).toDate(),
              key: 'selection',
            },
          ]
        }

        return (
          <>
            <TextField
              inputRef={ref}
              name={name}
              fullWidth
              size={size}
              color="primary"
              label={props.label}
              value={formatDisplay(value) || ''}
              onBlur={onBlur}
              error={Boolean(props.error)}
              helperText={props.error}
              FormHelperTextProps={{
                sx: { display: 'block', mx: 0, fontSize: 10 },
              }}
              sx={{
                backgroundColor:
                  props.theme === 'light'
                    ? theme.palette.common.white
                    : theme.palette.gray.light,
                mb: props.error && 2,
              }}
              onClick={handleOpen}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" sx={{ marginRight: '-8px' }}>
                    {value?.length > 0 ? (
                      <IconButton size="small" onClick={() => onChange('')}>
                        <X fontSize={14} color={theme.palette.muted.main} />
                      </IconButton>
                    ) : (
                      <IconButton size="small">
                        <CalendarBlank
                          fontSize={14}
                          color={theme.palette.muted.main}
                        />
                      </IconButton>
                    )}
                  </InputAdornment>
                ),
              }}
            />
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={() => handleClose()}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              PaperProps={{
                elevation: 0,
                sx: {
                  marginTop: '8px !important',
                  boxShadow:
                    'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px !important',
                },
              }}
            >
              <FormInputDateRangePickerStyles
                months={2}
                locale={ptBR}
                ranges={value}
                showDateDisplay={false}
                showMonthAndYearPickers={false}
                moveRangeOnFirstSelection={false}
                weekdayDisplayFormat="EEEEE"
                direction="horizontal"
                onChange={(date) => {
                  onChange([
                    moment(
                      _.get(date, 'selection.startDate', new Date()) as string
                    ).format('YYYY-MM-DD'),
                    moment(
                      _.get(date, 'selection.endDate', new Date()) as string
                    ).format('YYYY-MM-DD'),
                  ])
                }}
              />
            </Popover>
          </>
        )
      }}
    />
  )
}

export default FormInputDateRangePicker
