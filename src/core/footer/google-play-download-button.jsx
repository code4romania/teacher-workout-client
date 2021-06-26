import React from 'react'
import GooglePlayDownload from 'core/footer/google-play-download.png'
import { Grid } from '@material-ui/core'

export const GooglePlayDownloadButton = () => (
  <Grid item spacing={1}>
    <a href={'#'}>
      <img src={GooglePlayDownload} alt={'Descarcă aplicația de pe Google Play'} />
    </a>
  </Grid>
)
