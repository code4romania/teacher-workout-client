import React from 'react'
import { Grid } from '@material-ui/core'

import { AppStoreDownloadButton } from './app-store-download-button'
import { GooglePlayDownloadButton } from './google-play-download-button'

export const DownloadButtons = () => (
  <Grid container>
    <AppStoreDownloadButton />
    <GooglePlayDownloadButton />
  </Grid>
)
