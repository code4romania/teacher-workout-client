import React from 'react'
import { Box, Grid } from '@material-ui/core'

import { BCard } from 'home/cards/b-card'
import { ACard } from 'home/cards/a-card'

export const Cards = () => <Box pt={7} px={5}>
  <Grid container justify={'center'}>
    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
      <BCard />
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
      <ACard />
    </Grid>
  </Grid>
</Box>
