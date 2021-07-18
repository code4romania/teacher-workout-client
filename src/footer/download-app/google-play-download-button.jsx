import React from 'react'
import { Box, Grid } from '@material-ui/core'
import GooglePlayDownload from 'footer/download-app/logo-download-android.svg'

export const GooglePlayDownloadButton = () => (
  <Grid item>
    <Box paddingY={1.25} paddingLeft={1.25}>
      <a href={'#'}>
        <img src={GooglePlayDownload} alt={'Descarcă aplicația de pe Google Play'} />
      </a>
    </Box>
  </Grid>
)
