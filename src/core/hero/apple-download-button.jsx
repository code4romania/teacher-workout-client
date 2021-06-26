import React from 'react'
import { Box, Grid } from '@material-ui/core'
import AppleButton from 'core/hero/apple-store.png'

export const AppleDownloadButton = () => (
  <Grid item>
    <Box m={1.25}>
      <a href={'#'}>
        <img src={AppleButton} alt={'Descarcă aplicația de pe App Store'} />
      </a>
    </Box>
  </Grid>
)
