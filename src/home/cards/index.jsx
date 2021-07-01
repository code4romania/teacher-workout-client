import React from 'react'
import { Grid } from '@material-ui/core'

import { BCard } from 'home/cards/b-card'
import { ACard } from 'home/cards/a-card'

export const Cards = () => <Grid container justify={'center'}>
  <Grid item xs={12} sm={12} md={11} lg={11} xl={11}>
    <BCard />
  </Grid>
  <Grid item xs={12} sm={12} md={11} lg={12} xl={12}>
    <ACard />
  </Grid>
</Grid>
