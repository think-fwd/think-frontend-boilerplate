import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { SignupContext } from './context'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { SignupFormContainer } from './container/form'
import { WrapperComponent } from '@containers/wrapper'
import { useContextSelector } from 'use-context-selector'
import { WrapperInnerComponent } from '@containers/wrapper-inner'

export const SignupView = (): JSX.Element => {
  const navToLogin = useContextSelector(SignupContext, (s) => s.navToLogin)

  return (
    <WrapperComponent>
      <WrapperInnerComponent>
        <Container sx={{ pt: 6, pb: 16 }}>
          <Grid container spacing={2}>
            <Grid
              item
              sm={1}
              sx={{ display: { xs: 'none', sm: 'block' } }}
            ></Grid>
            <Grid item sm={4} sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography variant="h1" color="secondary.main">
                Breaking the
                <br />
                horse proccess
              </Typography>
              <List>
                <ListItem sx={{ paddingLeft: 0 }}>
                  <Stack direction="column">
                    <Typography variant="body2" color="muted.main">
                      Mustang é a plataforma de <b>dev enablement</b>, focada em
                      identificar e potencializar pontos de melhorias e evolução
                      do seu time de desenvolvimento através de Indicadores de
                      desempenho! Deixe para trás o "Go horse Process" e
                      impulsione seu time de tecnologia.
                    </Typography>
                    <img
                      alt="Mustang Showcase"
                      style={{ width: '100%', marginTop: 32 }}
                      src={require('../../assets/cases/mustang_illustration.png')}
                    />
                  </Stack>
                </ListItem>
              </List>
            </Grid>
            <Grid
              item
              sm={1}
              sx={{ display: { xs: 'none', sm: 'block' } }}
            ></Grid>
            <Grid item xs={12} sm={5}>
              <Stack direction="column" spacing={4}>
                <Stack direction="column" spacing={1}>
                  <Typography variant="h1" color="secondary.main">
                    Crie sua conta.
                  </Typography>
                  <Typography variant="subtitle1" color="muted.main">
                    Não necessita cartão de crédito
                  </Typography>
                </Stack>
                <Stack direction="column" spacing={1} alignItems="start">
                  <Box width="100%">
                    <SignupFormContainer />
                  </Box>
                </Stack>
                <Divider textAlign="center">
                  <Typography variant="body2">ou</Typography>
                </Divider>
                <Stack alignItems="center">
                  <Button
                    variant="text"
                    size="small"
                    sx={{ px: 2 }}
                    onClick={navToLogin}
                  >
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
