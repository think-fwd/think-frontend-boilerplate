import { Button, Grid, Stack, Typography } from '@mui/material'
import { theme } from '@theme/index'
import { CheckCircle } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

export const ActiveAccountFeedback = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <Grid container justifyContent="center" py={2}>
      <Grid item xs={12} sm={5}>
        <Stack direction="column" spacing={2} alignItems="center">
          <CheckCircle
            size={128}
            weight="duotone"
            color={theme.palette.success.main}
          />
          <Typography variant="h1" color="secondary.main">
            Conta ativada
          </Typography>
          <Typography variant="subtitle1" color="muted.main" textAlign="center">
            Sua conta foi ativada com sucesso, agora você pode realizar o login
            na plataforma e começar a desfrutar de todos os recursos.
          </Typography>
          <Button
            size="large"
            variant="contained"
            onClick={() => navigate('/', { replace: true })}
          >
            Clique aqui para fazer o login
          </Button>
        </Stack>
      </Grid>
    </Grid>
  )
}
