import { Box, Grid } from '@material-ui/core'
import { ACard } from 'home/cards/a-card'
import React from 'react'

export const Cards = () => (
  <Box pt={7}>
    <Grid container justify={'center'} alignItems={'center'}>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4} />
      <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
        <ACard />
      </Grid>
    </Grid>
  </Box>
)
