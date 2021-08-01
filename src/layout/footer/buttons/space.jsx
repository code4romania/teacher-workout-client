import React from 'react'
import { Box, Grid, Hidden } from '@material-ui/core'

export const Space = () => <Hidden mdUp>
  <Grid item xs={12}>
    <Box pt={4} />
  </Grid>
</Hidden>
