import React from 'react'
import { Grid } from '@material-ui/core'
import AppStoreDownload from 'core/footer/app-store-download.png'

export const AppStoreDownloadButton = () => (
  <Grid item spacing={1}>
    <a href={'#'}>
      <img src={AppStoreDownload} alt={'Descarcă aplicația de pe App Store'} />
    </a>
  </Grid>
)
