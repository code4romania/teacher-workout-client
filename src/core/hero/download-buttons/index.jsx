import React from 'react'
import { Grid } from '@material-ui/core'

import { Apple } from 'core/hero/download-buttons/apple'
import { Google } from 'core/hero/download-buttons/google'

export const DownloadButtons = () => (
  <div>
    <span> </span>
    <Grid container justify={'center'}>
      <Apple />
      <Google />
    </Grid>
  </div>
)
