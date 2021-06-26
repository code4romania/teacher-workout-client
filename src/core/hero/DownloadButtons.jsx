import React from 'react'
import { Box, Grid } from '@material-ui/core'

import { AppleDownloadButton } from './AppleDownloadButton'
import { GoogleDownloadButton } from './GoogleDownloadButton'

export const DownloadButtons = () => (
  <div>
    <span> </span>
    <Grid container justify="center">
      <AppleDownloadButton />
      <GoogleDownloadButton />
    </Grid>
  </div>
)