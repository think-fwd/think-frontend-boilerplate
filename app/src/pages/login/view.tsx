import { WrapperComponent } from '@containers/wrapper'
import {
  Grid,
  Stack,
  Button,
  Container,
  Typography,
  Divider,
  List,
  ListItem,
  Box,
} from '@mui/material'

import { LoginContext } from './context'
import { LoginFormContainer } from './containers/form'
import { useContextSelector } from 'use-context-selector'
import { WrapperInnerComponent } from '@containers/wrapper-inner'

export const LoginView = (): JSX.Element => {
  const navToForgotPassword = useContextSelector(
    LoginContext,
    (s) => s.navToForgotPassword
  )

  const navToSignup = useContextSelector(LoginContext, (s) => s.navToSignup)

  return (
    <WrapperComponent>
      <WrapperInnerComponent>
        <Container sx={{ pt: 12, pb: 16 }}>
          <Grid container spacing={2}>
            <Grid
              item
              sm={1}
              sx={{ display: { xs: 'none', sm: 'block' } }}
            ></Grid>
            <Grid item xs={12} sm={5}>
              <Stack direction="column" spacing={4}>
                <Stack direction="column" spacing={1}>
                  <Typography variant="h1" color="secondary.main">
                    Olá, bem vindo
                  </Typography>
                  <Typography variant="subtitle1" color="muted.main">
                    Informe suas credenciais para acessar a plataforma.
                  </Typography>
                </Stack>
                <Stack direction="column" spacing={1} alignItems="start">
                  <Box width="100%">
                    <LoginFormContainer />
                  </Box>
                  <Button
                    size="small"
                    variant="text"
                    onClick={navToForgotPassword}
                  >
                    Esqueci minha senha
                  </Button>
                </Stack>
                <Divider textAlign="center">
                  <Typography variant="body2">ou</Typography>
                </Divider>
                <Stack alignItems="center" justifyContent="center">
                  <Button
                    variant="text"
                    size="small"
                    onClick={navToSignup}
                    sx={{ px: 2 }}
                  >
                    Criar uma conta grátis
                  </Button>
                </Stack>
              </Stack>
            </Grid>
            <Grid
              item
              sm={1}
              sx={{ display: { xs: 'none', sm: 'block' } }}
            ></Grid>
            <Grid item sm={4} sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Typography variant="h1" color="secondary.main">
                Inteligência em gestão de projetos
              </Typography>
              <List>
                <ListItem sx={{ paddingLeft: 0 }}>
                  <Stack direction="column">
                    <Typography variant="subtitle1" color="secondary.main">
                      Organização Whitelabel
                    </Typography>
                    <Typography variant="body2" color="muted.main">
                      Conecte a sua conta do Jira e deixe o{' '}
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'baseline',
                          gap: 1,
                        }}
                      >
                        <img
                          alt="Mustang Icon"
                          style={{ height: 12 }}
                          src={require('../../assets/images/logo.png')}
                        />
                        <b>Mustang</b>
                        &nbsp;
                      </span>
                      organizar a gestão dos seus projetos.
                    </Typography>
                  </Stack>
                </ListItem>
                <Divider />
                <ListItem sx={{ paddingLeft: 0 }}>
                  <Stack direction="column">
                    <Typography variant="subtitle1" color="secondary.main">
                      Controle de Performance
                    </Typography>
                    <Typography variant="body2" color="muted.main">
                      Conecte seus repositórios de projetos e permita que o{' '}
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'baseline',
                          gap: 1,
                        }}
                      >
                        <img
                          alt="Mustang Icon"
                          style={{ height: 12 }}
                          src={require('../../assets/images/logo.png')}
                        />
                        <b>Mustang</b>
                        &nbsp;
                      </span>
                      controle a qualidade das entregas.
                    </Typography>
                  </Stack>
                </ListItem>
                <Divider />
                <ListItem sx={{ paddingLeft: 0 }}>
                  <Stack direction="column">
                    <Typography variant="subtitle1" color="secondary.main">
                      Evolua seu Time
                    </Typography>
                    <Typography variant="body2" color="muted.main">
                      O{' '}
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'baseline',
                          gap: 1,
                        }}
                      >
                        <img
                          alt="Mustang Icon"
                          style={{ height: 12 }}
                          src={require('../../assets/images/logo.png')}
                        />
                        <b>Mustang</b>
                        &nbsp;
                      </span>
                      é capaz de analisar a performance dos seus colaboradores,
                      e gerar relatórios estratégicos de melhoria para que seu
                      time evolua junto com a sua organização.
                    </Typography>
                  </Stack>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </WrapperInnerComponent>
    </WrapperComponent>
  )
}
