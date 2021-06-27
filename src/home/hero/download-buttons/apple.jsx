import React from 'react'
import { Box, Grid } from '@material-ui/core'

import Source from 'home/hero/download-buttons/apple-store.png'

export const Apple = () => (
  <Grid item>
    <Box m={1.25}>
      <a href={'#'}>
        <img src={Source} alt={'Descarcă aplicația de pe App Store'} />
      </a>
    </Box>
  </Grid>
)
