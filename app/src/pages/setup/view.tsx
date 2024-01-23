import { Box, Container, Grid, Stack } from '@mui/material'
import { SetupPageStepper } from './containers/stepper'
import { SetupPageSelector } from './containers/selector'

export const SetupPageView = (): JSX.Element => {
  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={2}>
        <Grid item sm={3} sx={{ display: { xs: 'none', sm: 'block' } }}></Grid>
        <Grid item xs={12} sm={6}>
          <Stack direction="column" spacing={8}>
            <SetupPageStepper />
            <Stack direction="column" spacing={1} alignItems="start">
              <Box width="100%">
                <SetupPageSelector />
              </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  )
}
