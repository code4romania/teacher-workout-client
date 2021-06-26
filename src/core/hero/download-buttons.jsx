import React from 'react'
import { Grid } from '@material-ui/core'

import { AppleDownloadButton } from 'core/hero/apple-download-button'
import { GoogleDownloadButton } from 'core/hero/google-download-button'

export const DownloadButtons = () => (
  <div>
    <span> </span>
    <Grid container justify={'center'}>
      <AppleDownloadButton />
      <GoogleDownloadButton />
    </Grid>
  </div>
)
