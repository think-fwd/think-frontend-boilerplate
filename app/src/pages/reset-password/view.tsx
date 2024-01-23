import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Container from '@mui/material/Container'
import { ResetPasswordContext } from './context'
import Typography from '@mui/material/Typography'
import { WrapperComponent } from '@containers/wrapper'
import { useContextSelector } from 'use-context-selector'
import { ResetPasswordFormContainer } from './containers/form'
import { WrapperInnerComponent } from '@containers/wrapper-inner'

export const ResetPasswordView = (): JSX.Element => {
  const navToLogin = useContextSelector(
    ResetPasswordContext,
    (s) => s.navToLogin
  )

  return (
    <WrapperComponent>
      <WrapperInnerComponent>
        <Container sx={{ pt: 12, pb: 16 }}>
          <Grid container spacing={2}>
            <Grid
              item
              sm={3}
              sx={{ display: { xs: 'none', sm: 'block' } }}
            ></Grid>
            <Grid item xs={12} sm={6}>
              <Stack direction="column" spacing={4}>
                <Stack direction="column" spacing={1} alignItems="start">
                  <Box width="100%">
                    <ResetPasswordFormContainer />
                  </Box>
                </Stack>
                <Divider textAlign="center">
                  <Typography variant="body2">ou</Typography>
                </Divider>
                <Stack alignItems="center">
                  <Button variant="text" size="small" onClick={navToLogin}>
                    Retornar para o login
                  </Button>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </WrapperInnerComponent>
    </WrapperComponent>
  )
}
