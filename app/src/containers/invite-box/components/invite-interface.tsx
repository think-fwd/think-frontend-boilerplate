import Lottie from 'lottie-react'
import { LoadingButton } from '@mui/lab'
import { Box, Container, Stack, Typography } from '@mui/material'
import inviteAnimation from '@assets/animations/notification.json'
import { Background, Wrapper } from '../styles'
import { theme } from '@theme/index'

type Props = {
  title: string
  message: JSX.Element
  declining?: boolean
  accepting?: boolean
  handleAcceptInvite: () => void
  handleDeclineInvite: () => void
}

export const InviteInterface = (props: Props): JSX.Element => {
  return (
    <Box px={1} pt={1}>
      <Background>
        <Wrapper>
          <Container maxWidth="xl">
            <Stack
              direction="row"
              spacing={3}
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" spacing={1} alignItems="center">
                <Lottie
                  loop={true}
                  animationData={inviteAnimation}
                  style={{ height: 42 }}
                />
                <Stack direction="column">
                  <Typography
                    variant="subtitle1"
                    color="secondary"
                    fontWeight="bold"
                  >
                    {props.title}
                  </Typography>
                  <Typography variant="caption" color="secondary">
                    {props.message}
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={1}>
                <LoadingButton
                  variant="outlined"
                  color="error"
                  size="small"
                  onClick={() => props.handleDeclineInvite()}
                  loading={props.declining}
                  disabled={props.accepting}
                  sx={{ backgroundColor: theme.palette.common.white }}
                >
                  Recusar
                </LoadingButton>
                <LoadingButton
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={() => props.handleAcceptInvite()}
                  loading={props.accepting}
                  disabled={props.declining}
                >
                  Aceitar convite
                </LoadingButton>
              </Stack>
            </Stack>
          </Container>
        </Wrapper>
      </Background>
    </Box>
  )
}
