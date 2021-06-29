import React from 'react'
import { Box, Grid } from '@material-ui/core'
import GooglePlayDownload from 'core/download-buttons/logo-download-android.svg'

export const GooglePlayDownloadButton = () => (
  <Grid item>
    <Box p={1.25}>
      <a href={'#'}>
        <img src={GooglePlayDownload} alt={'Descarcă aplicația de pe Google Play'} />
      </a>
    </Box>
  </Grid>
)
