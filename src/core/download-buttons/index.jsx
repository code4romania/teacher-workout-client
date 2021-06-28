import React from 'react'
import { Grid, Box, makeStyles } from '@material-ui/core'

import { AppStoreDownloadButton } from 'core/download-buttons/app-store-download-button'
import { GooglePlayDownloadButton } from 'core/download-buttons/google-play-download-button'

const useStyles = makeStyles(theme => ({ container: { justifyContent: 'center' } }))

export const DownloadButtons = () => <Box component={'span'}>
  <Grid container className={useStyles().container}>
    <AppStoreDownloadButton />
    <GooglePlayDownloadButton />
  </Grid>
</Box>
