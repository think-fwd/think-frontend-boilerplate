import { WrapperComponent } from '@containers/wrapper'
import { Box, Container, Grid, Stack } from '@mui/material'
import { WrapperInnerComponent } from '@containers/wrapper-inner'
import { AcceptInviteSelector } from './containers/selector'

export const AcceptInvitePageView = (): JSX.Element => {
  return (
    <WrapperComponent>
      <WrapperInnerComponent>
        <Container sx={{ pt: 6, pb: 16 }}>
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
                    <AcceptInviteSelector />
                  </Box>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </WrapperInnerComponent>
    </WrapperComponent>
  )
}
