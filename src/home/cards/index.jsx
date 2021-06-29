import { Box, Grid } from '@material-ui/core'
import { ACard } from 'home/cards/a-card'
import React from 'react'

export const Cards = () => (
  <Box pt={7}>
    <Grid container justify={'center'} alignItems={'center'}>
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6} />
      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
        <ACard />
      </Grid>
    </Grid>
  </Box>
)
