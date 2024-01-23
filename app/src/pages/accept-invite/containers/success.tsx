import { theme } from '@theme/index'
import { CheckCircle } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'
import { Button, Divider, Grid, Stack, Typography } from '@mui/material'

export const AcceptInviteSuccess = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <Grid container justifyContent="center" py={2}>
      <Grid item xs={12}>
        <Stack direction="column" spacing={6}>
          <Stack direction="column" spacing={2} alignItems="center">
            <CheckCircle
              size={128}
              weight="duotone"
              color={theme.palette.success.main}
            />
            <Typography variant="h1" color="secondary.main" textAlign="center">
              Convite Aceito
            </Typography>
            <Typography
              variant="subtitle1"
              color="muted.main"
              textAlign="center"
            >
              O convite enviado para o seu email foi aceito com sucesso
            </Typography>
            <Typography variant="caption" color="muted.main" textAlign="center">
              Realize o login na plataforma para visualizar a organização ou
              caso ainda não possua uma conta, crie uma clicando no botão
              abaixo.
            </Typography>
            <Button
              size="large"
              variant="contained"
              onClick={() => navigate('/', { replace: true })}
            >
              Clique aqui para fazer o login
            </Button>
          </Stack>
          <Divider textAlign="center">
            <Typography variant="body2">ou</Typography>
          </Divider>
          <Stack alignItems="center">
            <Button
              variant="text"
              size="small"
              onClick={() => navigate('/signup', { replace: true })}
            >
              Crie uma conta agora
            </Button>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  )
}
