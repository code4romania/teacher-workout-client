import React from 'react'
import { Grid, Box, makeStyles } from '@material-ui/core'

import { AppStoreDownloadButton } from 'core/footer/download-app/app-store-download-button'
import { GooglePlayDownloadButton } from 'core/footer/download-app/google-play-download-button'

const useStyles = makeStyles(theme => ({
  container: {
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: { justifyContent: 'center' },
  },
}))

export const DownloadButtons = () => <Box>
  <Grid container className={useStyles().container}>
    <AppStoreDownloadButton />
    <GooglePlayDownloadButton />
  </Grid>
</Box>
