import { theme } from '@theme/index'
import { useNavigate } from 'react-router-dom'
import { SealWarning } from '@phosphor-icons/react'
import { AcceptInvitePageContext } from '../context'
import { useContextSelector } from 'use-context-selector'
import { Button, Divider, Grid, Stack, Typography } from '@mui/material'

export const AcceptInviteFeedback = (): JSX.Element => {
  const navigate = useNavigate()
  const error = useContextSelector(AcceptInvitePageContext, (s) => s.error)
  return (
    <Grid container justifyContent="center" py={2}>
      <Grid item xs={12}>
        <Stack direction="column" spacing={6}>
          <Stack direction="column" spacing={2} alignItems="center">
            <SealWarning
              size={128}
              weight="duotone"
              color={theme.palette.error.main}
            />
            <Typography variant="h1" color="secondary.main" textAlign="center">
              {error?.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="muted.main"
              textAlign="center"
            >
              {error?.message}
            </Typography>
            {error?.solution && (
              <Typography
                variant="caption"
                color="muted.main"
                textAlign="center"
              >
                {error?.solution}
              </Typography>
            )}
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
