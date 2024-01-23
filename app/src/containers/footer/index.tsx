import React from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import { FooterContent, Wrapper } from './styles'
export const Footer = () => {
  return (
    <Wrapper>
      <FooterContent>
        <Grid container sx={{ px: 3 }}>
          <Grid item sm={12}>
            <Stack>
              <Typography variant="subtitle2" color="common.white">
                Think CRM 🚀
              </Typography>
              <Typography variant="caption" color="common.white">
                Think Forward Ltda @ 2024
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </FooterContent>
    </Wrapper>
  )
}
