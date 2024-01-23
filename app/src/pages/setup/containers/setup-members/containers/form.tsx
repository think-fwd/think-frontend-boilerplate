import { LoadingButton } from '@mui/lab'
import { RoleEnum } from '@enums/role_enum'
import { PaperPlane } from '@phosphor-icons/react'
import { Grid, Stack, Typography } from '@mui/material'
import { useContextSelector } from 'use-context-selector'
import { CardContainer } from '@components/card-container'
import { FormInputText } from '@components/form-input-text'
import { SetupPageMembersContext } from '../context'

export const SetupPageMembersForm = () => {
  const error = useContextSelector(SetupPageMembersContext, (s) => s.error)
  const inviting = useContextSelector(
    SetupPageMembersContext,
    (s) => s.inviting
  )
  const control = useContextSelector(SetupPageMembersContext, (s) => s.control)
  const handleSubmitInvite = useContextSelector(
    SetupPageMembersContext,
    (s) => s.handleSubmitInvite
  )

  return (
    <CardContainer>
      <form onSubmit={handleSubmitInvite}>
        <Grid container spacing={1}>
          <Grid item xs={7}>
            <FormInputText
              type="email"
              label="Email"
              name="email"
              theme="light"
              disabled={inviting}
              control={control}
              error={error?.errors?.email}
            />
          </Grid>
          <Grid item xs={3}>
            <FormInputText
              type="role"
              label="Perfil"
              name="role"
              theme="light"
              disabled={inviting}
              control={control}
              options={RoleEnum}
              error={error?.errors?.role}
            />
          </Grid>
          <Grid item xs={2}>
            <LoadingButton
              fullWidth
              size="large"
              type="submit"
              color="secondary"
              variant="contained"
              loading={inviting}
            >
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Typography variant="body2">Enviar</Typography>
                <PaperPlane />
              </Stack>
            </LoadingButton>
          </Grid>
        </Grid>
      </form>
    </CardContainer>
  )
}
