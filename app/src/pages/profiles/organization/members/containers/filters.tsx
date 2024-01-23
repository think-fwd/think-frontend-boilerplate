import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useForm } from 'react-hook-form'
import { RoleEnum } from '@enums/role_enum'
import { InviteEnum } from '@enums/invite_enum'
import { CardContainer } from '@components/card-container'
import { FormInputText } from '@components/form-input-text'
import FormInputDatePicker from '@components/form-input-date-picker'
import { CalendarBlank, MagnifyingGlass } from '@phosphor-icons/react'

export const OrganizationMembersFilters = (): JSX.Element => {
  const { handleSubmit, control } = useForm()

  return (
    <CardContainer title="Filtrar resultados" icon={MagnifyingGlass}>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <Box>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <FormInputText
                name="q"
                theme="light"
                label="Pesquisar nome"
                endIcon={<MagnifyingGlass />}
                control={control}
              />
            </Grid>
            <Grid item xs={8}>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <FormInputText
                    theme="light"
                    name="role"
                    label="Perfil"
                    options={{
                      '': '-- Todos --',
                      ...RoleEnum,
                    }}
                    control={control}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormInputText
                    theme="light"
                    name="status"
                    label="Situação"
                    options={{
                      '': '-- Todos --',
                      ...InviteEnum,
                    }}
                    control={control}
                  />
                </Grid>
                <Grid item xs={4}>
                  <FormInputDatePicker
                    theme="light"
                    name="created_at"
                    label="Data de criação"
                    endIcon={<CalendarBlank />}
                    control={control}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </form>
    </CardContainer>
  )
}
