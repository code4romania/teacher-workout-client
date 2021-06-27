import React from 'react'
import { Grid } from '@material-ui/core'

import { AppStoreDownloadButton } from 'core/footer/download-app/app-store-download-button'
import { GooglePlayDownloadButton } from 'core/footer/download-app/google-play-download-button'

export const DownloadButtons = () => (
  <Grid container>
    <AppStoreDownloadButton />
    <GooglePlayDownloadButton />
  </Grid>
)
