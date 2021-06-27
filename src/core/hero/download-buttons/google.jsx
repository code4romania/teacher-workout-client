import React from 'react'
import { Box, Grid } from '@material-ui/core'

import Source from 'core/hero/download-buttons/google-store.png'

export const Google = () => (
  <Grid item>
    <Box m={1.25}>
      <a href={'#'}>
        <img src={Source} alt={'Descarcă aplicația de pe Google Play'} />
      </a>
    </Box>
  </Grid>
)
