import React from 'react'
import { Box, Grid } from '@material-ui/core'
import GoogleStoreDownload from 'core/hero/GooglePlay.png'

export const GoogleDownloadButton = () => (
  <Grid item>
    <Box m={1.25}>
      <a href={'#'}>
        <img src={GoogleStoreDownload} alt={'Descarcă aplicația de pe Google Play'} />
      </a>
    </Box>
  </Grid>
)