import React from 'react'
import GooglePlayDownload from 'core/footer/google-play-download.png'
import { Box, Grid } from '@material-ui/core'

export const GooglePlayDownloadButton = () => (
  <Grid item>
    <Box p={1.25}>
      <a href={'#'}>
        <img src={GooglePlayDownload} alt={'Descarcă aplicația de pe Google Play'} />
      </a>
    </Box>
  </Grid>
)
