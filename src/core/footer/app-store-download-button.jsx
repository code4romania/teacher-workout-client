import React from 'react'
import { Box, Grid } from '@material-ui/core'
import AppStoreDownload from 'core/footer/app-store-download.png'

export const AppStoreDownloadButton = () => (
  <Grid item>
    <Box p={1.25}>
      <a href={'#'}>
        <img src={AppStoreDownload} alt={'Descarcă aplicația de pe App Store'} />
      </a>
    </Box>
  </Grid>
)
