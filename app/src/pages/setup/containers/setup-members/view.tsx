/* eslint-disable jsx-a11y/anchor-is-valid */
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { SetupPageMembersForm } from './containers/form'
import { SetupPageMembersList } from './containers/list'
import { SetupPageMembersAlert } from './containers/alert'
import { SetupOrganizationButtonFinish } from './containers/button_finish'

export const SetupPageMembersView = (): JSX.Element | null => {
  return (
    <Stack direction="column" spacing={5}>
      <Stack direction="column" spacing={1}>
        <Typography variant="h1" color="secondary.main">
          Membros
        </Typography>
        <Typography variant="subtitle1" color="muted.main" lineHeight={1.4}>
          Por último, você ainda pode convidar membros para utilizar a
          plataforma e receber relatórios de tudo o que acontece nos bastidores
          da sua equipe.
        </Typography>
      </Stack>
      <Stack direction="column" spacing={1}>
        <SetupPageMembersAlert />
        <SetupPageMembersForm />
        <SetupPageMembersList />
      </Stack>
      <Stack direction="column" spacing={4}>
        <SetupOrganizationButtonFinish />
      </Stack>
    </Stack>
  )
}
