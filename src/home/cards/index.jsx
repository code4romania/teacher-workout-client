import React from 'react'
import { Grid } from '@mui/material'

import { BCard } from 'home/cards/b-card'
import { ACard } from 'home/cards/a-card'

export const Cards = () => (
  <Grid container justifyContent={'center'} columnSpacing={5}>
    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
      <BCard />
    </Grid>
    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
      <ACard />
    </Grid>
  </Grid>
)
