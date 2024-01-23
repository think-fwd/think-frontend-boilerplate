import { Grid } from '@mui/material'
import { HeaderLogo } from './logo'

export const HeaderMenuDefault = (): JSX.Element => {
  return (
    <Grid container sx={{ px: 3 }} alignItems="center">
      <Grid item xs={3}>
        <HeaderLogo />
      </Grid>
    </Grid>
  )
}
